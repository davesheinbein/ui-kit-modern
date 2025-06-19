import * as bi from "react";
import A, { forwardRef as ve, createContext as Ht, useState as He, useEffect as kr, useContext as _t, isValidElement as Qt, Children as An, PureComponent as ht, useRef as Jo, useImperativeHandle as gw, useCallback as bw, useMemo as xg, cloneElement as Xe, createElement as wg, Component as Og } from "react";
var No = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ql = { exports: {} }, ni = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;
function _w() {
  if (fh) return ni;
  fh = 1;
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
  return ni.Fragment = t, ni.jsx = r, ni.jsxs = r, ni;
}
var ai = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dh;
function xw() {
  return dh || (dh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === E ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case m:
          return "Fragment";
        case b:
          return "Profiler";
        case p:
          return "StrictMode";
        case g:
          return "Suspense";
        case _:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case y:
            return "Portal";
          case x:
            return (T.displayName || "Context") + ".Provider";
          case w:
            return (T._context.displayName || "Context") + ".Consumer";
          case O:
            var R = T.render;
            return T = T.displayName, T || (T = R.displayName || R.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case S:
            return R = T.displayName || null, R !== null ? R : e(T.type) || "Memo";
          case P:
            R = T._payload, T = T._init;
            try {
              return e(T(R));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function r(T) {
      try {
        t(T);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var L = R.error, z = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return L.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(T);
      }
    }
    function n(T) {
      if (T === m) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === P)
        return "<...>";
      try {
        var R = e(T);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var T = $.A;
      return T === null ? null : T.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(T) {
      if (k.call(T, "key")) {
        var R = Object.getOwnPropertyDescriptor(T, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function s(T, R) {
      function L() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var T = e(this.type);
      return M[T] || (M[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function l(T, R, L, z, q, Y, J, ee) {
      return L = Y.ref, T = {
        $$typeof: h,
        type: T,
        key: R,
        props: Y,
        _owner: q
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function u(T, R, L, z, q, Y, J, ee) {
      var X = R.children;
      if (X !== void 0)
        if (z)
          if (C(X)) {
            for (z = 0; z < X.length; z++)
              f(X[z]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (k.call(R, "key")) {
        X = e(T);
        var U = Object.keys(R).filter(function(re) {
          return re !== "key";
        });
        z = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", H[X + z] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          X,
          U,
          X
        ), H[X + z] = !0);
      }
      if (X = null, L !== void 0 && (r(L), X = "" + L), o(R) && (r(R.key), X = "" + R.key), "key" in R) {
        L = {};
        for (var V in R)
          V !== "key" && (L[V] = R[V]);
      } else L = R;
      return X && s(
        L,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), l(
        T,
        X,
        Y,
        q,
        a(),
        L,
        J,
        ee
      );
    }
    function f(T) {
      typeof T == "object" && T !== null && T.$$typeof === h && T._store && (T._store.validated = 1);
    }
    var d = A, h = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), x = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), $ = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, C = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(T) {
        return T();
      }
    };
    var N, M = {}, B = d["react-stack-bottom-frame"].bind(
      d,
      i
    )(), W = D(n(i)), H = {};
    ai.Fragment = m, ai.jsx = function(T, R, L, z, q) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        T,
        R,
        L,
        !1,
        z,
        q,
        Y ? Error("react-stack-top-frame") : B,
        Y ? D(n(T)) : W
      );
    }, ai.jsxs = function(T, R, L, z, q) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        T,
        R,
        L,
        !0,
        z,
        q,
        Y ? Error("react-stack-top-frame") : B,
        Y ? D(n(T)) : W
      );
    };
  }()), ai;
}
process.env.NODE_ENV === "production" ? Ql.exports = _w() : Ql.exports = xw();
var v = Ql.exports;
const ww = "_animated_jr93s_19", Ow = "_baseButton_jr93s_26", Sw = "_fullWidth_jr93s_146", Aw = "_loading_jr93s_150", Pw = "_content_jr93s_150", jw = "_leftIcon_jr93s_154", Tw = "_rightIcon_jr93s_160", $w = "_spinner_jr93s_172", Ew = "_spin_jr93s_172", Cw = "_modalCloseAbsolute_jr93s_205", kw = "_iconBtn_jr93s_212", Nw = "_selected_jr93s_234", Mw = "_locked_jr93s_238", Iw = "_burnSuspect_jr93s_243", Dw = "_burned_jr93s_247", Rw = "_goBackIcon_jr93s_279", Bw = "_goBackLabel_jr93s_284", Lw = "_primaryBtn_jr93s_329", zw = "_secondaryBtn_jr93s_340", Fw = "_fadeInUp_jr93s_1", Lt = {
  animated: ww,
  baseButton: Ow,
  "button-primary": "_button-primary_jr93s_48",
  "button-secondary": "_button-secondary_jr93s_64",
  "button-danger": "_button-danger_jr93s_79",
  "button-success": "_button-success_jr93s_88",
  "button-warning": "_button-warning_jr93s_97",
  "button-ghost": "_button-ghost_jr93s_106",
  "button-link": "_button-link_jr93s_116",
  "button-small": "_button-small_jr93s_128",
  "button-medium": "_button-medium_jr93s_134",
  "button-large": "_button-large_jr93s_140",
  fullWidth: Sw,
  loading: Aw,
  content: Pw,
  leftIcon: jw,
  rightIcon: Tw,
  spinner: $w,
  spin: Ew,
  "close-button": "_close-button_jr93s_188",
  modalCloseAbsolute: Cw,
  iconBtn: kw,
  "word-button": "_word-button_jr93s_223",
  selected: Nw,
  locked: Mw,
  burnSuspect: Iw,
  burned: Dw,
  "copy-link": "_copy-link_jr93s_252",
  "share-link--copy": "_share-link--copy_jr93s_260",
  "share-link-icon": "_share-link-icon_jr93s_266",
  "share-link-text": "_share-link-text_jr93s_271",
  "go-back": "_go-back_jr93s_275",
  goBackIcon: Rw,
  goBackLabel: Bw,
  "friends-toggle": "_friends-toggle_jr93s_289",
  "friends-toggle-icon": "_friends-toggle-icon_jr93s_317",
  primaryBtn: Lw,
  secondaryBtn: zw,
  "nav-back": "_nav-back_jr93s_350",
  fadeInUp: Fw
}, Sg = {
  // Basic variants
  primary: {
    variant: "primary",
    size: "medium",
    behavior: "button",
    className: Lt.primaryBtn
  },
  secondary: {
    variant: "secondary",
    size: "medium",
    behavior: "button",
    className: Lt.secondaryBtn
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
    className: Lt.iconBtn
  },
  close: {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "left",
    defaultText: "Close",
    behavior: "close",
    ariaLabel: "Close",
    className: Lt["close-button"]
  },
  "close-icon-only": {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "only",
    behavior: "close",
    ariaLabel: "Close",
    className: Lt["close-button"]
  },
  word: {
    variant: "secondary",
    size: "medium",
    behavior: "toggle",
    className: Lt["word-button"]
  },
  "copy-link": {
    variant: "ghost",
    size: "medium",
    icon: "📋",
    iconPosition: "left",
    defaultText: "Copy Link",
    behavior: "copy",
    ariaLabel: "Copy link",
    className: Lt["copy-link"]
  },
  "go-back": {
    variant: "ghost",
    size: "medium",
    icon: "←",
    iconPosition: "left",
    defaultText: "Back",
    behavior: "button",
    ariaLabel: "Go back",
    className: Lt["go-back"]
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
    className: Lt["nav-back"]
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
}, ir = (e, t) => ({
  ...Sg[e],
  ...t
}), Ote = {
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
}, Ste = {
  saveButton: () => ir("primary", { defaultText: "Save" }),
  cancelButton: () => ir("secondary", {
    defaultText: "Cancel"
  }),
  deleteButton: () => ir("danger", { defaultText: "Delete" }),
  editButton: () => ir("ghost", {
    icon: "✏️",
    defaultText: "Edit"
  }),
  addButton: () => ir("success", {
    icon: "+",
    defaultText: "Add"
  }),
  shareButton: () => ir("ghost", {
    icon: "🔗",
    defaultText: "Share"
  }),
  settingsButton: () => ir("ghost", {
    icon: "⚙️",
    ariaLabel: "Settings"
  }),
  helpButton: () => ir("ghost", {
    icon: "?",
    ariaLabel: "Help"
  }),
  refreshButton: () => ir("ghost", {
    icon: "🔄",
    ariaLabel: "Refresh"
  }),
  downloadButton: () => ir("primary", {
    icon: "⬇️",
    defaultText: "Download"
  })
}, Ww = "_selected_r7dj1_19", Uw = "_active_r7dj1_24", Hw = "_locked_r7dj1_29", Gw = "_burnSuspect_r7dj1_35", Kw = "_burned_r7dj1_40", qw = "_leftIcon_r7dj1_46", Vw = "_rightIcon_r7dj1_52", Yw = "_linkButton_r7dj1_58", or = {
  selected: Ww,
  active: Uw,
  locked: Hw,
  burnSuspect: Gw,
  burned: Kw,
  leftIcon: qw,
  rightIcon: Vw,
  linkButton: Yw
}, ze = ve(
  ({
    kind: e,
    icon: t,
    word: r,
    text: n,
    children: a,
    href: i,
    copyText: o,
    isSelected: s = !1,
    isActive: c = !1,
    isLocked: l = !1,
    burnSuspect: u = !1,
    isBurned: f = !1,
    imageUrl: d,
    userName: h,
    isAuthenticated: y = !1,
    label: m,
    className: p = "",
    onClick: b,
    overrideConfig: w = {},
    customVariant: x,
    customClassName: O = "",
    ...g
  }, _) => {
    const S = {
      ...Sg[e],
      ...w,
      // Support legacy customVariant prop
      ...x && { variant: x }
    }, P = t || S.icon;
    let j = null;
    e === "friends-toggle" && (y && d ? j = /* @__PURE__ */ v.jsx(
      "img",
      {
        src: d,
        alt: h || "Profile",
        style: {
          width: 36,
          height: 36,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #38bdf8"
        }
      }
    ) : j = /* @__PURE__ */ v.jsx("span", { className: "friends-toggle-icon", children: /* @__PURE__ */ v.jsxs(
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
          /* @__PURE__ */ v.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ v.jsx("path", { d: "M17 11v-1a4 4 0 0 0-4-4" }),
          /* @__PURE__ */ v.jsx("path", { d: "M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" })
        ]
      }
    ) }));
    const E = n || r || a || m || S.defaultText, $ = m || S.ariaLabel || (typeof E == "string" ? E : "Button"), k = [
      Lt.baseButton,
      // Base button styles
      Lt[`button-${S.variant}`],
      // Variant styles (button-primary, button-secondary, etc.)
      Lt[`button-${S.size}`],
      // Size styles (button-small, button-medium, button-large)
      p,
      S.className,
      O,
      s && or.selected,
      c && or.active,
      l && or.locked,
      u && or.burnSuspect,
      f && or.burned
    ].filter(Boolean).join(" "), C = (D) => {
      switch (S.behavior) {
        case "copy":
          o && navigator.clipboard.writeText(o).catch(console.error);
          break;
        case "close":
          break;
        case "toggle":
          break;
        case "link":
          if (i) {
            window.location.href = i;
            return;
          }
          break;
      }
      S.clickHandler && S.clickHandler(D), b == null || b(D);
    };
    return S.behavior === "link" && i ? /* @__PURE__ */ v.jsxs(
      "a",
      {
        href: i,
        className: `${or.linkButton} ${k}`.trim(),
        ref: _,
        "aria-label": $,
        ...g,
        children: [
          P && S.iconPosition !== "right" && /* @__PURE__ */ v.jsx("span", { className: or.leftIcon, children: P }),
          S.iconPosition !== "only" && E && /* @__PURE__ */ v.jsx("span", { children: E }),
          P && S.iconPosition === "right" && /* @__PURE__ */ v.jsx("span", { className: or.rightIcon, children: P })
        ]
      }
    ) : S.iconPosition === "only" ? /* @__PURE__ */ v.jsx(
      "button",
      {
        ref: _,
        className: k,
        onClick: C,
        "aria-label": $,
        disabled: l,
        ...g,
        children: e === "friends-toggle" ? j : P
      }
    ) : /* @__PURE__ */ v.jsxs(
      "button",
      {
        ref: _,
        className: k,
        onClick: C,
        "aria-label": $,
        disabled: l,
        ...g,
        children: [
          S.iconPosition === "left" && P && /* @__PURE__ */ v.jsx("span", { className: or.leftIcon, children: P }),
          E && /* @__PURE__ */ v.jsx("span", { children: E }),
          S.iconPosition === "right" && P && /* @__PURE__ */ v.jsx("span", { className: or.rightIcon, children: P })
        ]
      }
    );
  }
);
ze.displayName = "UnifiedButton";
const Lf = {
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
}, Ate = {
  basic: ["input", "textarea", "select", "checkbox", "radio", "radio-group", "switch", "range"],
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
}, Pte = {
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
}, Xw = (e, t) => {
  const r = Lf[e];
  if (!r)
    throw new Error(`Unknown form field kind: ${e}`);
  return {
    ...r,
    ...t,
    validation: {
      ...r.validation,
      ...t.validation
    }
  };
}, jte = (e, t) => {
  const { validation: r } = t;
  if (!r) return null;
  if (r.required && (!e || typeof e == "string" && e.trim() === ""))
    return "This field is required";
  if (typeof e == "string") {
    if (r.minLength && e.length < r.minLength)
      return `Minimum length is ${r.minLength} characters`;
    if (r.maxLength && e.length > r.maxLength)
      return `Maximum length is ${r.maxLength} characters`;
    if (r.pattern && !new RegExp(r.pattern).test(e))
      return "Invalid format";
  }
  if (typeof e == "number") {
    if (r.min !== void 0 && e < r.min)
      return `Minimum value is ${r.min}`;
    if (r.max !== void 0 && e > r.max)
      return `Maximum value is ${r.max}`;
  }
  return r.custom ? r.custom(e) : null;
}, Zw = "_fieldWrapper_v7qas_19", Qw = "_fullWidth_v7qas_26", Jw = "_hasError_v7qas_30", e1 = "_fieldContainer_v7qas_30", t1 = "_label_v7qas_42", r1 = "_required_v7qas_50", n1 = "_errorText_v7qas_105", a1 = "_helperText_v7qas_111", qr = {
  fieldWrapper: Zw,
  fullWidth: Qw,
  hasError: Jw,
  fieldContainer: e1,
  label: t1,
  required: r1,
  errorText: n1,
  helperText: a1
}, Ag = ve(
  ({
    children: e,
    className: t = "",
    label: r,
    error: n,
    helperText: a,
    required: i = !1,
    fullWidth: o = !1,
    ...s
  }, c) => {
    const l = [
      qr.fieldWrapper,
      o && qr.fullWidth,
      n && qr.hasError,
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        ref: c,
        className: l,
        ...s,
        children: [
          r && /* @__PURE__ */ v.jsxs("label", { className: qr.label, children: [
            r,
            i && /* @__PURE__ */ v.jsx("span", { className: qr.required, children: "*" })
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: qr.fieldContainer, children: e }),
          n && /* @__PURE__ */ v.jsx("span", { className: qr.errorText, children: n }),
          a && !n && /* @__PURE__ */ v.jsx("span", { className: qr.helperText, children: a })
        ]
      }
    );
  }
);
Ag.displayName = "FormField";
const Pg = ve(
  ({
    kind: e,
    configuration: t,
    value: r,
    onChange: n,
    onBlur: a,
    onFocus: i,
    placeholder: o,
    disabled: s = !1,
    required: c = !1,
    className: l = "",
    ...u
  }, f) => {
    const d = (y) => {
      const m = y.target;
      let p;
      switch (e) {
        case "checkbox":
        case "switch":
          p = m.checked;
          break;
        case "range":
          p = parseInt(m.value, 10);
          break;
        case "select":
          p = m.value;
          break;
        default:
          p = m.value;
      }
      n == null || n(p, y);
    }, h = {
      ref: f,
      value: r ?? "",
      onChange: d,
      onBlur: a,
      onFocus: i,
      placeholder: o,
      disabled: s,
      required: c,
      className: l,
      ...u
    };
    switch (e) {
      case "input":
      default:
        return /* @__PURE__ */ v.jsx(
          "input",
          {
            ...h,
            type: (t == null ? void 0 : t.inputMode) || "text"
          }
        );
      case "textarea":
        return /* @__PURE__ */ v.jsx(
          "textarea",
          {
            ...h,
            rows: (t == null ? void 0 : t.minRows) || 3
          }
        );
      case "select":
        const y = (t == null ? void 0 : t.options) || [];
        return /* @__PURE__ */ v.jsxs("select", { ...h, children: [
          o && /* @__PURE__ */ v.jsx("option", { value: "", disabled: !0, children: o }),
          y.map((b) => /* @__PURE__ */ v.jsx(
            "option",
            {
              value: b.value,
              disabled: b.disabled,
              children: b.label
            },
            b.value
          ))
        ] });
      case "checkbox":
        return /* @__PURE__ */ v.jsxs("div", { className: "checkboxContainer", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              ...h,
              type: "checkbox",
              checked: r || !1,
              value: void 0
            }
          ),
          (t == null ? void 0 : t.label) && /* @__PURE__ */ v.jsx("label", { children: t.label })
        ] });
      case "radio":
        const m = (t == null ? void 0 : t.options) || [];
        return /* @__PURE__ */ v.jsx("div", { className: "radioContainer", children: m.map((b) => /* @__PURE__ */ v.jsxs(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  type: "radio",
                  name: u.name,
                  value: b.value,
                  checked: r === b.value,
                  onChange: d,
                  disabled: s || b.disabled
                }
              ),
              b.label
            ]
          },
          b.value
        )) });
      case "radio-group":
        const p = (t == null ? void 0 : t.options) || [];
        return /* @__PURE__ */ v.jsx("div", { className: "radioGroup", children: p.map((b) => /* @__PURE__ */ v.jsxs(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  type: "radio",
                  name: u.name || "radio-group",
                  value: b.value,
                  checked: r === b.value,
                  onChange: d,
                  disabled: s || b.disabled
                }
              ),
              b.label
            ]
          },
          b.value
        )) });
      case "switch":
        return /* @__PURE__ */ v.jsxs("div", { className: "switchContainer", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              ...h,
              type: "checkbox",
              checked: r || !1,
              value: void 0,
              style: {
                appearance: "none",
                width: "44px",
                height: "24px",
                backgroundColor: r ? "#2563eb" : "#d1d5db",
                borderRadius: "12px",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }
            }
          ),
          (t == null ? void 0 : t.label) && /* @__PURE__ */ v.jsx("label", { children: t.label })
        ] });
      case "range":
        return /* @__PURE__ */ v.jsx(
          "input",
          {
            ...h,
            type: "range",
            min: (t == null ? void 0 : t.min) || 0,
            max: (t == null ? void 0 : t.max) || 100,
            step: (t == null ? void 0 : t.step) || 1,
            value: r || 0
          }
        );
    }
  }
);
Pg.displayName = "FormFieldBodyFactory";
const jg = ve(
  ({
    kind: e,
    label: t,
    error: r,
    helperText: n,
    fullWidth: a,
    className: i,
    configuration: o,
    ...s
  }, c) => {
    const l = o || Lf.text;
    return /* @__PURE__ */ v.jsx(
      Ag,
      {
        label: t || (l == null ? void 0 : l.label),
        error: r,
        helperText: n || (l == null ? void 0 : l.helperText),
        fullWidth: a,
        className: i,
        required: s.required,
        children: /* @__PURE__ */ v.jsx(
          Pg,
          {
            ref: c,
            kind: e,
            configuration: l,
            ...s
          }
        )
      }
    );
  }
);
jg.displayName = "UnifiedFormField";
const zf = ve(
  ({
    kind: e,
    value: t,
    onChange: r,
    error: n,
    overrideConfig: a,
    ...i
  }, o) => {
    const s = a ? Xw(e, a) : Lf[e], l = {
      ref: o,
      kind: ((u) => ({
        input: "input",
        textarea: "textarea",
        select: "select",
        checkbox: "checkbox",
        radio: "radio",
        "radio-group": "radio-group",
        switch: "switch",
        range: "range"
      })[s.component] || "input")(),
      value: t,
      onChange: r,
      error: n,
      label: s.label,
      placeholder: s.placeholder,
      helperText: s.helperText,
      variant: s.variant === "standard" ? "outlined" : s.variant,
      // Fix variant incompatibility
      size: s.size,
      color: s.color,
      fullWidth: s.fullWidth,
      className: s.className,
      ...i
      // Props can override config
    };
    return s.component === "input" && (l.type = e.includes("-") ? e.split("-")[0] : e), /* @__PURE__ */ v.jsx(jg, { ...l });
  }
);
zf.displayName = "FormFieldFactory";
const $e = zf, Tte = {
  // Quick form creators
  loginForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "email",
        value: e.email,
        onChange: (n) => t("email", n),
        error: r.email
      },
      "email"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "password",
        value: e.password,
        onChange: (n) => t("password", n),
        error: r.password
      },
      "password"
    )
  ],
  signupForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "first-name",
        value: e.firstName,
        onChange: (n) => t("firstName", n),
        error: r.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "last-name",
        value: e.lastName,
        onChange: (n) => t("lastName", n),
        error: r.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "email",
        value: e.email,
        onChange: (n) => t("email", n),
        error: r.email
      },
      "email"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "password",
        value: e.password,
        onChange: (n) => t("password", n),
        error: r.password
      },
      "password"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "terms-checkbox",
        value: e.terms,
        onChange: (n) => t("terms", n),
        error: r.terms
      },
      "terms"
    )
  ],
  contactForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "full-name",
        value: e.name,
        onChange: (n) => t("name", n),
        error: r.name
      },
      "name"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "email",
        value: e.email,
        onChange: (n) => t("email", n),
        error: r.email
      },
      "email"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "phone",
        value: e.phone,
        onChange: (n) => t("phone", n),
        error: r.phone
      },
      "phone"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "message",
        value: e.message,
        onChange: (n) => t("message", n),
        error: r.message
      },
      "message"
    )
  ],
  addressForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "address",
        value: e.address,
        onChange: (n) => t("address", n),
        error: r.address
      },
      "address"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "city",
        value: e.city,
        onChange: (n) => t("city", n),
        error: r.city
      },
      "city"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "state",
        value: e.state,
        onChange: (n) => t("state", n),
        error: r.state
      },
      "state"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "zip",
        value: e.zip,
        onChange: (n) => t("zip", n),
        error: r.zip
      },
      "zip"
    )
  ],
  paymentForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "credit-card",
        value: e.cardNumber,
        onChange: (n) => t("cardNumber", n),
        error: r.cardNumber
      },
      "cardNumber"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "expiry-date",
        value: e.expiry,
        onChange: (n) => t("expiry", n),
        error: r.expiry
      },
      "expiry"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "cvv",
        value: e.cvv,
        onChange: (n) => t("cvv", n),
        error: r.cvv
      },
      "cvv"
    )
  ],
  profileForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "first-name",
        value: e.firstName,
        onChange: (n) => t("firstName", n),
        error: r.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "last-name",
        value: e.lastName,
        onChange: (n) => t("lastName", n),
        error: r.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "email",
        value: e.email,
        onChange: (n) => t("email", n),
        error: r.email
      },
      "email"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "phone",
        value: e.phone,
        onChange: (n) => t("phone", n),
        error: r.phone
      },
      "phone"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "bio",
        value: e.bio,
        onChange: (n) => t("bio", n),
        error: r.bio
      },
      "bio"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "website",
        value: e.website,
        onChange: (n) => t("website", n),
        error: r.website
      },
      "website"
    )
  ],
  settingsForm: (e, t, r = {}) => [
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "notification-switch",
        value: e.notifications,
        onChange: (n) => t("notifications", n),
        error: r.notifications
      },
      "notifications"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "privacy-switch",
        value: e.privacy,
        onChange: (n) => t("privacy", n),
        error: r.privacy
      },
      "privacy"
    ),
    /* @__PURE__ */ v.jsx(
      $e,
      {
        kind: "theme-switch",
        value: e.theme,
        onChange: (n) => t("theme", n),
        error: r.theme
      },
      "theme"
    )
  ]
}, i1 = {
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
}, Tg = ve(({ kind: e, children: t, ...r }, n) => {
  const a = i1[e];
  if (!a)
    return console.warn(
      `ComponentFactory: Unknown component kind "${e}"`
    ), /* @__PURE__ */ v.jsx("div", { ref: n, ...r, children: t });
  switch (a.type) {
    case "button":
      return /* @__PURE__ */ v.jsx(
        ze,
        {
          ref: n,
          kind: a.component,
          ...r,
          children: t
        }
      );
    case "form-field":
      return /* @__PURE__ */ v.jsx(
        zf,
        {
          ref: n,
          kind: a.component,
          ...r
        }
      );
    case "layout": {
      const i = (a.component === "container" || a.component === "grid" || a.component === "flex", "div");
      return /* @__PURE__ */ v.jsx(
        i,
        {
          ref: n,
          className: `${a.className || ""} ${r.className || ""}`.trim(),
          ...r,
          children: t
        }
      );
    }
    case "modal":
      return /* @__PURE__ */ v.jsx(
        "div",
        {
          ref: n,
          className: `modal ${a.className || ""} ${r.className || ""}`.trim(),
          ...r,
          children: t
        }
      );
    default:
      return /* @__PURE__ */ v.jsx("div", { ref: n, ...r, children: t });
  }
});
Tg.displayName = "ComponentFactory";
const Fe = Tg, $te = {
  // Common button groups
  modalButtons: (e, t) => [
    /* @__PURE__ */ v.jsx(Fe, { kind: "btn-secondary", onClick: t, children: "Cancel" }, "cancel"),
    /* @__PURE__ */ v.jsx(Fe, { kind: "btn-primary", onClick: e, children: "Confirm" }, "confirm")
  ],
  formActions: (e, t) => [
    t && /* @__PURE__ */ v.jsx(
      Fe,
      {
        kind: "btn-secondary",
        onClick: t,
        children: "Reset"
      },
      "reset"
    ),
    /* @__PURE__ */ v.jsx(Fe, { kind: "btn-primary", onClick: e, children: "Submit" }, "submit")
  ].filter(Boolean),
  // Common form layouts
  loginForm: (e, t, r = {}) => /* @__PURE__ */ v.jsxs(
    Fe,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: "1rem" },
      children: [
        /* @__PURE__ */ v.jsx(
          Fe,
          {
            kind: "field-email",
            value: e.email,
            onChange: (n) => t("email", n),
            error: r.email
          }
        ),
        /* @__PURE__ */ v.jsx(
          Fe,
          {
            kind: "field-password",
            value: e.password,
            onChange: (n) => t("password", n),
            error: r.password
          }
        )
      ]
    }
  ),
  contactForm: (e, t, r = {}) => /* @__PURE__ */ v.jsxs(
    Fe,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: "1rem" },
      children: [
        /* @__PURE__ */ v.jsx(
          Fe,
          {
            kind: "field-text",
            label: "Name",
            value: e.name,
            onChange: (n) => t("name", n),
            error: r.name
          }
        ),
        /* @__PURE__ */ v.jsx(
          Fe,
          {
            kind: "field-email",
            value: e.email,
            onChange: (n) => t("email", n),
            error: r.email
          }
        ),
        /* @__PURE__ */ v.jsx(
          Fe,
          {
            kind: "field-textarea",
            label: "Message",
            value: e.message,
            onChange: (n) => t("message", n),
            error: r.message
          }
        )
      ]
    }
  ),
  // Common layout patterns
  cardLayout: (e) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "layout-container",
      style: {
        padding: "1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        background: "#fff"
      },
      children: e
    }
  ),
  gridLayout: (e, t = 3) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "layout-grid",
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${t}, 1fr)`,
        gap: "1rem"
      },
      children: e
    }
  )
}, Ete = {
  // Quick buttons
  primaryBtn: (e, t) => /* @__PURE__ */ v.jsx(Fe, { kind: "btn-primary", onClick: t, children: e }),
  secondaryBtn: (e, t) => /* @__PURE__ */ v.jsx(Fe, { kind: "btn-secondary", onClick: t, children: e }),
  dangerBtn: (e, t) => /* @__PURE__ */ v.jsx(Fe, { kind: "btn-danger", onClick: t, children: e }),
  // Quick form fields
  textField: (e, t, r, n) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "field-text",
      label: e,
      value: t,
      onChange: r,
      error: n
    }
  ),
  emailField: (e, t, r) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "field-email",
      value: e,
      onChange: t,
      error: r
    }
  ),
  passwordField: (e, t, r) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "field-password",
      value: e,
      onChange: t,
      error: r
    }
  ),
  // Quick layouts
  flexColumn: (e, t = "1rem") => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: t },
      children: e
    }
  ),
  flexRow: (e, t = "1rem") => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "layout-flex",
      style: { flexDirection: "row", gap: t },
      children: e
    }
  ),
  grid: (e, t = 3) => /* @__PURE__ */ v.jsx(
    Fe,
    {
      kind: "layout-grid",
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${t}, 1fr)`,
        gap: "1rem"
      },
      children: e
    }
  )
}, Cte = ({
  label: e,
  kind: t = "primary",
  children: r,
  ...n
}) => /* @__PURE__ */ v.jsx(ze, { kind: t, ...n, children: e || r }), Ge = class Ge {
  /**
   * Create a button with a specific kind and minimal props
   */
  static create(t, r = {}) {
    return A.createElement(ze, {
      kind: t,
      ...r
    });
  }
  /**
   * Create multiple buttons from a group configuration
   */
  static createGroup(t, r = {}) {
    return Object.fromEntries(
      Object.entries(t).map(
        ([n, { kind: a, props: i = {} }]) => [
          n,
          this.create(a, { ...r, ...i })
        ]
      )
    );
  }
  /**
   * Create predefined button groups (modal actions, form actions, etc.)
   */
  static createModalActions(t = {}) {
    return {
      confirm: this.create("modal-confirm", {
        onClick: t.onConfirm,
        text: t.confirmText
      }),
      cancel: this.create("modal-cancel", {
        onClick: t.onCancel,
        text: t.cancelText
      })
    };
  }
  static createFormActions(t = {}) {
    return {
      submit: this.create("form-submit", {
        onClick: t.onSubmit,
        text: t.submitText
      }),
      reset: this.create("form-reset", {
        onClick: t.onReset,
        text: t.resetText
      }),
      cancel: this.create("modal-cancel", {
        onClick: t.onCancel,
        text: t.cancelText
      })
    };
  }
};
Ge.save = (t, r = "Save") => Ge.create("primary", { onClick: t, text: r }), Ge.cancel = (t, r = "Cancel") => Ge.create("secondary", { onClick: t, text: r }), Ge.delete = (t, r = "Delete") => Ge.create("danger", { onClick: t, text: r }), Ge.edit = (t, r = "Edit") => Ge.create("ghost", { onClick: t, text: r, icon: "✏️" }), Ge.add = (t, r = "Add") => Ge.create("success", { onClick: t, text: r, icon: "+" }), Ge.close = (t) => Ge.create("close", { onClick: t }), Ge.back = (t, r = "Back") => Ge.create("go-back", { onClick: t, text: r }), Ge.copy = (t, r = "Copy") => Ge.create("copy-link", { copyText: t, text: r }), Ge.icon = (t, r, n) => Ge.create("icon", {
  icon: t,
  onClick: r,
  label: n
});
let Jl = Ge;
const Rn = Jl, kte = {
  // Confirmation dialogs
  confirmDialog: (e, t) => ({
    confirm: Rn.create("danger", {
      onClick: e,
      text: "Confirm"
    }),
    cancel: Rn.create("secondary", {
      onClick: t,
      text: "Cancel"
    })
  }),
  // Delete confirmation
  deleteConfirmation: (e, t, r) => ({
    delete: Rn.create("danger", {
      onClick: e,
      text: r ? `Delete ${r}` : "Delete"
    }),
    cancel: Rn.create("secondary", {
      onClick: t,
      text: "Cancel"
    })
  }),
  // Save/cancel form
  saveForm: (e, t) => ({
    save: Rn.save(e),
    cancel: Rn.cancel(t)
  })
}, o1 = {
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
};
function $g(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = $g(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function oe() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = $g(e)) && (n && (n += " "), n += t);
  return n;
}
const s1 = "_provider_m6rrt_19", c1 = "_socketProvider_m6rrt_55", l1 = "_userSettingsProvider_m6rrt_59", u1 = "_achievementSocketListener_m6rrt_63", f1 = "_themePaletteProvider_m6rrt_67", d1 = "_loading_m6rrt_1", h1 = "_fadeInUp_m6rrt_1", nl = {
  provider: s1,
  "provider--context": "_provider--context_m6rrt_22",
  "provider--socket": "_provider--socket_m6rrt_25",
  "provider--listener": "_provider--listener_m6rrt_28",
  "provider--settings": "_provider--settings_m6rrt_31",
  "provider--theme": "_provider--theme_m6rrt_34",
  "provider--custom": "_provider--custom_m6rrt_37",
  "provider--root": "_provider--root_m6rrt_41",
  "provider--app": "_provider--app_m6rrt_45",
  "provider--component": "_provider--component_m6rrt_48",
  "provider--inline": "_provider--inline_m6rrt_51",
  socketProvider: c1,
  userSettingsProvider: l1,
  achievementSocketListener: u1,
  themePaletteProvider: f1,
  loading: d1,
  fadeInUp: h1
}, Ff = ve(
  ({
    children: e,
    variant: t = "context",
    position: r = "component",
    className: n = "",
    ...a
  }, i) => {
    const o = oe(
      nl.provider,
      nl[`provider--${t}`],
      nl[`provider--${r}`],
      n
    );
    return t === "listener" ? null : /* @__PURE__ */ v.jsx("div", { ref: i, className: o, ...a, children: e });
  }
);
Ff.displayName = "Provider";
var al = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh;
function p1() {
  if (hh) return al;
  hh = 1;
  var e = A;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, a = e.useRef, i = e.useEffect, o = e.useMemo, s = e.useDebugValue;
  return al.useSyncExternalStoreWithSelector = function(c, l, u, f, d) {
    var h = a(null);
    if (h.current === null) {
      var y = { hasValue: !1, value: null };
      h.current = y;
    } else y = h.current;
    h = o(
      function() {
        function p(g) {
          if (!b) {
            if (b = !0, w = g, g = f(g), d !== void 0 && y.hasValue) {
              var _ = y.value;
              if (d(_, g))
                return x = _;
            }
            return x = g;
          }
          if (_ = x, r(w, g)) return _;
          var S = f(g);
          return d !== void 0 && d(_, S) ? (w = g, _) : (w = g, x = S);
        }
        var b = !1, w, x, O = u === void 0 ? null : u;
        return [
          function() {
            return p(l());
          },
          O === null ? void 0 : function() {
            return p(O());
          }
        ];
      },
      [l, u, f, d]
    );
    var m = n(c, h[0], h[1]);
    return i(
      function() {
        y.hasValue = !0, y.value = m;
      },
      [m]
    ), s(m), m;
  }, al;
}
var il = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph;
function m1() {
  return ph || (ph = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = A, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, a = t.useRef, i = t.useEffect, o = t.useMemo, s = t.useDebugValue;
    il.useSyncExternalStoreWithSelector = function(c, l, u, f, d) {
      var h = a(null);
      if (h.current === null) {
        var y = { hasValue: !1, value: null };
        h.current = y;
      } else y = h.current;
      h = o(
        function() {
          function p(g) {
            if (!b) {
              if (b = !0, w = g, g = f(g), d !== void 0 && y.hasValue) {
                var _ = y.value;
                if (d(_, g))
                  return x = _;
              }
              return x = g;
            }
            if (_ = x, r(w, g))
              return _;
            var S = f(g);
            return d !== void 0 && d(_, S) ? (w = g, _) : (w = g, x = S);
          }
          var b = !1, w, x, O = u === void 0 ? null : u;
          return [
            function() {
              return p(l());
            },
            O === null ? void 0 : function() {
              return p(O());
            }
          ];
        },
        [l, u, f, d]
      );
      var m = n(c, h[0], h[1]);
      return i(
        function() {
          y.hasValue = !0, y.value = m;
        },
        [m]
      ), s(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), il;
}
process.env.NODE_ENV === "production" ? p1() : m1();
var ol = /* @__PURE__ */ Symbol.for("react-redux-context"), sl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function v1() {
  if (!bi.createContext) return {};
  const e = sl[ol] ?? (sl[ol] = /* @__PURE__ */ new Map());
  let t = e.get(bi.createContext);
  return t || (t = bi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(bi.createContext, t)), t;
}
var Ei = /* @__PURE__ */ v1();
function Eg(e = Ei) {
  return function() {
    const r = bi.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var y1 = /* @__PURE__ */ Eg();
function Cg(e = Ei) {
  const t = e === Ei ? y1 : (
    // @ts-ignore
    Eg(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var g1 = /* @__PURE__ */ Cg();
function b1(e = Ei) {
  const t = e === Ei ? g1 : Cg(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var _1 = /* @__PURE__ */ b1();
const kg = Ht({
  socket: null,
  isConnected: !1,
  error: null,
  connect: () => {
  },
  disconnect: () => {
  }
}), x1 = Ht({
  settings: null,
  setSettings: () => {
  }
}), Wf = Ht({
  darkMode: !1,
  setDarkMode: () => {
  },
  palette: {},
  setPalette: () => {
  }
}), w1 = () => {
  const e = _t(kg);
  if (!e)
    throw new Error("useSocket must be used within a SocketProvider");
  return e;
}, Nte = () => _t(Wf), Ci = ve(
  ({
    kind: e,
    configuration: t,
    children: r,
    session: n,
    autoConnect: a = !1,
    url: i = "/api/socket",
    initialSettings: o,
    ...s
  }, c) => {
    const l = ({ children: h }) => {
      const [y, m] = He(null), [p, b] = He(!1), [w, x] = He(null), O = (S) => {
        try {
          const P = S || i;
          if (typeof window < "u" && window.io) {
            const j = window.io, E = j(P, {
              transports: ["websocket", "polling"]
            });
            E.on("connect", () => {
              b(!0), x(null);
            }), E.on("disconnect", () => {
              b(!1);
            }), E.on("error", ($) => {
              x($.message || "Socket connection error");
            }), m(E);
          } else {
            const j = P.replace("/api/socket", "/api/ws"), E = new WebSocket(j);
            E.onopen = () => {
              b(!0), x(null);
            }, E.onclose = () => {
              b(!1);
            }, E.onerror = () => {
              x("WebSocket connection error");
            }, m(E);
          }
        } catch (P) {
          x(P.message || "Failed to connect");
        }
      }, g = () => {
        y && (typeof y.disconnect == "function" ? y.disconnect() : typeof y.close == "function" && y.close(), m(null), b(!1));
      }, _ = (S, P) => {
        y && p && (typeof y.emit == "function" ? y.emit(S, P) : y.send && y.send(JSON.stringify({ event: S, data: P })));
      };
      return kr(() => (a && n && O(), () => {
        g();
      }), [n, a]), /* @__PURE__ */ v.jsx(
        kg.Provider,
        {
          value: {
            socket: y,
            isConnected: p,
            error: w,
            connect: O,
            disconnect: g,
            emit: _
          },
          children: h
        }
      );
    }, u = ({ children: h }) => {
      const [y, m] = He(
        o || {
          chatEnabled: !0,
          profanityFilter: !0,
          notificationsEnabled: !0
        }
      );
      return /* @__PURE__ */ v.jsx(x1.Provider, { value: { settings: y, setSettings: m }, children: h });
    }, f = () => {
      const h = _1(), { socket: y } = w1();
      return kr(() => {
        if (y)
          return () => {
          };
      }, [y, h]), null;
    }, d = ({ children: h }) => {
      const [y, m] = He(!1), [p, b] = He({});
      return /* @__PURE__ */ v.jsx(
        Wf.Provider,
        {
          value: { darkMode: y, setDarkMode: m, palette: p, setPalette: b },
          children: h
        }
      );
    };
    switch (e) {
      case "socket-provider":
        return /* @__PURE__ */ v.jsx(l, { children: r });
      case "user-settings-provider":
        return /* @__PURE__ */ v.jsx(u, { children: r });
      case "achievement-socket-listener":
        return /* @__PURE__ */ v.jsx(f, {});
      case "theme-palette-provider":
        return /* @__PURE__ */ v.jsx(d, { children: r });
      default:
        return console.warn(`Unknown provider kind: ${e}`), /* @__PURE__ */ v.jsx(v.Fragment, { children: r });
    }
  }
);
Ci.displayName = "ProviderBodyFactory";
const mh = {
  kind: "socket-provider",
  variant: "socket",
  position: "root",
  title: "Socket Provider",
  description: "Provides socket connection context for the application",
  autoConnect: !1,
  url: "/api/socket",
  contextName: "SocketContext",
  hookName: "useSocket"
}, cl = {
  kind: "user-settings-provider",
  variant: "settings",
  position: "app",
  title: "User Settings Provider",
  description: "Provides user settings context for the application",
  contextName: "UserSettingsContext",
  hookName: "useUserSettings",
  initialSettings: {
    chatEnabled: !0,
    profanityFilter: !0,
    notificationsEnabled: !0
  }
}, ll = {
  kind: "achievement-socket-listener",
  variant: "listener",
  position: "component",
  title: "Achievement Socket Listener",
  description: "Listens for achievement-related socket events",
  contextName: void 0,
  hookName: void 0
}, vh = {
  kind: "theme-palette-provider",
  variant: "theme",
  position: "root",
  title: "Theme Palette Provider",
  description: "Provides theme context for the application",
  contextName: "ThemePaletteContext",
  hookName: "useThemePalette"
}, Ng = {
  // Main kinds
  "socket-provider": mh,
  "user-settings-provider": cl,
  "achievement-socket-listener": ll,
  "theme-palette-provider": vh,
  // Alias configurations for backward compatibility
  socket: mh,
  "user-settings": cl,
  "achievement-listener": ll,
  "theme-palette": vh,
  settings: cl,
  listener: ll
}, Uf = ve(
  ({
    kind: e,
    children: t,
    session: r,
    autoConnect: n,
    url: a,
    initialSettings: i,
    configuration: o,
    ...s
  }, c) => {
    const l = Ng[e];
    if (!l)
      return console.warn(`Unknown provider kind: ${e}`), null;
    const u = { ...l, ...o };
    return u.variant === "listener" ? /* @__PURE__ */ v.jsx(
      Ci,
      {
        kind: u.kind,
        configuration: u,
        session: r,
        autoConnect: n,
        url: a,
        initialSettings: i,
        ...s,
        children: t
      }
    ) : /* @__PURE__ */ v.jsx(
      Ff,
      {
        ref: c,
        variant: u.variant,
        position: u.position,
        ...s,
        children: /* @__PURE__ */ v.jsx(
          Ci,
          {
            kind: u.kind,
            configuration: u,
            session: r,
            autoConnect: n,
            url: a,
            initialSettings: i,
            ...s,
            children: t
          }
        )
      }
    );
  }
);
Uf.displayName = "UnifiedProvider";
const Mte = (e) => /* @__PURE__ */ v.jsx(Uf, { kind: "achievement-socket-listener", ...e }), Ite = (e) => /* @__PURE__ */ v.jsx(Uf, { kind: "theme-palette-provider", ...e }), xr = ve(
  ({
    kind: e,
    children: t,
    session: r,
    autoConnect: n,
    url: a,
    initialSettings: i,
    className: o = "",
    configuration: s,
    ...c
  }, l) => {
    const u = Ng[e];
    if (!u)
      return console.warn(`Unknown provider kind: ${e}`), null;
    const f = { ...u, ...s }, d = n ?? f.autoConnect, h = a ?? f.url, y = i ?? f.initialSettings;
    return f.variant === "listener" ? /* @__PURE__ */ v.jsx(
      Ci,
      {
        kind: f.kind,
        configuration: f,
        session: r,
        autoConnect: d,
        url: h,
        initialSettings: y,
        ...c,
        children: t
      }
    ) : /* @__PURE__ */ v.jsx(
      Ff,
      {
        ref: l,
        variant: f.variant,
        position: f.position,
        className: o,
        children: /* @__PURE__ */ v.jsx(
          Ci,
          {
            kind: f.kind,
            configuration: f,
            session: r,
            autoConnect: d,
            url: h,
            initialSettings: y,
            ...c,
            children: t
          }
        )
      }
    );
  }
);
xr.displayName = "ProviderFactory";
const Dte = xr, ii = {
  // Socket connection preset
  SOCKET_CONNECTION: (e, t = !0, r) => /* @__PURE__ */ v.jsx(
    xr,
    {
      kind: "socket-provider",
      session: e,
      autoConnect: t,
      url: r
    }
  ),
  // User settings preset
  USER_SETTINGS: (e) => /* @__PURE__ */ v.jsx(
    xr,
    {
      kind: "user-settings-provider",
      initialSettings: e
    }
  ),
  // Achievement listener preset
  ACHIEVEMENT_LISTENER: () => /* @__PURE__ */ v.jsx(xr, { kind: "achievement-socket-listener" }),
  // Theme palette preset
  THEME_PALETTE: () => /* @__PURE__ */ v.jsx(xr, { kind: "theme-palette-provider" }),
  // Complete provider setup with socket and settings
  FULL_SETUP: (e, t) => /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx(
      xr,
      {
        kind: "socket-provider",
        session: e,
        autoConnect: !0
      }
    ),
    /* @__PURE__ */ v.jsx(
      xr,
      {
        kind: "user-settings-provider",
        initialSettings: t
      }
    ),
    /* @__PURE__ */ v.jsx(xr, { kind: "achievement-socket-listener" })
  ] })
}, Rte = {
  socket: ii.SOCKET_CONNECTION,
  settings: ii.USER_SETTINGS,
  achievements: ii.ACHIEVEMENT_LISTENER,
  theme: ii.THEME_PALETTE,
  full: ii.FULL_SETUP
}, O1 = "_unifiedCheckbox_g73fw_20", S1 = "_disabled_g73fw_28", A1 = "_animated_g73fw_33", P1 = "_checkboxInput_g73fw_37", j1 = "_checkboxLabel_g73fw_201", T1 = "_errorText_g73fw_211", $1 = "_helperText_g73fw_217", E1 = "_fullWidth_g73fw_223", C1 = "_rounded_g73fw_254", k1 = "_shadow_g73fw_258", N1 = "_bordered_g73fw_265", M1 = "_loading_g73fw_1", I1 = "_fadeInUp_g73fw_1", tt = {
  unifiedCheckbox: O1,
  disabled: S1,
  animated: A1,
  checkboxInput: P1,
  "checkbox-default": "_checkbox-default_g73fw_69",
  "checkbox-toggle": "_checkbox-toggle_g73fw_73",
  "checkbox-switch": "_checkbox-switch_g73fw_100",
  "dark-mode-toggle": "_dark-mode-toggle_g73fw_127",
  "size-small": "_size-small_g73fw_156",
  "size-large": "_size-large_g73fw_176",
  checkboxLabel: j1,
  errorText: T1,
  helperText: $1,
  fullWidth: E1,
  "variant-success": "_variant-success_g73fw_230",
  "variant-warning": "_variant-warning_g73fw_238",
  "variant-danger": "_variant-danger_g73fw_246",
  rounded: C1,
  shadow: k1,
  bordered: N1,
  loading: M1,
  fadeInUp: I1
}, bo = ve(
  ({
    kind: e,
    configuration: t,
    label: r,
    labelPosition: n,
    size: a,
    variant: i,
    animated: o = !0,
    error: s,
    helperText: c,
    fullWidth: l = !1,
    darkModeContext: u = !1,
    className: f = "",
    checked: d,
    onChange: h,
    disabled: y = !1,
    ...m
  }, p) => {
    const b = {
      ...o1[e],
      ...t
    }, w = _t(
      Wf
    );
    let x = d, O = h;
    e === "dark-mode-toggle" && u && w && (x = w.darkMode, O = () => w.setDarkMode(
      !w.darkMode
    ));
    const g = n || b.labelPosition, _ = a || b.size, S = i || b.variant, P = [
      tt.unifiedCheckbox,
      tt[b.className],
      tt[`size-${_}`],
      S !== "default" ? tt[`variant-${S}`] : "",
      o || b.behavior.animated ? tt.animated : "",
      b.styling.rounded ? tt.rounded : "",
      b.styling.shadow ? tt.shadow : "",
      b.styling.bordered ? tt.bordered : "",
      y ? tt.disabled : "",
      l ? tt.fullWidth : "",
      f
    ].filter(Boolean).join(" "), j = [tt.checkboxInput].filter(Boolean).join(" "), E = () => b.icon ? x ? b.icon.checked : b.icon.unchecked : null;
    if (e === "dark-mode-toggle")
      return /* @__PURE__ */ v.jsxs("label", { className: P, children: [
        /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: p,
            type: "checkbox",
            className: j,
            checked: x,
            onChange: O,
            disabled: y,
            "data-icon": E(),
            "aria-label": x ? "Switch to light mode" : "Switch to dark mode",
            ...m
          }
        ),
        s && /* @__PURE__ */ v.jsx("div", { className: tt.errorText, children: s }),
        c && /* @__PURE__ */ v.jsx("div", { className: tt.helperText, children: c })
      ] });
    const $ = r && g !== "none" ? /* @__PURE__ */ v.jsx(
      "span",
      {
        className: `${tt.checkboxLabel} ${y ? tt.disabled : ""}`,
        children: r
      }
    ) : null;
    return /* @__PURE__ */ v.jsxs("div", { className: l ? tt.fullWidth : "", children: [
      /* @__PURE__ */ v.jsxs("label", { className: P, children: [
        g === "left" && $,
        /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: p,
            type: "checkbox",
            className: j,
            checked: x,
            onChange: O,
            disabled: y,
            ...m
          }
        ),
        g === "right" && $
      ] }),
      s && /* @__PURE__ */ v.jsx("div", { className: tt.errorText, children: s }),
      c && /* @__PURE__ */ v.jsx("div", { className: tt.helperText, children: c })
    ] });
  }
);
bo.displayName = "UnifiedCheckbox";
const D1 = ve(({ kind: e = "checkbox", ...t }, r) => /* @__PURE__ */ v.jsx(bo, { ref: r, kind: e, ...t }));
D1.displayName = "Checkbox";
class Vt {
  /**
   * Create any checkbox with required props and optional overrides
   */
  static create(t, r = {}) {
    return /* @__PURE__ */ v.jsx(bo, { kind: t, ...r });
  }
  /**
   * Create a basic checkbox
   */
  static checkbox(t = {}) {
    return this.create("checkbox", t);
  }
  /**
   * Create a toggle checkbox
   */
  static toggle(t = {}) {
    return this.create("toggle", t);
  }
  /**
   * Create a switch checkbox
   */
  static switch(t = {}) {
    return this.create("switch", t);
  }
  /**
   * Create a dark mode toggle
   */
  static darkModeToggle(t = {}) {
    return this.create("dark-mode-toggle", {
      darkModeContext: !0,
      ...t
    });
  }
}
const R1 = ve(({ kind: e, ...t }, r) => /* @__PURE__ */ v.jsx(bo, { ref: r, kind: e, ...t }));
R1.displayName = "CheckboxFactory";
const Bte = Vt, Lte = {
  // Basic presets
  basic: (e, t = {}) => Vt.checkbox({ label: e, ...t }),
  required: (e, t = {}) => Vt.checkbox({
    label: `${e} *`,
    ...t
  }),
  // Toggle presets
  toggleSuccess: (e, t = {}) => Vt.toggle({
    label: e,
    variant: "success",
    ...t
  }),
  toggleWarning: (e, t = {}) => Vt.toggle({
    label: e,
    variant: "warning",
    ...t
  }),
  toggleDanger: (e, t = {}) => Vt.toggle({
    label: e,
    variant: "danger",
    ...t
  }),
  // Switch presets
  switchLarge: (e, t = {}) => Vt.switch({
    label: e,
    size: "large",
    ...t
  }),
  switchSmall: (e, t = {}) => Vt.switch({
    label: e,
    size: "small",
    ...t
  }),
  // Special presets
  darkMode: (e = {}) => Vt.darkModeToggle(e),
  termsAndConditions: (e = {}) => Vt.checkbox({
    label: "I agree to the Terms and Conditions",
    ...e
  }),
  newsletter: (e = {}) => Vt.checkbox({
    label: "Subscribe to newsletter",
    ...e
  })
}, B1 = ve((e, t) => /* @__PURE__ */ v.jsx(
  bo,
  {
    ref: t,
    kind: "dark-mode-toggle",
    darkModeContext: !0,
    ...e
  }
));
B1.displayName = "DarkModeToggle";
const L1 = "_modalOverlay_i4uzz_19", z1 = "_modalContent_i4uzz_29", yh = {
  modalOverlay: L1,
  modalContent: z1
}, F1 = ({
  open: e,
  onClose: t,
  children: r,
  className: n = "",
  contentClassName: a = ""
}) => e ? /* @__PURE__ */ v.jsx(
  "div",
  {
    className: `${yh.modalOverlay} ${n}`.trim(),
    onClick: t,
    children: /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `${yh.modalContent} ${a}`.trim(),
        onClick: (i) => i.stopPropagation(),
        children: r
      }
    )
  }
) : null, W1 = "_absolute_199dm_189", U1 = "_relative_199dm_193", H1 = "_fixed_199dm_197", G1 = "_transition_199dm_281", K1 = "_fadeInUp_199dm_1", q1 = "_card_199dm_392", V1 = "_unifiedModal_199dm_493", Y1 = "_fadeIn_199dm_1", X1 = "_slideUp_199dm_1", Z1 = "_slideDown_199dm_1", Q1 = "_scaleIn_199dm_1", J1 = "_modalMessage_199dm_576", eO = "_modalTitle_199dm_584", tO = "_modalBody_199dm_592", rO = "_modalHeader_199dm_599", nO = "_modalFooter_199dm_722", aO = "_endGameContent_199dm_730", iO = "_statisticsContent_199dm_743", oO = "_userInfo_199dm_743", sO = "_userAvatar_199dm_751", cO = "_userName_199dm_758", lO = "_userEmail_199dm_762", uO = "_statsGrid_199dm_766", fO = "_guestMessage_199dm_769", dO = "_purchaseContent_199dm_779", hO = "_itemPreview_199dm_782", pO = "_itemImage_199dm_794", mO = "_priceSection_199dm_800", vO = "_priceLabel_199dm_809", yO = "_priceValue_199dm_812", gO = "_error_199dm_817", bO = "_success_199dm_822", _O = "_vsModeContent_199dm_829", xO = "_searchingState_199dm_832", wO = "_spinner_199dm_835", OO = "_spin_199dm_835", SO = "_modeOptions_199dm_847", AO = "_modeButton_199dm_852", PO = "_vsRoomContent_199dm_866", jO = "_roomSection_199dm_866", TO = "_roomInput_199dm_875", $O = "_statRow_199dm_896", EO = "_statLabel_199dm_907", CO = "_statValue_199dm_912", kO = "_loading_199dm_1", ce = {
  "flex-center": "_flex-center_199dm_19",
  "flex-between": "_flex-between_199dm_25",
  "flex-col": "_flex-col_199dm_31",
  "flex-wrap": "_flex-wrap_199dm_36",
  "gap-sm": "_gap-sm_199dm_41",
  "gap-md": "_gap-md_199dm_45",
  "gap-lg": "_gap-lg_199dm_49",
  "gap-xl": "_gap-xl_199dm_53",
  "p-sm": "_p-sm_199dm_57",
  "p-md": "_p-md_199dm_61",
  "p-lg": "_p-lg_199dm_65",
  "p-xl": "_p-xl_199dm_69",
  "m-sm": "_m-sm_199dm_73",
  "m-md": "_m-md_199dm_77",
  "m-lg": "_m-lg_199dm_81",
  "m-xl": "_m-xl_199dm_85",
  "text-center": "_text-center_199dm_89",
  "text-left": "_text-left_199dm_93",
  "text-right": "_text-right_199dm_97",
  "font-bold": "_font-bold_199dm_101",
  "font-semibold": "_font-semibold_199dm_105",
  "font-medium": "_font-medium_199dm_109",
  "text-primary": "_text-primary_199dm_113",
  "text-secondary": "_text-secondary_199dm_117",
  "text-gray": "_text-gray_199dm_121",
  "text-muted": "_text-muted_199dm_125",
  "bg-primary": "_bg-primary_199dm_129",
  "bg-secondary": "_bg-secondary_199dm_133",
  "bg-white": "_bg-white_199dm_137",
  "bg-gray": "_bg-gray_199dm_141",
  "border-primary": "_border-primary_199dm_145",
  "border-secondary": "_border-secondary_199dm_149",
  "border-gray": "_border-gray_199dm_153",
  "rounded-sm": "_rounded-sm_199dm_157",
  "rounded-md": "_rounded-md_199dm_161",
  "rounded-lg": "_rounded-lg_199dm_165",
  "rounded-xl": "_rounded-xl_199dm_169",
  "shadow-sm": "_shadow-sm_199dm_173",
  "shadow-md": "_shadow-md_199dm_177",
  "shadow-lg": "_shadow-lg_199dm_181",
  "shadow-glow": "_shadow-glow_199dm_185",
  absolute: W1,
  relative: U1,
  fixed: H1,
  "top-0": "_top-0_199dm_201",
  "right-0": "_right-0_199dm_205",
  "bottom-0": "_bottom-0_199dm_209",
  "left-0": "_left-0_199dm_213",
  "w-full": "_w-full_199dm_217",
  "h-full": "_h-full_199dm_221",
  "w-fit": "_w-fit_199dm_225",
  "h-fit": "_h-fit_199dm_229",
  "w-8": "_w-8_199dm_233",
  "w-10": "_w-10_199dm_237",
  "w-12": "_w-12_199dm_241",
  "w-16": "_w-16_199dm_245",
  "h-8": "_h-8_199dm_249",
  "h-10": "_h-10_199dm_253",
  "h-12": "_h-12_199dm_257",
  "h-16": "_h-16_199dm_261",
  "cursor-pointer": "_cursor-pointer_199dm_265",
  "cursor-not-allowed": "_cursor-not-allowed_199dm_269",
  "pointer-events-none": "_pointer-events-none_199dm_273",
  "user-select-none": "_user-select-none_199dm_277",
  transition: G1,
  "transition-colors": "_transition-colors_199dm_285",
  "transition-transform": "_transition-transform_199dm_289",
  "hover-scale": "_hover-scale_199dm_293",
  "fade-in": "_fade-in_199dm_300",
  fadeInUp: K1,
  "status-online": "_status-online_199dm_304",
  "status-offline": "_status-offline_199dm_312",
  "status-away": "_status-away_199dm_320",
  "status-busy": "_status-busy_199dm_328",
  "modal-overlay": "_modal-overlay_199dm_336",
  "modal-content": "_modal-content_199dm_346",
  "close-button-absolute": "_close-button-absolute_199dm_358",
  "primary-button": "_primary-button_199dm_369",
  "secondary-button": "_secondary-button_199dm_381",
  card: q1,
  "input-base": "_input-base_199dm_399",
  "chat-window": "_chat-window_199dm_418",
  "chat-message": "_chat-message_199dm_425",
  "z-10": "_z-10_199dm_434",
  "z-20": "_z-20_199dm_438",
  "z-50": "_z-50_199dm_442",
  "z-modal": "_z-modal_199dm_446",
  "z-overlay": "_z-overlay_199dm_450",
  "mobile-hidden": "_mobile-hidden_199dm_455",
  "mobile-flex-col": "_mobile-flex-col_199dm_458",
  "mobile-text-center": "_mobile-text-center_199dm_461",
  "mobile-p-sm": "_mobile-p-sm_199dm_464",
  "mobile-gap-sm": "_mobile-gap-sm_199dm_467",
  "desktop-hidden": "_desktop-hidden_199dm_472",
  "print-hidden": "_print-hidden_199dm_477",
  "sr-only": "_sr-only_199dm_481",
  unifiedModal: V1,
  "modal-xs": "_modal-xs_199dm_505",
  "modal-small": "_modal-small_199dm_509",
  "modal-medium": "_modal-medium_199dm_513",
  "modal-large": "_modal-large_199dm_517",
  "modal-xl": "_modal-xl_199dm_521",
  "modal-fullscreen": "_modal-fullscreen_199dm_525",
  "modal-auto": "_modal-auto_199dm_532",
  "modal-top": "_modal-top_199dm_537",
  "modal-bottom": "_modal-bottom_199dm_542",
  "modal-left": "_modal-left_199dm_547",
  "modal-right": "_modal-right_199dm_552",
  "modal-fade": "_modal-fade_199dm_557",
  fadeIn: Y1,
  "modal-slide-up": "_modal-slide-up_199dm_561",
  slideUp: X1,
  "modal-slide-down": "_modal-slide-down_199dm_565",
  slideDown: Z1,
  "modal-scale": "_modal-scale_199dm_569",
  scaleIn: Q1,
  "confirmation-modal": "_confirmation-modal_199dm_573",
  modalMessage: J1,
  "alert-modal": "_alert-modal_199dm_581",
  modalTitle: eO,
  "form-modal": "_form-modal_199dm_592",
  modalBody: tO,
  "fullscreen-modal": "_fullscreen-modal_199dm_596",
  modalHeader: rO,
  "pre-game-modal": "_pre-game-modal_199dm_603",
  "end-game-modal": "_end-game-modal_199dm_616",
  "rules-modal": "_rules-modal_199dm_621",
  "statistics-modal": "_statistics-modal_199dm_634",
  "purchase-modal": "_purchase-modal_199dm_638",
  "sign-in-modal": "_sign-in-modal_199dm_642",
  "custom-puzzle-modal": "_custom-puzzle-modal_199dm_651",
  "share-content-modal": "_share-content-modal_199dm_655",
  "vs-mode-modal": "_vs-mode-modal_199dm_662",
  "vs-room-modal": "_vs-room-modal_199dm_666",
  "overlay-only-modal": "_overlay-only-modal_199dm_670",
  "sidebar-modal": "_sidebar-modal_199dm_676",
  "toast-modal": "_toast-modal_199dm_686",
  modalFooter: nO,
  endGameContent: aO,
  statisticsContent: iO,
  userInfo: oO,
  userAvatar: sO,
  userName: cO,
  userEmail: lO,
  statsGrid: uO,
  guestMessage: fO,
  purchaseContent: dO,
  itemPreview: hO,
  itemImage: pO,
  priceSection: mO,
  priceLabel: vO,
  priceValue: yO,
  error: gO,
  success: bO,
  vsModeContent: _O,
  searchingState: xO,
  spinner: wO,
  spin: OO,
  modeOptions: SO,
  modeButton: AO,
  vsRoomContent: PO,
  roomSection: jO,
  roomInput: TO,
  statRow: $O,
  statLabel: EO,
  statValue: CO,
  loading: kO
}, NO = {
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
}, MO = (e) => NO[e], IO = (e, t = {}) => ({ ...MO(e), ...t }), _o = {
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
}, zte = (e) => _o.gameFlow.includes(e), Fte = (e) => _o.versus.includes(e), Wte = (e) => _o.commerce.includes(e), Ute = (e) => _o.interactions.includes(e), Hte = (e) => _o.layouts.includes(e), DO = ({
  kind: e,
  children: t,
  score: r,
  attemptsLeft: n,
  burnBonus: a,
  win: i,
  finishTime: o,
  user: s,
  isSearching: c,
  roomCode: l = "",
  onSelect: u,
  item: f,
  error: d,
  loading: h,
  success: y,
  setRoomCode: m,
  setError: p
}) => {
  switch (e) {
    case "end-game":
      return b();
    case "statistics":
      return w();
    case "purchase":
      return x();
    case "vs-mode":
      return O();
    case "vs-room":
      return g();
    case "share-content":
      return /* @__PURE__ */ v.jsx(v.Fragment, { children: t });
    default:
      return /* @__PURE__ */ v.jsx(v.Fragment, { children: t });
  }
  function b() {
    return /* @__PURE__ */ v.jsxs("div", { className: ce.endGameContent, children: [
      /* @__PURE__ */ v.jsx("h2", { children: i ? "You Win!" : "Game Over" }),
      r !== void 0 && /* @__PURE__ */ v.jsxs("div", { className: ce.statRow, children: [
        /* @__PURE__ */ v.jsx("span", { children: "Score:" }),
        " ",
        /* @__PURE__ */ v.jsx("span", { children: r })
      ] }),
      n !== void 0 && /* @__PURE__ */ v.jsxs("div", { className: ce.statRow, children: [
        /* @__PURE__ */ v.jsx("span", { children: "Attempts Left:" }),
        " ",
        /* @__PURE__ */ v.jsx("span", { children: n })
      ] }),
      a !== void 0 && /* @__PURE__ */ v.jsxs("div", { className: ce.statRow, children: [
        /* @__PURE__ */ v.jsx("span", { children: "Burn Bonus:" }),
        " ",
        /* @__PURE__ */ v.jsx("span", { children: a })
      ] }),
      o && /* @__PURE__ */ v.jsxs("div", { className: ce.statRow, children: [
        /* @__PURE__ */ v.jsx("span", { children: "Finish Time:" }),
        " ",
        /* @__PURE__ */ v.jsx("span", { children: o })
      ] }),
      t
    ] });
  }
  function w() {
    const _ = {
      completed: 58,
      winPercentage: 78,
      currentStreak: 0,
      maxStreak: 5,
      perfectPuzzles: 20
    };
    return /* @__PURE__ */ v.jsxs("div", { className: ce.statisticsContent, children: [
      s && /* @__PURE__ */ v.jsxs("div", { className: ce.userInfo, children: [
        /* @__PURE__ */ v.jsx(
          "img",
          {
            src: s.photoUrl || "/default-avatar.png",
            alt: s.name,
            className: ce.userAvatar
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { children: [
          /* @__PURE__ */ v.jsx("div", { className: ce.userName, children: s.name }),
          /* @__PURE__ */ v.jsx("div", { className: ce.userEmail, children: s.email })
        ] })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: ce.statsGrid, children: Object.entries(_).map(([S, P]) => /* @__PURE__ */ v.jsxs("div", { className: ce.statRow, children: [
        /* @__PURE__ */ v.jsx("span", { className: ce.statLabel, children: S.replace(/([A-Z])/g, " $1").replace(
          /^./,
          (j) => j.toUpperCase()
        ) }),
        /* @__PURE__ */ v.jsxs("span", { className: ce.statValue, children: [
          P,
          S.includes("Percentage") ? "%" : ""
        ] })
      ] }, S)) }),
      !s && /* @__PURE__ */ v.jsx("div", { className: ce.guestMessage, children: "Sign in to track your statistics across devices" }),
      t
    ] });
  }
  function x() {
    return /* @__PURE__ */ v.jsxs("div", { className: ce.purchaseContent, children: [
      f && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsxs("div", { className: ce.itemPreview, children: [
          f.previewUrl && /* @__PURE__ */ v.jsx(
            "img",
            {
              src: f.previewUrl,
              alt: f.name,
              className: ce.itemImage
            }
          ),
          /* @__PURE__ */ v.jsx("h3", { children: f.label || f.name }),
          f.description && /* @__PURE__ */ v.jsx("p", { children: f.description })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: ce.priceSection, children: [
          /* @__PURE__ */ v.jsx("span", { className: ce.priceLabel, children: "Price:" }),
          /* @__PURE__ */ v.jsxs("span", { className: ce.priceValue, children: [
            f.price,
            " ",
            f.currency || "coins"
          ] })
        ] })
      ] }),
      d && /* @__PURE__ */ v.jsx("div", { className: ce.error, children: d }),
      y && /* @__PURE__ */ v.jsx("div", { className: ce.success, children: "Purchase successful!" }),
      t
    ] });
  }
  function O() {
    return /* @__PURE__ */ v.jsxs("div", { className: ce.vsModeContent, children: [
      c ? /* @__PURE__ */ v.jsxs("div", { className: ce.searchingState, children: [
        /* @__PURE__ */ v.jsx("div", { className: ce.spinner }),
        /* @__PURE__ */ v.jsx("p", { children: "Searching for opponent..." })
      ] }) : /* @__PURE__ */ v.jsxs("div", { className: ce.modeOptions, children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => u == null ? void 0 : u("room"),
            className: ce.modeButton,
            children: "Private Room"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => u == null ? void 0 : u("matchmaking"),
            className: ce.modeButton,
            children: "Quick Match"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => u == null ? void 0 : u("bot"),
            className: ce.modeButton,
            children: "VS Bot"
          }
        )
      ] }),
      t
    ] });
  }
  function g() {
    return /* @__PURE__ */ v.jsxs("div", { className: ce.vsRoomContent, children: [
      /* @__PURE__ */ v.jsxs("div", { className: ce.roomSection, children: [
        /* @__PURE__ */ v.jsx("label", { htmlFor: "room-code", children: "Room Code:" }),
        /* @__PURE__ */ v.jsx(
          "input",
          {
            id: "room-code",
            type: "text",
            value: l,
            onChange: (_) => m == null ? void 0 : m(_.target.value),
            placeholder: "Enter room code",
            className: ce.roomInput
          }
        ),
        d && /* @__PURE__ */ v.jsx("div", { className: ce.error, children: d })
      ] }),
      t
    ] });
  }
}, RO = ({
  kind: e,
  config: t,
  finalConfirmText: r,
  finalCancelText: n,
  finalSubmitText: a,
  onConfirm: i,
  onCancel: o,
  onSubmit: s,
  onClose: c,
  signIn: l,
  handlePurchase: u,
  handleCreateRoom: f,
  handleJoinRoom: d,
  loading: h = !1,
  success: y = !1
}) => {
  switch (e) {
    case "confirmation":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: t.secondaryButtonKind || "secondary",
            onClick: o || c,
            children: n
          }
        ),
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: t.primaryButtonKind || "primary",
            onClick: i,
            children: r
          }
        )
      ] });
    case "alert":
      return /* @__PURE__ */ v.jsx(
        ze,
        {
          kind: t.primaryButtonKind || "primary",
          onClick: c,
          children: "OK"
        }
      );
    case "form":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: t.secondaryButtonKind || "secondary",
            onClick: c,
            children: n
          }
        ),
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: t.primaryButtonKind || "primary",
            onClick: s,
            children: a
          }
        )
      ] });
    case "pre-game":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: "secondary",
            onClick: o,
            children: n
          }
        ),
        /* @__PURE__ */ v.jsx(ze, { kind: "primary", onClick: i, children: r })
      ] });
    case "end-game":
      return /* @__PURE__ */ v.jsx(ze, { kind: "primary", onClick: i, children: "Share" });
    case "sign-in":
      return /* @__PURE__ */ v.jsx(
        ze,
        {
          kind: "primary",
          onClick: l || i,
          children: r
        }
      );
    case "purchase":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(ze, { kind: "secondary", onClick: c, children: "Cancel" }),
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: "primary",
            onClick: u,
            disabled: h || y,
            children: h ? "Processing..." : y ? "Success!" : r
          }
        )
      ] });
    case "vs-room":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: "secondary",
            onClick: f,
            children: "Create Room"
          }
        ),
        /* @__PURE__ */ v.jsx(
          ze,
          {
            kind: "primary",
            onClick: d,
            children: "Join Room"
          }
        )
      ] });
    case "custom-puzzle":
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(ze, { kind: "secondary", onClick: c, children: n }),
        /* @__PURE__ */ v.jsx(ze, { kind: "primary", onClick: i, children: r })
      ] });
    default:
      return null;
  }
}, Mg = ({
  kind: e,
  title: t,
  message: r,
  children: n,
  confirmText: a,
  cancelText: i,
  onConfirm: o,
  onCancel: s,
  onSubmit: c,
  submitText: l,
  // Game-specific props
  score: u,
  attemptsLeft: f,
  burnBonus: d,
  win: h,
  finishTime: y,
  user: m,
  session: p,
  signIn: b,
  // VS mode props
  isSearching: w,
  roomCode: x,
  onCreateRoom: O,
  onJoinRoom: g,
  onSelect: _,
  // Purchase props
  item: S,
  onPurchase: P,
  // Rules props
  columnCount: j = 4,
  mode: E = "daily",
  wildcardsActive: $,
  // Statistics props
  dailyCompleted: k,
  // Visual overrides
  size: C,
  position: D,
  animation: N,
  showCloseButton: M,
  showHeader: B,
  showFooter: W,
  // Configuration overrides
  configOverrides: H,
  onClose: T,
  className: R = "",
  ...L
}) => {
  const z = IO(e, {
    ...C && { size: C },
    ...D && { position: D },
    ...N && {
      animation: N
    },
    ...M !== void 0 && {
      showCloseButton: M
    },
    ...B !== void 0 && {
      showHeader: B
    },
    ...W !== void 0 && {
      showFooter: W
    },
    ...H
  }), [q, Y] = He(
    x || ""
  ), [J, ee] = He(""), [X, U] = He(!1), [V, re] = He(!1), I = t || z.defaultTitle, le = r || z.defaultMessage, K = a || z.primaryButtonText || "Confirm", je = i || z.secondaryButtonText || "Cancel", Ce = l || z.primaryButtonText || "Submit", Ve = [
    ce.unifiedModal,
    ce[`modal-${z.size}`],
    ce[`modal-${z.position}`],
    ce[`modal-${z.animation}`],
    z.className && ce[z.className],
    R
  ].filter(Boolean).join(" "), ar = () => z.showHeader ? /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `${ce.modalHeader} ${z.headerClassName || ""}`.trim(),
      children: [
        I && /* @__PURE__ */ v.jsx("h2", { className: ce.modalTitle, children: I }),
        z.showCloseButton && /* @__PURE__ */ v.jsx(ze, { kind: "close", onClick: T })
      ]
    }
  ) : null, Kr = () => {
    const et = `${ce.modalBody} ${z.bodyClassName || ""}`.trim();
    return z.customBody ? /* @__PURE__ */ v.jsx("div", { className: et, children: /* @__PURE__ */ v.jsx(
      DO,
      {
        kind: e,
        score: u,
        attemptsLeft: f,
        burnBonus: d,
        win: h,
        finishTime: y,
        user: m,
        isSearching: w,
        roomCode: q,
        onSelect: _,
        item: S,
        error: J,
        loading: X,
        success: V,
        setRoomCode: Y,
        setError: ee,
        children: n
      }
    ) }) : /* @__PURE__ */ v.jsxs("div", { className: et, children: [
      le && /* @__PURE__ */ v.jsx("p", { className: ce.modalMessage, children: le }),
      n
    ] });
  }, Dn = () => {
    if (!z.showFooter) return null;
    const et = `${ce.modalFooter} ${z.footerClassName || ""}`.trim();
    return /* @__PURE__ */ v.jsx("div", { className: et, children: yr() });
  }, yr = () => /* @__PURE__ */ v.jsx(
    RO,
    {
      kind: e,
      config: z,
      finalConfirmText: K,
      finalCancelText: je,
      finalSubmitText: Ce,
      onConfirm: o,
      onCancel: s,
      onSubmit: c,
      onClose: T,
      signIn: b,
      handlePurchase: Kt,
      handleCreateRoom: ti,
      handleJoinRoom: ri,
      loading: X,
      success: V
    }
  ), Kt = async () => {
    if (!(!P || !S)) {
      U(!0), ee("");
      try {
        await P(S), re(!0), setTimeout(() => T(), 1200);
      } catch (et) {
        ee((et == null ? void 0 : et.message) || "Purchase failed.");
      } finally {
        U(!1);
      }
    }
  }, ti = () => {
    const et = Math.random().toString(36).substring(2, 8).toUpperCase();
    Y(et), O == null || O(et);
  }, ri = () => {
    if (!q.trim()) {
      ee("Please enter a room code.");
      return;
    }
    ee(""), g == null || g(q.trim());
  };
  return kr(() => {
    const et = (ko) => {
      ko.key === "Escape" && z.closeOnEscape && T();
    };
    if (z.closeOnEscape)
      return document.addEventListener("keydown", et), () => document.removeEventListener(
        "keydown",
        et
      );
  }, [z.closeOnEscape, T]), kr(() => {
    if (z.preventScroll)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "unset";
      };
  }, [z.preventScroll]), /* @__PURE__ */ v.jsxs(
    F1,
    {
      onClose: z.closeOnBackdrop ? T : () => {
      },
      className: Ve,
      ...L,
      children: [
        ar(),
        Kr(),
        Dn()
      ]
    }
  );
};
class gh {
  /**
   * Create any modal with required props and optional overrides
   */
  static create(t, r, n, a = {}) {
    return /* @__PURE__ */ v.jsx(
      Mg,
      {
        kind: t,
        open: r,
        onClose: n,
        ...a
      }
    );
  }
  // === CONFIRMATION MODALS ===
  static confirmation(t, r, n, a, i, o) {
    return this.create("confirmation", t, r, {
      title: n,
      message: a,
      onConfirm: i,
      onCancel: o || r
    });
  }
  // === ALERT MODALS ===
  static alert(t, r, n, a) {
    return this.create("alert", t, r, {
      title: n,
      message: a,
      onConfirm: r
    });
  }
  // === GAME MODALS ===
  static preGame(t, r, n, a) {
    return this.create("pre-game", t, r, {
      onConfirm: n,
      onCancel: a || r
    });
  }
  static endGame(t, r, n, a) {
    return this.create("end-game", t, r, {
      onConfirm: n,
      ...a
    });
  }
  static rules(t, r, n) {
    return this.create("rules", t, r, n);
  }
  static statistics(t, r) {
    return this.create("statistics", t, r);
  }
  // === VS MODE MODALS ===
  static vsMode(t, r, n, a) {
    return this.create("vs-mode", t, r, {
      onSelect: n,
      ...a
    });
  }
  static vsRoom(t, r, n, a, i) {
    return this.create("vs-room", t, r, {
      onCreateRoom: n,
      onJoinRoom: a,
      ...i
    });
  }
  // === COMMERCE MODALS ===
  static purchase(t, r, n, a, i) {
    return this.create("purchase", t, r, {
      item: n,
      onPurchase: a,
      user: i
    });
  }
  static signIn(t, r, n) {
    return this.create("sign-in", t, r, {
      onConfirm: n
    });
  }
  // === FORM MODALS ===
  static form(t, r, n, a, i, o) {
    return this.create("form", t, r, {
      title: n,
      onSubmit: a,
      onCancel: i || r,
      submitText: o
    });
  }
  // === CUSTOM MODALS ===
  static customPuzzle(t, r, n) {
    return this.create("custom-puzzle", t, r, {
      children: n
    });
  }
  static shareContent(t, r, n) {
    return this.create("share-content", t, r, {
      children: n
    });
  }
  // === QUICK PRESETS ===
  static deleteConfirmation(t, r, n) {
    return this.confirmation(
      t,
      n || (() => {
      }),
      "Delete Item",
      "Are you sure you want to delete this item? This action cannot be undone.",
      r,
      n
    );
  }
  static saveConfirmation(t, r, n) {
    return this.confirmation(
      t,
      n || (() => {
      }),
      "Save Changes",
      "Do you want to save your changes before leaving?",
      r,
      n
    );
  }
  static errorAlert(t, r, n) {
    return this.alert(t, r, "Error", n);
  }
  static successAlert(t, r, n) {
    return this.alert(t, r, "Success", n);
  }
  static warningAlert(t, r, n) {
    return this.alert(t, r, "Warning", n);
  }
}
function Gte() {
  const [e, t] = He({}), r = (c, l) => {
    t((u) => ({
      ...u,
      [c]: { open: !0, element: l }
    }));
  }, n = (c) => {
    t((l) => ({
      ...l,
      [c]: { ...l[c], open: !1 }
    }));
  }, a = () => {
    t({});
  }, i = (c) => {
    var l;
    return ((l = e[c]) == null ? void 0 : l.open) || !1;
  }, o = (c, l, u, f) => {
    const d = gh.confirmation(
      !0,
      () => n(c),
      l,
      u,
      () => {
        f(), n(c);
      }
    );
    r(c, d);
  }, s = (c, l, u) => {
    const f = gh.alert(
      !0,
      () => n(c),
      l,
      u
    );
    r(c, f);
  };
  return {
    modals: Object.values(e).map(
      (c) => c.element
    ),
    open: r,
    close: n,
    closeAll: a,
    isOpen: i,
    showConfirmation: o,
    showAlert: s
  };
}
const Ig = ({
  kind: e,
  ...t
}) => /* @__PURE__ */ v.jsx(Mg, { kind: e, ...t });
Ig.displayName = "ModalFactory";
const jt = Ig, Kte = {
  // Basic modals
  Alert: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "alert", ...e }),
  Confirm: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "confirmation", ...e }),
  Form: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "form", ...e }),
  // Game modals
  PreGame: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "pre-game", ...e }),
  EndGame: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "end-game", ...e }),
  Rules: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "rules", ...e }),
  Statistics: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "statistics", ...e }),
  // Commerce modals
  Purchase: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "purchase", ...e }),
  SignIn: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "sign-in", ...e }),
  // VS Mode modals
  VSMode: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "vs-mode", ...e }),
  VSRoom: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "vs-room", ...e }),
  // Utility modals
  Custom: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "custom", ...e }),
  Fullscreen: (e) => /* @__PURE__ */ v.jsx(jt, { kind: "fullscreen", ...e })
}, qte = {
  alert: (e, t, r) => ({
    kind: "alert",
    message: e,
    title: t,
    onClose: r,
    open: !0
  }),
  confirm: (e, t, r, n) => ({
    kind: "confirmation",
    message: e,
    title: n,
    onConfirm: t,
    onCancel: r,
    onClose: r,
    open: !0
  }),
  form: (e, t, r, n) => ({
    kind: "form",
    title: e,
    onSubmit: t,
    onCancel: r,
    onClose: r,
    children: n,
    open: !0
  })
}, BO = "_titleSection_a22oy_41", LO = "_actions_a22oy_41", zO = "_tabs_a22oy_41", FO = "_tab_a22oy_41", WO = "_leftSection_a22oy_45", UO = "_rightSection_a22oy_45", HO = "_title_a22oy_41", GO = "_tabActive_a22oy_101", KO = "_absolute_a22oy_189", qO = "_relative_a22oy_193", VO = "_fixed_a22oy_197", YO = "_transition_a22oy_281", XO = "_fadeInUp_a22oy_1", ZO = "_card_a22oy_392", QO = "_header_a22oy_493", JO = "_headerInner_a22oy_500", eS = "_headerChildren_a22oy_507", tS = "_borderBottom_a22oy_571", rS = "_sticky_a22oy_575", nS = "_collapsible_a22oy_582", aS = "_collapsed_a22oy_586", iS = "_titleContent_a22oy_586", oS = "_responsive_a22oy_593", sS = "_content_a22oy_605", cS = "_contentCentered_a22oy_612", lS = "_titleIcon_a22oy_633", uS = "_subtitle_a22oy_673", fS = "_actionButton_a22oy_694", dS = "_collapseButton_a22oy_698", hS = "_tabIcon_a22oy_770", pS = "_tabLabel_a22oy_774", mS = "_tabBadge_a22oy_778", vS = "_browseHeader_a22oy_788", yS = "_browseTabbedHeader_a22oy_788", gS = "_dashboardHeader_a22oy_799", bS = "_dashboardSimpleHeader_a22oy_805", _S = "_modalHeader_a22oy_809", xS = "_modalCloseOnlyHeader_a22oy_815", wS = "_pageHeader_a22oy_820", OS = "_pageWithNavHeader_a22oy_824", SS = "_sidebarHeader_a22oy_833", AS = "_navigationHeader_a22oy_839", PS = "_simpleHeader_a22oy_849", jS = "_simpleCenteredHeader_a22oy_849", TS = "_gameHeader_a22oy_857", $S = "_settingsHeader_a22oy_861", ES = "_profileHeader_a22oy_866", CS = "_loading_a22oy_1", ne = {
  "flex-center": "_flex-center_a22oy_19",
  "flex-between": "_flex-between_a22oy_25",
  "flex-col": "_flex-col_a22oy_31",
  "flex-wrap": "_flex-wrap_a22oy_36",
  "gap-sm": "_gap-sm_a22oy_41",
  titleSection: BO,
  actions: LO,
  tabs: zO,
  tab: FO,
  "gap-md": "_gap-md_a22oy_45",
  leftSection: WO,
  rightSection: UO,
  "gap-lg": "_gap-lg_a22oy_49",
  "gap-xl": "_gap-xl_a22oy_53",
  "p-sm": "_p-sm_a22oy_57",
  "p-md": "_p-md_a22oy_61",
  "p-lg": "_p-lg_a22oy_65",
  "p-xl": "_p-xl_a22oy_69",
  "m-sm": "_m-sm_a22oy_73",
  "m-md": "_m-md_a22oy_77",
  "m-lg": "_m-lg_a22oy_81",
  "m-xl": "_m-xl_a22oy_85",
  "text-center": "_text-center_a22oy_89",
  "text-left": "_text-left_a22oy_93",
  "text-right": "_text-right_a22oy_97",
  "font-bold": "_font-bold_a22oy_101",
  title: HO,
  "title-bold": "_title-bold_a22oy_101",
  tabActive: GO,
  "font-semibold": "_font-semibold_a22oy_105",
  "font-medium": "_font-medium_a22oy_109",
  "text-primary": "_text-primary_a22oy_113",
  "text-secondary": "_text-secondary_a22oy_117",
  "text-gray": "_text-gray_a22oy_121",
  "text-muted": "_text-muted_a22oy_125",
  "bg-primary": "_bg-primary_a22oy_129",
  "bg-secondary": "_bg-secondary_a22oy_133",
  "bg-white": "_bg-white_a22oy_137",
  "bg-gray": "_bg-gray_a22oy_141",
  "border-primary": "_border-primary_a22oy_145",
  "border-secondary": "_border-secondary_a22oy_149",
  "border-gray": "_border-gray_a22oy_153",
  "rounded-sm": "_rounded-sm_a22oy_157",
  "rounded-md": "_rounded-md_a22oy_161",
  "rounded-lg": "_rounded-lg_a22oy_165",
  "rounded-xl": "_rounded-xl_a22oy_169",
  "shadow-sm": "_shadow-sm_a22oy_173",
  "shadow-md": "_shadow-md_a22oy_177",
  "shadow-lg": "_shadow-lg_a22oy_181",
  "shadow-glow": "_shadow-glow_a22oy_185",
  absolute: KO,
  relative: qO,
  fixed: VO,
  "top-0": "_top-0_a22oy_201",
  "right-0": "_right-0_a22oy_205",
  "bottom-0": "_bottom-0_a22oy_209",
  "left-0": "_left-0_a22oy_213",
  "w-full": "_w-full_a22oy_217",
  "h-full": "_h-full_a22oy_221",
  "w-fit": "_w-fit_a22oy_225",
  "h-fit": "_h-fit_a22oy_229",
  "w-8": "_w-8_a22oy_233",
  "w-10": "_w-10_a22oy_237",
  "w-12": "_w-12_a22oy_241",
  "w-16": "_w-16_a22oy_245",
  "h-8": "_h-8_a22oy_249",
  "h-10": "_h-10_a22oy_253",
  "h-12": "_h-12_a22oy_257",
  "h-16": "_h-16_a22oy_261",
  "cursor-pointer": "_cursor-pointer_a22oy_265",
  "cursor-not-allowed": "_cursor-not-allowed_a22oy_269",
  "pointer-events-none": "_pointer-events-none_a22oy_273",
  "user-select-none": "_user-select-none_a22oy_277",
  transition: YO,
  "transition-colors": "_transition-colors_a22oy_285",
  "transition-transform": "_transition-transform_a22oy_289",
  "hover-scale": "_hover-scale_a22oy_293",
  "fade-in": "_fade-in_a22oy_300",
  fadeInUp: XO,
  "status-online": "_status-online_a22oy_304",
  "status-offline": "_status-offline_a22oy_312",
  "status-away": "_status-away_a22oy_320",
  "status-busy": "_status-busy_a22oy_328",
  "modal-overlay": "_modal-overlay_a22oy_336",
  "modal-content": "_modal-content_a22oy_346",
  "close-button-absolute": "_close-button-absolute_a22oy_358",
  "primary-button": "_primary-button_a22oy_369",
  "secondary-button": "_secondary-button_a22oy_381",
  card: ZO,
  "input-base": "_input-base_a22oy_399",
  "chat-window": "_chat-window_a22oy_418",
  "chat-message": "_chat-message_a22oy_425",
  "z-10": "_z-10_a22oy_434",
  "z-20": "_z-20_a22oy_438",
  "z-50": "_z-50_a22oy_442",
  "z-modal": "_z-modal_a22oy_446",
  "z-overlay": "_z-overlay_a22oy_450",
  "mobile-hidden": "_mobile-hidden_a22oy_455",
  "mobile-flex-col": "_mobile-flex-col_a22oy_458",
  "mobile-text-center": "_mobile-text-center_a22oy_461",
  "mobile-p-sm": "_mobile-p-sm_a22oy_464",
  "mobile-gap-sm": "_mobile-gap-sm_a22oy_467",
  "desktop-hidden": "_desktop-hidden_a22oy_472",
  "print-hidden": "_print-hidden_a22oy_477",
  "sr-only": "_sr-only_a22oy_481",
  header: QO,
  headerInner: JO,
  headerChildren: eS,
  "layout-left-aligned": "_layout-left-aligned_a22oy_512",
  "layout-center-aligned": "_layout-center-aligned_a22oy_519",
  "layout-space-between": "_layout-space-between_a22oy_526",
  "layout-custom": "_layout-custom_a22oy_533",
  "padding-none": "_padding-none_a22oy_537",
  "padding-small": "_padding-small_a22oy_541",
  "padding-medium": "_padding-medium_a22oy_545",
  "padding-large": "_padding-large_a22oy_549",
  "bg-transparent": "_bg-transparent_a22oy_553",
  "bg-custom": "_bg-custom_a22oy_567",
  borderBottom: tS,
  sticky: rS,
  collapsible: nS,
  collapsed: aS,
  titleContent: iS,
  responsive: oS,
  content: sS,
  contentCentered: cS,
  titleIcon: lS,
  "title-small": "_title-small_a22oy_649",
  "title-medium": "_title-medium_a22oy_653",
  "title-large": "_title-large_a22oy_657",
  "title-xlarge": "_title-xlarge_a22oy_661",
  "title-normal": "_title-normal_a22oy_665",
  subtitle: uS,
  "actions-left": "_actions-left_a22oy_686",
  "actions-right": "_actions-right_a22oy_690",
  actionButton: fS,
  collapseButton: dS,
  "tabs-below-title": "_tabs-below-title_a22oy_707",
  "tabs-beside-title": "_tabs-beside-title_a22oy_712",
  "tabs-separate-row": "_tabs-separate-row_a22oy_716",
  "tabs-align-left": "_tabs-align-left_a22oy_723",
  "tabs-align-center": "_tabs-align-center_a22oy_727",
  "tabs-align-right": "_tabs-align-right_a22oy_731",
  tabIcon: hS,
  tabLabel: pS,
  tabBadge: mS,
  browseHeader: vS,
  browseTabbedHeader: yS,
  dashboardHeader: gS,
  dashboardSimpleHeader: bS,
  modalHeader: _S,
  modalCloseOnlyHeader: xS,
  pageHeader: wS,
  pageWithNavHeader: OS,
  sidebarHeader: SS,
  navigationHeader: AS,
  simpleHeader: PS,
  simpleCenteredHeader: jS,
  gameHeader: TS,
  settingsHeader: $S,
  profileHeader: ES,
  loading: CS
}, Hf = {
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
    className: ne.browseHeader,
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
    className: ne.browseTabbedHeader,
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
    className: ne.dashboardHeader,
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
    className: ne.dashboardSimpleHeader,
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
    className: ne.modalHeader,
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
    className: ne.modalCloseOnlyHeader,
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
    className: ne.pageHeader,
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
    className: ne.pageWithNavHeader,
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
    className: ne.sidebarHeader,
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
    className: ne.navigationHeader,
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
    className: ne.simpleHeader,
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
    className: ne.simpleCenteredHeader,
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
    className: ne.gameHeader,
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
    className: ne.settingsHeader,
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
    className: ne.profileHeader,
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
}, Vte = {
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
}, Yte = {
  // Quick modal headers
  MODAL_WITH_TITLE: (e, t) => ({
    kind: "modal",
    title: e,
    actions: [{ type: "close", handler: t }]
  }),
  MODAL_CLOSE_ONLY: (e) => ({
    kind: "modal-close-only",
    actions: [{ type: "close", handler: e }]
  }),
  // Quick browse headers
  BROWSE_WITH_BACK: (e, t) => ({
    kind: "browse",
    title: e,
    actions: [{ type: "back", handler: t }]
  }),
  BROWSE_WITH_TABS: (e, t, r, n, a) => ({
    kind: "browse-tabbed",
    title: e,
    tabs: t,
    currentTab: r,
    onTabChange: n,
    actions: [{ type: "back", handler: a }]
  }),
  // Quick page headers
  PAGE_SIMPLE: (e) => ({
    kind: "page",
    title: e
  }),
  PAGE_WITH_BACK: (e, t) => ({
    kind: "page-with-nav",
    title: e,
    actions: [{ type: "back", handler: t }]
  })
};
function Xte(e, t = {}) {
  return {
    ...Hf[e],
    ...t
  };
}
function Zte(e, t) {
  return [...e, ...t];
}
const vc = ve(
  ({
    kind: e,
    title: t,
    subtitle: r,
    icon: n,
    children: a,
    tabs: i = [],
    currentTab: o,
    onTabChange: s,
    actions: c = [],
    leftActions: l = [],
    rightActions: u = [],
    sticky: f = !1,
    collapsible: d = !1,
    isCollapsed: h = !1,
    onToggleCollapse: y,
    borderBottom: m,
    background: p,
    customBackgroundColor: b,
    className: w = "",
    overrideConfig: x = {},
    customClassName: O = "",
    ariaLabel: g,
    role: _ = "banner",
    ...S
  }, P) => {
    const j = {
      ...Hf[e],
      ...x
    };
    [
      ...j.actionsPosition === "left" || j.actionsPosition === "both" ? l : [],
      ...c,
      ...j.actionsPosition === "right" || j.actionsPosition === "both" ? u : []
    ];
    const E = [
      ne.header,
      j.className || "",
      w,
      O,
      j.layout ? ne[`layout-${j.layout}`] : "",
      j.padding ? ne[`padding-${j.padding}`] : "",
      j.background ? ne[`bg-${j.background}`] : "",
      m !== void 0 ? m ? ne.borderBottom : "" : j.borderBottom ? ne.borderBottom : "",
      f !== void 0 ? f ? ne.sticky : "" : j.sticky ? ne.sticky : "",
      d ? ne.collapsible : "",
      h ? ne.collapsed : "",
      j.responsive ? ne.responsive : ""
    ].filter(Boolean).join(" "), $ = (N, M) => N.length === 0 ? null : /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `${ne.actions} ${ne[`actions-${M}`]}`,
        children: N.map((B, W) => {
          let H;
          switch (B.type) {
            case "back":
              H = "go-back";
              break;
            case "close":
              H = "close";
              break;
            case "menu":
              H = "icon";
              break;
            default:
              H = "icon";
          }
          return /* @__PURE__ */ v.jsx(
            ze,
            {
              kind: H,
              onClick: B.handler,
              className: `${ne.actionButton} ${B.className || ""}`,
              "aria-label": B.label,
              icon: B.icon,
              children: B.label && B.type === "custom" ? B.label : void 0
            },
            W
          );
        })
      }
    ), k = () => !j.showTabs || i.length === 0 ? null : /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `${ne.tabs} ${ne[`tabs-${j.tabsPosition}`]} ${ne[`tabs-align-${j.tabsAlign}`]}`,
        children: i.map((N) => /* @__PURE__ */ v.jsxs(
          "button",
          {
            onClick: () => s == null ? void 0 : s(N.value),
            className: `${ne.tab} ${o === N.value ? ne.tabActive : ""}`,
            disabled: N.disabled,
            "aria-selected": o === N.value,
            role: "tab",
            children: [
              N.icon && /* @__PURE__ */ v.jsx("span", { className: ne.tabIcon, children: N.icon }),
              /* @__PURE__ */ v.jsx("span", { className: ne.tabLabel, children: N.label }),
              N.badge && /* @__PURE__ */ v.jsx("span", { className: ne.tabBadge, children: N.badge })
            ]
          },
          N.value
        ))
      }
    ), C = () => !j.showTitle && !t && !r ? null : /* @__PURE__ */ v.jsxs("div", { className: ne.titleSection, children: [
      n && /* @__PURE__ */ v.jsx("span", { className: ne.titleIcon, children: n }),
      /* @__PURE__ */ v.jsxs("div", { className: ne.titleContent, children: [
        t && /* @__PURE__ */ v.jsx(
          "h1",
          {
            className: `${ne.title} ${ne[`title-${j.titleSize}`]} ${ne[`title-${j.titleWeight}`]}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ v.jsx("p", { className: ne.subtitle, children: r })
      ] }),
      d && /* @__PURE__ */ v.jsx(
        ze,
        {
          kind: "icon",
          onClick: y,
          className: ne.collapseButton,
          "aria-label": h ? "Expand header" : "Collapse header",
          icon: h ? "▼" : "▲"
        }
      )
    ] }), D = () => {
      const N = j.actionsPosition === "left" || j.actionsPosition === "both" ? [
        ...l,
        ...j.actionsPosition === "left" ? c : []
      ] : [], M = j.actionsPosition === "right" || j.actionsPosition === "both" ? [
        ...j.actionsPosition === "right" ? c : [],
        ...u
      ] : [];
      switch (j.layout) {
        case "left-aligned":
          return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            $(N, "left"),
            /* @__PURE__ */ v.jsxs("div", { className: ne.content, children: [
              C(),
              j.tabsPosition === "below-title" && k()
            ] }),
            $(M, "right")
          ] });
        case "center-aligned":
          return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            $(N, "left"),
            /* @__PURE__ */ v.jsxs(
              "div",
              {
                className: `${ne.content} ${ne.contentCentered}`,
                children: [
                  C(),
                  j.tabsPosition === "below-title" && k()
                ]
              }
            ),
            $(M, "right")
          ] });
        case "space-between":
          return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            /* @__PURE__ */ v.jsxs("div", { className: ne.leftSection, children: [
              $(N, "left"),
              C()
            ] }),
            j.tabsPosition === "beside-title" && k(),
            /* @__PURE__ */ v.jsx("div", { className: ne.rightSection, children: $(
              M,
              "right"
            ) })
          ] });
        case "custom":
        default:
          return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
            $(N, "left"),
            /* @__PURE__ */ v.jsxs("div", { className: ne.content, children: [
              C(),
              j.tabsPosition === "below-title" && k()
            ] }),
            $(M, "right")
          ] });
      }
    };
    return /* @__PURE__ */ v.jsxs(
      "header",
      {
        ...S,
        ref: P,
        className: E,
        role: _,
        "aria-label": g || t,
        style: {
          ...S.style,
          ...b && {
            backgroundColor: b
          }
        },
        children: [
          /* @__PURE__ */ v.jsxs("div", { className: ne.headerInner, children: [
            D(),
            j.tabsPosition === "separate-row" && k()
          ] }),
          a && /* @__PURE__ */ v.jsx("div", { className: ne.headerChildren, children: a })
        ]
      }
    );
  }
);
vc.displayName = "UnifiedHeader";
const Qte = ({
  kind: e = "simple",
  ...t
}) => /* @__PURE__ */ v.jsx(vc, { kind: e, ...t }), Jte = ({
  title: e,
  tabs: t,
  currentTab: r,
  setTab: n,
  onBack: a
}) => {
  const i = t.map(
    (s) => ({
      label: s.label,
      value: s.value
    })
  ), o = [
    {
      type: "back",
      handler: a
    }
  ];
  return /* @__PURE__ */ v.jsx(
    vc,
    {
      kind: "browse-tabbed",
      title: e,
      tabs: i,
      currentTab: r,
      onTabChange: n,
      actions: o
    }
  );
};
class We {
  /**
   * Create a header with a specific kind and minimal props
   */
  static create(t, r = {}) {
    return A.createElement(vc, {
      kind: t,
      ...r
    });
  }
  /**
   * Create multiple headers from a group configuration
   */
  static createGroup(t, r = {}) {
    return Object.fromEntries(
      Object.entries(t).map(
        ([n, { kind: a, props: i = {} }]) => [
          n,
          We.create(a, {
            ...r,
            ...i
          })
        ]
      )
    );
  }
  /**
   * Get configuration for a specific header kind
   */
  static getConfig(t) {
    return Hf[t];
  }
  /**
   * Create a header with custom configuration overrides
   */
  static createWithOverrides(t, r, n = {}) {
    return We.create(t, {
      ...n,
      overrideConfig: r
    });
  }
  /**
   * Quick header creation methods
   */
  static modal(t, r, n = {}) {
    return We.create("modal", {
      title: t,
      actions: [{ type: "close", handler: r }],
      ...n
    });
  }
  static browse(t, r, n = {}) {
    return We.create("browse", {
      title: t,
      actions: [{ type: "back", handler: r }],
      ...n
    });
  }
  static browseWithTabs(t, r, n, a, i, o = {}) {
    return We.create("browse-tabbed", {
      title: t,
      tabs: r,
      currentTab: n,
      onTabChange: a,
      actions: [{ type: "back", handler: i }],
      ...o
    });
  }
  static page(t, r = {}) {
    return We.create("page", {
      title: t,
      ...r
    });
  }
  static dashboard(t, r = [], n = {}) {
    return We.create("dashboard", {
      title: t,
      rightActions: r,
      ...n
    });
  }
}
const ere = We, tre = {
  // Modal headers
  MODAL_WITH_CLOSE: (e, t) => We.modal(e, t),
  MODAL_CLOSE_ONLY: (e) => We.create("modal-close-only", {
    actions: [{ type: "close", handler: e }]
  }),
  // Browse headers
  BROWSE_SIMPLE: (e, t) => We.browse(e, t),
  BROWSE_WITH_TABS: (e, t, r, n, a) => We.browseWithTabs(
    e,
    t,
    r,
    n,
    a
  ),
  // Page headers
  PAGE_TITLE: (e) => We.page(e),
  PAGE_WITH_BACK: (e, t) => We.create("page-with-nav", {
    title: e,
    leftActions: [{ type: "back", handler: t }]
  }),
  // Dashboard headers
  DASHBOARD_BASIC: (e) => We.dashboard(e),
  DASHBOARD_WITH_MENU: (e, t) => We.dashboard(e, [
    { type: "menu", handler: t, label: "Menu" }
  ]),
  // Settings headers
  SETTINGS: (e, t) => We.create("settings-header", {
    title: e,
    leftActions: [{ type: "back", handler: t }]
  }),
  SETTINGS_WITH_TABS: (e, t, r, n, a) => We.create("settings-header", {
    title: e,
    tabs: t,
    currentTab: r,
    onTabChange: n,
    leftActions: [{ type: "back", handler: a }]
  }),
  // Game headers
  GAME: (e, t = [], r = []) => We.create("game-header", {
    title: e,
    leftActions: t,
    rightActions: r
  }),
  // Profile headers
  PROFILE: (e, t = []) => We.create("profile-header", {
    title: e,
    rightActions: t
  })
}, rre = We.create, kS = "_baseCard_ksxev_19", NS = "_cardHover_ksxev_85", MS = "_cardClickable_ksxev_90", IS = "_friendCardHeader_ksxev_109", DS = "_friendStatusDot_ksxev_116", RS = "_friendUsername_ksxev_139", BS = "_friendCardActions_ksxev_144", LS = "_notificationHeader_ksxev_174", zS = "_notificationIcon_ksxev_181", FS = "_loading_ksxev_1", WS = "_fadeInUp_ksxev_1", Be = {
  baseCard: kS,
  "card-default": "_card-default_ksxev_33",
  "card-elevated": "_card-elevated_ksxev_39",
  "card-outlined": "_card-outlined_ksxev_45",
  "card-filled": "_card-filled_ksxev_51",
  "card-small": "_card-small_ksxev_57",
  "card-medium": "_card-medium_ksxev_61",
  "card-large": "_card-large_ksxev_65",
  "card-padding-none": "_card-padding-none_ksxev_69",
  "card-padding-small": "_card-padding-small_ksxev_73",
  "card-padding-medium": "_card-padding-medium_ksxev_77",
  "card-padding-large": "_card-padding-large_ksxev_81",
  cardHover: NS,
  cardClickable: MS,
  "friend-card": "_friend-card_ksxev_102",
  friendCardHeader: IS,
  friendStatusDot: DS,
  "status-inmatch": "_status-inmatch_ksxev_123",
  "status-idle": "_status-idle_ksxev_127",
  "status-online": "_status-online_ksxev_131",
  "status-offline": "_status-offline_ksxev_135",
  friendUsername: RS,
  friendCardActions: BS,
  "game-card": "_game-card_ksxev_150",
  "profile-card": "_profile-card_ksxev_154",
  "notification-card": "_notification-card_ksxev_161",
  "notification-warning": "_notification-warning_ksxev_164",
  "notification-error": "_notification-error_ksxev_167",
  "notification-success": "_notification-success_ksxev_170",
  notificationHeader: LS,
  notificationIcon: zS,
  "notification-info": "_notification-info_ksxev_186",
  "stats-card": "_stats-card_ksxev_202",
  "card-title": "_card-title_ksxev_206",
  loading: FS,
  fadeInUp: WS
}, Dg = {
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
    className: Be["friend-card"]
  },
  game: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable",
    className: Be["game-card"]
  },
  profile: {
    variant: "elevated",
    size: "large",
    padding: "large",
    hover: !0,
    behavior: "hoverable",
    className: Be["profile-card"]
  },
  notification: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static",
    className: Be["notification-card"]
  },
  stats: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "hoverable",
    className: Be["stats-card"]
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
}, fn = (e, t) => ({
  ...Dg[e],
  ...t
}), nre = {
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
}, are = {
  infoCard: () => fn("default", {
    padding: "large",
    hover: !0
  }),
  actionCard: () => fn("elevated", {
    clickable: !0,
    hover: !0
  }),
  contentCard: () => fn("outlined", {
    padding: "large"
  }),
  headerCard: () => fn("filled", {
    padding: "medium",
    size: "large"
  }),
  compactCard: () => fn("default", {
    size: "small",
    padding: "small"
  }),
  interactiveCard: () => fn("elevated", {
    clickable: !0,
    hover: !0,
    behavior: "interactive"
  }),
  displayCard: () => fn("default", {
    behavior: "static",
    padding: "medium"
  })
}, Rg = ve(
  ({
    kind: e,
    children: t,
    title: r,
    subtitle: n,
    content: a,
    actions: i,
    friend: o,
    onChallenge: s,
    onMessage: c,
    onRemove: l,
    unreadCount: u = 0,
    notificationType: f = "info",
    statValue: d,
    statLabel: h,
    className: y = "",
    onClick: m,
    overrideConfig: p = {},
    customClassName: b = "",
    ...w
  }, x) => {
    const [O, g] = He(!1), _ = {
      ...Dg[e],
      ...p
    }, S = [
      Be.baseCard,
      Be[`card-${_.variant}`],
      Be[`card-${_.size}`],
      Be[`card-padding-${_.padding}`],
      _.hover && Be.cardHover,
      _.clickable && Be.cardClickable,
      y,
      _.className,
      b,
      // Notification type styling
      e === "notification" && `notification-${f}`
    ].filter(Boolean).join(" "), P = (C) => {
      (_.clickable || _.behavior === "clickable") && (m == null || m(C));
    }, j = () => {
      if (!o) return null;
      const C = (B) => B.online && B.inMatch ? { text: "In match", color: "#a259f7" } : B.online && B.idle ? { text: "Idle", color: "#fbbf24" } : B.online ? { text: "Online", color: "#22c55e" } : { text: "Offline", color: "#64748b" }, D = {
        "In match": "status-inmatch",
        Idle: "status-idle",
        Online: "status-online",
        Offline: "status-offline"
      }, N = C(o), M = D[N.text] || "status-offline";
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsxs("div", { className: Be.friendCardHeader, children: [
          /* @__PURE__ */ v.jsx(
            "span",
            {
              className: `${Be.friendStatusDot} ${Be[M]}`
            }
          ),
          /* @__PURE__ */ v.jsx("span", { className: Be.friendUsername, children: o.username })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: Be.friendCardActions, children: [
          s && /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: () => s(o.id),
              children: "Challenge"
            }
          ),
          c && /* @__PURE__ */ v.jsxs("button", { onClick: () => c(o.id), children: [
            "Message",
            u > 0 ? ` (${u})` : ""
          ] }),
          l && /* @__PURE__ */ v.jsx("button", { onClick: () => l(o.id), children: "Remove" })
        ] })
      ] });
    }, E = () => e !== "stats" ? null : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      d && /* @__PURE__ */ v.jsx(
        "div",
        {
          className: "stat-value",
          style: {
            fontSize: "2rem",
            fontWeight: "bold"
          },
          children: d
        }
      ),
      h && /* @__PURE__ */ v.jsx(
        "div",
        {
          className: "stat-label",
          style: { fontSize: "0.875rem", opacity: 0.8 },
          children: h
        }
      )
    ] }), $ = () => {
      if (e !== "notification") return null;
      const C = () => {
        switch (f) {
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
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: `${Be.notificationHeader} notification-${f}`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: Be.notificationIcon, children: C() }),
              r && /* @__PURE__ */ v.jsx("h3", { className: "card-title", children: r })
            ]
          }
        ),
        n && /* @__PURE__ */ v.jsx("p", { className: "card-subtitle", children: n }),
        a && /* @__PURE__ */ v.jsx("div", { className: "card-content", children: a }),
        t,
        i && /* @__PURE__ */ v.jsx("div", { className: "card-actions", children: i })
      ] });
    }, k = () => e === "friend" ? j() : e === "stats" ? E() : e === "notification" ? $() : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      r && /* @__PURE__ */ v.jsx("h3", { className: "card-title", children: r }),
      n && /* @__PURE__ */ v.jsx("p", { className: "card-subtitle", children: n }),
      a && /* @__PURE__ */ v.jsx("div", { className: "card-content", children: a }),
      t,
      i && /* @__PURE__ */ v.jsx("div", { className: "card-actions", children: i })
    ] });
    return /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: x,
        className: S,
        onClick: P,
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        ...w,
        children: k()
      }
    );
  }
);
Rg.displayName = "UnifiedCard";
const US = ve(
  ({
    children: e,
    className: t = "",
    variant: r = "default",
    size: n = "medium",
    padding: a = "medium",
    hover: i = !1,
    clickable: o = !1,
    onClick: s,
    style: c,
    ...l
  }, u) => {
    const f = [
      Be.baseCard,
      Be[`card-${r}`],
      Be[`card-${n}`],
      Be[`card-padding-${a}`],
      i && Be.cardHover,
      o && Be.cardClickable,
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: u,
        className: f,
        onClick: o ? s : void 0,
        style: c,
        ...l,
        children: e
      }
    );
  }
);
US.displayName = "Card";
const mt = ({
  kind: e,
  ...t
}) => /* @__PURE__ */ v.jsx(Rg, { kind: e, ...t });
mt.displayName = "CardFactory";
const ire = mt, ore = {
  // User interface presets
  FriendCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "friend", ...e }),
  ProfileCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "profile", ...e }),
  NotificationCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "notification", ...e }),
  StatsCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "stats", ...e }),
  // Game interface presets
  GameCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "game", ...e }),
  PuzzleCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "puzzle", ...e }),
  RoomCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "room-info", ...e }),
  MatchCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "match-summary", ...e }),
  // Layout presets
  InfoCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "default", hover: !0, ...e }),
  ActionCard: (e) => /* @__PURE__ */ v.jsx(
    mt,
    {
      kind: "elevated",
      clickable: !0,
      hover: !0,
      ...e
    }
  ),
  ContentCard: (e) => /* @__PURE__ */ v.jsx(mt, { kind: "outlined", ...e })
}, Bt = class Bt {
  /**
   * Create a card with specific configuration
   */
  static create(t, r = {}) {
    return /* @__PURE__ */ v.jsx(mt, { kind: t, ...r });
  }
  /**
   * Create a card with custom configuration override
   */
  static createWithConfig(t, r, n = {}) {
    return /* @__PURE__ */ v.jsx(
      mt,
      {
        kind: t,
        overrideConfig: r,
        ...n
      }
    );
  }
};
Bt.friend = (t) => Bt.create("friend", t), Bt.game = (t) => Bt.create("game", t), Bt.profile = (t) => Bt.create("profile", t), Bt.notification = (t) => Bt.create("notification", t), Bt.stats = (t) => Bt.create("stats", t);
let sr = Bt;
const sre = {
  // Ultra-short aliases
  f: sr.friend,
  g: sr.game,
  p: sr.profile,
  n: sr.notification,
  s: sr.stats,
  // Common patterns
  info: (e) => sr.create("default", {
    hover: !0,
    ...e
  }),
  action: (e) => sr.create("elevated", {
    clickable: !0,
    hover: !0,
    ...e
  }),
  display: (e) => sr.create("outlined", e)
}, Gf = {
  basic: {
    variant: "basic",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !0,
      preview: !1,
      locked: !1,
      multiSelect: !0,
      vsMode: !1
    }
  },
  game: {
    variant: "game",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !0,
      preview: !1,
      locked: !1,
      multiSelect: !0,
      vsMode: !1
    },
    className: "game-grid"
  },
  preview: {
    variant: "preview",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !1,
      preview: !0,
      locked: !1,
      multiSelect: !1,
      vsMode: !1
    },
    className: "preview-grid"
  },
  locked: {
    variant: "locked",
    layout: {
      rows: 4,
      cols: 4,
      gap: 8,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#f8fafc",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !1,
      preview: !1,
      locked: !0,
      multiSelect: !1,
      vsMode: !1
    },
    className: "locked-grid",
    cellClassName: "locked-cell"
  },
  "vs-grid": {
    variant: "game",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !0,
      preview: !1,
      locked: !1,
      multiSelect: !0,
      vsMode: !0
    },
    className: "vs-grid",
    overlayComponents: ["opponent-overlay", "solved-badge"]
  },
  "pregame-lockout": {
    variant: "locked",
    layout: {
      rows: 4,
      cols: 4,
      gap: 8,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#f8fafc",
      borderRadius: 12,
      boxShadow: "0 2px 8px 0 #e2e8f040",
      padding: 8
    },
    behavior: {
      interactive: !1,
      preview: !0,
      locked: !0,
      multiSelect: !1,
      vsMode: !1
    },
    className: "pregame-lockout",
    cellClassName: "pregame-cell-lockout",
    overlayComponents: ["lockout-overlay"]
  },
  "solved-groups": {
    variant: "solved",
    layout: {
      rows: 1,
      cols: 1,
      gap: 18,
      maxWidth: 600
    },
    styling: {
      background: "transparent",
      borderRadius: 0,
      padding: 0
    },
    behavior: {
      interactive: !1,
      preview: !1,
      locked: !1,
      multiSelect: !1,
      vsMode: !1
    },
    className: "solved-groups-display"
  },
  "word-grid": {
    variant: "game",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12,
      maxWidth: 480,
      minHeight: 320
    },
    styling: {
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 16px 0 #e3eaff33",
      padding: 12
    },
    behavior: {
      interactive: !0,
      preview: !1,
      locked: !1,
      multiSelect: !0,
      vsMode: !1
    },
    className: "word-grid"
  },
  custom: {
    variant: "custom",
    layout: {
      rows: 4,
      cols: 4,
      gap: 12
    },
    styling: {},
    behavior: {
      interactive: !0
    },
    className: "custom-grid"
  }
}, cre = {
  BASIC: [
    "basic",
    "game",
    "preview",
    "locked"
  ],
  VS_MODE: ["vs-grid"],
  SPECIAL: [
    "pregame-lockout",
    "solved-groups",
    "word-grid"
  ],
  CUSTOM: ["custom"]
}, Mo = {
  STANDARD_GAME: {
    kind: "game",
    layout: { rows: 4, cols: 4 },
    words: [],
    selected: [],
    locked: []
  },
  VS_MATCH: {
    kind: "vs-grid",
    layout: { rows: 4, cols: 4 },
    words: [],
    selected: [],
    locked: [],
    opponentSelected: [],
    vsMode: !0
  },
  PREVIEW_GRID: {
    kind: "preview",
    layout: { rows: 4, cols: 4 },
    words: [],
    preview: !0,
    interactive: !1
  },
  LOCKED_PREGAME: {
    kind: "pregame-lockout",
    layout: { rows: 4, cols: 4 },
    words: [],
    locked: !0,
    interactive: !1
  }
}, HS = (e, t = {}) => {
  const r = Gf[e];
  return {
    ...r,
    ...t,
    layout: { ...r.layout, ...t.layout },
    styling: {
      ...r.styling,
      ...t.styling
    },
    behavior: {
      ...r.behavior,
      ...t.behavior
    }
  };
}, lre = (e) => !!(e.variant && e.layout && e.layout.rows > 0 && e.layout.cols > 0), GS = "_unifiedGrid_1er7b_19", KS = "_interactive_1er7b_29", qS = "_preview_1er7b_32", VS = "_locked_1er7b_35", YS = "_selected_1er7b_138", XS = "_wildcard_1er7b_150", ZS = "_opponent_1er7b_154", QS = "_vsGhostOverlay_1er7b_191", JS = "_vsSolvedBadge_1er7b_204", eA = "_boardContainer_1er7b_243", tA = "_solvedGroupsContainer_1er7b_243", rA = "_visuallyHidden_1er7b_252", nA = "_solvedCategories_1er7b_260", aA = "_solvedCategoriesContainer_1er7b_260", iA = "_categoryGroup_1er7b_269", oA = "_solvedCategory_1er7b_269", sA = "_fadeIn_1er7b_1", cA = "_cardItem_1er7b_281", lA = "_cardListItem_1er7b_281", uA = "_categoryTitle_1er7b_318", fA = "_categoryTitleText_1er7b_344", dA = "_playerPill_1er7b_351", hA = "_textFadeIn_1er7b_404", pA = "_player_1er7b_230", mA = "_bot_1er7b_85", vA = "_username_1er7b_374", yA = "_cardList_1er7b_281", gA = "_loading_1er7b_1", bA = "_fadeInUp_1er7b_1", _A = "_slideIn_1er7b_1", pe = {
  unifiedGrid: GS,
  interactive: KS,
  preview: qS,
  locked: VS,
  "grid-basic": "_grid-basic_1er7b_41",
  "grid-preview": "_grid-preview_1er7b_41",
  "grid-game": "_grid-game_1er7b_41",
  "word-grid": "_word-grid_1er7b_41",
  "vs-grid": "_vs-grid_1er7b_41",
  "grid-cell": "_grid-cell_1er7b_53",
  "grid-locked": "_grid-locked_1er7b_62",
  "grid-solved": "_grid-solved_1er7b_72",
  "solved-groups-display": "_solved-groups-display_1er7b_72",
  "bot-mode": "_bot-mode_1er7b_85",
  "multiplayer-mode": "_multiplayer-mode_1er7b_101",
  "custom-grid": "_custom-grid_1er7b_118",
  selected: YS,
  wildcard: XS,
  opponent: ZS,
  "solved-by-player": "_solved-by-player_1er7b_158",
  "solved-by-opponent": "_solved-by-opponent_1er7b_162",
  "pregame-cell-lockout": "_pregame-cell-lockout_1er7b_167",
  vsGhostOverlay: QS,
  vsSolvedBadge: JS,
  "bot-indicator": "_bot-indicator_1er7b_217",
  "player-indicator": "_player-indicator_1er7b_230",
  boardContainer: eA,
  solvedGroupsContainer: tA,
  visuallyHidden: rA,
  solvedCategories: nA,
  solvedCategoriesContainer: aA,
  categoryGroup: iA,
  "solved-group": "_solved-group_1er7b_72",
  solvedCategory: oA,
  fadeIn: sA,
  cardItem: cA,
  "solved-word": "_solved-word_1er7b_281",
  cardListItem: lA,
  categoryTitle: uA,
  "solved-label": "_solved-label_1er7b_318",
  categoryTitleText: fA,
  playerPill: dA,
  textFadeIn: hA,
  player: pA,
  bot: mA,
  username: vA,
  "username-alt": "_username-alt_1er7b_379",
  cardList: yA,
  "solved-words": "_solved-words_1er7b_385",
  loading: gA,
  fadeInUp: bA,
  slideIn: _A
}, Et = A.forwardRef(
  ({
    kind: e,
    configuration: t,
    words: r = [],
    selected: n = [],
    locked: a = [],
    wildcards: i = [],
    onSelect: o,
    opponentSelected: s = [],
    playerColor: c = "#2563eb",
    opponentColor: l = "#ef4444",
    solvedBy: u = {},
    playerId: f,
    opponentId: d,
    gridSize: h,
    preview: y = !1,
    pendingSolvedGroups: m = [],
    activePuzzle: p,
    botDifficulty: b,
    solvedGroups: w = [],
    activeGroup: x = [],
    isLocked: O = !1,
    className: g = "",
    cellClassName: _ = "",
    ...S
  }, P) => {
    const j = {
      ...Gf[e],
      ...t
    }, E = h ? { ...j.layout, ...h } : j.layout, $ = !y && !O && j.behavior.interactive, k = y || j.behavior.preview, C = O || j.behavior.locked, D = j.behavior.vsMode;
    let N = "";
    D && e === "vs-grid" && (b && !d ? N = pe["bot-mode"] : d && f !== d && (N = pe["multiplayer-mode"]));
    const M = [
      pe.unifiedGrid,
      pe[`grid-${j.variant}`],
      j.className ? pe[j.className] : "",
      N,
      $ ? pe.interactive : "",
      k ? pe.preview : "",
      C ? pe.locked : "",
      g
    ].filter(Boolean).join(" "), B = {
      display: "grid",
      gridTemplateColumns: `repeat(${E.cols}, 1fr)`,
      gridTemplateRows: `repeat(${E.rows}, 1fr)`,
      gap: E.gap,
      maxWidth: E.maxWidth,
      minHeight: E.minHeight,
      ...j.styling
    };
    return e === "solved-groups" ? xA(
      m,
      p,
      M,
      S,
      P
    ) : e === "pregame-lockout" ? wA(
      r,
      E,
      M,
      S,
      P
    ) : /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: P,
        className: M,
        style: B,
        ...S,
        children: r.map((W, H) => {
          var J;
          const T = n.includes(W), R = a.includes(W), L = i.includes(W), z = s.includes(W);
          let q = null;
          for (const ee in u)
            (J = u[ee]) != null && J.includes(W) && (q = ee);
          const Y = [
            pe.gridCell,
            j.cellClassName ? pe[j.cellClassName] : "",
            $ ? pe.interactive : "",
            T ? pe.selected : "",
            R ? pe.locked : "",
            L ? pe.wildcard : "",
            z ? pe.opponent : "",
            q === f ? pe.solvedByPlayer : "",
            q === d ? pe.solvedByOpponent : "",
            _
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ v.jsxs(
            "div",
            {
              style: { position: "relative" },
              children: [
                /* @__PURE__ */ v.jsx(
                  ze,
                  {
                    kind: "word",
                    word: W,
                    isSelected: T,
                    isLocked: R,
                    onClick: $ ? () => o == null ? void 0 : o(W) : void 0,
                    className: Y,
                    style: k ? {
                      background: "rgb(253.8571428571, 240.7142857143, 188.1428571429)",
                      color: "#1e293b",
                      borderColor: "#fde047",
                      boxShadow: "0 0 0 3px rgba(253, 224, 71, 0.3333333333), 0 4px 16px 0 rgba(56, 189, 248, 0.3333333333)",
                      transform: "translateY(-2px) scale(1.03)",
                      zIndex: 2
                    } : void 0,
                    tabIndex: $ ? 0 : -1
                  }
                ),
                OA(
                  D || !1,
                  z,
                  q,
                  f,
                  d,
                  c,
                  l,
                  b,
                  k
                )
              ]
            },
            W
          );
        })
      }
    );
  }
), xA = (e, t, r, n, a) => {
  var o;
  if (!e.length) return null;
  (o = t == null ? void 0 : t.groupLabels) != null && o.length;
  const i = e.length;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      ref: a,
      className: `${pe.boardContainer} ${r}`,
      ...n,
      children: [
        /* @__PURE__ */ v.jsxs("p", { className: pe.visuallyHidden, children: [
          i,
          " categories solved"
        ] }),
        /* @__PURE__ */ v.jsx("ol", { className: pe.solvedCategories, children: e.filter(
          (s, c, l) => l.findIndex(
            (u) => u.groupIdx === s.groupIdx
          ) === c
        ).sort((s, c) => s.groupIdx - c.groupIdx).map(({ groupIdx: s, words: c }) => {
          var p;
          const l = ((p = t == null ? void 0 : t.groupLabels) == null ? void 0 : p[s]) || `Group ${s + 1}`, u = Array.isArray(c) ? c : [], f = (b) => {
            const w = b.match(
              /^(.+?)\s*\((.+?)\)$/
            );
            if (w) {
              const x = w[1].trim(), O = w[2].trim();
              return { categoryName: x, indicator: O };
            }
            return {
              categoryName: b,
              indicator: null
            };
          }, { categoryName: d, indicator: h } = f(l), m = ((b) => {
            if (!b) return null;
            if (b.toLowerCase() === "bot")
              return { text: "BOT", className: "bot" };
            if (b.toLowerCase() === "player")
              return {
                text: "PLAYER",
                className: "player"
              };
            {
              const w = s % 2 === 1;
              return {
                text: b,
                className: w ? "username-alt" : "username"
              };
            }
          })(h);
          return /* @__PURE__ */ v.jsxs(
            "li",
            {
              className: pe.categoryGroup,
              "data-level": s,
              children: [
                /* @__PURE__ */ v.jsxs(
                  "div",
                  {
                    className: `${pe.categoryTitle} ${pe.textFadeIn}`,
                    children: [
                      /* @__PURE__ */ v.jsx(
                        "span",
                        {
                          className: pe.categoryTitleText,
                          children: d
                        }
                      ),
                      m && /* @__PURE__ */ v.jsx(
                        "span",
                        {
                          className: `${pe.playerPill} ${pe[m.className]}`,
                          children: m.text
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ v.jsx("ol", { className: pe.cardList, children: u.map((b) => /* @__PURE__ */ v.jsx(
                  "li",
                  {
                    className: `${pe.cardItem} ${pe.textFadeIn}`,
                    children: b
                  },
                  b
                )) })
              ]
            },
            s
          );
        }) })
      ]
    }
  );
}, wA = (e, t, r, n, a) => {
  const i = {
    display: "grid",
    gridTemplateColumns: `repeat(${t.cols}, 1fr)`,
    gridTemplateRows: `repeat(${t.rows}, 1fr)`,
    gap: t.gap,
    maxWidth: t.maxWidth,
    minHeight: t.minHeight,
    background: "#f8fafc",
    borderRadius: 12,
    boxShadow: "0 2px 8px 0 #e2e8f040",
    padding: 8,
    alignItems: "center",
    justifyItems: "center"
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      ref: a,
      className: r,
      style: i,
      ...n,
      children: e.map((o, s) => /* @__PURE__ */ v.jsx(
        "div",
        {
          className: pe.pregameCellLockout,
          children: /* @__PURE__ */ v.jsx("span", { children: "×" })
        },
        s
      ))
    }
  );
}, OA = (e, t, r, n, a, i, o, s, c) => {
  if (c) return null;
  const l = [], u = !!s && !a;
  if (e && (!!a && n !== a) && t && !r && l.push(
    /* @__PURE__ */ v.jsx(
      "span",
      {
        className: pe.vsGhostOverlay,
        children: "Opponent"
      },
      "opponent"
    )
  ), e && r) {
    const d = r === n, h = d ? "You" : u ? "Bot" : "Opponent";
    l.push(
      /* @__PURE__ */ v.jsx(
        "span",
        {
          className: pe.vsSolvedBadge,
          style: {
            background: d ? i : o
          },
          children: h
        },
        "solved"
      )
    );
  }
  return l;
};
Et.displayName = "UnifiedGrid";
const ure = ({
  kind: e = "game",
  ...t
}) => /* @__PURE__ */ v.jsx(Et, { kind: e, ...t }), Bg = ({
  kind: e,
  overrideConfig: t,
  ...r
}) => {
  const n = t ? HS(e, t) : Gf[e];
  return /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: e,
      configuration: n,
      ...r
    }
  );
};
Bg.displayName = "GridFactory";
const fre = Bg, dre = {
  /**
   * Standard game grid
   */
  GameGrid: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      ...Mo.STANDARD_GAME,
      ...e,
      kind: "game"
    }
  ),
  /**
   * VS match grid
   */
  VSGrid: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      ...Mo.VS_MATCH,
      ...e,
      kind: "vs-grid"
    }
  ),
  /**
   * Preview grid
   */
  PreviewGrid: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      ...Mo.PREVIEW_GRID,
      ...e,
      kind: "preview"
    }
  ),
  /**
   * Locked pregame grid
   */
  LockedGrid: (e) => {
    const { locked: t, ...r } = Mo.LOCKED_PREGAME;
    return /* @__PURE__ */ v.jsx(
      Et,
      {
        ...r,
        ...e,
        kind: "pregame-lockout",
        isLocked: t
      }
    );
  }
}, hre = {
  /**
   * Basic game grid
   */
  Game: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "game",
      words: e.words,
      onSelect: e.onSelect,
      selected: e.selected || []
    }
  ),
  /**
   * VS mode grid
   */
  VS: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "vs-grid",
      words: e.words,
      selected: e.selected || [],
      opponentSelected: e.opponentSelected || [],
      onSelect: e.onSelect,
      playerId: e.playerId,
      opponentId: e.opponentId
    }
  ),
  /**
   * Bot game grid
   */
  Bot: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "vs-grid",
      words: e.words,
      selected: e.selected || [],
      onSelect: e.onSelect,
      botDifficulty: e.botDifficulty || "Medium",
      playerId: e.playerId
    }
  ),
  /**
   * Preview grid (non-interactive)
   */
  Preview: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "preview",
      words: e.words,
      preview: !0
    }
  ),
  /**
   * Solved groups display
   */
  SolvedGroups: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "solved-groups",
      pendingSolvedGroups: e.pendingSolvedGroups,
      activePuzzle: e.activePuzzle
    }
  ),
  /**
   * Pregame lockout grid
   */
  Lockout: (e) => /* @__PURE__ */ v.jsx(
    Et,
    {
      kind: "pregame-lockout",
      words: e.gridWords,
      gridSize: {
        rows: e.gridRows,
        cols: e.gridCols
      }
    }
  )
}, SA = "_banner_1p5em_19", AA = "_bannerCloseButton_1p5em_146", PA = "_vsStatusAvatar_1p5em_165", jA = "_vsStatusUsername_1p5em_170", TA = "_vsStatusGroups_1p5em_173", $A = "_vsStatusMistakes_1p5em_176", EA = "_vsStatusTimer_1p5em_179", CA = "_vsStatusEmoteBtn_1p5em_183", kA = "_bannerSlideIn_1p5em_1", NA = "_loading_1p5em_1", MA = "_fadeInUp_1p5em_1", ot = {
  banner: SA,
  "banner--fixed": "_banner--fixed_1p5em_35",
  "banner--relative": "_banner--relative_1p5em_40",
  "banner--center": "_banner--center_1p5em_44",
  "banner--top": "_banner--top_1p5em_49",
  "banner--bottom": "_banner--bottom_1p5em_55",
  "banner--feedback": "_banner--feedback_1p5em_61",
  "banner--notification": "_banner--notification_1p5em_76",
  "banner--toast": "_banner--toast_1p5em_81",
  "banner--status": "_banner--status_1p5em_87",
  "banner--global": "_banner--global_1p5em_98",
  "banner--burn": "_banner--burn_1p5em_106",
  "banner--achievement": "_banner--achievement_1p5em_111",
  "banner--system": "_banner--system_1p5em_116",
  "banner--taunt": "_banner--taunt_1p5em_121",
  "banner--success": "_banner--success_1p5em_126",
  "banner--error": "_banner--error_1p5em_131",
  "banner--info": "_banner--info_1p5em_136",
  "banner--warning": "_banner--warning_1p5em_141",
  bannerCloseButton: AA,
  vsStatusAvatar: PA,
  vsStatusUsername: jA,
  vsStatusGroups: TA,
  vsStatusMistakes: $A,
  vsStatusTimer: EA,
  vsStatusEmoteBtn: CA,
  "banner--hidden": "_banner--hidden_1p5em_191",
  bannerSlideIn: kA,
  loading: NA,
  fadeInUp: MA
}, Kf = ve(
  ({
    children: e,
    className: t = "",
    variant: r = "notification",
    type: n = "info",
    position: a = "relative",
    onClose: i,
    autoClose: o = !1,
    duration: s = 3200,
    "aria-live": c = "polite",
    ...l
  }, u) => {
    A.useEffect(() => {
      if (o && i && s) {
        const d = setTimeout(i, s);
        return () => clearTimeout(d);
      }
    }, [o, i, s]);
    const f = [
      ot.banner,
      ot[`banner--${r}`],
      ot[`banner--${n}`],
      ot[`banner--${a}`],
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        ref: u,
        className: f,
        "aria-live": c,
        ...l,
        children: [
          e,
          i && /* @__PURE__ */ v.jsx(
            "button",
            {
              className: ot.bannerCloseButton,
              onClick: i,
              type: "button",
              "aria-label": "Close banner",
              children: "×"
            }
          )
        ]
      }
    );
  }
);
Kf.displayName = "Banner";
const qf = ve(
  ({
    kind: e,
    configuration: t,
    message: r,
    icon: n = "🎉",
    player: a,
    opponent: i,
    timer: o,
    totalGroups: s = 4,
    showMistakes: c = !0,
    showTimer: l = !0,
    onEmoteClick: u,
    index: f,
    ...d
  }, h) => {
    switch (e) {
      case "feedback":
        return /* @__PURE__ */ v.jsx(
          "div",
          {
            ref: h,
            style: {
              width: "100%",
              textAlign: "center",
              color: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit"
            },
            ...d,
            children: r
          }
        );
      case "notification":
        return /* @__PURE__ */ v.jsx("div", { ref: h, ...d, children: r });
      case "toast":
        return /* @__PURE__ */ v.jsxs(
          "div",
          {
            ref: h,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            ...d,
            children: [
              n && /* @__PURE__ */ v.jsx("span", { children: n }),
              /* @__PURE__ */ v.jsx("span", { children: r })
            ]
          }
        );
      case "status":
        return /* @__PURE__ */ v.jsxs(
          "div",
          {
            ref: h,
            className: ot.vsStatusBar,
            ...d,
            children: [
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  },
                  children: [
                    (a == null ? void 0 : a.avatarUrl) && /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: a.avatarUrl,
                        alt: a.username,
                        className: ot.vsStatusAvatar
                      }
                    ),
                    /* @__PURE__ */ v.jsxs("span", { className: ot.vsStatusUsername, children: [
                      a == null ? void 0 : a.username,
                      (a == null ? void 0 : a.isYou) && " (You)"
                    ] }),
                    /* @__PURE__ */ v.jsxs("span", { className: ot.vsStatusGroups, children: [
                      (a == null ? void 0 : a.groupsSolved) || 0,
                      "/",
                      s
                    ] }),
                    c && /* @__PURE__ */ v.jsxs("span", { className: ot.vsStatusMistakes, children: [
                      (a == null ? void 0 : a.mistakes) || 0,
                      " mistakes"
                    ] })
                  ]
                }
              ),
              l && o && /* @__PURE__ */ v.jsx("div", { className: ot.vsStatusTimer, children: o }),
              i && /* @__PURE__ */ v.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                  },
                  children: [
                    c && /* @__PURE__ */ v.jsxs("span", { className: ot.vsStatusMistakes, children: [
                      i.mistakes,
                      " mistakes"
                    ] }),
                    /* @__PURE__ */ v.jsxs("span", { className: ot.vsStatusGroups, children: [
                      i.groupsSolved,
                      "/",
                      s
                    ] }),
                    /* @__PURE__ */ v.jsx("span", { className: ot.vsStatusUsername, children: i.username }),
                    i.avatarUrl && /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: i.avatarUrl,
                        alt: i.username,
                        className: ot.vsStatusAvatar
                      }
                    )
                  ]
                }
              ),
              u && /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: ot.vsStatusEmoteBtn,
                  onClick: u,
                  type: "button",
                  "aria-label": "Send emote",
                  children: "😀"
                }
              )
            ]
          }
        );
      case "global":
        return /* @__PURE__ */ v.jsx("div", { ref: h, ...d, children: r && /* @__PURE__ */ v.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [
              n && /* @__PURE__ */ v.jsx("span", { children: n }),
              /* @__PURE__ */ v.jsx("span", { children: r })
            ]
          }
        ) });
      default:
        return /* @__PURE__ */ v.jsx("div", { ref: h, ...d, children: r || "Banner content" });
    }
  }
);
qf.displayName = "BannerBodyFactory";
const IA = {
  kind: "feedback",
  variant: "feedback",
  type: "info",
  position: "center",
  autoClose: !1,
  showCloseButton: !1
}, xo = {
  kind: "notification",
  variant: "notification",
  type: "info",
  position: "fixed",
  autoClose: !0,
  duration: 2500,
  showCloseButton: !0
}, wo = {
  kind: "toast",
  variant: "toast",
  type: "achievement",
  position: "fixed",
  autoClose: !0,
  duration: 3200,
  showCloseButton: !0,
  icon: "🎉"
}, Lg = {
  kind: "status",
  variant: "status",
  type: "info",
  position: "relative",
  autoClose: !1,
  showCloseButton: !1
}, DA = {
  kind: "global",
  variant: "global",
  type: "achievement",
  position: "fixed",
  autoClose: !0,
  duration: 3200,
  showCloseButton: !0
}, RA = {
  ...xo,
  type: "burn",
  icon: "🔥"
}, BA = {
  ...xo,
  type: "achievement",
  icon: "🏆"
}, LA = {
  ...xo,
  type: "system",
  icon: "ℹ️"
}, zA = {
  ...xo,
  type: "taunt",
  icon: "😈"
}, FA = {
  ...wo,
  type: "success",
  icon: "✅"
}, WA = {
  ...wo,
  type: "error",
  icon: "❌",
  duration: 5e3
}, UA = {
  ...wo,
  type: "warning",
  icon: "⚠️",
  duration: 4e3
}, HA = {
  ...wo,
  type: "info",
  icon: "ℹ️"
}, GA = {
  ...Lg,
  showMistakes: !0,
  showTimer: !0
}, zg = {
  // Basic kinds
  feedback: IA,
  notification: xo,
  toast: wo,
  status: Lg,
  global: DA,
  // Notification types
  "burn-notification": RA,
  "achievement-notification": BA,
  "system-notification": LA,
  "taunt-notification": zA,
  // Toast types
  "success-toast": FA,
  "error-toast": WA,
  "warning-toast": UA,
  "info-toast": HA,
  // VS Game
  "vs-status": GA
}, Fg = ve(
  ({
    kind: e,
    message: t,
    onClose: r,
    className: n = "",
    configuration: a,
    ...i
  }, o) => {
    const s = zg[e];
    if (!s)
      return console.warn(`Unknown banner kind: ${e}`), null;
    const c = { ...s, ...a }, u = c.autoClose && r || c.showCloseButton ? r : void 0;
    return /* @__PURE__ */ v.jsx(
      Kf,
      {
        ref: o,
        variant: c.variant,
        type: i.type || c.type,
        position: c.position,
        onClose: u,
        autoClose: c.autoClose,
        duration: i.duration || c.duration,
        className: n,
        "aria-live": c.kind === "feedback" ? "polite" : "assertive",
        children: /* @__PURE__ */ v.jsx(
          qf,
          {
            kind: c.kind,
            configuration: c,
            message: t,
            icon: i.icon || c.icon,
            ...i
          }
        )
      }
    );
  }
);
Fg.displayName = "BannerFactory";
class KA {
  static create(t, r = {}) {
    return /* @__PURE__ */ v.jsx(Fg, { kind: t, ...r });
  }
  // Quick banner creation methods
  static feedback(t, r = {}) {
    return this.create("feedback", { message: t, ...r });
  }
  static notification(t, r = "system", n = {}) {
    return this.create(
      `${r}-notification`,
      { message: t, type: r, ...n }
    );
  }
  static toast(t, r = "success", n = {}) {
    return this.create(`${r}-toast`, {
      message: t,
      type: r,
      ...n
    });
  }
  static status(t, r = {}) {
    return this.create("vs-status", { player: t, ...r });
  }
  static global(t, r = {}) {
    return this.create("global", { message: t, ...r });
  }
}
const Mt = KA, pre = {
  // Feedback banners
  gameComplete: (e) => Mt.feedback(e),
  gameFeedback: (e) => Mt.feedback(e),
  // Notifications
  burnPlayer: (e) => Mt.notification(e, "burn"),
  achievement: (e) => Mt.notification(e, "achievement"),
  systemAlert: (e) => Mt.notification(e, "system"),
  taunt: (e) => Mt.notification(e, "taunt"),
  // Toasts
  success: (e) => Mt.toast(e, "success"),
  error: (e) => Mt.toast(e, "error"),
  warning: (e) => Mt.toast(e, "warning"),
  info: (e) => Mt.toast(e, "info"),
  // VS Game
  vsStatus: (e, t, r) => Mt.status(e, { opponent: t, timer: r }),
  // Global toasts
  globalToast: (e) => Mt.global(e)
}, qA = ve(
  ({ kind: e, message: t, className: r = "", onClose: n, ...a }, i) => {
    const o = zg[e];
    if (!o)
      return console.warn(`Unknown banner kind: ${e}`), null;
    const c = o.autoClose && n || o.showCloseButton ? n : void 0;
    return /* @__PURE__ */ v.jsx(
      Kf,
      {
        ref: i,
        variant: o.variant,
        type: a.type || o.type,
        position: o.position,
        onClose: c,
        autoClose: o.autoClose,
        duration: a.duration || o.duration,
        className: r,
        "aria-live": o.kind === "feedback" ? "polite" : "assertive",
        children: /* @__PURE__ */ v.jsx(
          qf,
          {
            kind: o.kind,
            configuration: o,
            message: t,
            icon: a.icon || o.icon,
            ...a
          }
        )
      }
    );
  }
);
qA.displayName = "UnifiedBanner";
const VA = "_page_1w1he_19", YA = "_pageHeader_1w1he_125", XA = "_defaultHeader_1w1he_135", ZA = "_backButton_1w1he_141", QA = "_headerTitle_1w1he_170", JA = "_pageNavigation_1w1he_177", eP = "_defaultNavigation_1w1he_183", tP = "_pageMain_1w1he_189", rP = "_pageContent_1w1he_194", nP = "_pageTitle_1w1he_198", aP = "_pageSubtitle_1w1he_205", iP = "_pageFooter_1w1he_211", oP = "_defaultFooter_1w1he_217", sP = "_footerButton_1w1he_223", cP = "_footerButtonPrimary_1w1he_252", lP = "_startupPageContent_1w1he_286", uP = "_startupTitle_1w1he_296", fP = "_startupSubtitle_1w1he_303", dP = "_startupActions_1w1he_309", hP = "_startupButton_1w1he_316", pP = "_loading_1w1he_1", mP = "_fadeInUp_1w1he_1", Ae = {
  page: VA,
  "page-default": "_page-default_1w1he_28",
  "page-centered": "_page-centered_1w1he_32",
  "page-full-height": "_page-full-height_1w1he_39",
  "page-dashboard": "_page-dashboard_1w1he_43",
  "page-landing": "_page-landing_1w1he_47",
  "page-custom": "_page-custom_1w1he_51",
  "page-layout-standard": "_page-layout-standard_1w1he_55",
  "page-layout-centered": "_page-layout-centered_1w1he_61",
  "page-layout-sidebar": "_page-layout-sidebar_1w1he_69",
  "page-layout-split": "_page-layout-split_1w1he_80",
  "page-layout-grid": "_page-layout-grid_1w1he_91",
  "page-layout-custom": "_page-layout-custom_1w1he_97",
  "page-size-compact": "_page-size-compact_1w1he_101",
  "page-size-medium": "_page-size-medium_1w1he_106",
  "page-size-large": "_page-size-large_1w1he_111",
  "page-size-full": "_page-size-full_1w1he_116",
  "page-size-custom": "_page-size-custom_1w1he_121",
  pageHeader: YA,
  defaultHeader: XA,
  backButton: ZA,
  headerTitle: QA,
  pageNavigation: JA,
  defaultNavigation: eP,
  pageMain: tP,
  pageContent: rP,
  pageTitle: nP,
  pageSubtitle: aP,
  pageFooter: iP,
  defaultFooter: oP,
  footerButton: sP,
  footerButtonPrimary: cP,
  startupPageContent: lP,
  startupTitle: uP,
  startupSubtitle: fP,
  startupActions: dP,
  startupButton: hP,
  loading: pP,
  fadeInUp: mP
}, es = {
  startup: {
    kind: "startup",
    variant: "landing",
    layout: "centered",
    size: "full",
    showHeader: !1,
    showFooter: !1,
    showNavigation: !1,
    centered: !0,
    fullHeight: !0,
    padding: "32px",
    background: "default",
    containerMaxWidth: "100%"
  },
  landing: {
    kind: "landing",
    variant: "landing",
    layout: "centered",
    size: "large",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !1,
    centered: !0,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "1200px"
  },
  dashboard: {
    kind: "dashboard",
    variant: "dashboard",
    layout: "grid",
    size: "full",
    showHeader: !0,
    showFooter: !1,
    showNavigation: !0,
    centered: !1,
    fullHeight: !0,
    padding: "16px",
    background: "light",
    containerMaxWidth: "100%"
  },
  settings: {
    kind: "settings",
    variant: "default",
    layout: "standard",
    size: "medium",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !0,
    centered: !1,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "800px"
  },
  profile: {
    kind: "profile",
    variant: "default",
    layout: "standard",
    size: "medium",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !0,
    centered: !1,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "600px"
  },
  game: {
    kind: "game",
    variant: "full-height",
    layout: "centered",
    size: "full",
    showHeader: !1,
    showFooter: !1,
    showNavigation: !1,
    centered: !0,
    fullHeight: !0,
    padding: "16px",
    background: "game",
    containerMaxWidth: "100%"
  },
  browse: {
    kind: "browse",
    variant: "default",
    layout: "standard",
    size: "large",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !0,
    centered: !1,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "1200px"
  },
  results: {
    kind: "results",
    variant: "centered",
    layout: "centered",
    size: "medium",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !1,
    centered: !0,
    fullHeight: !1,
    padding: "32px",
    background: "light",
    containerMaxWidth: "800px"
  },
  about: {
    kind: "about",
    variant: "default",
    layout: "standard",
    size: "medium",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !0,
    centered: !1,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "800px"
  },
  help: {
    kind: "help",
    variant: "default",
    layout: "standard",
    size: "medium",
    showHeader: !0,
    showFooter: !0,
    showNavigation: !0,
    centered: !1,
    fullHeight: !1,
    padding: "24px",
    background: "default",
    containerMaxWidth: "800px"
  },
  custom: {
    kind: "custom",
    variant: "custom",
    layout: "custom",
    size: "custom",
    showHeader: !1,
    showFooter: !1,
    showNavigation: !1,
    centered: !1,
    fullHeight: !1,
    padding: "0",
    background: "transparent",
    containerMaxWidth: "none"
  }
}, ts = (e) => es[e] || es.custom, vP = (e, t) => ({
  ...ts(e),
  ...t
}), Vf = ({
  kind: e,
  configuration: t = {},
  children: r,
  className: n = "",
  title: a,
  subtitle: i,
  headerContent: o,
  footerContent: s,
  navigationContent: c,
  // Startup page props
  onStartDaily: l,
  onStartCustom: u,
  onBrowseCustom: f,
  onShare: d,
  // Common actions
  onBack: h,
  onNext: y,
  onSave: m,
  onCancel: p,
  ...b
}) => {
  const x = {
    ...es[e] || es.custom,
    ...t
  }, O = [
    Ae.page,
    Ae[`page-${x.variant}`],
    Ae[`page-layout-${x.layout}`],
    Ae[`page-size-${x.size}`],
    x.centered && Ae["page-centered"],
    x.fullHeight && Ae["page-full-height"],
    x.className,
    n
  ].filter(Boolean).join(" "), g = {
    padding: x.padding,
    maxWidth: x.containerMaxWidth,
    background: x.background === "transparent" ? "transparent" : void 0,
    ...b.style
  }, _ = () => {
    switch (e) {
      case "startup":
        return /* @__PURE__ */ v.jsxs("div", { className: Ae.startupPageContent, children: [
          a && /* @__PURE__ */ v.jsx("h1", { className: Ae.startupTitle, children: a }),
          i && /* @__PURE__ */ v.jsx("p", { className: Ae.startupSubtitle, children: i }),
          /* @__PURE__ */ v.jsxs("div", { className: Ae.startupActions, children: [
            l && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: Ae.startupButton,
                onClick: l,
                children: "Start Daily"
              }
            ),
            u && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: Ae.startupButton,
                onClick: u,
                children: "Start Custom"
              }
            ),
            f && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: Ae.startupButton,
                onClick: f,
                children: "Browse Custom"
              }
            ),
            d && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: Ae.startupButton,
                onClick: d,
                children: "Share"
              }
            )
          ] }),
          r
        ] });
      default:
        return /* @__PURE__ */ v.jsxs("div", { className: Ae.pageContent, children: [
          a && /* @__PURE__ */ v.jsx("h1", { className: Ae.pageTitle, children: a }),
          i && /* @__PURE__ */ v.jsx("p", { className: Ae.pageSubtitle, children: i }),
          r
        ] });
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: O,
      style: g,
      ...b,
      children: [
        x.showHeader && /* @__PURE__ */ v.jsx("header", { className: Ae.pageHeader, children: o || /* @__PURE__ */ v.jsxs("div", { className: Ae.defaultHeader, children: [
          h && /* @__PURE__ */ v.jsx(
            "button",
            {
              className: Ae.backButton,
              onClick: h,
              children: "← Back"
            }
          ),
          a && /* @__PURE__ */ v.jsx("h1", { className: Ae.headerTitle, children: a })
        ] }) }),
        x.showNavigation && /* @__PURE__ */ v.jsx("nav", { className: Ae.pageNavigation, children: c || /* @__PURE__ */ v.jsx("div", { className: Ae.defaultNavigation }) }),
        /* @__PURE__ */ v.jsx("main", { className: Ae.pageMain, children: _() }),
        x.showFooter && /* @__PURE__ */ v.jsx("footer", { className: Ae.pageFooter, children: s || /* @__PURE__ */ v.jsxs("div", { className: Ae.defaultFooter, children: [
          p && /* @__PURE__ */ v.jsx(
            "button",
            {
              className: Ae.footerButton,
              onClick: p,
              children: "Cancel"
            }
          ),
          m && /* @__PURE__ */ v.jsx(
            "button",
            {
              className: Ae.footerButtonPrimary,
              onClick: m,
              children: "Save"
            }
          ),
          y && /* @__PURE__ */ v.jsx(
            "button",
            {
              className: Ae.footerButtonPrimary,
              onClick: y,
              children: "Next"
            }
          )
        ] }) })
      ]
    }
  );
};
Vf.displayName = "UnifiedPage";
const mre = ({
  kind: e = "custom",
  children: t,
  ...r
}) => /* @__PURE__ */ v.jsx(Vf, { kind: e, ...r, children: t }), wt = ({
  kind: e,
  configuration: t,
  ...r
}) => {
  const n = t ? { ...ts(e), ...t } : ts(e);
  return /* @__PURE__ */ v.jsx(
    Vf,
    {
      kind: e,
      configuration: n,
      ...r
    }
  );
};
wt.displayName = "PageFactory";
const vre = wt, yre = {
  // Startup page preset
  Startup: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "startup", ...e }),
  // Landing page preset
  Landing: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "landing", ...e }),
  // Dashboard page preset
  Dashboard: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "dashboard", ...e }),
  // Settings page preset
  Settings: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "settings", ...e }),
  // Profile page preset
  Profile: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "profile", ...e }),
  // Game page preset
  Game: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "game", ...e }),
  // Browse page preset
  Browse: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "browse", ...e }),
  // Results page preset
  Results: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "results", ...e }),
  // About page preset
  About: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "about", ...e }),
  // Help page preset
  Help: (e) => /* @__PURE__ */ v.jsx(wt, { kind: "help", ...e })
}, gre = (e, t, r) => {
  const n = r ? vP(e, r) : ts(e);
  return /* @__PURE__ */ v.jsx(
    wt,
    {
      kind: e,
      configuration: n,
      ...t
    }
  );
}, bre = ({
  onStartDaily: e,
  onStartCustom: t,
  onBrowseCustom: r,
  onShare: n,
  title: a = "Game Title",
  className: i
}) => /* @__PURE__ */ v.jsx(
  wt,
  {
    kind: "startup",
    title: a,
    onStartDaily: e,
    onStartCustom: t,
    onBrowseCustom: r,
    onShare: n,
    className: i
  }
), yP = "_footer_zaq6x_1", gP = "_footerLeft_zaq6x_25", bP = "_footerCenter_zaq6x_31", _P = "_footerRight_zaq6x_43", xP = "_footerNav_zaq6x_49", wP = "_footerLink_zaq6x_61", OP = "_footerDivider_zaq6x_82", gr = {
  footer: yP,
  footerLeft: gP,
  footerCenter: bP,
  footerRight: _P,
  footerNav: xP,
  footerLink: wP,
  footerDivider: OP
}, _re = ({
  leftContent: e,
  rightContent: t,
  centerContent: r,
  className: n = "",
  copyright: a,
  links: i = [],
  showDivider: o = !0
}) => {
  const s = a || `© ${(/* @__PURE__ */ new Date()).getFullYear()} UI Kit Modern`, c = i.length > 0 ? /* @__PURE__ */ v.jsx("nav", { className: gr.footerNav, children: i.map((l, u) => /* @__PURE__ */ v.jsxs(
    A.Fragment,
    {
      children: [
        l.onClick ? /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: l.onClick,
            className: gr.footerLink,
            type: "button",
            children: l.label
          }
        ) : l.href ? /* @__PURE__ */ v.jsx(
          "a",
          {
            href: l.href,
            className: gr.footerLink,
            target: l.href.startsWith("http") ? "_blank" : void 0,
            rel: l.href.startsWith("http") ? "noopener noreferrer" : void 0,
            children: l.label
          }
        ) : /* @__PURE__ */ v.jsx("span", { className: gr.footerLink, children: l.label }),
        u < i.length - 1 && /* @__PURE__ */ v.jsx("span", { className: gr.footerDivider, children: "•" })
      ]
    },
    l.href || l.label || u
  )) }) : null;
  return /* @__PURE__ */ v.jsxs(
    "footer",
    {
      className: `${gr.footer} ${n}`.trim(),
      children: [
        /* @__PURE__ */ v.jsx("div", { className: gr.footerLeft, children: e !== void 0 ? e : s }),
        r && /* @__PURE__ */ v.jsx("div", { className: gr.footerCenter, children: r }),
        /* @__PURE__ */ v.jsx("div", { className: gr.footerRight, children: t !== void 0 ? t : c })
      ]
    }
  );
}, xre = {
  player: "#2563eb",
  // blue
  enemy: "#ef4444",
  // red
  playerBg: "#e0e7ff",
  enemyBg: "#fee2e2",
  boardBg: "#fff",
  font: "#222",
  border: "#e0e7ef"
}, SP = [
  {
    name: "light",
    label: "Light",
    color: "#f8f5ec",
    // warm eggshell white
    bg: "#f8f5ec",
    font: "#222",
    swatchType: "solid",
    vsMode: {
      player: "#2563eb",
      enemy: "#ef4444",
      playerBg: "#e0e7ff",
      enemyBg: "#fee2e2",
      boardBg: "#fff",
      font: "#222",
      border: "#e0e7ef"
    }
  },
  {
    name: "dark",
    label: "Dark",
    color: "#181a1b",
    // almost black, deep gray
    bg: "#23272a",
    font: "#f8f5ec",
    swatchType: "solid",
    vsMode: {
      player: "#3b82f6",
      enemy: "#ef4444",
      playerBg: "#1e293b",
      enemyBg: "#3b1e1e",
      boardBg: "#23272a",
      font: "#f8f5ec",
      border: "#334155"
    }
  },
  {
    name: "oceanic",
    label: "Oceanic",
    color: "#174ea6",
    // deep blue
    bg: "#0a2540",
    font: "#a7f3f7",
    swatchType: "solid",
    vsMode: {
      player: "#3b82f6",
      enemy: "#ef4444",
      playerBg: "#1e293b",
      enemyBg: "#3b1e1e",
      boardBg: "#0a2540",
      font: "#a7f3f7",
      border: "#1e40af"
    }
  },
  {
    name: "sunset",
    label: "Sunset",
    color: "#ffb347",
    // fallback for border
    bg: "linear-gradient(135deg, #ffb347 0%, #ff5e62 100%)",
    // orange/yellow gradient
    font: "#fff",
    swatchType: "gradient",
    vsMode: {
      player: "#2563eb",
      enemy: "#ef4444",
      playerBg: "#e0e7ff",
      enemyBg: "#fee2e2",
      boardBg: "#fff",
      font: "#222",
      border: "#e0e7ef"
    }
  }
], wre = ({
  value: e,
  onChange: t,
  themes: r,
  className: n = ""
}) => {
  const [a, i] = A.useState(
    e || "light"
  );
  A.useEffect(() => {
    e !== void 0 && i(e);
  }, [e]), A.useEffect(() => {
    document.body.className = "", document.body.classList.add(`theme-${a}`), document.body.style.transition = "background 0.25s ease-in-out, color 0.25s";
  }, [a]);
  const o = (s) => {
    i(s), t && t(s);
  };
  return r ? /* @__PURE__ */ v.jsxs("div", { className: n, children: [
    /* @__PURE__ */ v.jsx("label", { style: { marginRight: "8px" }, children: "Theme:" }),
    /* @__PURE__ */ v.jsx(
      "select",
      {
        value: a,
        onChange: (s) => o(s.target.value),
        style: {
          padding: "4px 8px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        },
        children: r.map((s) => /* @__PURE__ */ v.jsx("option", { value: s, children: s }, s))
      }
    )
  ] }) : /* @__PURE__ */ v.jsx(
    "ul",
    {
      className: `theme-selector ${n}`,
      style: {
        display: "flex",
        gap: 18,
        justifyContent: "center",
        margin: "0",
        padding: "0",
        listStyle: "none"
      },
      children: SP.map(({ name: s, label: c, color: l, bg: u, font: f }) => /* @__PURE__ */ v.jsxs(
        "li",
        {
          onClick: () => o(s),
          style: {
            cursor: "pointer",
            width: 54,
            height: 54,
            borderRadius: 16,
            background: u,
            border: a === s ? `3px solid ${l}` : "2px solid #e0e7ef",
            boxShadow: a === s ? `0 0 16px 2px ${l}66` : "0 1px 4px 0 #e3eaff33",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "box-shadow 0.22s, border 0.22s, background 0.22s",
            position: "relative"
          },
          "aria-label": `Select ${c} theme`,
          children: [
            /* @__PURE__ */ v.jsx(
              "div",
              {
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: l,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: a === s ? `0 0 8px 2px ${l}99` : "none",
                  transition: "box-shadow 0.22s"
                },
                children: /* @__PURE__ */ v.jsx(
                  "span",
                  {
                    style: {
                      color: f,
                      fontWeight: 700,
                      fontSize: 13,
                      textShadow: "0 1px 4px #fff8"
                    },
                    children: c[0]
                  }
                )
              }
            ),
            a === s && /* @__PURE__ */ v.jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: 16,
                  boxShadow: `0 0 24px 6px ${l}55`,
                  pointerEvents: "none",
                  opacity: 0.7,
                  transition: "opacity 0.22s"
                }
              }
            )
          ]
        },
        s
      ))
    }
  );
}, AP = "_settings_19z38_19", PP = "_settingsHeader_19z38_88", jP = "_settingsCloseButton_19z38_103", TP = "_settingsContent_19z38_117", $P = "_settingsFooter_19z38_122", EP = "_settingsSection_19z38_131", CP = "_sectionTitle_19z38_138", kP = "_sectionDescription_19z38_145", NP = "_settingsField_19z38_151", MP = "_fieldLabel_19z38_166", IP = "_fieldInput_19z38_174", DP = "_customizationCategory_19z38_193", RP = "_customizationGrid_19z38_198", BP = "_customizationItemBtn_19z38_210", LP = "_equipped_19z38_238", zP = "_locked_19z38_244", FP = "_shop_19z38_253", WP = "_customizationEquippedIndicator_19z38_261", UP = "_customizationLockedIndicator_19z38_271", HP = "_customizationPrice_19z38_279", GP = "_customizationEmptyMsg_19z38_291", KP = "_themePreview_19z38_298", qP = "_themeSwatch_19z38_307", VP = "_themeSwatchBar_19z38_313", YP = "_emotePreview_19z38_318", XP = "_fontPreview_19z38_331", ZP = "_borderPreview_19z38_338", QP = "_backgroundPreview_19z38_348", JP = "_loading_19z38_1", ej = "_fadeInUp_19z38_1", de = {
  settings: AP,
  "settings--modal": "_settings--modal_19z38_28",
  "settings--sidebar": "_settings--sidebar_19z38_34",
  "settings--inline": "_settings--inline_19z38_41",
  "settings--floating": "_settings--floating_19z38_46",
  "settings--panel": "_settings--panel_19z38_55",
  "settings--customization": "_settings--customization_19z38_60",
  "settings--user-preferences": "_settings--user-preferences_19z38_66",
  "settings--theme-selector": "_settings--theme-selector_19z38_71",
  "settings--accessibility": "_settings--accessibility_19z38_76",
  "settings--privacy": "_settings--privacy_19z38_82",
  settingsHeader: PP,
  settingsCloseButton: jP,
  settingsContent: TP,
  settingsFooter: $P,
  settingsSection: EP,
  sectionTitle: CP,
  sectionDescription: kP,
  settingsField: NP,
  fieldLabel: MP,
  fieldInput: IP,
  customizationCategory: DP,
  customizationGrid: RP,
  customizationItemBtn: BP,
  equipped: LP,
  locked: zP,
  shop: FP,
  customizationEquippedIndicator: WP,
  customizationLockedIndicator: UP,
  customizationPrice: HP,
  customizationEmptyMsg: GP,
  themePreview: KP,
  themeSwatch: qP,
  themeSwatchBar: VP,
  emotePreview: YP,
  fontPreview: XP,
  borderPreview: ZP,
  backgroundPreview: QP,
  loading: JP,
  fadeInUp: ej
}, Wg = ve(
  ({
    children: e,
    className: t = "",
    variant: r = "panel",
    position: n = "modal",
    showHeader: a = !0,
    showFooter: i = !1,
    title: o = "Settings",
    onClose: s,
    footer: c,
    ...l
  }, u) => {
    const f = [
      de.settings,
      de[`settings--${r}`],
      de[`settings--${n}`],
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ v.jsxs("div", { ref: u, className: f, ...l, children: [
      a && /* @__PURE__ */ v.jsxs("div", { className: de.settingsHeader, children: [
        /* @__PURE__ */ v.jsx("h2", { children: o }),
        s && /* @__PURE__ */ v.jsx(
          "button",
          {
            className: de.settingsCloseButton,
            onClick: s,
            "aria-label": "Close settings",
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: de.settingsContent, children: e }),
      i && c && /* @__PURE__ */ v.jsx("div", { className: de.settingsFooter, children: c })
    ] });
  }
);
Wg.displayName = "Settings";
const Ug = ve(
  ({
    kind: e,
    configuration: t,
    items: r = [],
    sections: n = [],
    onEquip: a,
    onSettingChange: i,
    onLockedClick: o,
    onShopItemClick: s,
    ariaLabelPrefix: c = "settings",
    lockedIndices: l = [],
    ...u
  }, f) => {
    const d = (p) => {
      const b = p.toLowerCase();
      return {
        isEmote: b.includes("emote"),
        isFont: b.includes("font"),
        isTheme: b.includes("theme"),
        isBorder: b.includes("border"),
        isBackground: b.includes("background"),
        lowerTitle: b
      };
    }, h = (p, b) => {
      const w = l.includes(b), x = !!p.shop && !p.unlocked, O = (t == null ? void 0 : t.title) || "", { isEmote: g, isFont: _, isTheme: S, isBorder: P, isBackground: j } = d(O), E = oe(
        de.customizationItemBtn,
        {
          [de.equipped]: p.equipped,
          [de.locked]: w,
          [de.shop]: x
        }
      ), $ = () => {
        w ? o && o(p) : x ? s && s(p) : a && a(O.toLowerCase(), p.id);
      };
      return /* @__PURE__ */ v.jsxs(
        "button",
        {
          onClick: $,
          className: E,
          "aria-label": `${c} ${p.name}`,
          disabled: w && !o,
          children: [
            S && /* @__PURE__ */ v.jsx("div", { className: de.themePreview, children: /* @__PURE__ */ v.jsxs("div", { className: de.themeSwatch, children: [
              p.primaryColor && /* @__PURE__ */ v.jsx("div", { className: de.themeSwatchBar, style: { backgroundColor: p.primaryColor } }),
              p.accentColor && /* @__PURE__ */ v.jsx("div", { className: de.themeSwatchBar, style: { backgroundColor: p.accentColor } }),
              p.secondaryColor && /* @__PURE__ */ v.jsx("div", { className: de.themeSwatchBar, style: { backgroundColor: p.secondaryColor } })
            ] }) }),
            g && p.imageUrl && /* @__PURE__ */ v.jsx("div", { className: de.emotePreview, children: /* @__PURE__ */ v.jsx("img", { src: p.imageUrl, alt: p.name }) }),
            _ && /* @__PURE__ */ v.jsx("div", { className: de.fontPreview, style: { fontFamily: p.style }, children: "Aa" }),
            P && /* @__PURE__ */ v.jsx(
              "div",
              {
                className: de.borderPreview,
                style: {
                  borderColor: p.borderColor,
                  borderStyle: p.style || "solid"
                }
              }
            ),
            j && p.imageUrl && /* @__PURE__ */ v.jsx("div", { className: de.backgroundPreview, children: /* @__PURE__ */ v.jsx("img", { src: p.imageUrl, alt: p.name }) }),
            /* @__PURE__ */ v.jsx("span", { children: p.name }),
            p.equipped && /* @__PURE__ */ v.jsx("span", { className: de.customizationEquippedIndicator, children: "✓" }),
            w && /* @__PURE__ */ v.jsx("span", { className: de.customizationLockedIndicator, children: "🔒" }),
            p.price && p.currency && /* @__PURE__ */ v.jsxs("span", { className: de.customizationPrice, children: [
              p.price,
              " ",
              p.currency
            ] })
          ]
        },
        p.id
      );
    }, y = (p, b) => {
      var x;
      const w = (O) => {
        i && i(p, b.id, O);
      };
      return /* @__PURE__ */ v.jsxs("div", { className: de.settingsField, children: [
        /* @__PURE__ */ v.jsx("label", { className: de.fieldLabel, htmlFor: b.id, children: b.label }),
        /* @__PURE__ */ v.jsxs("div", { className: de.fieldInput, children: [
          b.type === "checkbox" && /* @__PURE__ */ v.jsx(
            "input",
            {
              id: b.id,
              type: "checkbox",
              checked: b.value,
              onChange: (O) => w(O.target.checked)
            }
          ),
          b.type === "select" && /* @__PURE__ */ v.jsx(
            "select",
            {
              id: b.id,
              value: b.value,
              onChange: (O) => w(O.target.value),
              children: (x = b.options) == null ? void 0 : x.map((O) => /* @__PURE__ */ v.jsx("option", { value: O.value, children: O.label }, O.value))
            }
          ),
          b.type === "range" && /* @__PURE__ */ v.jsx(
            "input",
            {
              id: b.id,
              type: "range",
              value: b.value,
              min: b.min || 0,
              max: b.max || 100,
              step: b.step || 1,
              onChange: (O) => w(Number(O.target.value))
            }
          ),
          b.type === "text" && /* @__PURE__ */ v.jsx(
            "input",
            {
              id: b.id,
              type: "text",
              value: b.value,
              onChange: (O) => w(O.target.value)
            }
          )
        ] })
      ] }, b.id);
    }, m = (p) => /* @__PURE__ */ v.jsxs("div", { className: de.settingsSection, children: [
      /* @__PURE__ */ v.jsx("h3", { className: de.sectionTitle, children: p.title }),
      p.description && /* @__PURE__ */ v.jsx("p", { className: de.sectionDescription, children: p.description }),
      p.fields.map((b) => y(p.id, b))
    ] }, p.id);
    switch (e) {
      case "customization-category":
        return /* @__PURE__ */ v.jsx("div", { ref: f, className: de.customizationCategory, ...u, children: r.length === 0 ? /* @__PURE__ */ v.jsxs("div", { className: de.customizationEmptyMsg, children: [
          "No ",
          (t == null ? void 0 : t.customizationType) || "items",
          " unlocked yet."
        ] }) : /* @__PURE__ */ v.jsx("div", { className: de.customizationGrid, children: r.map(h) }) });
      case "settings-panel":
      case "user-settings":
      case "theme-settings":
      case "accessibility-settings":
      case "privacy-settings":
      default:
        return /* @__PURE__ */ v.jsx("div", { ref: f, ...u, children: n.length === 0 ? /* @__PURE__ */ v.jsx("div", { className: de.customizationEmptyMsg, children: "No settings configured." }) : n.map(m) });
    }
  }
);
Ug.displayName = "SettingsBodyFactory";
const bh = {
  kind: "settings-panel",
  variant: "panel",
  position: "modal",
  title: "Settings",
  showHeader: !0,
  showFooter: !1,
  sections: ["general", "privacy", "accessibility"]
}, _h = {
  kind: "customization-category",
  variant: "customization",
  position: "inline",
  title: "Customization",
  showHeader: !0,
  showFooter: !1,
  gridLayout: !0,
  columns: 4,
  allowMultiSelect: !1,
  showPrices: !0,
  showLocked: !0,
  enableSearch: !1
}, xh = {
  kind: "user-settings",
  variant: "user-preferences",
  position: "sidebar",
  title: "User Preferences",
  showHeader: !0,
  showFooter: !0,
  sections: ["chat", "notifications", "privacy"]
}, wh = {
  kind: "theme-settings",
  variant: "theme-selector",
  position: "modal",
  title: "Theme Settings",
  customizationType: "themes",
  gridLayout: !0,
  columns: 3,
  showHeader: !0,
  showFooter: !1
}, Oh = {
  kind: "accessibility-settings",
  variant: "accessibility",
  position: "modal",
  title: "Accessibility",
  showHeader: !0,
  showFooter: !0,
  sections: ["display", "audio", "input"]
}, Sh = {
  kind: "privacy-settings",
  variant: "privacy",
  position: "modal",
  title: "Privacy & Security",
  showHeader: !0,
  showFooter: !0,
  sections: ["data", "sharing", "security"]
}, tj = {
  // Main kinds
  "settings-panel": bh,
  "customization-category": _h,
  "user-settings": xh,
  "theme-settings": wh,
  "accessibility-settings": Oh,
  "privacy-settings": Sh,
  // Alias configurations for backward compatibility
  panel: bh,
  customization: _h,
  "user-prefs": xh,
  themes: wh,
  accessibility: Oh,
  privacy: Sh
}, Or = ve(
  ({
    kind: e,
    title: t,
    items: r = [],
    sections: n = [],
    onEquip: a,
    onSettingChange: i,
    onLockedClick: o,
    onShopItemClick: s,
    onClose: c,
    ariaLabelPrefix: l = "settings",
    lockedIndices: u = [],
    className: f = "",
    showHeader: d,
    showFooter: h,
    configuration: y,
    ...m
  }, p) => {
    const b = tj[e];
    if (!b)
      return console.warn(`Unknown settings kind: ${e}`), null;
    const w = { ...b, ...y }, x = t ?? w.title, O = d ?? w.showHeader, g = h ?? w.showFooter;
    return /* @__PURE__ */ v.jsx(
      Wg,
      {
        ref: p,
        variant: w.variant,
        position: w.position,
        title: x,
        onClose: c,
        showHeader: O,
        showFooter: g,
        className: f,
        children: /* @__PURE__ */ v.jsx(
          Ug,
          {
            kind: w.kind,
            configuration: w,
            items: r,
            sections: n,
            onEquip: a,
            onSettingChange: i,
            onLockedClick: o,
            onShopItemClick: s,
            ariaLabelPrefix: l,
            lockedIndices: u,
            ...m
          }
        )
      }
    );
  }
);
Or.displayName = "SettingsFactory";
const Ore = Or, Bn = {
  // User settings presets
  USER_PREFERENCES: (e) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "user-settings",
      onSettingChange: e
    }
  ),
  // Theme customization preset
  THEME_CUSTOMIZATION: (e, t) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "theme-settings",
      items: e,
      onEquip: t
    }
  ),
  // Customization category preset
  CUSTOMIZATION: (e, t) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "customization-category",
      items: e,
      onEquip: t
    }
  ),
  // Settings panel preset
  SETTINGS_PANEL: (e, t) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "settings-panel",
      sections: e,
      onSettingChange: t
    }
  ),
  // Accessibility settings preset
  ACCESSIBILITY: (e, t) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "accessibility-settings",
      sections: e,
      onSettingChange: t
    }
  ),
  // Privacy settings preset
  PRIVACY: (e, t) => /* @__PURE__ */ v.jsx(
    Or,
    {
      kind: "privacy-settings",
      sections: e,
      onSettingChange: t
    }
  )
}, Sre = {
  userPrefs: Bn.USER_PREFERENCES,
  themes: Bn.THEME_CUSTOMIZATION,
  customization: Bn.CUSTOMIZATION,
  panel: Bn.SETTINGS_PANEL,
  accessibility: Bn.ACCESSIBILITY,
  privacy: Bn.PRIVACY
}, Yf = ve(
  ({
    kind: e,
    title: t,
    items: r = [],
    sections: n = [],
    onEquip: a,
    onSettingChange: i,
    onLockedClick: o,
    onShopItemClick: s,
    onClose: c,
    ariaLabelPrefix: l = "settings",
    lockedIndices: u = [],
    className: f = "",
    ...d
  }, h) => /* @__PURE__ */ v.jsx(
    Or,
    {
      ref: h,
      kind: e,
      title: t,
      items: r,
      sections: n,
      onEquip: a,
      onSettingChange: i,
      onLockedClick: o,
      onShopItemClick: s,
      onClose: c,
      ariaLabelPrefix: l,
      lockedIndices: u,
      className: f,
      ...d
    }
  )
);
Yf.displayName = "UnifiedSettings";
const Are = ({
  title: e,
  items: t,
  onEquip: r,
  ariaLabelPrefix: n,
  lockedIndices: a = [],
  onLockedClick: i,
  onShopItemClick: o
}) => /* @__PURE__ */ v.jsx(
  Yf,
  {
    kind: "customization-category",
    title: e,
    items: t,
    onEquip: r,
    ariaLabelPrefix: n,
    lockedIndices: a,
    onLockedClick: i,
    onShopItemClick: o
  }
), Xf = Ht({
  settings: null,
  setSettings: () => {
  }
}), Pre = () => _t(Xf), jre = ({ children: e }) => {
  const [t, r] = He(null);
  return /* @__PURE__ */ v.jsx(
    Xf.Provider,
    {
      value: { settings: t, setSettings: r },
      children: e
    }
  );
}, Tre = () => {
  const { settings: e, setSettings: t } = _t(Xf);
  if (!e) return null;
  const r = (a, i, o) => {
    t({
      ...e,
      [i]: o
    });
  }, n = [
    {
      id: "user-preferences",
      title: "User Preferences",
      description: "Configure your user preferences",
      fields: [
        {
          id: "chatEnabled",
          type: "checkbox",
          label: "Enable Chat",
          value: e.chatEnabled
        },
        {
          id: "profanityFilter",
          type: "checkbox",
          label: "Profanity Filter",
          value: e.profanityFilter
        },
        {
          id: "notificationsEnabled",
          type: "checkbox",
          label: "Enable Notifications",
          value: e.notificationsEnabled
        }
      ]
    }
  ];
  return /* @__PURE__ */ v.jsx(
    Yf,
    {
      kind: "settings-panel",
      title: "User Settings",
      sections: n,
      onSettingChange: r
    }
  );
}, Hg = Ht({
  socket: null,
  isConnected: !1,
  error: null,
  connect: () => {
  },
  disconnect: () => {
  }
}), $re = () => {
  const e = _t(Hg);
  if (!e)
    throw new Error(
      "useSocket must be used within a SocketProvider"
    );
  return e;
}, Ere = ({
  children: e,
  session: t,
  autoConnect: r = !1,
  url: n = "/api/socket"
}) => {
  const [a, i] = He(null), [o, s] = He(!1), [c, l] = He(null), u = (h) => {
    try {
      const y = h || n;
      if (typeof window < "u" && window.io) {
        const m = window.io, p = m(y, {
          transports: ["websocket", "polling"]
        });
        p.on("connect", () => {
          s(!0), l(null);
        }), p.on("disconnect", () => {
          s(!1);
        }), p.on("error", (b) => {
          l(
            b.message || "Socket connection error"
          );
        }), i(p);
      } else {
        const m = y.replace(
          "/api/socket",
          "/api/ws"
        ), p = new WebSocket(m);
        p.onopen = () => {
          s(!0), l(null);
        }, p.onclose = () => {
          s(!1);
        }, p.onerror = () => {
          l("WebSocket connection error");
        }, i(p);
      }
    } catch (y) {
      l(y.message || "Failed to connect");
    }
  }, f = () => {
    a && (typeof a.disconnect == "function" ? a.disconnect() : typeof a.close == "function" && a.close(), i(null), s(!1));
  }, d = (h, y) => {
    a && o && (typeof a.emit == "function" ? a.emit(h, y) : a.send && a.send(JSON.stringify({ event: h, data: y })));
  };
  return kr(() => (r && t && u(), () => {
    f();
  }), [t, r]), /* @__PURE__ */ v.jsx(
    Hg.Provider,
    {
      value: {
        socket: a,
        isConnected: o,
        error: c,
        connect: u,
        disconnect: f,
        emit: d
      },
      children: e
    }
  );
}, rj = "_friendsSidebarOpen_a94t1_21", nj = "_friendsSidebarClosed_a94t1_25", aj = "_friendsSidebarCloseBtn_a94t1_29", ul = {
  friendsSidebarOpen: rj,
  friendsSidebarClosed: nj,
  friendsSidebarCloseBtn: aj
}, Cre = ({
  open: e,
  onClose: t,
  children: r
}) => /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: e ? ul.friendsSidebarOpen : ul.friendsSidebarClosed,
    children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: ul.friendsSidebarCloseBtn,
          onClick: t,
          children: "Close"
        }
      ),
      r
    ]
  }
), ij = "_chat_4dl6d_19", oj = "_fadeIn_4dl6d_1", sj = "_chatHeader_4dl6d_70", cj = "_chatAvatar_4dl6d_79", lj = "_chatTitle_4dl6d_88", uj = "_chatCloseBtn_4dl6d_95", fj = "_chatContent_4dl6d_110", dj = "_chatMessages_4dl6d_116", hj = "_chatMessage_4dl6d_116", pj = "_chatMessageSelf_4dl6d_136", mj = "_chatMessageFriend_4dl6d_149", vj = "_chatMessageSystem_4dl6d_162", yj = "_chatMessageText_4dl6d_177", gj = "_chatMessageTime_4dl6d_181", bj = "_chatInput_4dl6d_187", _j = "_chatInputField_4dl6d_196", xj = "_chatSendBtn_4dl6d_209", wj = "_vsQuickChatBar_4dl6d_227", Oj = "_vsQuickChatButton_4dl6d_236", Sj = "_loading_4dl6d_1", Aj = "_fadeInUp_4dl6d_1", ye = {
  chat: ij,
  "chat--fixed": "_chat--fixed_4dl6d_31",
  fadeIn: oj,
  "chat--relative": "_chat--relative_4dl6d_37",
  "chat--absolute": "_chat--absolute_4dl6d_41",
  "chat--friend": "_chat--friend_4dl6d_45",
  "chat--in-match": "_chat--in-match_4dl6d_52",
  "chat--match": "_chat--match_4dl6d_59",
  "chat--general": "_chat--general_4dl6d_66",
  chatHeader: sj,
  chatAvatar: cj,
  chatTitle: lj,
  chatCloseBtn: uj,
  chatContent: fj,
  chatMessages: dj,
  chatMessage: hj,
  chatMessageSelf: pj,
  chatMessageFriend: mj,
  chatMessageSystem: vj,
  chatMessageText: yj,
  chatMessageTime: gj,
  chatInput: bj,
  chatInputField: _j,
  chatSendBtn: xj,
  vsQuickChatBar: wj,
  vsQuickChatButton: Oj,
  loading: Sj,
  fadeInUp: Aj
}, Gg = ve(
  ({
    children: e,
    className: t = "",
    variant: r = "general",
    position: n = "relative",
    title: a,
    onClose: i,
    showCloseButton: o = !1,
    showHeader: s = !0,
    avatar: c,
    ...l
  }, u) => {
    const f = [
      ye.chat,
      ye[`chat--${r}`],
      ye[`chat--${n}`],
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ v.jsxs("div", { ref: u, className: f, ...l, children: [
      s && (a || o || c) && /* @__PURE__ */ v.jsxs("div", { className: ye.chatHeader, children: [
        c && /* @__PURE__ */ v.jsx("div", { className: ye.chatAvatar, children: c }),
        a && /* @__PURE__ */ v.jsx("div", { className: ye.chatTitle, children: a }),
        o && i && /* @__PURE__ */ v.jsx(
          "button",
          {
            className: ye.chatCloseBtn,
            onClick: i,
            type: "button",
            "aria-label": "Close chat",
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: ye.chatContent, children: e })
    ] });
  }
);
Gg.displayName = "Chat";
const Pj = ({
  options: e,
  onSend: t
}) => /* @__PURE__ */ v.jsx("div", { className: ye.vsQuickChatBar, children: e.map((r) => /* @__PURE__ */ v.jsx(
  "button",
  {
    className: ye.vsQuickChatButton,
    onClick: () => t(r),
    children: r
  },
  r
)) }), Kg = ve(
  ({
    kind: e,
    configuration: t,
    messages: r = [],
    currentUser: n = "",
    onSend: a,
    showInput: i = !0,
    placeholder: o = "Type a message...",
    quickOptions: s,
    ...c
  }, l) => {
    const [u, f] = He(""), d = () => {
      u.trim() && a && (a(u.trim()), f(""));
    }, h = (m) => {
      m.key === "Enter" && !m.shiftKey && (m.preventDefault(), d());
    }, y = (m) => {
      const p = m.type || (m.sender === n ? "self" : m.sender === "system" ? "system" : "friend"), b = p === "self" ? ye.chatMessageSelf : p === "system" ? ye.chatMessageSystem : ye.chatMessageFriend;
      return /* @__PURE__ */ v.jsxs("div", { className: b, children: [
        /* @__PURE__ */ v.jsx("span", { className: ye.chatMessageText, children: m.text }),
        m.time && /* @__PURE__ */ v.jsx("span", { className: ye.chatMessageTime, children: m.time })
      ] }, m.id);
    };
    switch (e) {
      case "friend":
        return /* @__PURE__ */ v.jsxs("div", { ref: l, ...c, children: [
          /* @__PURE__ */ v.jsx("div", { className: ye.chatMessages, children: r.map(y) }),
          i && /* @__PURE__ */ v.jsxs("div", { className: ye.chatInput, children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "text",
                value: u,
                onChange: (m) => f(m.target.value),
                onKeyPress: h,
                placeholder: o,
                className: ye.chatInputField
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: d,
                disabled: !u.trim(),
                className: ye.chatSendBtn,
                children: "Send"
              }
            )
          ] })
        ] });
      case "in-match":
        return /* @__PURE__ */ v.jsxs("div", { ref: l, ...c, children: [
          /* @__PURE__ */ v.jsx("div", { className: ye.chatMessages, children: r.map(y) }),
          i && /* @__PURE__ */ v.jsxs("div", { className: ye.chatInput, children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "text",
                value: u,
                onChange: (m) => f(m.target.value),
                onKeyPress: h,
                placeholder: o,
                className: ye.chatInputField
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: d,
                disabled: !u.trim(),
                className: ye.chatSendBtn,
                children: "Send"
              }
            )
          ] })
        ] });
      case "match":
        return /* @__PURE__ */ v.jsxs("div", { ref: l, ...c, children: [
          /* @__PURE__ */ v.jsx("div", { className: ye.chatMessages, children: r.map(y) }),
          i && /* @__PURE__ */ v.jsxs("div", { className: ye.chatInput, children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "text",
                value: u,
                onChange: (m) => f(m.target.value),
                onKeyPress: h,
                placeholder: o,
                className: ye.chatInputField
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: d,
                disabled: !u.trim(),
                className: ye.chatSendBtn,
                children: "Send"
              }
            )
          ] })
        ] });
      case "general":
      default:
        return /* @__PURE__ */ v.jsxs("div", { ref: l, ...c, children: [
          /* @__PURE__ */ v.jsx("div", { className: ye.chatMessages, children: r.map(y) }),
          i && /* @__PURE__ */ v.jsxs("div", { className: ye.chatInput, children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "text",
                value: u,
                onChange: (m) => f(m.target.value),
                onKeyPress: h,
                placeholder: o,
                className: ye.chatInputField
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: d,
                disabled: !u.trim(),
                className: ye.chatSendBtn,
                children: "Send"
              }
            )
          ] })
        ] });
      case "vs-quick-chat":
        return /* @__PURE__ */ v.jsx("div", { ref: l, ...c, children: /* @__PURE__ */ v.jsx(
          Pj,
          {
            options: (t == null ? void 0 : t.quickOptions) || [
              "Hello",
              "Good luck!",
              "Nice move!",
              "GG"
            ],
            onSend: a || (() => {
            })
          }
        ) });
    }
  }
);
Kg.displayName = "ChatBodyFactory";
const Ah = {
  kind: "friend",
  variant: "friend",
  position: "fixed",
  showHeader: !0,
  showCloseButton: !0,
  showInput: !0,
  title: "Friend Chat",
  placeholder: "Type a message..."
}, Ph = {
  kind: "in-match",
  variant: "in-match",
  position: "relative",
  showHeader: !0,
  showCloseButton: !1,
  showInput: !0,
  title: "In-Match Chat",
  placeholder: "Type a message..."
}, jh = {
  kind: "match",
  variant: "match",
  position: "relative",
  showHeader: !0,
  showCloseButton: !1,
  showInput: !0,
  title: "Match Chat",
  placeholder: "Type a message..."
}, Th = {
  kind: "general",
  variant: "general",
  position: "relative",
  showHeader: !0,
  showCloseButton: !1,
  showInput: !0,
  title: "Chat",
  placeholder: "Type a message..."
}, $h = {
  kind: "vs-quick-chat",
  variant: "vs-quick-chat",
  position: "relative",
  showHeader: !1,
  showCloseButton: !1,
  showInput: !1,
  showQuickOptions: !0,
  quickOptions: ["Hello", "Good luck!", "Nice move!", "GG"],
  title: "Quick Chat",
  placeholder: ""
}, jj = {
  // Basic kinds
  friend: Ah,
  "in-match": Ph,
  match: jh,
  general: Th,
  "vs-quick-chat": $h,
  // Alias configurations for backward compatibility
  "friend-chat": Ah,
  "match-chat": jh,
  "in-match-chat": Ph,
  "general-chat": Th,
  "vs-quick-chat-bar": $h
}, Zf = ve(
  ({
    kind: e,
    messages: t = [],
    currentUser: r = "",
    onSend: n,
    onClose: a,
    className: i = "",
    title: o,
    avatar: s,
    placeholder: c,
    showInput: l,
    showHeader: u,
    showCloseButton: f,
    configuration: d,
    ...h
  }, y) => {
    const m = jj[e];
    if (!m)
      return console.warn(`Unknown chat kind: ${e}`), null;
    const p = { ...m, ...d }, b = o ?? p.title, w = l ?? p.showInput, x = u ?? p.showHeader, O = f ?? p.showCloseButton, g = c ?? p.placeholder, _ = s ?? p.avatar;
    return /* @__PURE__ */ v.jsx(
      Gg,
      {
        ref: y,
        variant: p.variant,
        position: p.position,
        title: b,
        onClose: a,
        showCloseButton: O,
        showHeader: x,
        avatar: _,
        className: i,
        children: /* @__PURE__ */ v.jsx(
          Kg,
          {
            kind: p.kind,
            configuration: p,
            messages: t,
            currentUser: r,
            onSend: n,
            showInput: w,
            placeholder: g,
            ...h
          }
        )
      }
    );
  }
);
Zf.displayName = "ChatFactory";
class _i {
  static create(t, r = {}) {
    return /* @__PURE__ */ v.jsx(Zf, { kind: t, ...r });
  }
  // Quick chat creation methods
  static friend(t = [], r = {}) {
    return this.create("friend", { messages: t, ...r });
  }
  static inMatch(t = [], r = {}) {
    return this.create("in-match", { messages: t, ...r });
  }
  static match(t = [], r = {}) {
    return this.create("match", { messages: t, ...r });
  }
  static general(t = [], r = {}) {
    return this.create("general", { messages: t, ...r });
  }
}
const kre = _i, Nre = {
  // Friend chat with typical setup
  friendChat: (e = {}) => _i.friend([], {
    showCloseButton: !0,
    ...e
  }),
  // In-match chat for games
  inMatchChat: (e = {}) => _i.inMatch([], {
    showCloseButton: !1,
    ...e
  }),
  // Match chat window
  matchChat: (e = {}) => _i.match([], {
    showCloseButton: !1,
    ...e
  }),
  // General purpose chat
  generalChat: (e = {}) => _i.general([], e)
}, Tj = ve(
  ({
    kind: e,
    messages: t = [],
    currentUser: r = "",
    onSend: n,
    onClose: a,
    className: i = "",
    ...o
  }, s) => /* @__PURE__ */ v.jsx(
    Zf,
    {
      ref: s,
      kind: e,
      messages: t,
      currentUser: r,
      onSend: n,
      onClose: a,
      className: i,
      ...o
    }
  )
);
Tj.displayName = "UnifiedChat";
var $j = Array.isArray, xt = $j, Ej = typeof No == "object" && No && No.Object === Object && No, qg = Ej, Cj = qg, kj = typeof self == "object" && self && self.Object === Object && self, Nj = Cj || kj || Function("return this")(), er = Nj, Mj = er, Ij = Mj.Symbol, Ma = Ij, Eh = Ma, Vg = Object.prototype, Dj = Vg.hasOwnProperty, Rj = Vg.toString, oi = Eh ? Eh.toStringTag : void 0;
function Bj(e) {
  var t = Dj.call(e, oi), r = e[oi];
  try {
    e[oi] = void 0;
    var n = !0;
  } catch {
  }
  var a = Rj.call(e);
  return n && (t ? e[oi] = r : delete e[oi]), a;
}
var Lj = Bj, zj = Object.prototype, Fj = zj.toString;
function Wj(e) {
  return Fj.call(e);
}
var Uj = Wj, Ch = Ma, Hj = Lj, Gj = Uj, Kj = "[object Null]", qj = "[object Undefined]", kh = Ch ? Ch.toStringTag : void 0;
function Vj(e) {
  return e == null ? e === void 0 ? qj : Kj : kh && kh in Object(e) ? Hj(e) : Gj(e);
}
var Fr = Vj;
function Yj(e) {
  return e != null && typeof e == "object";
}
var tr = Yj, Xj = Fr, Zj = tr, Qj = "[object Symbol]";
function Jj(e) {
  return typeof e == "symbol" || Zj(e) && Xj(e) == Qj;
}
var Ia = Jj, eT = xt, tT = Ia, rT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nT = /^\w*$/;
function aT(e, t) {
  if (eT(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || tT(e) ? !0 : nT.test(e) || !rT.test(e) || t != null && e in Object(t);
}
var Qf = aT;
function iT(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rr = iT;
const Da = /* @__PURE__ */ Se(rr);
var oT = Fr, sT = rr, cT = "[object AsyncFunction]", lT = "[object Function]", uT = "[object GeneratorFunction]", fT = "[object Proxy]";
function dT(e) {
  if (!sT(e))
    return !1;
  var t = oT(e);
  return t == lT || t == uT || t == cT || t == fT;
}
var Jf = dT;
const te = /* @__PURE__ */ Se(Jf);
var hT = er, pT = hT["__core-js_shared__"], mT = pT, fl = mT, Nh = function() {
  var e = /[^.]+$/.exec(fl && fl.keys && fl.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vT(e) {
  return !!Nh && Nh in e;
}
var yT = vT, gT = Function.prototype, bT = gT.toString;
function _T(e) {
  if (e != null) {
    try {
      return bT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yg = _T, xT = Jf, wT = yT, OT = rr, ST = Yg, AT = /[\\^$.*+?()[\]{}|]/g, PT = /^\[object .+?Constructor\]$/, jT = Function.prototype, TT = Object.prototype, $T = jT.toString, ET = TT.hasOwnProperty, CT = RegExp(
  "^" + $T.call(ET).replace(AT, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kT(e) {
  if (!OT(e) || wT(e))
    return !1;
  var t = xT(e) ? CT : PT;
  return t.test(ST(e));
}
var NT = kT;
function MT(e, t) {
  return e == null ? void 0 : e[t];
}
var IT = MT, DT = NT, RT = IT;
function BT(e, t) {
  var r = RT(e, t);
  return DT(r) ? r : void 0;
}
var kn = BT, LT = kn, zT = LT(Object, "create"), yc = zT, Mh = yc;
function FT() {
  this.__data__ = Mh ? Mh(null) : {}, this.size = 0;
}
var WT = FT;
function UT(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var HT = UT, GT = yc, KT = "__lodash_hash_undefined__", qT = Object.prototype, VT = qT.hasOwnProperty;
function YT(e) {
  var t = this.__data__;
  if (GT) {
    var r = t[e];
    return r === KT ? void 0 : r;
  }
  return VT.call(t, e) ? t[e] : void 0;
}
var XT = YT, ZT = yc, QT = Object.prototype, JT = QT.hasOwnProperty;
function e$(e) {
  var t = this.__data__;
  return ZT ? t[e] !== void 0 : JT.call(t, e);
}
var t$ = e$, r$ = yc, n$ = "__lodash_hash_undefined__";
function a$(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = r$ && t === void 0 ? n$ : t, this;
}
var i$ = a$, o$ = WT, s$ = HT, c$ = XT, l$ = t$, u$ = i$;
function Ra(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ra.prototype.clear = o$;
Ra.prototype.delete = s$;
Ra.prototype.get = c$;
Ra.prototype.has = l$;
Ra.prototype.set = u$;
var f$ = Ra;
function d$() {
  this.__data__ = [], this.size = 0;
}
var h$ = d$;
function p$(e, t) {
  return e === t || e !== e && t !== t;
}
var gc = p$, m$ = gc;
function v$(e, t) {
  for (var r = e.length; r--; )
    if (m$(e[r][0], t))
      return r;
  return -1;
}
var bc = v$, y$ = bc, g$ = Array.prototype, b$ = g$.splice;
function _$(e) {
  var t = this.__data__, r = y$(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : b$.call(t, r, 1), --this.size, !0;
}
var x$ = _$, w$ = bc;
function O$(e) {
  var t = this.__data__, r = w$(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var S$ = O$, A$ = bc;
function P$(e) {
  return A$(this.__data__, e) > -1;
}
var j$ = P$, T$ = bc;
function $$(e, t) {
  var r = this.__data__, n = T$(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var E$ = $$, C$ = h$, k$ = x$, N$ = S$, M$ = j$, I$ = E$;
function Ba(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ba.prototype.clear = C$;
Ba.prototype.delete = k$;
Ba.prototype.get = N$;
Ba.prototype.has = M$;
Ba.prototype.set = I$;
var _c = Ba, D$ = kn, R$ = er, B$ = D$(R$, "Map"), ed = B$, Ih = f$, L$ = _c, z$ = ed;
function F$() {
  this.size = 0, this.__data__ = {
    hash: new Ih(),
    map: new (z$ || L$)(),
    string: new Ih()
  };
}
var W$ = F$;
function U$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var H$ = U$, G$ = H$;
function K$(e, t) {
  var r = e.__data__;
  return G$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var xc = K$, q$ = xc;
function V$(e) {
  var t = q$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Y$ = V$, X$ = xc;
function Z$(e) {
  return X$(this, e).get(e);
}
var Q$ = Z$, J$ = xc;
function eE(e) {
  return J$(this, e).has(e);
}
var tE = eE, rE = xc;
function nE(e, t) {
  var r = rE(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var aE = nE, iE = W$, oE = Y$, sE = Q$, cE = tE, lE = aE;
function La(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
La.prototype.clear = iE;
La.prototype.delete = oE;
La.prototype.get = sE;
La.prototype.has = cE;
La.prototype.set = lE;
var td = La, Xg = td, uE = "Expected a function";
function rd(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(uE);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (rd.Cache || Xg)(), r;
}
rd.Cache = Xg;
var Zg = rd;
const fE = /* @__PURE__ */ Se(Zg);
var dE = Zg, hE = 500;
function pE(e) {
  var t = dE(e, function(n) {
    return r.size === hE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var mE = pE, vE = mE, yE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, gE = /\\(\\)?/g, bE = vE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yE, function(r, n, a, i) {
    t.push(a ? i.replace(gE, "$1") : n || r);
  }), t;
}), _E = bE;
function xE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var wc = xE, Dh = Ma, wE = wc, OE = xt, SE = Ia, Rh = Dh ? Dh.prototype : void 0, Bh = Rh ? Rh.toString : void 0;
function Qg(e) {
  if (typeof e == "string")
    return e;
  if (OE(e))
    return wE(e, Qg) + "";
  if (SE(e))
    return Bh ? Bh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var AE = Qg, PE = AE;
function jE(e) {
  return e == null ? "" : PE(e);
}
var Jg = jE, TE = xt, $E = Qf, EE = _E, CE = Jg;
function kE(e, t) {
  return TE(e) ? e : $E(e, t) ? [e] : EE(CE(e));
}
var Oc = kE, NE = Ia;
function ME(e) {
  if (typeof e == "string" || NE(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Oo = ME, IE = Oc, DE = Oo;
function RE(e, t) {
  t = IE(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[DE(t[r++])];
  return r && r == n ? e : void 0;
}
var Sc = RE, BE = Sc;
function LE(e, t, r) {
  var n = e == null ? void 0 : BE(e, t);
  return n === void 0 ? r : n;
}
var eb = LE;
const At = /* @__PURE__ */ Se(eb);
function zE(e) {
  return e == null;
}
var FE = zE;
const ae = /* @__PURE__ */ Se(FE);
var WE = Fr, UE = xt, HE = tr, GE = "[object String]";
function KE(e) {
  return typeof e == "string" || !UE(e) && HE(e) && WE(e) == GE;
}
var qE = KE;
const nn = /* @__PURE__ */ Se(qE);
var eu = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;
function VE() {
  if (Lh) return be;
  Lh = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case e:
          switch (p = p.type, p) {
            case r:
            case a:
            case n:
            case l:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case o:
                case c:
                case d:
                case f:
                case i:
                  return p;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return be.ContextConsumer = o, be.ContextProvider = i, be.Element = e, be.ForwardRef = c, be.Fragment = r, be.Lazy = d, be.Memo = f, be.Portal = t, be.Profiler = a, be.StrictMode = n, be.Suspense = l, be.SuspenseList = u, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(p) {
    return m(p) === o;
  }, be.isContextProvider = function(p) {
    return m(p) === i;
  }, be.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, be.isForwardRef = function(p) {
    return m(p) === c;
  }, be.isFragment = function(p) {
    return m(p) === r;
  }, be.isLazy = function(p) {
    return m(p) === d;
  }, be.isMemo = function(p) {
    return m(p) === f;
  }, be.isPortal = function(p) {
    return m(p) === t;
  }, be.isProfiler = function(p) {
    return m(p) === a;
  }, be.isStrictMode = function(p) {
    return m(p) === n;
  }, be.isSuspense = function(p) {
    return m(p) === l;
  }, be.isSuspenseList = function(p) {
    return m(p) === u;
  }, be.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === a || p === n || p === l || p === u || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === i || p.$$typeof === o || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0);
  }, be.typeOf = m, be;
}
var _e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh;
function YE() {
  return zh || (zh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = !1, m = !1, p = !1, b = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function O(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === a || w || K === n || K === l || K === u || b || K === h || y || m || p || typeof K == "object" && K !== null && (K.$$typeof === d || K.$$typeof === f || K.$$typeof === i || K.$$typeof === o || K.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === x || K.getModuleId !== void 0));
    }
    function g(K) {
      if (typeof K == "object" && K !== null) {
        var je = K.$$typeof;
        switch (je) {
          case e:
            var Ce = K.type;
            switch (Ce) {
              case r:
              case a:
              case n:
              case l:
              case u:
                return Ce;
              default:
                var Ve = Ce && Ce.$$typeof;
                switch (Ve) {
                  case s:
                  case o:
                  case c:
                  case d:
                  case f:
                  case i:
                    return Ve;
                  default:
                    return je;
                }
            }
          case t:
            return je;
        }
      }
    }
    var _ = o, S = i, P = e, j = c, E = r, $ = d, k = f, C = t, D = a, N = n, M = l, B = u, W = !1, H = !1;
    function T(K) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(K) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(K) {
      return g(K) === o;
    }
    function z(K) {
      return g(K) === i;
    }
    function q(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function Y(K) {
      return g(K) === c;
    }
    function J(K) {
      return g(K) === r;
    }
    function ee(K) {
      return g(K) === d;
    }
    function X(K) {
      return g(K) === f;
    }
    function U(K) {
      return g(K) === t;
    }
    function V(K) {
      return g(K) === a;
    }
    function re(K) {
      return g(K) === n;
    }
    function I(K) {
      return g(K) === l;
    }
    function le(K) {
      return g(K) === u;
    }
    _e.ContextConsumer = _, _e.ContextProvider = S, _e.Element = P, _e.ForwardRef = j, _e.Fragment = E, _e.Lazy = $, _e.Memo = k, _e.Portal = C, _e.Profiler = D, _e.StrictMode = N, _e.Suspense = M, _e.SuspenseList = B, _e.isAsyncMode = T, _e.isConcurrentMode = R, _e.isContextConsumer = L, _e.isContextProvider = z, _e.isElement = q, _e.isForwardRef = Y, _e.isFragment = J, _e.isLazy = ee, _e.isMemo = X, _e.isPortal = U, _e.isProfiler = V, _e.isStrictMode = re, _e.isSuspense = I, _e.isSuspenseList = le, _e.isValidElementType = O, _e.typeOf = g;
  }()), _e;
}
process.env.NODE_ENV === "production" ? eu.exports = VE() : eu.exports = YE();
var XE = eu.exports, ZE = Fr, QE = tr, JE = "[object Number]";
function eC(e) {
  return typeof e == "number" || QE(e) && ZE(e) == JE;
}
var tb = eC;
const rb = /* @__PURE__ */ Se(tb);
var tC = tb;
function rC(e) {
  return tC(e) && e != +e;
}
var nC = rC;
const an = /* @__PURE__ */ Se(nC);
var yt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, _n = function(t) {
  return nn(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return rb(t) && !an(t);
}, Qe = function(t) {
  return G(t) || nn(t);
}, aC = 0, Wr = function(t) {
  var r = ++aC;
  return "".concat(t || "").concat(r);
}, gt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !nn(t))
    return n;
  var i;
  if (_n(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return an(i) && (i = n), a && i > r && (i = r), i;
}, Zr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, iC = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, ue = function(t, r) {
  return G(t) && G(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function rs(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : At(n, t)) === r;
  });
}
var oC = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, a = 0, i = 0, o = 0, s = 1 / 0, c = -1 / 0, l = 0, u = 0, f = 0; f < r; f++)
    l = t[f].cx || 0, u = t[f].cy || 0, n += l, a += u, i += l * u, o += l * l, s = Math.min(s, l), c = Math.max(c, l);
  var d = r * o !== n * n ? (r * i - n * a) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: c,
    a: d,
    b: (a - d * n) / r
  };
}, sC = function(t, r) {
  return G(t) && G(r) ? t - r : nn(t) && nn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Zn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function tu(e) {
  "@babel/helpers - typeof";
  return tu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tu(e);
}
var cC = ["viewBox", "children"], lC = [
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
], Fh = ["points", "pathLength"], dl = {
  svg: cC,
  polygon: Fh,
  polyline: Fh
}, nd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], ns = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Qt(t) && (n = t.props), !Da(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    nd.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, uC = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Nr = function(t, r, n) {
  if (!Da(t) || tu(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    nd.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = uC(o, r, n));
  }), a;
}, fC = ["children"], dC = ["children"];
function Wh(e, t) {
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
function ru(e) {
  "@babel/helpers - typeof";
  return ru = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ru(e);
}
var Uh = {
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
}, Tr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Hh = null, hl = null, Ac = function e(t) {
  if (t === Hh && Array.isArray(hl))
    return hl;
  var r = [];
  return An.forEach(t, function(n) {
    ae(n) || (XE.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), hl = r, Hh = t, r;
};
function ft(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return Tr(a);
  }) : n = [Tr(t)], Ac(e).forEach(function(a) {
    var i = At(a, "type.displayName") || At(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function ct(e, t) {
  var r = ft(e, t);
  return r && r[0];
}
var nu = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, pC = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], nb = function(t) {
  return t && t.type && nn(t.type) && pC.indexOf(t.type) >= 0;
}, ab = function(t) {
  return t && ru(t) === "object" && "clipDot" in t;
}, mC = function(t, r, n, a) {
  var i, o = (i = dl == null ? void 0 : dl[a]) !== null && i !== void 0 ? i : [];
  return r.startsWith("data-") || !te(t) && (a && o.includes(r) || lC.includes(r)) || n && nd.includes(r);
}, vC = function(t) {
  var r = [];
  return Ac(t).forEach(function(n) {
    nb(n) && r.push(n);
  }), r;
}, Z = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Qt(t) && (a = t.props), !Da(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    mC((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, au = function e(t, r) {
  if (t === r)
    return !0;
  var n = An.count(t);
  if (n !== An.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Gh(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Gh(i, o))
      return !1;
  }
  return !0;
}, Gh = function(t, r) {
  if (ae(t) && ae(r))
    return !0;
  if (!ae(t) && !ae(r)) {
    var n = t.props || {}, a = n.children, i = Wh(n, fC), o = r.props || {}, s = o.children, c = Wh(o, dC);
    return a && s ? Zn(i, c) && au(a, s) : !a && !s ? Zn(i, c) : !1;
  }
  return !1;
}, Kh = function(t, r) {
  var n = [], a = {};
  return Ac(t).forEach(function(i, o) {
    if (nb(i))
      n.push(i);
    else if (i) {
      var s = Tr(i.type), c = r[s] || {}, l = c.handler, u = c.once;
      if (l && (!u || !a[s])) {
        var f = l(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, yC = function(t) {
  var r = t && t.type;
  return r && Uh[r] ? Uh[r] : null;
}, gC = function(t, r) {
  return Ac(r).indexOf(t);
}, bC = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, iu.apply(this, arguments);
}
function _C(e, t) {
  if (e == null) return {};
  var r = xC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function as(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, c = e.desc, l = _C(e, bC), u = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = oe("recharts-surface", i);
  return /* @__PURE__ */ A.createElement("svg", iu({}, Z(l, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ A.createElement("title", null, s), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var wC = ["children", "className"];
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ou.apply(this, arguments);
}
function OC(e, t) {
  if (e == null) return {};
  var r = SC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ie = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = OC(e, wC), i = oe("recharts-layer", n);
  return /* @__PURE__ */ A.createElement("g", ou({
    className: i
  }, Z(a, !0), {
    ref: t
  }), r);
}), AC = process.env.NODE_ENV !== "production", Jt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (AC && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function PC(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var ib = PC, jC = ib;
function TC(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : jC(e, t, r);
}
var $C = TC, EC = "\\ud800-\\udfff", CC = "\\u0300-\\u036f", kC = "\\ufe20-\\ufe2f", NC = "\\u20d0-\\u20ff", MC = CC + kC + NC, IC = "\\ufe0e\\ufe0f", DC = "\\u200d", RC = RegExp("[" + DC + EC + MC + IC + "]");
function BC(e) {
  return RC.test(e);
}
var ob = BC;
function LC(e) {
  return e.split("");
}
var zC = LC, sb = "\\ud800-\\udfff", FC = "\\u0300-\\u036f", WC = "\\ufe20-\\ufe2f", UC = "\\u20d0-\\u20ff", HC = FC + WC + UC, GC = "\\ufe0e\\ufe0f", KC = "[" + sb + "]", su = "[" + HC + "]", cu = "\\ud83c[\\udffb-\\udfff]", qC = "(?:" + su + "|" + cu + ")", cb = "[^" + sb + "]", lb = "(?:\\ud83c[\\udde6-\\uddff]){2}", ub = "[\\ud800-\\udbff][\\udc00-\\udfff]", VC = "\\u200d", fb = qC + "?", db = "[" + GC + "]?", YC = "(?:" + VC + "(?:" + [cb, lb, ub].join("|") + ")" + db + fb + ")*", XC = db + fb + YC, ZC = "(?:" + [cb + su + "?", su, lb, ub, KC].join("|") + ")", QC = RegExp(cu + "(?=" + cu + ")|" + ZC + XC, "g");
function JC(e) {
  return e.match(QC) || [];
}
var ek = JC, tk = zC, rk = ob, nk = ek;
function ak(e) {
  return rk(e) ? nk(e) : tk(e);
}
var ik = ak, ok = $C, sk = ob, ck = ik, lk = Jg;
function uk(e) {
  return function(t) {
    t = lk(t);
    var r = sk(t) ? ck(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? ok(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var fk = uk, dk = fk, hk = dk("toUpperCase"), pk = hk;
const Pc = /* @__PURE__ */ Se(pk);
function Ie(e) {
  return function() {
    return e;
  };
}
const hb = Math.cos, is = Math.sin, nr = Math.sqrt, os = Math.PI, jc = 2 * os, lu = Math.PI, uu = 2 * lu, mn = 1e-6, mk = uu - mn;
function pb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function vk(e) {
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
class yk {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? pb : vk(t);
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
    let o = this._x1, s = this._y1, c = n - t, l = a - r, u = o - t, f = s - r, d = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > mn) if (!(Math.abs(f * c - l * u) > mn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = a - s, m = c * c + l * l, p = h * h + y * y, b = Math.sqrt(m), w = Math.sqrt(d), x = i * Math.tan((lu - Math.acos((m + d - p) / (2 * b * w))) / 2), O = x / w, g = x / b;
      Math.abs(O - 1) > mn && this._append`L${t + O * u},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * h > u * y)},${this._x1 = t + g * c},${this._y1 = r + g * l}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), c = n * Math.sin(a), l = t + s, u = r + c, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${l},${u}` : (Math.abs(this._x1 - l) > mn || Math.abs(this._y1 - u) > mn) && this._append`L${l},${u}`, n && (d < 0 && (d = d % uu + uu), d > mk ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = l},${this._y1 = u}` : d > mn && this._append`A${n},${n},0,${+(d >= lu)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function ad(e) {
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
  }, () => new yk(t);
}
function id(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mb(e) {
  this._context = e;
}
mb.prototype = {
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
function Tc(e) {
  return new mb(e);
}
function vb(e) {
  return e[0];
}
function yb(e) {
  return e[1];
}
function gb(e, t) {
  var r = Ie(!0), n = null, a = Tc, i = null, o = ad(s);
  e = typeof e == "function" ? e : e === void 0 ? vb : Ie(e), t = typeof t == "function" ? t : t === void 0 ? yb : Ie(t);
  function s(c) {
    var l, u = (c = id(c)).length, f, d = !1, h;
    for (n == null && (i = a(h = o())), l = 0; l <= u; ++l)
      !(l < u && r(f = c[l], l, c)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, l, c), +t(f, l, c));
    if (h) return i = null, h + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ie(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ie(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Ie(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (a = c, n != null && (i = a(n)), s) : a;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = i = null : i = a(n = c), s) : n;
  }, s;
}
function Io(e, t, r) {
  var n = null, a = Ie(!0), i = null, o = Tc, s = null, c = ad(l);
  e = typeof e == "function" ? e : e === void 0 ? vb : Ie(+e), t = typeof t == "function" ? t : Ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? yb : Ie(+r);
  function l(f) {
    var d, h, y, m = (f = id(f)).length, p, b = !1, w, x = new Array(m), O = new Array(m);
    for (i == null && (s = o(w = c())), d = 0; d <= m; ++d) {
      if (!(d < m && a(p = f[d], d, f)) === b)
        if (b = !b)
          h = d, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), y = d - 1; y >= h; --y)
            s.point(x[y], O[y]);
          s.lineEnd(), s.areaEnd();
        }
      b && (x[d] = +e(p, d, f), O[d] = +t(p, d, f), s.point(n ? +n(p, d, f) : x[d], r ? +r(p, d, f) : O[d]));
    }
    if (w) return s = null, w + "" || null;
  }
  function u() {
    return gb().defined(a).curve(o).context(i);
  }
  return l.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), n = null, l) : e;
  }, l.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), l) : e;
  }, l.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ie(+f), l) : n;
  }, l.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), r = null, l) : t;
  }, l.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), l) : t;
  }, l.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ie(+f), l) : r;
  }, l.lineX0 = l.lineY0 = function() {
    return u().x(e).y(t);
  }, l.lineY1 = function() {
    return u().x(e).y(r);
  }, l.lineX1 = function() {
    return u().x(n).y(t);
  }, l.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ie(!!f), l) : a;
  }, l.curve = function(f) {
    return arguments.length ? (o = f, i != null && (s = o(i)), l) : o;
  }, l.context = function(f) {
    return arguments.length ? (f == null ? i = s = null : s = o(i = f), l) : i;
  }, l;
}
class bb {
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
function gk(e) {
  return new bb(e, !0);
}
function bk(e) {
  return new bb(e, !1);
}
const od = {
  draw(e, t) {
    const r = nr(t / os);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, jc);
  }
}, _k = {
  draw(e, t) {
    const r = nr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, _b = nr(1 / 3), xk = _b * 2, wk = {
  draw(e, t) {
    const r = nr(t / xk), n = r * _b;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Ok = {
  draw(e, t) {
    const r = nr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Sk = 0.8908130915292852, xb = is(os / 10) / is(7 * os / 10), Ak = is(jc / 10) * xb, Pk = -hb(jc / 10) * xb, jk = {
  draw(e, t) {
    const r = nr(t * Sk), n = Ak * r, a = Pk * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = jc * i / 5, s = hb(o), c = is(o);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * a, c * n + s * a);
    }
    e.closePath();
  }
}, pl = nr(3), Tk = {
  draw(e, t) {
    const r = -nr(t / (pl * 3));
    e.moveTo(0, r * 2), e.lineTo(-pl * r, -r), e.lineTo(pl * r, -r), e.closePath();
  }
}, It = -0.5, Dt = nr(3) / 2, fu = 1 / nr(12), $k = (fu / 2 + 1) * 3, Ek = {
  draw(e, t) {
    const r = nr(t / $k), n = r / 2, a = r * fu, i = n, o = r * fu + r, s = -i, c = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, c), e.lineTo(It * n - Dt * a, Dt * n + It * a), e.lineTo(It * i - Dt * o, Dt * i + It * o), e.lineTo(It * s - Dt * c, Dt * s + It * c), e.lineTo(It * n + Dt * a, It * a - Dt * n), e.lineTo(It * i + Dt * o, It * o - Dt * i), e.lineTo(It * s + Dt * c, It * c - Dt * s), e.closePath();
  }
};
function Ck(e, t) {
  let r = null, n = ad(a);
  e = typeof e == "function" ? e : Ie(e || od), t = typeof t == "function" ? t : Ie(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Ie(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Ie(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function ss() {
}
function cs(e, t, r) {
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
        cs(this, this._x1, this._y1);
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
        cs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function kk(e) {
  return new wb(e);
}
function Ob(e) {
  this._context = e;
}
Ob.prototype = {
  areaStart: ss,
  areaEnd: ss,
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
        cs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Nk(e) {
  return new Ob(e);
}
function Sb(e) {
  this._context = e;
}
Sb.prototype = {
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
        cs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Mk(e) {
  return new Sb(e);
}
function Ab(e) {
  this._context = e;
}
Ab.prototype = {
  areaStart: ss,
  areaEnd: ss,
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
function Ik(e) {
  return new Ab(e);
}
function qh(e) {
  return e < 0 ? -1 : 1;
}
function Vh(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (qh(i) + qh(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Yh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ml(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function ls(e) {
  this._context = e;
}
ls.prototype = {
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
        ml(this, this._t0, Yh(this, this._t0));
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
          this._point = 3, ml(this, Yh(this, r = Vh(this, e, t)), r);
          break;
        default:
          ml(this, this._t0, r = Vh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Pb(e) {
  this._context = new jb(e);
}
(Pb.prototype = Object.create(ls.prototype)).point = function(e, t) {
  ls.prototype.point.call(this, t, e);
};
function jb(e) {
  this._context = e;
}
jb.prototype = {
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
function Dk(e) {
  return new ls(e);
}
function Rk(e) {
  return new Pb(e);
}
function Tb(e) {
  this._context = e;
}
Tb.prototype = {
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
        for (var n = Xh(e), a = Xh(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Xh(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function Bk(e) {
  return new Tb(e);
}
function $c(e, t) {
  this._context = e, this._t = t;
}
$c.prototype = {
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
function Lk(e) {
  return new $c(e, 0.5);
}
function zk(e) {
  return new $c(e, 0);
}
function Fk(e) {
  return new $c(e, 1);
}
function ta(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function du(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Wk(e, t) {
  return e[t];
}
function Uk(e) {
  const t = [];
  return t.key = e, t;
}
function Hk() {
  var e = Ie([]), t = du, r = ta, n = Wk;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), Uk), s, c = o.length, l = -1, u;
    for (const f of i)
      for (s = 0, ++l; s < c; ++s)
        (o[s][l] = [0, +n(f, o[s].key, l, i)]).data = f;
    for (s = 0, u = id(t(o)); s < c; ++s)
      o[u[s]].index = s;
    return r(o, u), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Ie(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Ie(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? du : typeof i == "function" ? i : Ie(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? ta, a) : r;
  }, a;
}
function Gk(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    ta(e, t);
  }
}
function Kk(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    ta(e, t);
  }
}
function qk(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var s = 0, c = 0, l = 0; s < o; ++s) {
        for (var u = e[t[s]], f = u[n][1] || 0, d = u[n - 1][1] || 0, h = (f - d) / 2, y = 0; y < s; ++y) {
          var m = e[t[y]], p = m[n][1] || 0, b = m[n - 1][1] || 0;
          h += p - b;
        }
        c += f, l += h * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= l / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, ta(e, t);
  }
}
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
var Vk = ["type", "size", "sizeType"];
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hu.apply(this, arguments);
}
function Zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zh(Object(r), !0).forEach(function(n) {
      Yk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yk(e, t, r) {
  return t = Xk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xk(e) {
  var t = Zk(e, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function Zk(e, t) {
  if (ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qk(e, t) {
  if (e == null) return {};
  var r = Jk(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Jk(e, t) {
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
  symbolCircle: od,
  symbolCross: _k,
  symbolDiamond: wk,
  symbolSquare: Ok,
  symbolStar: jk,
  symbolTriangle: Tk,
  symbolWye: Ek
}, e2 = Math.PI / 180, t2 = function(t) {
  var r = "symbol".concat(Pc(t));
  return $b[r] || od;
}, r2 = function(t, r, n) {
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
      var a = 18 * e2;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, n2 = function(t, r) {
  $b["symbol".concat(Pc(t))] = r;
}, Ec = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, c = Qk(t, Vk), l = Qh(Qh({}, c), {}, {
    type: n,
    size: i,
    sizeType: s
  }), u = function() {
    var p = t2(n), b = Ck().type(p).size(r2(i, s, n));
    return b();
  }, f = l.className, d = l.cx, h = l.cy, y = Z(l, !0);
  return d === +d && h === +h && i === +i ? /* @__PURE__ */ A.createElement("path", hu({}, y, {
    className: oe("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: u()
  })) : null;
};
Ec.registerSymbol = n2;
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
}
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pu.apply(this, arguments);
}
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function a2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      Ni(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cb(n.key), n);
  }
}
function s2(e, t, r) {
  return t && o2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function c2(e, t, r) {
  return t = us(t), l2(e, Eb() ? Reflect.construct(t, r || [], us(e).constructor) : t.apply(e, r));
}
function l2(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return u2(e);
}
function u2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Eb = function() {
    return !!e;
  })();
}
function us(e) {
  return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, us(e);
}
function f2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mu(e, t);
}
function mu(e, t) {
  return mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mu(e, t);
}
function Ni(e, t, r) {
  return t = Cb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cb(e) {
  var t = d2(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function d2(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Rt = 32, sd = /* @__PURE__ */ function(e) {
  function t() {
    return i2(this, t), c2(this, t, arguments);
  }
  return f2(t, e), s2(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Rt / 2, o = Rt / 6, s = Rt / 3, c = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Rt,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(i, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(i, `
            H`).concat(Rt, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Rt / 8, "h").concat(Rt, "v").concat(Rt * 3 / 4, "h").concat(-Rt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(n.legendIcon)) {
          var l = a2({}, n);
          return delete l.legendIcon, /* @__PURE__ */ A.cloneElement(n.legendIcon, l);
        }
        return /* @__PURE__ */ A.createElement(Ec, {
          fill: c,
          cx: i,
          cy: i,
          size: Rt,
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
      var n = this, a = this.props, i = a.payload, o = a.iconSize, s = a.layout, c = a.formatter, l = a.inactiveColor, u = {
        x: 0,
        y: 0,
        width: Rt,
        height: Rt
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(h, y) {
        var m = h.formatter || c, p = oe(Ni(Ni({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var b = te(h.value) ? null : h.value;
        Jt(
          !te(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? l : h.color;
        return /* @__PURE__ */ A.createElement("li", pu({
          className: p,
          style: f,
          key: "legend-item-".concat(y)
        }, Nr(n.props, h, y)), /* @__PURE__ */ A.createElement(as, {
          width: o,
          height: o,
          viewBox: u,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, m ? m(b, h, y) : b));
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
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(ht);
Ni(sd, "displayName", "Legend");
Ni(sd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var h2 = _c;
function p2() {
  this.__data__ = new h2(), this.size = 0;
}
var m2 = p2;
function v2(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var y2 = v2;
function g2(e) {
  return this.__data__.get(e);
}
var b2 = g2;
function _2(e) {
  return this.__data__.has(e);
}
var x2 = _2, w2 = _c, O2 = ed, S2 = td, A2 = 200;
function P2(e, t) {
  var r = this.__data__;
  if (r instanceof w2) {
    var n = r.__data__;
    if (!O2 || n.length < A2 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new S2(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var j2 = P2, T2 = _c, $2 = m2, E2 = y2, C2 = b2, k2 = x2, N2 = j2;
function za(e) {
  var t = this.__data__ = new T2(e);
  this.size = t.size;
}
za.prototype.clear = $2;
za.prototype.delete = E2;
za.prototype.get = C2;
za.prototype.has = k2;
za.prototype.set = N2;
var cd = za, M2 = "__lodash_hash_undefined__";
function I2(e) {
  return this.__data__.set(e, M2), this;
}
var D2 = I2;
function R2(e) {
  return this.__data__.has(e);
}
var B2 = R2, L2 = td, z2 = D2, F2 = B2;
function fs(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new L2(); ++t < r; )
    this.add(e[t]);
}
fs.prototype.add = fs.prototype.push = z2;
fs.prototype.has = F2;
var kb = fs;
function W2(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Nb = W2;
function U2(e, t) {
  return e.has(t);
}
var Mb = U2, H2 = kb, G2 = Nb, K2 = Mb, q2 = 1, V2 = 2;
function Y2(e, t, r, n, a, i) {
  var o = r & q2, s = e.length, c = t.length;
  if (s != c && !(o && c > s))
    return !1;
  var l = i.get(e), u = i.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, d = !0, h = r & V2 ? new H2() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var y = e[f], m = t[f];
    if (n)
      var p = o ? n(m, y, f, t, e, i) : n(y, m, f, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!G2(t, function(b, w) {
        if (!K2(h, w) && (y === b || a(y, b, r, n, i)))
          return h.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(y === m || a(y, m, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var Ib = Y2, X2 = er, Z2 = X2.Uint8Array, Db = Z2;
function Q2(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var J2 = Q2;
function eN(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ld = eN, ep = Ma, tp = Db, tN = gc, rN = Ib, nN = J2, aN = ld, iN = 1, oN = 2, sN = "[object Boolean]", cN = "[object Date]", lN = "[object Error]", uN = "[object Map]", fN = "[object Number]", dN = "[object RegExp]", hN = "[object Set]", pN = "[object String]", mN = "[object Symbol]", vN = "[object ArrayBuffer]", yN = "[object DataView]", rp = ep ? ep.prototype : void 0, vl = rp ? rp.valueOf : void 0;
function gN(e, t, r, n, a, i, o) {
  switch (r) {
    case yN:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case vN:
      return !(e.byteLength != t.byteLength || !i(new tp(e), new tp(t)));
    case sN:
    case cN:
    case fN:
      return tN(+e, +t);
    case lN:
      return e.name == t.name && e.message == t.message;
    case dN:
    case pN:
      return e == t + "";
    case uN:
      var s = nN;
    case hN:
      var c = n & iN;
      if (s || (s = aN), e.size != t.size && !c)
        return !1;
      var l = o.get(e);
      if (l)
        return l == t;
      n |= oN, o.set(e, t);
      var u = rN(s(e), s(t), n, a, i, o);
      return o.delete(e), u;
    case mN:
      if (vl)
        return vl.call(e) == vl.call(t);
  }
  return !1;
}
var bN = gN;
function _N(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var ud = _N, xN = ud, wN = xt;
function ON(e, t, r) {
  var n = t(e);
  return wN(e) ? n : xN(n, r(e));
}
var Rb = ON;
function SN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var AN = SN;
function PN() {
  return [];
}
var Bb = PN, jN = AN, TN = Bb, $N = Object.prototype, EN = $N.propertyIsEnumerable, np = Object.getOwnPropertySymbols, CN = np ? function(e) {
  return e == null ? [] : (e = Object(e), jN(np(e), function(t) {
    return EN.call(e, t);
  }));
} : TN, fd = CN;
function kN(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var NN = kN, MN = Fr, IN = tr, DN = "[object Arguments]";
function RN(e) {
  return IN(e) && MN(e) == DN;
}
var BN = RN, ap = BN, LN = tr, Lb = Object.prototype, zN = Lb.hasOwnProperty, FN = Lb.propertyIsEnumerable, WN = ap(/* @__PURE__ */ function() {
  return arguments;
}()) ? ap : function(e) {
  return LN(e) && zN.call(e, "callee") && !FN.call(e, "callee");
}, dd = WN, ds = { exports: {} };
function UN() {
  return !1;
}
var HN = UN;
ds.exports;
(function(e, t) {
  var r = er, n = HN, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, l = c || n;
  e.exports = l;
})(ds, ds.exports);
var hd = ds.exports, GN = 9007199254740991, KN = /^(?:0|[1-9]\d*)$/;
function qN(e, t) {
  var r = typeof e;
  return t = t ?? GN, !!t && (r == "number" || r != "symbol" && KN.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var pd = qN, VN = 9007199254740991;
function YN(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VN;
}
var md = YN, XN = Fr, ZN = md, QN = tr, JN = "[object Arguments]", eM = "[object Array]", tM = "[object Boolean]", rM = "[object Date]", nM = "[object Error]", aM = "[object Function]", iM = "[object Map]", oM = "[object Number]", sM = "[object Object]", cM = "[object RegExp]", lM = "[object Set]", uM = "[object String]", fM = "[object WeakMap]", dM = "[object ArrayBuffer]", hM = "[object DataView]", pM = "[object Float32Array]", mM = "[object Float64Array]", vM = "[object Int8Array]", yM = "[object Int16Array]", gM = "[object Int32Array]", bM = "[object Uint8Array]", _M = "[object Uint8ClampedArray]", xM = "[object Uint16Array]", wM = "[object Uint32Array]", De = {};
De[pM] = De[mM] = De[vM] = De[yM] = De[gM] = De[bM] = De[_M] = De[xM] = De[wM] = !0;
De[JN] = De[eM] = De[dM] = De[tM] = De[hM] = De[rM] = De[nM] = De[aM] = De[iM] = De[oM] = De[sM] = De[cM] = De[lM] = De[uM] = De[fM] = !1;
function OM(e) {
  return QN(e) && ZN(e.length) && !!De[XN(e)];
}
var SM = OM;
function AM(e) {
  return function(t) {
    return e(t);
  };
}
var Cc = AM, hs = { exports: {} };
hs.exports;
(function(e, t) {
  var r = qg, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(hs, hs.exports);
var vd = hs.exports, PM = SM, jM = Cc, ip = vd, op = ip && ip.isTypedArray, TM = op ? jM(op) : PM, zb = TM, $M = NN, EM = dd, CM = xt, kM = hd, NM = pd, MM = zb, IM = Object.prototype, DM = IM.hasOwnProperty;
function RM(e, t) {
  var r = CM(e), n = !r && EM(e), a = !r && !n && kM(e), i = !r && !n && !a && MM(e), o = r || n || a || i, s = o ? $M(e.length, String) : [], c = s.length;
  for (var l in e)
    (t || DM.call(e, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    NM(l, c))) && s.push(l);
  return s;
}
var Fb = RM, BM = Object.prototype;
function LM(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || BM;
  return e === r;
}
var yd = LM;
function zM(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Wb = zM, FM = Wb, WM = FM(Object.keys, Object), UM = WM, HM = yd, GM = UM, KM = Object.prototype, qM = KM.hasOwnProperty;
function VM(e) {
  if (!HM(e))
    return GM(e);
  var t = [];
  for (var r in Object(e))
    qM.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var YM = VM, XM = Jf, ZM = md;
function QM(e) {
  return e != null && ZM(e.length) && !XM(e);
}
var Fa = QM, JM = Fb, eI = YM, tI = Fa;
function rI(e) {
  return tI(e) ? JM(e) : eI(e);
}
var Wa = rI, nI = Rb, aI = fd, iI = Wa;
function oI(e) {
  return nI(e, iI, aI);
}
var Ub = oI, sp = Ub, sI = 1, cI = Object.prototype, lI = cI.hasOwnProperty;
function uI(e, t, r, n, a, i) {
  var o = r & sI, s = sp(e), c = s.length, l = sp(t), u = l.length;
  if (c != u && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = s[f];
    if (!(o ? d in t : lI.call(t, d)))
      return !1;
  }
  var h = i.get(e), y = i.get(t);
  if (h && y)
    return h == t && y == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var p = o; ++f < c; ) {
    d = s[f];
    var b = e[d], w = t[d];
    if (n)
      var x = o ? n(w, b, d, t, e, i) : n(b, w, d, e, t, i);
    if (!(x === void 0 ? b === w || a(b, w, r, n, i) : x)) {
      m = !1;
      break;
    }
    p || (p = d == "constructor");
  }
  if (m && !p) {
    var O = e.constructor, g = t.constructor;
    O != g && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof g == "function" && g instanceof g) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var fI = uI, dI = kn, hI = er, pI = dI(hI, "DataView"), mI = pI, vI = kn, yI = er, gI = vI(yI, "Promise"), bI = gI, _I = kn, xI = er, wI = _I(xI, "Set"), Hb = wI, OI = kn, SI = er, AI = OI(SI, "WeakMap"), PI = AI, vu = mI, yu = ed, gu = bI, bu = Hb, _u = PI, Gb = Fr, Ua = Yg, cp = "[object Map]", jI = "[object Object]", lp = "[object Promise]", up = "[object Set]", fp = "[object WeakMap]", dp = "[object DataView]", TI = Ua(vu), $I = Ua(yu), EI = Ua(gu), CI = Ua(bu), kI = Ua(_u), vn = Gb;
(vu && vn(new vu(new ArrayBuffer(1))) != dp || yu && vn(new yu()) != cp || gu && vn(gu.resolve()) != lp || bu && vn(new bu()) != up || _u && vn(new _u()) != fp) && (vn = function(e) {
  var t = Gb(e), r = t == jI ? e.constructor : void 0, n = r ? Ua(r) : "";
  if (n)
    switch (n) {
      case TI:
        return dp;
      case $I:
        return cp;
      case EI:
        return lp;
      case CI:
        return up;
      case kI:
        return fp;
    }
  return t;
});
var kc = vn, yl = cd, NI = Ib, MI = bN, II = fI, hp = kc, pp = xt, mp = hd, DI = zb, RI = 1, vp = "[object Arguments]", yp = "[object Array]", Do = "[object Object]", BI = Object.prototype, gp = BI.hasOwnProperty;
function LI(e, t, r, n, a, i) {
  var o = pp(e), s = pp(t), c = o ? yp : hp(e), l = s ? yp : hp(t);
  c = c == vp ? Do : c, l = l == vp ? Do : l;
  var u = c == Do, f = l == Do, d = c == l;
  if (d && mp(e)) {
    if (!mp(t))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new yl()), o || DI(e) ? NI(e, t, r, n, a, i) : MI(e, t, c, r, n, a, i);
  if (!(r & RI)) {
    var h = u && gp.call(e, "__wrapped__"), y = f && gp.call(t, "__wrapped__");
    if (h || y) {
      var m = h ? e.value() : e, p = y ? t.value() : t;
      return i || (i = new yl()), a(m, p, r, n, i);
    }
  }
  return d ? (i || (i = new yl()), II(e, t, r, n, a, i)) : !1;
}
var zI = LI, FI = zI, bp = tr;
function Kb(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !bp(e) && !bp(t) ? e !== e && t !== t : FI(e, t, r, n, Kb, a);
}
var gd = Kb, WI = cd, UI = gd, HI = 1, GI = 2;
function KI(e, t, r, n) {
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
    var c = s[0], l = e[c], u = s[1];
    if (o && s[2]) {
      if (l === void 0 && !(c in e))
        return !1;
    } else {
      var f = new WI();
      if (n)
        var d = n(l, u, c, e, t, f);
      if (!(d === void 0 ? UI(u, l, HI | GI, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var qI = KI, VI = rr;
function YI(e) {
  return e === e && !VI(e);
}
var qb = YI, XI = qb, ZI = Wa;
function QI(e) {
  for (var t = ZI(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, XI(a)];
  }
  return t;
}
var JI = QI;
function eD(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Vb = eD, tD = qI, rD = JI, nD = Vb;
function aD(e) {
  var t = rD(e);
  return t.length == 1 && t[0][2] ? nD(t[0][0], t[0][1]) : function(r) {
    return r === e || tD(r, e, t);
  };
}
var iD = aD;
function oD(e, t) {
  return e != null && t in Object(e);
}
var sD = oD, cD = Oc, lD = dd, uD = xt, fD = pd, dD = md, hD = Oo;
function pD(e, t, r) {
  t = cD(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = hD(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && dD(a) && fD(o, a) && (uD(e) || lD(e)));
}
var mD = pD, vD = sD, yD = mD;
function gD(e, t) {
  return e != null && yD(e, t, vD);
}
var bD = gD, _D = gd, xD = eb, wD = bD, OD = Qf, SD = qb, AD = Vb, PD = Oo, jD = 1, TD = 2;
function $D(e, t) {
  return OD(e) && SD(t) ? AD(PD(e), t) : function(r) {
    var n = xD(r, e);
    return n === void 0 && n === t ? wD(r, e) : _D(t, n, jD | TD);
  };
}
var ED = $D;
function CD(e) {
  return e;
}
var Ha = CD;
function kD(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var ND = kD, MD = Sc;
function ID(e) {
  return function(t) {
    return MD(t, e);
  };
}
var DD = ID, RD = ND, BD = DD, LD = Qf, zD = Oo;
function FD(e) {
  return LD(e) ? RD(zD(e)) : BD(e);
}
var WD = FD, UD = iD, HD = ED, GD = Ha, KD = xt, qD = WD;
function VD(e) {
  return typeof e == "function" ? e : e == null ? GD : typeof e == "object" ? KD(e) ? HD(e[0], e[1]) : UD(e) : qD(e);
}
var vr = VD;
function YD(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var Yb = YD;
function XD(e) {
  return e !== e;
}
var ZD = XD;
function QD(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var JD = QD, eR = Yb, tR = ZD, rR = JD;
function nR(e, t, r) {
  return t === t ? rR(e, t, r) : eR(e, tR, r);
}
var aR = nR, iR = aR;
function oR(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && iR(e, t, 0) > -1;
}
var sR = oR;
function cR(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var lR = cR;
function uR() {
}
var fR = uR, gl = Hb, dR = fR, hR = ld, pR = 1 / 0, mR = gl && 1 / hR(new gl([, -0]))[1] == pR ? function(e) {
  return new gl(e);
} : dR, vR = mR, yR = kb, gR = sR, bR = lR, _R = Mb, xR = vR, wR = ld, OR = 200;
function SR(e, t, r) {
  var n = -1, a = gR, i = e.length, o = !0, s = [], c = s;
  if (r)
    o = !1, a = bR;
  else if (i >= OR) {
    var l = t ? null : xR(e);
    if (l)
      return wR(l);
    o = !1, a = _R, c = new yR();
  } else
    c = t ? [] : s;
  e:
    for (; ++n < i; ) {
      var u = e[n], f = t ? t(u) : u;
      if (u = r || u !== 0 ? u : 0, o && f === f) {
        for (var d = c.length; d--; )
          if (c[d] === f)
            continue e;
        t && c.push(f), s.push(u);
      } else a(c, f, r) || (c !== s && c.push(f), s.push(u));
    }
  return s;
}
var AR = SR, PR = vr, jR = AR;
function TR(e, t) {
  return e && e.length ? jR(e, PR(t)) : [];
}
var $R = TR;
const _p = /* @__PURE__ */ Se($R);
function Xb(e, t, r) {
  return t === !0 ? _p(e, r) : te(t) ? _p(e, t) : e;
}
function na(e) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e);
}
var ER = ["ref"];
function xp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xp(Object(r), !0).forEach(function(n) {
      Nc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qb(n.key), n);
  }
}
function kR(e, t, r) {
  return t && wp(e.prototype, t), r && wp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NR(e, t, r) {
  return t = ps(t), MR(e, Zb() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function MR(e, t) {
  if (t && (na(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IR(e);
}
function IR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zb = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function DR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xu(e, t);
}
function xu(e, t) {
  return xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xu(e, t);
}
function Nc(e, t, r) {
  return t = Qb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qb(e) {
  var t = RR(e, "string");
  return na(t) == "symbol" ? t : t + "";
}
function RR(e, t) {
  if (na(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function BR(e, t) {
  if (e == null) return {};
  var r = LR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zR(e) {
  return e.value;
}
function FR(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var r = BR(t, ER);
  return /* @__PURE__ */ A.createElement(sd, r);
}
var Op = 1, ur = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    CR(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = NR(this, t, [].concat(a)), Nc(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return DR(t, e), kR(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Op || Math.abs(a.height - this.lastBoundingBox.height) > Op) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? br({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, s = a.verticalAlign, c = a.margin, l = a.chartWidth, u = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((l || 0) - h.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((u || 0) - y.height) / 2
          };
        } else
          d = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return br(br({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, s = a.height, c = a.wrapperStyle, l = a.payloadUniqBy, u = a.payload, f = br(br({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, FR(i, br(br({}, this.props), {}, {
        payload: Xb(u, l, zR)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = br(br({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && G(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
}(ht);
Nc(ur, "displayName", "Legend");
Nc(ur, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Sp = Ma, WR = dd, UR = xt, Ap = Sp ? Sp.isConcatSpreadable : void 0;
function HR(e) {
  return UR(e) || WR(e) || !!(Ap && e && e[Ap]);
}
var GR = HR, KR = ud, qR = GR;
function Jb(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = qR), a || (a = []); ++i < o; ) {
    var s = e[i];
    t > 0 && r(s) ? t > 1 ? Jb(s, t - 1, r, n, a) : KR(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var bd = Jb;
function VR(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e ? s : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var YR = VR, XR = YR, ZR = XR(), QR = ZR, JR = QR, eB = Wa;
function tB(e, t) {
  return e && JR(e, t, eB);
}
var e_ = tB, rB = Fa;
function nB(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!rB(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var aB = nB, iB = e_, oB = aB, sB = oB(iB), _d = sB, cB = _d, lB = Fa;
function uB(e, t) {
  var r = -1, n = lB(e) ? Array(e.length) : [];
  return cB(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var t_ = uB;
function fB(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var dB = fB, Pp = Ia;
function hB(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = Pp(e), o = t !== void 0, s = t === null, c = t === t, l = Pp(t);
    if (!s && !l && !i && e > t || i && o && c && !s && !l || n && o && c || !r && c || !a)
      return 1;
    if (!n && !i && !l && e < t || l && r && a && !n && !i || s && r && a || !o && a || !c)
      return -1;
  }
  return 0;
}
var pB = hB, mB = pB;
function vB(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, s = r.length; ++n < o; ) {
    var c = mB(a[n], i[n]);
    if (c) {
      if (n >= s)
        return c;
      var l = r[n];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var yB = vB, bl = wc, gB = Sc, bB = vr, _B = t_, xB = dB, wB = Cc, OB = yB, SB = Ha, AB = xt;
function PB(e, t, r) {
  t.length ? t = bl(t, function(i) {
    return AB(i) ? function(o) {
      return gB(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [SB];
  var n = -1;
  t = bl(t, wB(bB));
  var a = _B(e, function(i, o, s) {
    var c = bl(t, function(l) {
      return l(i);
    });
    return { criteria: c, index: ++n, value: i };
  });
  return xB(a, function(i, o) {
    return OB(i, o, r);
  });
}
var jB = PB;
function TB(e, t, r) {
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
var $B = TB, EB = $B, jp = Math.max;
function CB(e, t, r) {
  return t = jp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = jp(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = n[a];
    return s[t] = r(o), EB(e, this, s);
  };
}
var r_ = CB;
function kB(e) {
  return function() {
    return e;
  };
}
var NB = kB, MB = kn, IB = function() {
  try {
    var e = MB(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), n_ = IB, DB = NB, Tp = n_, RB = Ha, BB = Tp ? function(e, t) {
  return Tp(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: DB(t),
    writable: !0
  });
} : RB, LB = BB, zB = 800, FB = 16, WB = Date.now;
function UB(e) {
  var t = 0, r = 0;
  return function() {
    var n = WB(), a = FB - (n - r);
    if (r = n, a > 0) {
      if (++t >= zB)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var HB = UB, GB = LB, KB = HB, qB = KB(GB), a_ = qB, VB = Ha, YB = r_, XB = a_;
function ZB(e, t) {
  return XB(YB(e, t, VB), e + "");
}
var QB = ZB, JB = gc, eL = Fa, tL = pd, rL = rr;
function nL(e, t, r) {
  if (!rL(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? eL(r) && tL(t, r.length) : n == "string" && t in r) ? JB(r[t], e) : !1;
}
var Mc = nL, aL = bd, iL = jB, oL = QB, $p = Mc, sL = oL(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && $p(e, t[0], t[1]) ? t = [] : r > 2 && $p(t[0], t[1], t[2]) && (t = [t[0]]), iL(e, aL(t, 1), []);
}), cL = sL;
const xd = /* @__PURE__ */ Se(cL);
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wu.apply(this, arguments);
}
function lL(e, t) {
  return hL(e) || dL(e, t) || fL(e, t) || uL();
}
function uL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fL(e, t) {
  if (e) {
    if (typeof e == "string") return Ep(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ep(e, t);
  }
}
function Ep(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function hL(e) {
  if (Array.isArray(e)) return e;
}
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
function _l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      pL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pL(e, t, r) {
  return t = mL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mL(e) {
  var t = vL(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function vL(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yL(e) {
  return Array.isArray(e) && Qe(e[0]) && Qe(e[1]) ? e.join(" ~ ") : e;
}
var gL = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, f = t.formatter, d = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, m = t.label, p = t.labelFormatter, b = t.accessibilityLayer, w = b === void 0 ? !1 : b, x = function() {
    if (u && u.length) {
      var k = {
        padding: 0,
        margin: 0
      }, C = (d ? xd(u, d) : u).map(function(D, N) {
        if (D.type === "none")
          return null;
        var M = _l({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: D.color || "#000"
        }, s), B = D.formatter || f || yL, W = D.value, H = D.name, T = W, R = H;
        if (B && T != null && R != null) {
          var L = B(W, H, D, N, u);
          if (Array.isArray(L)) {
            var z = lL(L, 2);
            T = z[0], R = z[1];
          } else
            T = L;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(N),
            style: M
          }, Qe(R) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, R) : null, Qe(R) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, T), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, D.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: k
      }, C);
    }
    return null;
  }, O = _l({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), g = _l({
    margin: 0
  }, l), _ = !ae(m), S = _ ? m : "", P = oe("recharts-default-tooltip", h), j = oe("recharts-tooltip-label", y);
  _ && p && u !== void 0 && u !== null && (S = p(m, u));
  var E = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", wu({
    className: P,
    style: O
  }, E), /* @__PURE__ */ A.createElement("p", {
    className: j,
    style: g
  }, /* @__PURE__ */ A.isValidElement(S) ? S : "".concat(S)), x());
};
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
function Ro(e, t, r) {
  return t = bL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bL(e) {
  var t = _L(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function _L(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var si = "recharts-tooltip-wrapper", xL = {
  visibility: "hidden"
};
function wL(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return oe(si, Ro(Ro(Ro(Ro({}, "".concat(si, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(si, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(si, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(si, "-top"), G(n) && t && G(t.y) && n < t.y));
}
function kp(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (i && G(i[n]))
    return i[n];
  var u = r[n] - s - a, f = r[n] + a;
  if (t[n])
    return o[n] ? u : f;
  if (o[n]) {
    var d = u, h = c[n];
    return d < h ? Math.max(f, c[n]) : Math.max(u, c[n]);
  }
  var y = f + s, m = c[n] + l;
  return y > m ? Math.max(u, c[n]) : Math.max(f, c[n]);
}
function OL(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function SL(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, l, u, f;
  return o.height > 0 && o.width > 0 && r ? (u = kp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = kp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = OL({
    translateX: u,
    translateY: f,
    useTranslate3d: s
  })) : l = xL, {
    cssProperties: l,
    cssClasses: wL({
      translateX: u,
      translateY: f,
      coordinate: r
    })
  };
}
function aa(e) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function Np(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(r), !0).forEach(function(n) {
      Su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function PL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o_(n.key), n);
  }
}
function jL(e, t, r) {
  return t && PL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TL(e, t, r) {
  return t = ms(t), $L(e, i_() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r));
}
function $L(e, t) {
  if (t && (aa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return EL(e);
}
function EL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function i_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (i_ = function() {
    return !!e;
  })();
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function CL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ou(e, t);
}
function Ou(e, t) {
  return Ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ou(e, t);
}
function Su(e, t, r) {
  return t = o_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o_(e) {
  var t = kL(e, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function kL(e, t) {
  if (aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ip = 1, NL = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    AL(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = TL(this, t, [].concat(a)), Su(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Su(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, l, u;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (l = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), r;
  }
  return CL(t, e), jL(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Ip || Math.abs(n.height - this.state.lastBoundingBox.height) > Ip) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, c = a.animationEasing, l = a.children, u = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, h = a.offset, y = a.position, m = a.reverseDirection, p = a.useTranslate3d, b = a.viewBox, w = a.wrapperStyle, x = SL({
        allowEscapeViewBox: o,
        coordinate: u,
        offsetTopLeft: h,
        position: y,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: b
      }), O = x.cssClasses, g = x.cssProperties, _ = Mp(Mp({
        transition: d && i ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, g), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: O,
          style: _,
          ref: function(P) {
            n.wrapperNode = P;
          }
        }, l)
      );
    }
  }]);
}(ht), ML = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, kt = {
  isSsr: ML()
};
function ia(e) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
function Dp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dp(Object(r), !0).forEach(function(n) {
      wd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function DL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c_(n.key), n);
  }
}
function RL(e, t, r) {
  return t && DL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BL(e, t, r) {
  return t = vs(t), LL(e, s_() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function LL(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zL(e);
}
function zL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function s_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (s_ = function() {
    return !!e;
  })();
}
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function FL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Au(e, t);
}
function Au(e, t) {
  return Au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Au(e, t);
}
function wd(e, t, r) {
  return t = c_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c_(e) {
  var t = WL(e, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function WL(e, t) {
  if (ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function UL(e) {
  return e.dataKey;
}
function HL(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(gL, t);
}
var lt = /* @__PURE__ */ function(e) {
  function t() {
    return IL(this, t), BL(this, t, arguments);
  }
  return FL(t, e), RL(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, c = a.animationEasing, l = a.content, u = a.coordinate, f = a.filterNull, d = a.isAnimationActive, h = a.offset, y = a.payload, m = a.payloadUniqBy, p = a.position, b = a.reverseDirection, w = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, g = y ?? [];
      f && g.length && (g = Xb(y.filter(function(S) {
        return S.value != null && (S.hide !== !0 || n.props.includeHidden);
      }), m, UL));
      var _ = g.length > 0;
      return /* @__PURE__ */ A.createElement(NL, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: d,
        active: i,
        coordinate: u,
        hasPayload: _,
        offset: h,
        position: p,
        reverseDirection: b,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: O
      }, HL(l, Rp(Rp({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(ht);
wd(lt, "displayName", "Tooltip");
wd(lt, "defaultProps", {
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
  isAnimationActive: !kt.isSsr,
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
var GL = er, KL = function() {
  return GL.Date.now();
}, qL = KL, VL = /\s/;
function YL(e) {
  for (var t = e.length; t-- && VL.test(e.charAt(t)); )
    ;
  return t;
}
var XL = YL, ZL = XL, QL = /^\s+/;
function JL(e) {
  return e && e.slice(0, ZL(e) + 1).replace(QL, "");
}
var e3 = JL, t3 = e3, Bp = rr, r3 = Ia, Lp = NaN, n3 = /^[-+]0x[0-9a-f]+$/i, a3 = /^0b[01]+$/i, i3 = /^0o[0-7]+$/i, o3 = parseInt;
function s3(e) {
  if (typeof e == "number")
    return e;
  if (r3(e))
    return Lp;
  if (Bp(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bp(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = t3(e);
  var r = a3.test(e);
  return r || i3.test(e) ? o3(e.slice(2), r ? 2 : 8) : n3.test(e) ? Lp : +e;
}
var l_ = s3, c3 = rr, xl = qL, zp = l_, l3 = "Expected a function", u3 = Math.max, f3 = Math.min;
function d3(e, t, r) {
  var n, a, i, o, s, c, l = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(l3);
  t = zp(t) || 0, c3(r) && (u = !!r.leading, f = "maxWait" in r, i = f ? u3(zp(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function h(_) {
    var S = n, P = a;
    return n = a = void 0, l = _, o = e.apply(P, S), o;
  }
  function y(_) {
    return l = _, s = setTimeout(b, t), u ? h(_) : o;
  }
  function m(_) {
    var S = _ - c, P = _ - l, j = t - S;
    return f ? f3(j, i - P) : j;
  }
  function p(_) {
    var S = _ - c, P = _ - l;
    return c === void 0 || S >= t || S < 0 || f && P >= i;
  }
  function b() {
    var _ = xl();
    if (p(_))
      return w(_);
    s = setTimeout(b, m(_));
  }
  function w(_) {
    return s = void 0, d && n ? h(_) : (n = a = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), l = 0, n = c = a = s = void 0;
  }
  function O() {
    return s === void 0 ? o : w(xl());
  }
  function g() {
    var _ = xl(), S = p(_);
    if (n = arguments, a = this, c = _, S) {
      if (s === void 0)
        return y(c);
      if (f)
        return clearTimeout(s), s = setTimeout(b, t), h(c);
    }
    return s === void 0 && (s = setTimeout(b, t)), o;
  }
  return g.cancel = x, g.flush = O, g;
}
var h3 = d3, p3 = h3, m3 = rr, v3 = "Expected a function";
function y3(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(v3);
  return m3(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), p3(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var g3 = y3;
const u_ = /* @__PURE__ */ Se(g3);
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function Fp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fp(Object(r), !0).forEach(function(n) {
      b3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b3(e, t, r) {
  return t = _3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _3(e) {
  var t = x3(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function x3(e, t) {
  if (Di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w3(e, t) {
  return P3(e) || A3(e, t) || S3(e, t) || O3();
}
function O3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S3(e, t) {
  if (e) {
    if (typeof e == "string") return Wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wp(e, t);
  }
}
function Wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function A3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function P3(e) {
  if (Array.isArray(e)) return e;
}
var wl = /* @__PURE__ */ ve(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, c = s === void 0 ? "100%" : s, l = e.minWidth, u = l === void 0 ? 0 : l, f = e.minHeight, d = e.maxHeight, h = e.children, y = e.debounce, m = y === void 0 ? 0 : y, p = e.id, b = e.className, w = e.onResize, x = e.style, O = x === void 0 ? {} : x, g = Jo(null), _ = Jo();
  _.current = w, gw(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var S = He({
    containerWidth: a.width,
    containerHeight: a.height
  }), P = w3(S, 2), j = P[0], E = P[1], $ = bw(function(C, D) {
    E(function(N) {
      var M = Math.round(C), B = Math.round(D);
      return N.containerWidth === M && N.containerHeight === B ? N : {
        containerWidth: M,
        containerHeight: B
      };
    });
  }, []);
  kr(function() {
    var C = function(H) {
      var T, R = H[0].contentRect, L = R.width, z = R.height;
      $(L, z), (T = _.current) === null || T === void 0 || T.call(_, L, z);
    };
    m > 0 && (C = u_(C, m, {
      trailing: !0,
      leading: !1
    }));
    var D = new ResizeObserver(C), N = g.current.getBoundingClientRect(), M = N.width, B = N.height;
    return $(M, B), D.observe(g.current), function() {
      D.disconnect();
    };
  }, [$, m]);
  var k = xg(function() {
    var C = j.containerWidth, D = j.containerHeight;
    if (C < 0 || D < 0)
      return null;
    Jt(_n(o) || _n(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Jt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var N = _n(o) ? C : o, M = _n(c) ? D : c;
    r && r > 0 && (N ? M = N / r : M && (N = M * r), d && M > d && (M = d)), Jt(N > 0 || M > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, N, M, o, c, u, f, r);
    var B = !Array.isArray(h) && Tr(h.type).endsWith("Chart");
    return A.Children.map(h, function(W) {
      return /* @__PURE__ */ A.isValidElement(W) ? /* @__PURE__ */ Xe(W, Bo({
        width: N,
        height: M
      }, B ? {
        style: Bo({
          height: "100%",
          width: "100%",
          maxHeight: M,
          maxWidth: N
        }, W.props.style)
      } : {})) : W;
    });
  }, [r, h, c, d, f, u, j, o]);
  return /* @__PURE__ */ A.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: oe("recharts-responsive-container", b),
    style: Bo(Bo({}, O), {}, {
      width: o,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: d
    }),
    ref: g
  }, k);
}), Ga = function(t) {
  return null;
};
Ga.displayName = "Cell";
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function Up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Up(Object(r), !0).forEach(function(n) {
      j3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j3(e, t, r) {
  return t = T3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T3(e) {
  var t = $3(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function $3(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ln = {
  widthCache: {},
  cacheCount: 0
}, E3 = 2e3, C3 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Hp = "recharts_measurement_span";
function k3(e) {
  var t = Pu({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Qn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || kt.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = k3(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Ln.widthCache[a])
    return Ln.widthCache[a];
  try {
    var i = document.getElementById(Hp);
    i || (i = document.createElement("span"), i.setAttribute("id", Hp), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Pu(Pu({}, C3), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), c = {
      width: s.width,
      height: s.height
    };
    return Ln.widthCache[a] = c, ++Ln.cacheCount > E3 && (Ln.cacheCount = 0, Ln.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, N3 = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
function ys(e, t) {
  return R3(e) || D3(e, t) || I3(e, t) || M3();
}
function M3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I3(e, t) {
  if (e) {
    if (typeof e == "string") return Gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gp(e, t);
  }
}
function Gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function D3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function R3(e) {
  if (Array.isArray(e)) return e;
}
function B3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z3(n.key), n);
  }
}
function L3(e, t, r) {
  return t && Kp(e.prototype, t), r && Kp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z3(e) {
  var t = F3(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function F3(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Vp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, W3 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, U3 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, f_ = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, H3 = Object.keys(f_), Kn = "NaN";
function G3(e, t) {
  return e * f_[t];
}
var Lo = /* @__PURE__ */ function() {
  function e(t, r) {
    B3(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !W3.test(r) && (this.num = NaN, this.unit = ""), H3.includes(r) && (this.num = G3(t, r), this.unit = "px");
  }
  return L3(e, [{
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
      var n, a = (n = U3.exec(r)) !== null && n !== void 0 ? n : [], i = ys(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function d_(e) {
  if (e.includes(Kn))
    return Kn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = qp.exec(t)) !== null && r !== void 0 ? r : [], a = ys(n, 4), i = a[1], o = a[2], s = a[3], c = Lo.parse(i ?? ""), l = Lo.parse(s ?? ""), u = o === "*" ? c.multiply(l) : c.divide(l);
    if (u.isNaN())
      return Kn;
    t = t.replace(qp, u.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = Vp.exec(t)) !== null && f !== void 0 ? f : [], h = ys(d, 4), y = h[1], m = h[2], p = h[3], b = Lo.parse(y ?? ""), w = Lo.parse(p ?? ""), x = m === "+" ? b.add(w) : b.subtract(w);
    if (x.isNaN())
      return Kn;
    t = t.replace(Vp, x.toString());
  }
  return t;
}
var Yp = /\(([^()]*)\)/;
function K3(e) {
  for (var t = e; t.includes("("); ) {
    var r = Yp.exec(t), n = ys(r, 2), a = n[1];
    t = t.replace(Yp, d_(a));
  }
  return t;
}
function q3(e) {
  var t = e.replace(/\s+/g, "");
  return t = K3(t), t = d_(t), t;
}
function V3(e) {
  try {
    return q3(e);
  } catch {
    return Kn;
  }
}
function Ol(e) {
  var t = V3(e.slice(5, -1));
  return t === Kn ? "" : t;
}
var Y3 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], X3 = ["dx", "dy", "angle", "className", "breakAll"];
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ju.apply(this, arguments);
}
function Xp(e, t) {
  if (e == null) return {};
  var r = Z3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Zp(e, t) {
  return tz(e) || ez(e, t) || J3(e, t) || Q3();
}
function Q3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J3(e, t) {
  if (e) {
    if (typeof e == "string") return Qp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qp(e, t);
  }
}
function Qp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ez(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function tz(e) {
  if (Array.isArray(e)) return e;
}
var h_ = /[ \f\n\r\t\v\u2028\u2029]+/, p_ = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    ae(r) || (n ? i = r.toString().split("") : i = r.toString().split(h_));
    var o = i.map(function(c) {
      return {
        word: c,
        width: Qn(c, a).width
      };
    }), s = n ? 0 : Qn(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, rz = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, c = t.style, l = t.breakAll, u = G(o), f = s, d = function() {
    var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return N.reduce(function(M, B) {
      var W = B.word, H = B.width, T = M[M.length - 1];
      if (T && (a == null || i || T.width + H + n < Number(a)))
        T.words.push(W), T.width += H + n;
      else {
        var R = {
          words: [W],
          width: H
        };
        M.push(R);
      }
      return M;
    }, []);
  }, h = d(r), y = function(N) {
    return N.reduce(function(M, B) {
      return M.width > B.width ? M : B;
    });
  };
  if (!u)
    return h;
  for (var m = "…", p = function(N) {
    var M = f.slice(0, N), B = p_({
      breakAll: l,
      style: c,
      children: M + m
    }).wordsWithComputedWidth, W = d(B), H = W.length > o || y(W).width > Number(a);
    return [H, W];
  }, b = 0, w = f.length - 1, x = 0, O; b <= w && x <= f.length - 1; ) {
    var g = Math.floor((b + w) / 2), _ = g - 1, S = p(_), P = Zp(S, 2), j = P[0], E = P[1], $ = p(g), k = Zp($, 1), C = k[0];
    if (!j && !C && (b = g + 1), j && C && (w = g - 1), !j && C) {
      O = E;
      break;
    }
    x++;
  }
  return O || h;
}, Jp = function(t) {
  var r = ae(t) ? [] : t.toString().split(h_);
  return [{
    words: r
  }];
}, nz = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !kt.isSsr) {
    var c, l, u = p_({
      breakAll: o,
      children: a,
      style: i
    });
    if (u) {
      var f = u.wordsWithComputedWidth, d = u.spaceWidth;
      c = f, l = d;
    } else
      return Jp(a);
    return rz({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, c, l, r, n);
  }
  return Jp(a);
}, em = "#808080", Tn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, l = c === void 0 ? "0.71em" : c, u = t.scaleToFit, f = u === void 0 ? !1 : u, d = t.textAnchor, h = d === void 0 ? "start" : d, y = t.verticalAnchor, m = y === void 0 ? "end" : y, p = t.fill, b = p === void 0 ? em : p, w = Xp(t, Y3), x = xg(function() {
    return nz({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: f,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, f, w.style, w.width]), O = w.dx, g = w.dy, _ = w.angle, S = w.className, P = w.breakAll, j = Xp(w, X3);
  if (!Qe(n) || !Qe(i))
    return null;
  var E = n + (G(O) ? O : 0), $ = i + (G(g) ? g : 0), k;
  switch (m) {
    case "start":
      k = Ol("calc(".concat(l, ")"));
      break;
    case "middle":
      k = Ol("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(l, " / 2))"));
      break;
    default:
      k = Ol("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var C = [];
  if (f) {
    var D = x[0].width, N = w.width;
    C.push("scale(".concat((G(N) ? N / D : 1) / D, ")"));
  }
  return _ && C.push("rotate(".concat(_, ", ").concat(E, ", ").concat($, ")")), C.length && (j.transform = C.join(" ")), /* @__PURE__ */ A.createElement("text", ju({}, Z(j, !0), {
    x: E,
    y: $,
    className: oe("recharts-text", S),
    textAnchor: h,
    fill: b.includes("url") ? em : b
  }), x.map(function(M, B) {
    var W = M.words.join(P ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ A.createElement("tspan", {
        x: E,
        dy: B === 0 ? k : s,
        key: "".concat(W, "-").concat(B)
      }, W)
    );
  }));
};
function tn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function az(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Od(e) {
  let t, r, n;
  e.length !== 2 ? (t = tn, r = (s, c) => tn(e(s), c), n = (s, c) => e(s) - c) : (t = e === tn || e === az ? e : iz, r = e, n = e);
  function a(s, c, l = 0, u = s.length) {
    if (l < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = l + u >>> 1;
        r(s[f], c) < 0 ? l = f + 1 : u = f;
      } while (l < u);
    }
    return l;
  }
  function i(s, c, l = 0, u = s.length) {
    if (l < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = l + u >>> 1;
        r(s[f], c) <= 0 ? l = f + 1 : u = f;
      } while (l < u);
    }
    return l;
  }
  function o(s, c, l = 0, u = s.length) {
    const f = a(s, c, l, u - 1);
    return f > l && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function iz() {
  return 0;
}
function m_(e) {
  return e === null ? NaN : +e;
}
function* oz(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const sz = Od(tn), So = sz.right;
Od(m_).center;
class tm extends Map {
  constructor(t, r = uz) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(rm(this, t));
  }
  has(t) {
    return super.has(rm(this, t));
  }
  set(t, r) {
    return super.set(cz(this, t), r);
  }
  delete(t) {
    return super.delete(lz(this, t));
  }
}
function rm({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function cz({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function lz({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function uz(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function fz(e = tn) {
  if (e === tn) return v_;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function v_(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const dz = Math.sqrt(50), hz = Math.sqrt(10), pz = Math.sqrt(2);
function gs(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= dz ? 10 : i >= hz ? 5 : i >= pz ? 2 : 1;
  let s, c, l;
  return a < 0 ? (l = Math.pow(10, -a) / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = Math.pow(10, a) * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && 0.5 <= r && r < 2 ? gs(e, t, r * 2) : [s, c, l];
}
function Tu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? gs(t, e, r) : gs(e, t, r);
  if (!(i >= a)) return [];
  const s = i - a + 1, c = new Array(s);
  if (n)
    if (o < 0) for (let l = 0; l < s; ++l) c[l] = (i - l) / -o;
    else for (let l = 0; l < s; ++l) c[l] = (i - l) * o;
  else if (o < 0) for (let l = 0; l < s; ++l) c[l] = (a + l) / -o;
  else for (let l = 0; l < s; ++l) c[l] = (a + l) * o;
  return c;
}
function $u(e, t, r) {
  return t = +t, e = +e, r = +r, gs(e, t, r)[2];
}
function Eu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? $u(t, e, r) : $u(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function nm(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function am(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function y_(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? v_ : fz(a); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, l = t - r + 1, u = Math.log(c), f = 0.5 * Math.exp(2 * u / 3), d = 0.5 * Math.sqrt(u * f * (c - f) / c) * (l - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - l * f / c + d)), y = Math.min(n, Math.floor(t + (c - l) * f / c + d));
      y_(e, t, h, y, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (ci(e, r, t), a(e[n], i) > 0 && ci(e, r, n); o < s; ) {
      for (ci(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? ci(e, r, s) : (++s, ci(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function ci(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function mz(e, t, r) {
  if (e = Float64Array.from(oz(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return am(e);
    if (t >= 1) return nm(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = nm(y_(e, i).subarray(0, i + 1)), s = am(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function vz(e, t, r = m_) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function yz(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function Gt(e, t) {
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
function Ur(e, t) {
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
const Cu = Symbol("implicit");
function Sd() {
  var e = new tm(), t = [], r = [], n = Cu;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Cu) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new tm();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Sd(t, r).unknown(n);
  }, Gt.apply(a, arguments), a;
}
function Li() {
  var e = Sd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, c = 0, l = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, h = a < n, y = h ? a : n, m = h ? n : a;
    i = (m - y) / Math.max(1, d - c + l * 2), s && (i = Math.floor(i)), y += (m - y - i * (d - c)) * u, o = i * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = yz(d).map(function(b) {
      return y + i * b;
    });
    return r(h ? p.reverse() : p);
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
    return arguments.length ? (c = Math.min(1, l = +d), f()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (l = +d, f()) : l;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), f()) : u;
  }, e.copy = function() {
    return Li(t(), [n, a]).round(s).paddingInner(c).paddingOuter(l).align(u);
  }, Gt.apply(f(), arguments);
}
function g_(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return g_(t());
  }, e;
}
function wi() {
  return g_(Li.apply(null, arguments).paddingInner(1));
}
function Ad(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function b_(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ao() {
}
var zi = 0.7, bs = 1 / zi, Jn = "\\s*([+-]?\\d+)\\s*", Fi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", fr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gz = /^#([0-9a-f]{3,8})$/, bz = new RegExp(`^rgb\\(${Jn},${Jn},${Jn}\\)$`), _z = new RegExp(`^rgb\\(${fr},${fr},${fr}\\)$`), xz = new RegExp(`^rgba\\(${Jn},${Jn},${Jn},${Fi}\\)$`), wz = new RegExp(`^rgba\\(${fr},${fr},${fr},${Fi}\\)$`), Oz = new RegExp(`^hsl\\(${Fi},${fr},${fr}\\)$`), Sz = new RegExp(`^hsla\\(${Fi},${fr},${fr},${Fi}\\)$`), im = {
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
Ad(Ao, Wi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: om,
  // Deprecated! Use color.formatHex.
  formatHex: om,
  formatHex8: Az,
  formatHsl: Pz,
  formatRgb: sm,
  toString: sm
});
function om() {
  return this.rgb().formatHex();
}
function Az() {
  return this.rgb().formatHex8();
}
function Pz() {
  return __(this).formatHsl();
}
function sm() {
  return this.rgb().formatRgb();
}
function Wi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = gz.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? cm(t) : r === 3 ? new Ot(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = bz.exec(e)) ? new Ot(t[1], t[2], t[3], 1) : (t = _z.exec(e)) ? new Ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xz.exec(e)) ? zo(t[1], t[2], t[3], t[4]) : (t = wz.exec(e)) ? zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Oz.exec(e)) ? fm(t[1], t[2] / 100, t[3] / 100, 1) : (t = Sz.exec(e)) ? fm(t[1], t[2] / 100, t[3] / 100, t[4]) : im.hasOwnProperty(e) ? cm(im[e]) : e === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function cm(e) {
  return new Ot(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ot(e, t, r, n);
}
function jz(e) {
  return e instanceof Ao || (e = Wi(e)), e ? (e = e.rgb(), new Ot(e.r, e.g, e.b, e.opacity)) : new Ot();
}
function ku(e, t, r, n) {
  return arguments.length === 1 ? jz(e) : new Ot(e, t, r, n ?? 1);
}
function Ot(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Ad(Ot, ku, b_(Ao, {
  brighter(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zi : Math.pow(zi, e), new Ot(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(Pn(this.r), Pn(this.g), Pn(this.b), _s(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lm,
  // Deprecated! Use color.formatHex.
  formatHex: lm,
  formatHex8: Tz,
  formatRgb: um,
  toString: um
}));
function lm() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}`;
}
function Tz() {
  return `#${xn(this.r)}${xn(this.g)}${xn(this.b)}${xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function um() {
  const e = _s(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Pn(this.r)}, ${Pn(this.g)}, ${Pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function _s(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xn(e) {
  return e = Pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function fm(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Zt(e, t, r, n);
}
function __(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ao || (e = Wi(e)), !e) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, c = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? i + a : 2 - i - a, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Zt(o, s, c, e.opacity);
}
function $z(e, t, r, n) {
  return arguments.length === 1 ? __(e) : new Zt(e, t, r, n ?? 1);
}
function Zt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Ad(Zt, $z, b_(Ao, {
  brighter(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? zi : Math.pow(zi, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Ot(
      Sl(e >= 240 ? e - 240 : e + 120, a, n),
      Sl(e, a, n),
      Sl(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Zt(dm(this.h), Fo(this.s), Fo(this.l), _s(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = _s(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${dm(this.h)}, ${Fo(this.s) * 100}%, ${Fo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function dm(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Fo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Sl(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Pd = (e) => () => e;
function Ez(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Cz(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function kz(e) {
  return (e = +e) == 1 ? x_ : function(t, r) {
    return r - t ? Cz(t, r, e) : Pd(isNaN(t) ? r : t);
  };
}
function x_(e, t) {
  var r = t - e;
  return r ? Ez(e, r) : Pd(isNaN(e) ? t : e);
}
const hm = function e(t) {
  var r = kz(t);
  function n(a, i) {
    var o = r((a = ku(a)).r, (i = ku(i)).r), s = r(a.g, i.g), c = r(a.b, i.b), l = x_(a.opacity, i.opacity);
    return function(u) {
      return a.r = o(u), a.g = s(u), a.b = c(u), a.opacity = l(u), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function Nz(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function Mz(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Iz(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = Ka(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function Dz(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function xs(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Rz(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = Ka(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var Nu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Al = new RegExp(Nu.source, "g");
function Bz(e) {
  return function() {
    return e;
  };
}
function Lz(e) {
  return function(t) {
    return e(t) + "";
  };
}
function zz(e, t) {
  var r = Nu.lastIndex = Al.lastIndex = 0, n, a, i, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = Nu.exec(e)) && (a = Al.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, c.push({ i: o, x: xs(n, a) })), r = Al.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? c[0] ? Lz(c[0].x) : Bz(t) : (t = c.length, function(l) {
    for (var u = 0, f; u < t; ++u) s[(f = c[u]).i] = f.x(l);
    return s.join("");
  });
}
function Ka(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Pd(t) : (r === "number" ? xs : r === "string" ? (n = Wi(t)) ? (t = n, hm) : zz : t instanceof Wi ? hm : t instanceof Date ? Dz : Mz(t) ? Nz : Array.isArray(t) ? Iz : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rz : xs)(e, t);
}
function jd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Fz(e, t) {
  t === void 0 && (t = e, e = Ka);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function Wz(e) {
  return function() {
    return e;
  };
}
function ws(e) {
  return +e;
}
var pm = [0, 1];
function bt(e) {
  return e;
}
function Mu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Wz(isNaN(t) ? NaN : 0.5);
}
function Uz(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Hz(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = Mu(a, n), i = r(o, i)) : (n = Mu(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function Gz(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = Mu(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = So(e, s, 1, n) - 1;
    return i[c](a[c](s));
  };
}
function Po(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ic() {
  var e = pm, t = pm, r = Ka, n, a, i, o = bt, s, c, l;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== bt && (o = Uz(e[0], e[d - 1])), s = d > 2 ? Gz : Hz, c = l = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (c || (c = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((l || (l = s(t, e.map(n), xs)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ws), u()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = jd, u();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : bt, u()) : o !== bt;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, u()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, h) {
    return n = d, a = h, u();
  };
}
function Td() {
  return Ic()(bt, bt);
}
function Kz(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Os(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function oa(e) {
  return e = Os(Math.abs(e)), e ? e[1] : NaN;
}
function qz(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], c = 0; a > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), i.push(r.substring(a -= s, a + s)), !((c += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Vz(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Yz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ui(e) {
  if (!(t = Yz.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new $d({
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
Ui.prototype = $d.prototype;
function $d(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
$d.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xz(e) {
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
var w_;
function Zz(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (w_ = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Os(e, Math.max(0, t + i - 1))[0];
}
function mm(e, t) {
  var r = Os(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const vm = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Kz,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => mm(e * 100, t),
  r: mm,
  s: Zz,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ym(e) {
  return e;
}
var gm = Array.prototype.map, bm = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qz(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ym : qz(gm.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ym : Vz(gm.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(f) {
    f = Ui(f);
    var d = f.fill, h = f.align, y = f.sign, m = f.symbol, p = f.zero, b = f.width, w = f.comma, x = f.precision, O = f.trim, g = f.type;
    g === "n" ? (w = !0, g = "g") : vm[g] || (x === void 0 && (x = 12), O = !0, g = "g"), (p || d === "0" && h === "=") && (p = !0, d = "0", h = "=");
    var _ = m === "$" ? r : m === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", S = m === "$" ? n : /[%p]/.test(g) ? o : "", P = vm[g], j = /[defgprs%]/.test(g);
    x = x === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function E($) {
      var k = _, C = S, D, N, M;
      if (g === "c")
        C = P($) + C, $ = "";
      else {
        $ = +$;
        var B = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? c : P(Math.abs($), x), O && ($ = Xz($)), B && +$ == 0 && y !== "+" && (B = !1), k = (B ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + k, C = (g === "s" ? bm[8 + w_ / 3] : "") + C + (B && y === "(" ? ")" : ""), j) {
          for (D = -1, N = $.length; ++D < N; )
            if (M = $.charCodeAt(D), 48 > M || M > 57) {
              C = (M === 46 ? a + $.slice(D + 1) : $.slice(D)) + C, $ = $.slice(0, D);
              break;
            }
        }
      }
      w && !p && ($ = t($, 1 / 0));
      var W = k.length + $.length + C.length, H = W < b ? new Array(b - W + 1).join(d) : "";
      switch (w && p && ($ = t(H + $, H.length ? b - C.length : 1 / 0), H = ""), h) {
        case "<":
          $ = k + $ + C + H;
          break;
        case "=":
          $ = k + H + $ + C;
          break;
        case "^":
          $ = H.slice(0, W = H.length >> 1) + k + $ + C + H.slice(W);
          break;
        default:
          $ = H + k + $ + C;
          break;
      }
      return i($);
    }
    return E.toString = function() {
      return f + "";
    }, E;
  }
  function u(f, d) {
    var h = l((f = Ui(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(oa(d) / 3))) * 3, m = Math.pow(10, -y), p = bm[8 + y / 3];
    return function(b) {
      return h(m * b) + p;
    };
  }
  return {
    format: l,
    formatPrefix: u
  };
}
var Wo, Ed, O_;
Jz({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Jz(e) {
  return Wo = Qz(e), Ed = Wo.format, O_ = Wo.formatPrefix, Wo;
}
function e9(e) {
  return Math.max(0, -oa(Math.abs(e)));
}
function t9(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(oa(t) / 3))) * 3 - oa(Math.abs(e)));
}
function r9(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, oa(t) - oa(e)) + 1;
}
function S_(e, t, r, n) {
  var a = Eu(e, t, r), i;
  switch (n = Ui(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = t9(a, o)) && (n.precision = i), O_(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = r9(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = e9(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Ed(n);
}
function on(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Tu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return S_(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], c, l, u = 10;
    for (s < o && (l = o, o = s, s = l, l = a, a = i, i = l); u-- > 0; ) {
      if (l = $u(o, s, r), l === c)
        return n[a] = o, n[i] = s, t(n);
      if (l > 0)
        o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      c = l;
    }
    return e;
  }, e;
}
function Ss() {
  var e = Td();
  return e.copy = function() {
    return Po(e, Ss());
  }, Gt.apply(e, arguments), on(e);
}
function A_(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ws), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return A_(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ws) : [0, 1], on(r);
}
function P_(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function _m(e) {
  return Math.log(e);
}
function xm(e) {
  return Math.exp(e);
}
function n9(e) {
  return -Math.log(-e);
}
function a9(e) {
  return -Math.exp(-e);
}
function i9(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function o9(e) {
  return e === 10 ? i9 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function s9(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function wm(e) {
  return (t, r) => -e(-t, r);
}
function Cd(e) {
  const t = e(_m, xm), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = s9(n), i = o9(n), r()[0] < 0 ? (a = wm(a), i = wm(i), e(n9, a9)) : e(_m, xm), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let l = c[0], u = c[c.length - 1];
    const f = u < l;
    f && ([l, u] = [u, l]);
    let d = a(l), h = a(u), y, m;
    const p = s == null ? 10 : +s;
    let b = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), l > 0) {
        for (; d <= h; ++d)
          for (y = 1; y < n; ++y)
            if (m = d < 0 ? y / i(-d) : y * i(d), !(m < l)) {
              if (m > u) break;
              b.push(m);
            }
      } else for (; d <= h; ++d)
        for (y = n - 1; y >= 1; --y)
          if (m = d > 0 ? y / i(-d) : y * i(d), !(m < l)) {
            if (m > u) break;
            b.push(m);
          }
      b.length * 2 < p && (b = Tu(l, u, p));
    } else
      b = Tu(d, h, Math.min(h - d, p)).map(i);
    return f ? b.reverse() : b;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Ui(c)).precision == null && (c.trim = !0), c = Ed(c)), s === 1 / 0) return c;
    const l = Math.max(1, n * s / t.ticks().length);
    return (u) => {
      let f = u / i(Math.round(a(u)));
      return f * n < n - 0.5 && (f *= n), f <= l ? c(u) : "";
    };
  }, t.nice = () => r(P_(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function j_() {
  const e = Cd(Ic()).domain([1, 10]);
  return e.copy = () => Po(e, j_()).base(e.base()), Gt.apply(e, arguments), e;
}
function Om(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Sm(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function kd(e) {
  var t = 1, r = e(Om(t), Sm(t));
  return r.constant = function(n) {
    return arguments.length ? e(Om(t = +n), Sm(t)) : t;
  }, on(r);
}
function T_() {
  var e = kd(Ic());
  return e.copy = function() {
    return Po(e, T_()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function Am(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function c9(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function l9(e) {
  return e < 0 ? -e * e : e * e;
}
function Nd(e) {
  var t = e(bt, bt), r = 1;
  function n() {
    return r === 1 ? e(bt, bt) : r === 0.5 ? e(c9, l9) : e(Am(r), Am(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, on(t);
}
function Md() {
  var e = Nd(Ic());
  return e.copy = function() {
    return Po(e, Md()).exponent(e.exponent());
  }, Gt.apply(e, arguments), e;
}
function u9() {
  return Md.apply(null, arguments).exponent(0.5);
}
function Pm(e) {
  return Math.sign(e) * e * e;
}
function f9(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function $_() {
  var e = Td(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = f9(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(Pm(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, ws)).map(Pm)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return $_(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Gt.apply(a, arguments), on(a);
}
function E_() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = vz(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[So(r, o)];
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
    return e.sort(tn), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return E_().domain(e).range(t).unknown(n);
  }, Gt.apply(i, arguments);
}
function C_() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(c) {
    return c != null && c <= c ? a[So(n, c, 0, r)] : i;
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
    var l = a.indexOf(c);
    return l < 0 ? [NaN, NaN] : l < 1 ? [e, n[0]] : l >= r ? [n[r - 1], t] : [n[l - 1], n[l]];
  }, o.unknown = function(c) {
    return arguments.length && (i = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return C_().domain([e, t]).range(a).unknown(i);
  }, Gt.apply(on(o), arguments);
}
function k_() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[So(e, i, 0, n)] : r;
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
    return k_().domain(e).range(t).unknown(r);
  }, Gt.apply(a, arguments);
}
const Pl = /* @__PURE__ */ new Date(), jl = /* @__PURE__ */ new Date();
function Je(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), s = a.ceil(i);
    return i - o < s - i ? o : s;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, s) => {
    const c = [];
    if (i = a.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < o) || !(s > 0)) return c;
    let l;
    do
      c.push(l = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (l < i && i < o);
    return c;
  }, a.filter = (i) => Je((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (Pl.setTime(+i), jl.setTime(+o), e(Pl), e(jl), Math.floor(r(Pl, jl))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const As = Je(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
As.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Je((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : As);
As.range;
const Ar = 1e3, Wt = Ar * 60, Pr = Wt * 60, Mr = Pr * 24, Id = Mr * 7, jm = Mr * 30, Tl = Mr * 365, wn = Je((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ar);
}, (e, t) => (t - e) / Ar, (e) => e.getUTCSeconds());
wn.range;
const Dd = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
}, (e, t) => {
  e.setTime(+e + t * Wt);
}, (e, t) => (t - e) / Wt, (e) => e.getMinutes());
Dd.range;
const Rd = Je((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Wt);
}, (e, t) => (t - e) / Wt, (e) => e.getUTCMinutes());
Rd.range;
const Bd = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * Wt);
}, (e, t) => {
  e.setTime(+e + t * Pr);
}, (e, t) => (t - e) / Pr, (e) => e.getHours());
Bd.range;
const Ld = Je((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pr);
}, (e, t) => (t - e) / Pr, (e) => e.getUTCHours());
Ld.range;
const jo = Je(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Wt) / Mr,
  (e) => e.getDate() - 1
);
jo.range;
const Dc = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mr, (e) => e.getUTCDate() - 1);
Dc.range;
const N_ = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Mr, (e) => Math.floor(e / Mr));
N_.range;
function Nn(e) {
  return Je((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Wt) / Id);
}
const Rc = Nn(0), Ps = Nn(1), d9 = Nn(2), h9 = Nn(3), sa = Nn(4), p9 = Nn(5), m9 = Nn(6);
Rc.range;
Ps.range;
d9.range;
h9.range;
sa.range;
p9.range;
m9.range;
function Mn(e) {
  return Je((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Id);
}
const Bc = Mn(0), js = Mn(1), v9 = Mn(2), y9 = Mn(3), ca = Mn(4), g9 = Mn(5), b9 = Mn(6);
Bc.range;
js.range;
v9.range;
y9.range;
ca.range;
g9.range;
b9.range;
const zd = Je((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
zd.range;
const Fd = Je((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Fd.range;
const Ir = Je((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ir.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ir.range;
const Dr = Je((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Dr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Dr.range;
function M_(e, t, r, n, a, i) {
  const o = [
    [wn, 1, Ar],
    [wn, 5, 5 * Ar],
    [wn, 15, 15 * Ar],
    [wn, 30, 30 * Ar],
    [i, 1, Wt],
    [i, 5, 5 * Wt],
    [i, 15, 15 * Wt],
    [i, 30, 30 * Wt],
    [a, 1, Pr],
    [a, 3, 3 * Pr],
    [a, 6, 6 * Pr],
    [a, 12, 12 * Pr],
    [n, 1, Mr],
    [n, 2, 2 * Mr],
    [r, 1, Id],
    [t, 1, jm],
    [t, 3, 3 * jm],
    [e, 1, Tl]
  ];
  function s(l, u, f) {
    const d = u < l;
    d && ([l, u] = [u, l]);
    const h = f && typeof f.range == "function" ? f : c(l, u, f), y = h ? h.range(l, +u + 1) : [];
    return d ? y.reverse() : y;
  }
  function c(l, u, f) {
    const d = Math.abs(u - l) / f, h = Od(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(Eu(l / Tl, u / Tl, f));
    if (h === 0) return As.every(Math.max(Eu(l, u, f), 1));
    const [y, m] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return y.every(m);
  }
  return [s, c];
}
const [_9, x9] = M_(Dr, Fd, Bc, N_, Ld, Rd), [w9, O9] = M_(Ir, zd, Rc, jo, Bd, Dd);
function $l(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function El(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function li(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function S9(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = ui(a), u = fi(a), f = ui(i), d = fi(i), h = ui(o), y = fi(o), m = ui(s), p = fi(s), b = ui(c), w = fi(c), x = {
    a: B,
    A: W,
    b: H,
    B: T,
    c: null,
    d: Nm,
    e: Nm,
    f: q9,
    g: nF,
    G: iF,
    H: H9,
    I: G9,
    j: K9,
    L: I_,
    m: V9,
    M: Y9,
    p: R,
    q: L,
    Q: Dm,
    s: Rm,
    S: X9,
    u: Z9,
    U: Q9,
    V: J9,
    w: eF,
    W: tF,
    x: null,
    X: null,
    y: rF,
    Y: aF,
    Z: oF,
    "%": Im
  }, O = {
    a: z,
    A: q,
    b: Y,
    B: J,
    c: null,
    d: Mm,
    e: Mm,
    f: uF,
    g: _F,
    G: wF,
    H: sF,
    I: cF,
    j: lF,
    L: R_,
    m: fF,
    M: dF,
    p: ee,
    q: X,
    Q: Dm,
    s: Rm,
    S: hF,
    u: pF,
    U: mF,
    V: vF,
    w: yF,
    W: gF,
    x: null,
    X: null,
    y: bF,
    Y: xF,
    Z: OF,
    "%": Im
  }, g = {
    a: E,
    A: $,
    b: k,
    B: C,
    c: D,
    d: Cm,
    e: Cm,
    f: z9,
    g: Em,
    G: $m,
    H: km,
    I: km,
    j: D9,
    L: L9,
    m: I9,
    M: R9,
    p: j,
    q: M9,
    Q: W9,
    s: U9,
    S: B9,
    u: $9,
    U: E9,
    V: C9,
    w: T9,
    W: k9,
    x: N,
    X: M,
    y: Em,
    Y: $m,
    Z: N9,
    "%": F9
  };
  x.x = _(r, x), x.X = _(n, x), x.c = _(t, x), O.x = _(r, O), O.X = _(n, O), O.c = _(t, O);
  function _(U, V) {
    return function(re) {
      var I = [], le = -1, K = 0, je = U.length, Ce, Ve, ar;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++le < je; )
        U.charCodeAt(le) === 37 && (I.push(U.slice(K, le)), (Ve = Tm[Ce = U.charAt(++le)]) != null ? Ce = U.charAt(++le) : Ve = Ce === "e" ? " " : "0", (ar = V[Ce]) && (Ce = ar(re, Ve)), I.push(Ce), K = le + 1);
      return I.push(U.slice(K, le)), I.join("");
    };
  }
  function S(U, V) {
    return function(re) {
      var I = li(1900, void 0, 1), le = P(I, U, re += "", 0), K, je;
      if (le != re.length) return null;
      if ("Q" in I) return new Date(I.Q);
      if ("s" in I) return new Date(I.s * 1e3 + ("L" in I ? I.L : 0));
      if (V && !("Z" in I) && (I.Z = 0), "p" in I && (I.H = I.H % 12 + I.p * 12), I.m === void 0 && (I.m = "q" in I ? I.q : 0), "V" in I) {
        if (I.V < 1 || I.V > 53) return null;
        "w" in I || (I.w = 1), "Z" in I ? (K = El(li(I.y, 0, 1)), je = K.getUTCDay(), K = je > 4 || je === 0 ? js.ceil(K) : js(K), K = Dc.offset(K, (I.V - 1) * 7), I.y = K.getUTCFullYear(), I.m = K.getUTCMonth(), I.d = K.getUTCDate() + (I.w + 6) % 7) : (K = $l(li(I.y, 0, 1)), je = K.getDay(), K = je > 4 || je === 0 ? Ps.ceil(K) : Ps(K), K = jo.offset(K, (I.V - 1) * 7), I.y = K.getFullYear(), I.m = K.getMonth(), I.d = K.getDate() + (I.w + 6) % 7);
      } else ("W" in I || "U" in I) && ("w" in I || (I.w = "u" in I ? I.u % 7 : "W" in I ? 1 : 0), je = "Z" in I ? El(li(I.y, 0, 1)).getUTCDay() : $l(li(I.y, 0, 1)).getDay(), I.m = 0, I.d = "W" in I ? (I.w + 6) % 7 + I.W * 7 - (je + 5) % 7 : I.w + I.U * 7 - (je + 6) % 7);
      return "Z" in I ? (I.H += I.Z / 100 | 0, I.M += I.Z % 100, El(I)) : $l(I);
    };
  }
  function P(U, V, re, I) {
    for (var le = 0, K = V.length, je = re.length, Ce, Ve; le < K; ) {
      if (I >= je) return -1;
      if (Ce = V.charCodeAt(le++), Ce === 37) {
        if (Ce = V.charAt(le++), Ve = g[Ce in Tm ? V.charAt(le++) : Ce], !Ve || (I = Ve(U, re, I)) < 0) return -1;
      } else if (Ce != re.charCodeAt(I++))
        return -1;
    }
    return I;
  }
  function j(U, V, re) {
    var I = l.exec(V.slice(re));
    return I ? (U.p = u.get(I[0].toLowerCase()), re + I[0].length) : -1;
  }
  function E(U, V, re) {
    var I = h.exec(V.slice(re));
    return I ? (U.w = y.get(I[0].toLowerCase()), re + I[0].length) : -1;
  }
  function $(U, V, re) {
    var I = f.exec(V.slice(re));
    return I ? (U.w = d.get(I[0].toLowerCase()), re + I[0].length) : -1;
  }
  function k(U, V, re) {
    var I = b.exec(V.slice(re));
    return I ? (U.m = w.get(I[0].toLowerCase()), re + I[0].length) : -1;
  }
  function C(U, V, re) {
    var I = m.exec(V.slice(re));
    return I ? (U.m = p.get(I[0].toLowerCase()), re + I[0].length) : -1;
  }
  function D(U, V, re) {
    return P(U, t, V, re);
  }
  function N(U, V, re) {
    return P(U, r, V, re);
  }
  function M(U, V, re) {
    return P(U, n, V, re);
  }
  function B(U) {
    return o[U.getDay()];
  }
  function W(U) {
    return i[U.getDay()];
  }
  function H(U) {
    return c[U.getMonth()];
  }
  function T(U) {
    return s[U.getMonth()];
  }
  function R(U) {
    return a[+(U.getHours() >= 12)];
  }
  function L(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function z(U) {
    return o[U.getUTCDay()];
  }
  function q(U) {
    return i[U.getUTCDay()];
  }
  function Y(U) {
    return c[U.getUTCMonth()];
  }
  function J(U) {
    return s[U.getUTCMonth()];
  }
  function ee(U) {
    return a[+(U.getUTCHours() >= 12)];
  }
  function X(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var V = _(U += "", x);
      return V.toString = function() {
        return U;
      }, V;
    },
    parse: function(U) {
      var V = S(U += "", !1);
      return V.toString = function() {
        return U;
      }, V;
    },
    utcFormat: function(U) {
      var V = _(U += "", O);
      return V.toString = function() {
        return U;
      }, V;
    },
    utcParse: function(U) {
      var V = S(U += "", !0);
      return V.toString = function() {
        return U;
      }, V;
    }
  };
}
var Tm = { "-": "", _: " ", 0: "0" }, at = /^\s*\d+/, A9 = /^%/, P9 = /[\\^$*+?|[\]().{}]/g;
function me(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function j9(e) {
  return e.replace(P9, "\\$&");
}
function ui(e) {
  return new RegExp("^(?:" + e.map(j9).join("|") + ")", "i");
}
function fi(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function T9(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function $9(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function E9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function C9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function k9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function $m(e, t, r) {
  var n = at.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Em(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function N9(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function M9(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function I9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Cm(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function D9(e, t, r) {
  var n = at.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function km(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function R9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function B9(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function L9(e, t, r) {
  var n = at.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function z9(e, t, r) {
  var n = at.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function F9(e, t, r) {
  var n = A9.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function W9(e, t, r) {
  var n = at.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function U9(e, t, r) {
  var n = at.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Nm(e, t) {
  return me(e.getDate(), t, 2);
}
function H9(e, t) {
  return me(e.getHours(), t, 2);
}
function G9(e, t) {
  return me(e.getHours() % 12 || 12, t, 2);
}
function K9(e, t) {
  return me(1 + jo.count(Ir(e), e), t, 3);
}
function I_(e, t) {
  return me(e.getMilliseconds(), t, 3);
}
function q9(e, t) {
  return I_(e, t) + "000";
}
function V9(e, t) {
  return me(e.getMonth() + 1, t, 2);
}
function Y9(e, t) {
  return me(e.getMinutes(), t, 2);
}
function X9(e, t) {
  return me(e.getSeconds(), t, 2);
}
function Z9(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Q9(e, t) {
  return me(Rc.count(Ir(e) - 1, e), t, 2);
}
function D_(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? sa(e) : sa.ceil(e);
}
function J9(e, t) {
  return e = D_(e), me(sa.count(Ir(e), e) + (Ir(e).getDay() === 4), t, 2);
}
function eF(e) {
  return e.getDay();
}
function tF(e, t) {
  return me(Ps.count(Ir(e) - 1, e), t, 2);
}
function rF(e, t) {
  return me(e.getFullYear() % 100, t, 2);
}
function nF(e, t) {
  return e = D_(e), me(e.getFullYear() % 100, t, 2);
}
function aF(e, t) {
  return me(e.getFullYear() % 1e4, t, 4);
}
function iF(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? sa(e) : sa.ceil(e), me(e.getFullYear() % 1e4, t, 4);
}
function oF(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + me(t / 60 | 0, "0", 2) + me(t % 60, "0", 2);
}
function Mm(e, t) {
  return me(e.getUTCDate(), t, 2);
}
function sF(e, t) {
  return me(e.getUTCHours(), t, 2);
}
function cF(e, t) {
  return me(e.getUTCHours() % 12 || 12, t, 2);
}
function lF(e, t) {
  return me(1 + Dc.count(Dr(e), e), t, 3);
}
function R_(e, t) {
  return me(e.getUTCMilliseconds(), t, 3);
}
function uF(e, t) {
  return R_(e, t) + "000";
}
function fF(e, t) {
  return me(e.getUTCMonth() + 1, t, 2);
}
function dF(e, t) {
  return me(e.getUTCMinutes(), t, 2);
}
function hF(e, t) {
  return me(e.getUTCSeconds(), t, 2);
}
function pF(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function mF(e, t) {
  return me(Bc.count(Dr(e) - 1, e), t, 2);
}
function B_(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ca(e) : ca.ceil(e);
}
function vF(e, t) {
  return e = B_(e), me(ca.count(Dr(e), e) + (Dr(e).getUTCDay() === 4), t, 2);
}
function yF(e) {
  return e.getUTCDay();
}
function gF(e, t) {
  return me(js.count(Dr(e) - 1, e), t, 2);
}
function bF(e, t) {
  return me(e.getUTCFullYear() % 100, t, 2);
}
function _F(e, t) {
  return e = B_(e), me(e.getUTCFullYear() % 100, t, 2);
}
function xF(e, t) {
  return me(e.getUTCFullYear() % 1e4, t, 4);
}
function wF(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ca(e) : ca.ceil(e), me(e.getUTCFullYear() % 1e4, t, 4);
}
function OF() {
  return "+0000";
}
function Im() {
  return "%";
}
function Dm(e) {
  return +e;
}
function Rm(e) {
  return Math.floor(+e / 1e3);
}
var zn, L_, z_;
SF({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function SF(e) {
  return zn = S9(e), L_ = zn.format, zn.parse, z_ = zn.utcFormat, zn.utcParse, zn;
}
function AF(e) {
  return new Date(e);
}
function PF(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Wd(e, t, r, n, a, i, o, s, c, l) {
  var u = Td(), f = u.invert, d = u.domain, h = l(".%L"), y = l(":%S"), m = l("%I:%M"), p = l("%I %p"), b = l("%a %d"), w = l("%b %d"), x = l("%B"), O = l("%Y");
  function g(_) {
    return (c(_) < _ ? h : s(_) < _ ? y : o(_) < _ ? m : i(_) < _ ? p : n(_) < _ ? a(_) < _ ? b : w : r(_) < _ ? x : O)(_);
  }
  return u.invert = function(_) {
    return new Date(f(_));
  }, u.domain = function(_) {
    return arguments.length ? d(Array.from(_, PF)) : d().map(AF);
  }, u.ticks = function(_) {
    var S = d();
    return e(S[0], S[S.length - 1], _ ?? 10);
  }, u.tickFormat = function(_, S) {
    return S == null ? g : l(S);
  }, u.nice = function(_) {
    var S = d();
    return (!_ || typeof _.range != "function") && (_ = t(S[0], S[S.length - 1], _ ?? 10)), _ ? d(P_(S, _)) : u;
  }, u.copy = function() {
    return Po(u, Wd(e, t, r, n, a, i, o, s, c, l));
  }, u;
}
function jF() {
  return Gt.apply(Wd(w9, O9, Ir, zd, Rc, jo, Bd, Dd, wn, L_).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function TF() {
  return Gt.apply(Wd(_9, x9, Dr, Fd, Bc, Dc, Ld, Rd, wn, z_).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Lc() {
  var e = 0, t = 1, r, n, a, i, o = bt, s = !1, c;
  function l(f) {
    return f == null || isNaN(f = +f) ? c : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, s ? Math.max(0, Math.min(1, f)) : f));
  }
  l.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), l) : [e, t];
  }, l.clamp = function(f) {
    return arguments.length ? (s = !!f, l) : s;
  }, l.interpolator = function(f) {
    return arguments.length ? (o = f, l) : o;
  };
  function u(f) {
    return function(d) {
      var h, y;
      return arguments.length ? ([h, y] = d, o = f(h, y), l) : [o(0), o(1)];
    };
  }
  return l.range = u(Ka), l.rangeRound = u(jd), l.unknown = function(f) {
    return arguments.length ? (c = f, l) : c;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), l;
  };
}
function sn(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function F_() {
  var e = on(Lc()(bt));
  return e.copy = function() {
    return sn(e, F_());
  }, Ur.apply(e, arguments);
}
function W_() {
  var e = Cd(Lc()).domain([1, 10]);
  return e.copy = function() {
    return sn(e, W_()).base(e.base());
  }, Ur.apply(e, arguments);
}
function U_() {
  var e = kd(Lc());
  return e.copy = function() {
    return sn(e, U_()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Ud() {
  var e = Nd(Lc());
  return e.copy = function() {
    return sn(e, Ud()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function $F() {
  return Ud.apply(null, arguments).exponent(0.5);
}
function H_() {
  var e = [], t = bt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((So(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(tn), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => mz(e, i / n));
  }, r.copy = function() {
    return H_(t).domain(e);
  }, Ur.apply(r, arguments);
}
function zc() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, s, c, l = bt, u, f = !1, d;
  function h(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +u(m)) - i) * (n * m < n * i ? s : c), l(f ? Math.max(0, Math.min(1, m)) : m));
  }
  h.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, a = u(e = +e), i = u(t = +t), o = u(r = +r), s = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(m) {
    return arguments.length ? (f = !!m, h) : f;
  }, h.interpolator = function(m) {
    return arguments.length ? (l = m, h) : l;
  };
  function y(m) {
    return function(p) {
      var b, w, x;
      return arguments.length ? ([b, w, x] = p, l = Fz(m, [b, w, x]), h) : [l(0), l(0.5), l(1)];
    };
  }
  return h.range = y(Ka), h.rangeRound = y(jd), h.unknown = function(m) {
    return arguments.length ? (d = m, h) : d;
  }, function(m) {
    return u = m, a = m(e), i = m(t), o = m(r), s = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h;
  };
}
function G_() {
  var e = on(zc()(bt));
  return e.copy = function() {
    return sn(e, G_());
  }, Ur.apply(e, arguments);
}
function K_() {
  var e = Cd(zc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return sn(e, K_()).base(e.base());
  }, Ur.apply(e, arguments);
}
function q_() {
  var e = kd(zc());
  return e.copy = function() {
    return sn(e, q_()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Hd() {
  var e = Nd(zc());
  return e.copy = function() {
    return sn(e, Hd()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function EF() {
  return Hd.apply(null, arguments).exponent(0.5);
}
const Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Li,
  scaleDiverging: G_,
  scaleDivergingLog: K_,
  scaleDivergingPow: Hd,
  scaleDivergingSqrt: EF,
  scaleDivergingSymlog: q_,
  scaleIdentity: A_,
  scaleImplicit: Cu,
  scaleLinear: Ss,
  scaleLog: j_,
  scaleOrdinal: Sd,
  scalePoint: wi,
  scalePow: Md,
  scaleQuantile: E_,
  scaleQuantize: C_,
  scaleRadial: $_,
  scaleSequential: F_,
  scaleSequentialLog: W_,
  scaleSequentialPow: Ud,
  scaleSequentialQuantile: H_,
  scaleSequentialSqrt: $F,
  scaleSequentialSymlog: U_,
  scaleSqrt: u9,
  scaleSymlog: T_,
  scaleThreshold: k_,
  scaleTime: jF,
  scaleUtc: TF,
  tickFormat: S_
}, Symbol.toStringTag, { value: "Module" }));
var CF = Ia;
function kF(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (s === void 0 ? o === o && !CF(o) : r(o, s)))
      var s = o, c = i;
  }
  return c;
}
var Fc = kF;
function NF(e, t) {
  return e > t;
}
var V_ = NF, MF = Fc, IF = V_, DF = Ha;
function RF(e) {
  return e && e.length ? MF(e, DF, IF) : void 0;
}
var BF = RF;
const Qr = /* @__PURE__ */ Se(BF);
function LF(e, t) {
  return e < t;
}
var Y_ = LF, zF = Fc, FF = Y_, WF = Ha;
function UF(e) {
  return e && e.length ? zF(e, WF, FF) : void 0;
}
var HF = UF;
const Wc = /* @__PURE__ */ Se(HF);
var GF = wc, KF = vr, qF = t_, VF = xt;
function YF(e, t) {
  var r = VF(e) ? GF : qF;
  return r(e, KF(t));
}
var XF = YF, ZF = bd, QF = XF;
function JF(e, t) {
  return ZF(QF(e, t), 1);
}
var e8 = JF;
const t8 = /* @__PURE__ */ Se(e8);
var r8 = gd;
function n8(e, t) {
  return r8(e, t);
}
var a8 = n8;
const pr = /* @__PURE__ */ Se(a8);
var qa = 1e9, i8 = {
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
}, Kd, Le = !0, Ut = "[DecimalError] ", jn = Ut + "Invalid argument: ", Gd = Ut + "Exponent out of range: ", Va = Math.floor, yn = Math.pow, o8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ct, rt = 1e7, Re = 7, X_ = 9007199254740991, Ts = Va(X_ / Re), Q = {};
Q.absoluteValue = Q.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
Q.comparedTo = Q.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
Q.decimalPlaces = Q.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Re;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
Q.dividedBy = Q.div = function(e) {
  return $r(this, new this.constructor(e));
};
Q.dividedToIntegerBy = Q.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ee($r(t, new r(e), 0, 1), r.precision);
};
Q.equals = Q.eq = function(e) {
  return !this.cmp(e);
};
Q.exponent = function() {
  return qe(this);
};
Q.greaterThan = Q.gt = function(e) {
  return this.cmp(e) > 0;
};
Q.greaterThanOrEqualTo = Q.gte = function(e) {
  return this.cmp(e) >= 0;
};
Q.isInteger = Q.isint = function() {
  return this.e > this.d.length - 2;
};
Q.isNegative = Q.isneg = function() {
  return this.s < 0;
};
Q.isPositive = Q.ispos = function() {
  return this.s > 0;
};
Q.isZero = function() {
  return this.s === 0;
};
Q.lessThan = Q.lt = function(e) {
  return this.cmp(e) < 0;
};
Q.lessThanOrEqualTo = Q.lte = function(e) {
  return this.cmp(e) < 1;
};
Q.logarithm = Q.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ct)) throw Error(Ut + "NaN");
  if (r.s < 1) throw Error(Ut + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ct) ? new n(0) : (Le = !1, t = $r(Hi(r, i), Hi(e, i), i), Le = !0, Ee(t, a));
};
Q.minus = Q.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? J_(t, e) : Z_(t, (e.s = -e.s, e));
};
Q.modulo = Q.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(Ut + "NaN");
  return r.s ? (Le = !1, t = $r(r, e, 0, 1).times(e), Le = !0, r.minus(t)) : Ee(new n(r), a);
};
Q.naturalExponential = Q.exp = function() {
  return Q_(this);
};
Q.naturalLogarithm = Q.ln = function() {
  return Hi(this);
};
Q.negated = Q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
Q.plus = Q.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Z_(t, e) : J_(t, (e.s = -e.s, e));
};
Q.precision = Q.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(jn + e);
  if (t = qe(a) + 1, n = a.d.length - 1, r = n * Re + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
Q.squareRoot = Q.sqrt = function() {
  var e, t, r, n, a, i, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(Ut + "NaN");
  }
  for (e = qe(s), Le = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = cr(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = Va((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(a.toString()), r = c.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus($r(s, i, o + 2)).times(0.5), cr(i.d).slice(0, o) === (t = cr(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (Ee(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Le = !0, Ee(n, r);
};
Q.times = Q.mul = function(e) {
  var t, r, n, a, i, o, s, c, l, u = this, f = u.constructor, d = u.d, h = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (e.s *= u.s, r = u.e + e.e, c = d.length, l = h.length, c < l && (i = d, d = h, h = i, o = c, c = l, l = o), i = [], o = c + l, n = o; n--; ) i.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, a = c + n; a > n; )
      s = i[a] + h[n] * d[a - n - 1] + t, i[a--] = s % rt | 0, t = s / rt | 0;
    i[a] = (i[a] + t) % rt | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Le ? Ee(e, f.precision) : e;
};
Q.toDecimalPlaces = Q.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (mr(e, 0, qa), t === void 0 ? t = n.rounding : mr(t, 0, 8), Ee(r, e + qe(r) + 1, t));
};
Q.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = $n(n, !0) : (mr(e, 0, qa), t === void 0 ? t = a.rounding : mr(t, 0, 8), n = Ee(new a(n), e + 1, t), r = $n(n, !0, e + 1)), r;
};
Q.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? $n(a) : (mr(e, 0, qa), t === void 0 ? t = i.rounding : mr(t, 0, 8), n = Ee(new i(a), e + qe(a) + 1, t), r = $n(n.abs(), !1, e + qe(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
Q.toInteger = Q.toint = function() {
  var e = this, t = e.constructor;
  return Ee(new t(e), qe(e) + 1, t.rounding);
};
Q.toNumber = function() {
  return +this;
};
Q.toPower = Q.pow = function(e) {
  var t, r, n, a, i, o, s = this, c = s.constructor, l = 12, u = +(e = new c(e));
  if (!e.s) return new c(Ct);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(Ut + "Infinity");
    return s;
  }
  if (s.eq(Ct)) return s;
  if (n = c.precision, e.eq(Ct)) return Ee(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = u < 0 ? -u : u) <= X_) {
      for (a = new c(Ct), t = Math.ceil(n / Re + 4), Le = !1; r % 2 && (a = a.times(s), zm(a.d, t)), r = Va(r / 2), r !== 0; )
        s = s.times(s), zm(s.d, t);
      return Le = !0, e.s < 0 ? new c(Ct).div(a) : Ee(a, n);
    }
  } else if (i < 0) throw Error(Ut + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Le = !1, a = e.times(Hi(s, n + l)), Le = !0, a = Q_(a), a.s = i, a;
};
Q.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = qe(a), n = $n(a, r <= i.toExpNeg || r >= i.toExpPos)) : (mr(e, 1, qa), t === void 0 ? t = i.rounding : mr(t, 0, 8), a = Ee(new i(a), e, t), r = qe(a), n = $n(a, e <= r || r <= i.toExpNeg, e)), n;
};
Q.toSignificantDigits = Q.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (mr(e, 1, qa), t === void 0 ? t = n.rounding : mr(t, 0, 8)), Ee(new n(r), e, t);
};
Q.toString = Q.valueOf = Q.val = Q.toJSON = Q[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = qe(e), r = e.constructor;
  return $n(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Z_(e, t) {
  var r, n, a, i, o, s, c, l, u = e.constructor, f = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), Le ? Ee(t, f) : t;
  if (c = e.d, l = t.d, o = e.e, a = t.e, c = c.slice(), i = o - a, i) {
    for (i < 0 ? (n = c, i = -i, s = l.length) : (n = l, a = o, s = c.length), o = Math.ceil(f / Re), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, i = l.length, s - i < 0 && (i = s, n = l, l = c, c = n), r = 0; i; )
    r = (c[--i] = c[i] + l[i] + r) / rt | 0, c[i] %= rt;
  for (r && (c.unshift(r), ++a), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = a, Le ? Ee(t, f) : t;
}
function mr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(jn + e);
}
function cr(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = Re - n.length, r && (i += Xr(r)), i += n;
    o = e[t], n = o + "", r = Re - n.length, r && (i += Xr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var $r = /* @__PURE__ */ function() {
  function e(n, a) {
    var i, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * a + o, n[s] = i % rt | 0, o = i / rt | 0;
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
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * rt + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var s, c, l, u, f, d, h, y, m, p, b, w, x, O, g, _, S, P, j = n.constructor, E = n.s == a.s ? 1 : -1, $ = n.d, k = a.d;
    if (!n.s) return new j(n);
    if (!a.s) throw Error(Ut + "Division by zero");
    for (c = n.e - a.e, S = k.length, g = $.length, h = new j(E), y = h.d = [], l = 0; k[l] == ($[l] || 0); ) ++l;
    if (k[l] > ($[l] || 0) && --c, i == null ? w = i = j.precision : o ? w = i + (qe(n) - qe(a)) + 1 : w = i, w < 0) return new j(0);
    if (w = w / Re + 2 | 0, l = 0, S == 1)
      for (u = 0, k = k[0], w++; (l < g || u) && w--; l++)
        x = u * rt + ($[l] || 0), y[l] = x / k | 0, u = x % k | 0;
    else {
      for (u = rt / (k[0] + 1) | 0, u > 1 && (k = e(k, u), $ = e($, u), S = k.length, g = $.length), O = S, m = $.slice(0, S), p = m.length; p < S; ) m[p++] = 0;
      P = k.slice(), P.unshift(0), _ = k[0], k[1] >= rt / 2 && ++_;
      do
        u = 0, s = t(k, m, S, p), s < 0 ? (b = m[0], S != p && (b = b * rt + (m[1] || 0)), u = b / _ | 0, u > 1 ? (u >= rt && (u = rt - 1), f = e(k, u), d = f.length, p = m.length, s = t(f, m, d, p), s == 1 && (u--, r(f, S < d ? P : k, d))) : (u == 0 && (s = u = 1), f = k.slice()), d = f.length, d < p && f.unshift(0), r(m, f, p), s == -1 && (p = m.length, s = t(k, m, S, p), s < 1 && (u++, r(m, S < p ? P : k, p))), p = m.length) : s === 0 && (u++, m = [0]), y[l++] = u, s && m[0] ? m[p++] = $[O] || 0 : (m = [$[O]], p = 1);
      while ((O++ < g || m[0] !== void 0) && w--);
    }
    return y[0] || y.shift(), h.e = c, Ee(h, o ? i + qe(h) + 1 : i);
  };
}();
function Q_(e, t) {
  var r, n, a, i, o, s, c = 0, l = 0, u = e.constructor, f = u.precision;
  if (qe(e) > 16) throw Error(Gd + qe(e));
  if (!e.s) return new u(Ct);
  for (Le = !1, s = f, o = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(o), l += 5;
  for (n = Math.log(yn(2, l)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new u(Ct), u.precision = s; ; ) {
    if (a = Ee(a.times(e), s), r = r.times(++c), o = i.plus($r(a, r, s)), cr(o.d).slice(0, s) === cr(i.d).slice(0, s)) {
      for (; l--; ) i = Ee(i.times(i), s);
      return u.precision = f, t == null ? (Le = !0, Ee(i, f)) : i;
    }
    i = o;
  }
}
function qe(e) {
  for (var t = e.e * Re, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Cl(e, t, r) {
  if (t > e.LN10.sd())
    throw Le = !0, r && (e.precision = r), Error(Ut + "LN10 precision limit exceeded");
  return Ee(new e(e.LN10), t);
}
function Xr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Hi(e, t) {
  var r, n, a, i, o, s, c, l, u, f = 1, d = 10, h = e, y = h.d, m = h.constructor, p = m.precision;
  if (h.s < 1) throw Error(Ut + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Ct)) return new m(0);
  if (t == null ? (Le = !1, l = p) : l = t, h.eq(10))
    return t == null && (Le = !0), Cl(m, l);
  if (l += d, m.precision = l, r = cr(y), n = r.charAt(0), i = qe(h), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = cr(h.d), n = r.charAt(0), f++;
    i = qe(h), n > 1 ? (h = new m("0." + r), i++) : h = new m(n + "." + r.slice(1));
  } else
    return c = Cl(m, l + 2, p).times(i + ""), h = Hi(new m(n + "." + r.slice(1)), l - d).plus(c), m.precision = p, t == null ? (Le = !0, Ee(h, p)) : h;
  for (s = o = h = $r(h.minus(Ct), h.plus(Ct), l), u = Ee(h.times(h), l), a = 3; ; ) {
    if (o = Ee(o.times(u), l), c = s.plus($r(o, new m(a), l)), cr(c.d).slice(0, l) === cr(s.d).slice(0, l))
      return s = s.times(2), i !== 0 && (s = s.plus(Cl(m, l + 2, p).times(i + ""))), s = $r(s, new m(f), l), m.precision = p, t == null ? (Le = !0, Ee(s, p)) : s;
    s = c, a += 2;
  }
}
function Lm(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = Va(r / Re), e.d = [], n = (r + 1) % Re, r < 0 && (n += Re), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= Re; n < a; ) e.d.push(+t.slice(n, n += Re));
      t = t.slice(n), n = Re - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Le && (e.e > Ts || e.e < -Ts)) throw Error(Gd + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ee(e, t, r) {
  var n, a, i, o, s, c, l, u, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += Re, a = t, l = f[u = 0];
  else {
    if (u = Math.ceil((n + 1) / Re), i = f.length, u >= i) return e;
    for (l = i = f[u], o = 1; i >= 10; i /= 10) o++;
    n %= Re, a = n - Re + o;
  }
  if (r !== void 0 && (i = yn(10, o - a - 1), s = l / i % 10 | 0, c = t < 0 || f[u + 1] !== void 0 || l % i, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? l / yn(10, o - a) : 0 : f[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (i = qe(e), f.length = 1, t = t - i - 1, f[0] = yn(10, (Re - t % Re) % Re), e.e = Va(-t / Re) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = u, i = 1, u--) : (f.length = u + 1, i = yn(10, Re - n), f[u] = a > 0 ? (l / yn(10, o - a) % yn(10, a) | 0) * i : 0), c)
    for (; ; )
      if (u == 0) {
        (f[0] += i) == rt && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[u] += i, f[u] != rt) break;
        f[u--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Le && (e.e > Ts || e.e < -Ts))
    throw Error(Gd + qe(e));
  return e;
}
function J_(e, t) {
  var r, n, a, i, o, s, c, l, u, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Le ? Ee(t, h) : t;
  if (c = e.d, f = t.d, n = t.e, l = e.e, c = c.slice(), o = l - n, o) {
    for (u = o < 0, u ? (r = c, o = -o, s = f.length) : (r = f, n = l, s = c.length), a = Math.max(Math.ceil(h / Re), s) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = c.length, s = f.length, u = a < s, u && (s = a), a = 0; a < s; a++)
      if (c[a] != f[a]) {
        u = c[a] < f[a];
        break;
      }
    o = 0;
  }
  for (u && (r = c, c = f, f = r, t.s = -t.s), s = c.length, a = f.length - s; a > 0; --a) c[s++] = 0;
  for (a = f.length; a > o; ) {
    if (c[--a] < f[a]) {
      for (i = a; i && c[--i] === 0; ) c[i] = rt - 1;
      --c[i], c[a] += rt;
    }
    c[a] -= f[a];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Le ? Ee(t, h) : t) : new d(0);
}
function $n(e, t, r) {
  var n, a = qe(e), i = cr(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Xr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + Xr(-a - 1) + i, r && (n = r - o) > 0 && (i += Xr(n))) : a >= o ? (i += Xr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + Xr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += Xr(n))), e.s < 0 ? "-" + i : i;
}
function zm(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function ex(e) {
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
        throw Error(jn + i);
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
      return Lm(o, i.toString());
    } else if (typeof i != "string")
      throw Error(jn + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, o8.test(i)) Lm(o, i);
    else throw Error(jn + i);
  }
  if (a.prototype = Q, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = ex, a.config = a.set = s8, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function s8(e) {
  if (!e || typeof e != "object")
    throw Error(Ut + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    qa,
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
      if (Va(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(jn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(jn + r + ": " + n);
  return this;
}
var Kd = ex(i8);
Ct = new Kd(1);
const Te = Kd;
function c8(e) {
  return d8(e) || f8(e) || u8(e) || l8();
}
function l8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u8(e, t) {
  if (e) {
    if (typeof e == "string") return Iu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Iu(e, t);
  }
}
function f8(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function d8(e) {
  if (Array.isArray(e)) return Iu(e);
}
function Iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var h8 = function(t) {
  return t;
}, tx = {}, rx = function(t) {
  return t === tx;
}, Fm = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && rx(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, p8 = function e(t, r) {
  return t === 1 ? r : Fm(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== tx;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Fm(function() {
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      var u = a.map(function(f) {
        return rx(f) ? c.shift() : f;
      });
      return r.apply(void 0, c8(u).concat(c));
    }));
  });
}, Uc = function(t) {
  return p8(t.length, t);
}, Du = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, m8 = Uc(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), v8 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return h8;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, i.apply(void 0, arguments));
  };
}, Ru = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, nx = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, c) {
      return s === r[c];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function y8(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Te(e).abs().log(10).toNumber()) + 1, t;
}
function g8(e, t, r) {
  for (var n = new Te(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var b8 = Uc(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), _8 = Uc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), x8 = Uc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Hc = {
  rangeStep: g8,
  getDigitCount: y8,
  interpolateNumber: b8,
  uninterpolateNumber: _8,
  uninterpolateTruncation: x8
};
function Bu(e) {
  return S8(e) || O8(e) || ax(e) || w8();
}
function w8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O8(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function S8(e) {
  if (Array.isArray(e)) return Lu(e);
}
function Gi(e, t) {
  return j8(e) || P8(e, t) || ax(e, t) || A8();
}
function A8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ax(e, t) {
  if (e) {
    if (typeof e == "string") return Lu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lu(e, t);
  }
}
function Lu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function P8(e, t) {
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
function j8(e) {
  if (Array.isArray(e)) return e;
}
function ix(e) {
  var t = Gi(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function ox(e, t, r) {
  if (e.lte(0))
    return new Te(0);
  var n = Hc.getDigitCount(e.toNumber()), a = new Te(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new Te(Math.ceil(i.div(o).toNumber())).add(r).mul(o), c = s.mul(a);
  return t ? c : new Te(Math.ceil(c));
}
function T8(e, t, r) {
  var n = 1, a = new Te(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new Te(10).pow(Hc.getDigitCount(e) - 1), a = new Te(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Te(Math.floor(e)));
  } else e === 0 ? a = new Te(Math.floor((t - 1) / 2)) : r || (a = new Te(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = v8(m8(function(c) {
    return a.add(new Te(c - o).mul(n)).toNumber();
  }), Du);
  return s(0, t);
}
function sx(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Te(0),
      tickMin: new Te(0),
      tickMax: new Te(0)
    };
  var i = ox(new Te(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new Te(0) : (o = new Te(e).add(t).div(2), o = o.sub(new Te(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), c = Math.ceil(new Te(t).sub(o).div(i).toNumber()), l = s + c + 1;
  return l > r ? sx(e, t, r, n, a + 1) : (l < r && (c = t > 0 ? c + (r - l) : c, s = t > 0 ? s : s + (r - l)), {
    step: i,
    tickMin: o.sub(new Te(s).mul(i)),
    tickMax: o.add(new Te(c).mul(i))
  });
}
function $8(e) {
  var t = Gi(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = ix([r, n]), c = Gi(s, 2), l = c[0], u = c[1];
  if (l === -1 / 0 || u === 1 / 0) {
    var f = u === 1 / 0 ? [l].concat(Bu(Du(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Bu(Du(0, a - 1).map(function() {
      return -1 / 0;
    })), [u]);
    return r > n ? Ru(f) : f;
  }
  if (l === u)
    return T8(l, a, i);
  var d = sx(l, u, o, i), h = d.step, y = d.tickMin, m = d.tickMax, p = Hc.rangeStep(y, m.add(new Te(0.1).mul(h)), h);
  return r > n ? Ru(p) : p;
}
function E8(e, t) {
  var r = Gi(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = ix([n, a]), s = Gi(o, 2), c = s[0], l = s[1];
  if (c === -1 / 0 || l === 1 / 0)
    return [n, a];
  if (c === l)
    return [c];
  var u = Math.max(t, 2), f = ox(new Te(l).sub(c).div(u - 1), i, 0), d = [].concat(Bu(Hc.rangeStep(new Te(c), new Te(l).sub(new Te(0.99).mul(f)), f)), [l]);
  return n > a ? Ru(d) : d;
}
var C8 = nx($8), k8 = nx(E8), N8 = process.env.NODE_ENV === "production", kl = "Invariant failed";
function St(e, t) {
  if (N8)
    throw new Error(kl);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(kl, ": ").concat(r) : kl;
  throw new Error(n);
}
var M8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function $s() {
  return $s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $s.apply(this, arguments);
}
function I8(e, t) {
  return L8(e) || B8(e, t) || R8(e, t) || D8();
}
function D8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R8(e, t) {
  if (e) {
    if (typeof e == "string") return Wm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wm(e, t);
  }
}
function Wm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function B8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function L8(e) {
  if (Array.isArray(e)) return e;
}
function z8(e, t) {
  if (e == null) return {};
  var r = F8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function W8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ux(n.key), n);
  }
}
function H8(e, t, r) {
  return t && U8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function G8(e, t, r) {
  return t = Es(t), K8(e, cx() ? Reflect.construct(t, r || [], Es(e).constructor) : t.apply(e, r));
}
function K8(e, t) {
  if (t && (la(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q8(e);
}
function q8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cx = function() {
    return !!e;
  })();
}
function Es(e) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Es(e);
}
function V8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zu(e, t);
}
function zu(e, t) {
  return zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zu(e, t);
}
function lx(e, t, r) {
  return t = ux(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ux(e) {
  var t = Y8(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function Y8(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ya = /* @__PURE__ */ function(e) {
  function t() {
    return W8(this, t), G8(this, t, arguments);
  }
  return V8(t, e), H8(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, c = n.data, l = n.dataPointFormatter, u = n.xAxis, f = n.yAxis, d = z8(n, M8), h = Z(d, !1);
      this.props.direction === "x" && u.type !== "number" && (process.env.NODE_ENV !== "production" ? St(!1, 'ErrorBar requires Axis type property to be "number".') : St());
      var y = c.map(function(m) {
        var p = l(m, s), b = p.x, w = p.y, x = p.value, O = p.errorVal;
        if (!O)
          return null;
        var g = [], _, S;
        if (Array.isArray(O)) {
          var P = I8(O, 2);
          _ = P[0], S = P[1];
        } else
          _ = S = O;
        if (i === "vertical") {
          var j = u.scale, E = w + a, $ = E + o, k = E - o, C = j(x - _), D = j(x + S);
          g.push({
            x1: D,
            y1: $,
            x2: D,
            y2: k
          }), g.push({
            x1: C,
            y1: E,
            x2: D,
            y2: E
          }), g.push({
            x1: C,
            y1: $,
            x2: C,
            y2: k
          });
        } else if (i === "horizontal") {
          var N = f.scale, M = b + a, B = M - o, W = M + o, H = N(x - _), T = N(x + S);
          g.push({
            x1: B,
            y1: T,
            x2: W,
            y2: T
          }), g.push({
            x1: M,
            y1: H,
            x2: M,
            y2: T
          }), g.push({
            x1: B,
            y1: H,
            x2: W,
            y2: H
          });
        }
        return /* @__PURE__ */ A.createElement(ie, $s({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(R) {
            return "".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2);
          }))
        }, h), g.map(function(R) {
          return /* @__PURE__ */ A.createElement("line", $s({}, R, {
            key: "line-".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2)
          }));
        }));
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(A.Component);
lx(Ya, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
lx(Ya, "displayName", "ErrorBar");
function Ki(e) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
function Um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), !0).forEach(function(n) {
      X8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X8(e, t, r) {
  return t = Z8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z8(e) {
  var t = Q8(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fx = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = ct(r, ur);
  if (!o)
    return null;
  var s = ur.defaultProps, c = s !== void 0 ? dn(dn({}, s), o.props) : {}, l;
  return o.props && o.props.payload ? l = o.props && o.props.payload : i === "children" ? l = (n || []).reduce(function(u, f) {
    var d = f.item, h = f.props, y = h.sectors || h.data || [];
    return u.concat(y.map(function(m) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: m.name,
        color: m.fill,
        payload: m
      };
    }));
  }, []) : l = (n || []).map(function(u) {
    var f = u.item, d = f.type.defaultProps, h = d !== void 0 ? dn(dn({}, d), f.props) : {}, y = h.dataKey, m = h.name, p = h.legendType, b = h.hide;
    return {
      inactive: b,
      dataKey: y,
      type: c.iconType || p || "square",
      color: qd(f),
      value: m || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), dn(dn(dn({}, c), ur.getWithHeight(o, a)), {}, {
    payload: l,
    item: o
  });
};
function qi(e) {
  "@babel/helpers - typeof";
  return qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qi(e);
}
function Hm(e) {
  return r4(e) || t4(e) || e4(e) || J8();
}
function J8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e4(e, t) {
  if (e) {
    if (typeof e == "string") return Fu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fu(e, t);
  }
}
function t4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function r4(e) {
  if (Array.isArray(e)) return Fu(e);
}
function Fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gm(e, t) {
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
    t % 2 ? Gm(Object(r), !0).forEach(function(n) {
      ea(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ea(e, t, r) {
  return t = n4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n4(e) {
  var t = a4(e, "string");
  return qi(t) == "symbol" ? t : t + "";
}
function a4(e, t) {
  if (qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function he(e, t, r) {
  return ae(e) || ae(t) ? r : Qe(t) ? At(e, t, r) : te(t) ? t(e) : r;
}
function Oi(e, t, r, n) {
  var a = t8(e, function(s) {
    return he(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return G(s) || parseFloat(s);
    });
    return i.length ? [Wc(i), Qr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !ae(s);
  }) : a;
  return o.map(function(s) {
    return Qe(s) || s instanceof Date ? s : "";
  });
}
var i4 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var c = i.range, l = 0; l < s; l++) {
      var u = l > 0 ? a[l - 1].coordinate : a[s - 1].coordinate, f = a[l].coordinate, d = l >= s - 1 ? a[0].coordinate : a[l + 1].coordinate, h = void 0;
      if (yt(f - u) !== yt(d - f)) {
        var y = [];
        if (yt(d - f) === yt(c[1] - c[0])) {
          h = d;
          var m = f + c[1] - c[0];
          y[0] = Math.min(m, (m + u) / 2), y[1] = Math.max(m, (m + u) / 2);
        } else {
          h = u;
          var p = d + c[1] - c[0];
          y[0] = Math.min(f, (p + f) / 2), y[1] = Math.max(f, (p + f) / 2);
        }
        var b = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
        if (t > b[0] && t <= b[1] || t >= y[0] && t <= y[1]) {
          o = a[l].index;
          break;
        }
      } else {
        var w = Math.min(u, d), x = Math.max(u, d);
        if (t > (w + f) / 2 && t <= (x + f) / 2) {
          o = a[l].index;
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
}, qd = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ue(Ue({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, c;
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
}, o4 = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), c = 0, l = s.length; c < l; c++)
    for (var u = i[s[c]].stackGroups, f = Object.keys(u), d = 0, h = f.length; d < h; d++) {
      var y = u[f[d]], m = y.items, p = y.cateAxisId, b = m.filter(function(S) {
        return Tr(S.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var w = b[0].type.defaultProps, x = w !== void 0 ? Ue(Ue({}, w), b[0].props) : b[0].props, O = x.barSize, g = x[p];
        o[g] || (o[g] = []);
        var _ = ae(O) ? r : O;
        o[g].push({
          item: b[0],
          stackList: b.slice(1),
          barSize: ae(_) ? void 0 : gt(_, n, 0)
        });
      }
    }
  return o;
}, s4 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var l = gt(r, a, 0, !0), u, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = a / c, y = o.reduce(function(O, g) {
      return O + g.barSize || 0;
    }, 0);
    y += (c - 1) * l, y >= a && (y -= (c - 1) * l, l = 0), y >= a && h > 0 && (d = !0, h *= 0.9, y = c * h);
    var m = (a - y) / 2 >> 0, p = {
      offset: m - l,
      size: 0
    };
    u = o.reduce(function(O, g) {
      var _ = {
        item: g.item,
        position: {
          offset: p.offset + p.size + l,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : g.barSize
        }
      }, S = [].concat(Hm(O), [_]);
      return p = S[S.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(P) {
        S.push({
          item: P,
          position: p
        });
      }), S;
    }, f);
  } else {
    var b = gt(n, a, 0, !0);
    a - 2 * b - (c - 1) * l <= 0 && (l = 0);
    var w = (a - 2 * b - (c - 1) * l) / c;
    w > 1 && (w >>= 0);
    var x = s === +s ? Math.min(w, s) : w;
    u = o.reduce(function(O, g, _) {
      var S = [].concat(Hm(O), [{
        item: g.item,
        position: {
          offset: b + (w + l) * _ + (w - x) / 2,
          size: x
        }
      }]);
      return g.stackList && g.stackList.length && g.stackList.forEach(function(P) {
        S.push({
          item: P,
          position: S[S.length - 1].position
        });
      }), S;
    }, f);
  }
  return u;
}, c4 = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), l = fx({
    children: i,
    legendWidth: c
  });
  if (l) {
    var u = a || {}, f = u.width, d = u.height, h = l.align, y = l.verticalAlign, m = l.layout;
    if ((m === "vertical" || m === "horizontal" && y === "middle") && h !== "center" && G(t[h]))
      return Ue(Ue({}, t), {}, ea({}, h, t[h] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && h === "center") && y !== "middle" && G(t[y]))
      return Ue(Ue({}, t), {}, ea({}, y, t[y] + (d || 0)));
  }
  return t;
}, l4 = function(t, r, n) {
  return ae(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, dx = function(t, r, n, a, i) {
  var o = r.props.children, s = ft(o, Ya).filter(function(l) {
    return l4(a, i, l.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(l) {
      return l.props.dataKey;
    });
    return t.reduce(function(l, u) {
      var f = he(u, n);
      if (ae(f)) return l;
      var d = Array.isArray(f) ? [Wc(f), Qr(f)] : [f, f], h = c.reduce(function(y, m) {
        var p = he(u, m, 0), b = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), w = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(b, y[0]), Math.max(w, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], l[0]), Math.max(h[1], l[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, u4 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return dx(t, s, n, i, a);
  }).filter(function(s) {
    return !ae(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, hx = function(t, r, n, a, i) {
  var o = r.map(function(c) {
    var l = c.props.dataKey;
    return n === "number" && l && dx(t, c, l, a) || Oi(t, l, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, l) {
        return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(c, l) {
    for (var u = 0, f = l.length; u < f; u++)
      s[l[u]] || (s[l[u]] = !0, c.push(l[u]));
    return c;
  }, []);
}, px = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, mx = function(t, r, n, a) {
  if (a)
    return t.map(function(c) {
      return c.coordinate;
    });
  var i, o, s = t.map(function(c) {
    return c.coordinate === r && (i = !0), c.coordinate === n && (o = !0), c.coordinate;
  });
  return i || s.push(r), o || s.push(n), s;
}, jr = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, l = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / c : 0;
  if (l = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? yt(s[0] - s[1]) * 2 * l : l, r && (t.ticks || t.niceTicks)) {
    var u = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + l,
        value: f,
        offset: l
      };
    });
    return u.filter(function(f) {
      return !an(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: a(f) + l,
      value: f,
      index: d,
      offset: l
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: a(f) + l,
      value: f,
      offset: l
    };
  }) : a.domain().map(function(f, d) {
    return {
      coordinate: a(f) + l,
      value: i ? i[f] : f,
      index: d,
      offset: l
    };
  });
}, Nl = /* @__PURE__ */ new WeakMap(), Uo = function(t, r) {
  if (typeof r != "function")
    return t;
  Nl.has(t) || Nl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Nl.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, vx = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Li(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Ss(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: wi(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Li(),
      realScaleType: "band"
    } : {
      scale: Ss(),
      realScaleType: "linear"
    };
  if (nn(a)) {
    var c = "scale".concat(Pc(a));
    return {
      scale: (Bm[c] || wi)(),
      realScaleType: Bm[c] ? c : "point"
    };
  }
  return te(a) ? {
    scale: a
  } : {
    scale: wi(),
    realScaleType: "point"
  };
}, Km = 1e-4, yx = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - Km, o = Math.max(a[0], a[1]) + Km, s = t(r[0]), c = t(r[n - 1]);
    (s < i || s > o || c < i || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, f4 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, d4 = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, h4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var c = an(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        c >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + c, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
      }
}, p4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = an(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, m4 = {
  sign: h4,
  // @ts-expect-error definitelytyped types are incorrect
  expand: Gk,
  // @ts-expect-error definitelytyped types are incorrect
  none: ta,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Kk,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: qk,
  positive: p4
}, v4 = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = m4[n], o = Hk().keys(a).value(function(s, c) {
    return +he(s, c, 0);
  }).order(du).offset(i);
  return o(t);
}, y4 = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, c = {}, l = s.reduce(function(f, d) {
    var h, y = (h = d.type) !== null && h !== void 0 && h.defaultProps ? Ue(Ue({}, d.type.defaultProps), d.props) : d.props, m = y.stackId, p = y.hide;
    if (p)
      return f;
    var b = y[n], w = f[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Qe(m)) {
      var x = w.stackGroups[m] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      x.items.push(d), w.hasStack = !0, w.stackGroups[m] = x;
    } else
      w.stackGroups[Wr("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return Ue(Ue({}, f), {}, ea({}, b, w));
  }, c), u = {};
  return Object.keys(l).reduce(function(f, d) {
    var h = l[d];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(m, p) {
        var b = h.stackGroups[p];
        return Ue(Ue({}, m), {}, ea({}, p, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: v4(t, b.items, i)
        }));
      }, y);
    }
    return Ue(Ue({}, f), {}, ea({}, d, h));
  }, u);
}, gx = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var l = t.domain();
    if (!l.length)
      return null;
    var u = C8(l, i, s);
    return t.domain([Wc(u), Qr(u)]), {
      niceTicks: u
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = k8(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function ua(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ae(a[t.dataKey])) {
      var s = rs(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var c = he(a, ae(o) ? t.dataKey : o);
  return ae(c) ? null : t.scale(c);
}
var qm = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var c = he(o, r.dataKey, r.domain[s]);
  return ae(c) ? null : r.scale(c) - i / 2 + a;
}, g4 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, b4 = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ue(Ue({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Qe(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, _4 = function(t) {
  return t.reduce(function(r, n) {
    return [Wc(n.concat([r[0]]).filter(G)), Qr(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, bx = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, c = s.reduce(function(l, u) {
      var f = _4(u.slice(r, n + 1));
      return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], a[0]), Math.max(c[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, Vm = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ym = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Wu = function(t, r, n) {
  if (te(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (G(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Vm.test(t[0])) {
    var i = +Vm.exec(t[0])[1];
    a[0] = r[0] - i;
  } else te(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (G(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Ym.test(t[1])) {
    var o = +Ym.exec(t[1])[1];
    a[1] = r[1] + o;
  } else te(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Cs = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = xd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = i.length; s < c; s++) {
      var l = i[s], u = i[s - 1];
      o = Math.min((l.coordinate || 0) - (u.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Xm = function(t, r, n) {
  return !t || !t.length || pr(t, At(n, "type.defaultProps.domain")) ? r : t;
}, _x = function(t, r) {
  var n = t.type.defaultProps ? Ue(Ue({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, l = n.chartType, u = n.hide;
  return Ue(Ue({}, Z(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: qd(t),
    value: he(r, a),
    type: c,
    payload: r,
    chartType: l,
    hide: u
  });
};
function Vi(e) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e);
}
function Zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zm(Object(r), !0).forEach(function(n) {
      xx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xx(e, t, r) {
  return t = x4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x4(e) {
  var t = w4(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function w4(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O4(e, t) {
  return j4(e) || P4(e, t) || A4(e, t) || S4();
}
function S4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A4(e, t) {
  if (e) {
    if (typeof e == "string") return Qm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qm(e, t);
  }
}
function Qm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function P4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function j4(e) {
  if (Array.isArray(e)) return e;
}
var ks = Math.PI / 180, T4 = function(t) {
  return t * 180 / Math.PI;
}, ge = function(t, r, n, a) {
  return {
    x: t + Math.cos(-ks * a) * n,
    y: r + Math.sin(-ks * a) * n
  };
}, wx = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Ox = function(t, r, n, a, i) {
  var o = t.width, s = t.height, c = t.startAngle, l = t.endAngle, u = gt(t.cx, o, o / 2), f = gt(t.cy, s, s / 2), d = wx(o, s, n), h = gt(t.innerRadius, d, 0), y = gt(t.outerRadius, d, d * 0.8), m = Object.keys(r);
  return m.reduce(function(p, b) {
    var w = r[b], x = w.domain, O = w.reversed, g;
    if (ae(w.range))
      a === "angleAxis" ? g = [c, l] : a === "radiusAxis" && (g = [h, y]), O && (g = [g[1], g[0]]);
    else {
      g = w.range;
      var _ = g, S = O4(_, 2);
      c = S[0], l = S[1];
    }
    var P = vx(w, i), j = P.realScaleType, E = P.scale;
    E.domain(x).range(g), yx(E);
    var $ = gx(E, wr(wr({}, w), {}, {
      realScaleType: j
    })), k = wr(wr(wr({}, w), $), {}, {
      range: g,
      radius: y,
      realScaleType: j,
      scale: E,
      cx: u,
      cy: f,
      innerRadius: h,
      outerRadius: y,
      startAngle: c,
      endAngle: l
    });
    return wr(wr({}, p), {}, xx({}, b, k));
  }, {});
}, $4 = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, E4 = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = $4({
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
  var c = (n - i) / s, l = Math.acos(c);
  return a > o && (l = 2 * Math.PI - l), {
    radius: s,
    angle: T4(l),
    angleInRadian: l
  };
}, C4 = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, k4 = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, Jm = function(t, r) {
  var n = t.x, a = t.y, i = E4({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, c = r.innerRadius, l = r.outerRadius;
  if (o < c || o > l)
    return !1;
  if (o === 0)
    return !0;
  var u = C4(r), f = u.startAngle, d = u.endAngle, h = s, y;
  if (f <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < f; )
      h += 360;
    y = h >= f && h <= d;
  } else {
    for (; h > f; )
      h -= 360;
    for (; h < d; )
      h += 360;
    y = h >= d && h <= f;
  }
  return y ? wr(wr({}, r), {}, {
    radius: o,
    angle: k4(h, r)
  }) : null;
}, Sx = function(t) {
  return !/* @__PURE__ */ Qt(t) && !te(t) && typeof t != "boolean" ? t.className : "";
};
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
var N4 = ["offset"];
function M4(e) {
  return B4(e) || R4(e) || D4(e) || I4();
}
function I4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D4(e, t) {
  if (e) {
    if (typeof e == "string") return Uu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uu(e, t);
  }
}
function R4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function B4(e) {
  if (Array.isArray(e)) return Uu(e);
}
function Uu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function L4(e, t) {
  if (e == null) return {};
  var r = z4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function z4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ev(Object(r), !0).forEach(function(n) {
      F4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F4(e, t, r) {
  return t = W4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W4(e) {
  var t = U4(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function U4(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xi() {
  return Xi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xi.apply(this, arguments);
}
var H4 = function(t) {
  var r = t.value, n = t.formatter, a = ae(t.children) ? r : t.children;
  return te(n) ? n(a) : a;
}, G4 = function(t, r) {
  var n = yt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, K4 = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, c = i, l = c.cx, u = c.cy, f = c.innerRadius, d = c.outerRadius, h = c.startAngle, y = c.endAngle, m = c.clockWise, p = (f + d) / 2, b = G4(h, y), w = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = h + w * o, O = m) : a === "insideEnd" ? (x = y - w * o, O = !m) : a === "end" && (x = y + w * o, O = m), O = b <= 0 ? O : !O;
  var g = ge(l, u, p, x), _ = ge(l, u, p, x + (O ? 1 : -1) * 359), S = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(_.x, ",").concat(_.y), P = ae(t.id) ? Wr("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ A.createElement("text", Xi({}, n, {
    dominantBaseline: "central",
    className: oe("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("path", {
    id: P,
    d: S
  })), /* @__PURE__ */ A.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, q4 = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, s = i.cy, c = i.innerRadius, l = i.outerRadius, u = i.startAngle, f = i.endAngle, d = (u + f) / 2;
  if (a === "outside") {
    var h = ge(o, s, l + n, d), y = h.x, m = h.y;
    return {
      x: y,
      y: m,
      textAnchor: y >= o ? "start" : "end",
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
  var p = (c + l) / 2, b = ge(o, s, p, d), w = b.x, x = b.y;
  return {
    x: w,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, V4 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, s = o.x, c = o.y, l = o.width, u = o.height, f = u >= 0 ? 1 : -1, d = f * a, h = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", m = l >= 0 ? 1 : -1, p = m * a, b = m > 0 ? "end" : "start", w = m > 0 ? "start" : "end";
  if (i === "top") {
    var x = {
      x: s + l / 2,
      y: c - f * a,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Ye(Ye({}, x), n ? {
      height: Math.max(c - n.y, 0),
      width: l
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: s + l / 2,
      y: c + u + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Ye(Ye({}, O), n ? {
      height: Math.max(n.y + n.height - (c + u), 0),
      width: l
    } : {});
  }
  if (i === "left") {
    var g = {
      x: s - p,
      y: c + u / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return Ye(Ye({}, g), n ? {
      width: Math.max(g.x - n.x, 0),
      height: u
    } : {});
  }
  if (i === "right") {
    var _ = {
      x: s + l + p,
      y: c + u / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return Ye(Ye({}, _), n ? {
      width: Math.max(n.x + n.width - _.x, 0),
      height: u
    } : {});
  }
  var S = n ? {
    width: l,
    height: u
  } : {};
  return i === "insideLeft" ? Ye({
    x: s + p,
    y: c + u / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, S) : i === "insideRight" ? Ye({
    x: s + l - p,
    y: c + u / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, S) : i === "insideTop" ? Ye({
    x: s + l / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, S) : i === "insideBottom" ? Ye({
    x: s + l / 2,
    y: c + u - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, S) : i === "insideTopLeft" ? Ye({
    x: s + p,
    y: c + d,
    textAnchor: w,
    verticalAnchor: y
  }, S) : i === "insideTopRight" ? Ye({
    x: s + l - p,
    y: c + d,
    textAnchor: b,
    verticalAnchor: y
  }, S) : i === "insideBottomLeft" ? Ye({
    x: s + p,
    y: c + u - d,
    textAnchor: w,
    verticalAnchor: h
  }, S) : i === "insideBottomRight" ? Ye({
    x: s + l - p,
    y: c + u - d,
    textAnchor: b,
    verticalAnchor: h
  }, S) : Da(i) && (G(i.x) || _n(i.x)) && (G(i.y) || _n(i.y)) ? Ye({
    x: s + gt(i.x, l),
    y: c + gt(i.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, S) : Ye({
    x: s + l / 2,
    y: c + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, S);
}, Y4 = function(t) {
  return "cx" in t && G(t.cx);
};
function nt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = L4(e, N4), a = Ye({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, c = a.children, l = a.content, u = a.className, f = u === void 0 ? "" : u, d = a.textBreakAll;
  if (!i || ae(s) && ae(c) && !/* @__PURE__ */ Qt(l) && !te(l))
    return null;
  if (/* @__PURE__ */ Qt(l))
    return /* @__PURE__ */ Xe(l, a);
  var h;
  if (te(l)) {
    if (h = /* @__PURE__ */ wg(l, a), /* @__PURE__ */ Qt(h))
      return h;
  } else
    h = H4(a);
  var y = Y4(i), m = Z(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return K4(a, h, m);
  var p = y ? q4(a) : V4(a);
  return /* @__PURE__ */ A.createElement(Tn, Xi({
    className: oe("recharts-label", f)
  }, m, p, {
    breakAll: d
  }), h);
}
nt.displayName = "Label";
var Ax = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, l = t.innerRadius, u = t.outerRadius, f = t.x, d = t.y, h = t.top, y = t.left, m = t.width, p = t.height, b = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (G(m) && G(p)) {
    if (G(f) && G(d))
      return {
        x: f,
        y: d,
        width: m,
        height: p
      };
    if (G(h) && G(y))
      return {
        x: h,
        y,
        width: m,
        height: p
      };
  }
  return G(f) && G(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : G(r) && G(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: l || 0,
    outerRadius: u || c || s || 0,
    clockWise: b
  } : t.viewBox ? t.viewBox : {};
}, X4 = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ A.createElement(nt, {
    key: "label-implicit",
    viewBox: r
  }) : Qe(t) ? /* @__PURE__ */ A.createElement(nt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Qt(t) ? t.type === nt ? /* @__PURE__ */ Xe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ A.createElement(nt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : te(t) ? /* @__PURE__ */ A.createElement(nt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Da(t) ? /* @__PURE__ */ A.createElement(nt, Xi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, Z4 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = Ax(t), o = ft(a, nt).map(function(c, l) {
    return /* @__PURE__ */ Xe(c, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(l)
    });
  });
  if (!n)
    return o;
  var s = X4(t.label, r || i);
  return [s].concat(M4(o));
};
nt.parseViewBox = Ax;
nt.renderCallByParent = Z4;
function Q4(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Px = Q4;
const jx = /* @__PURE__ */ Se(Px);
function Zi(e) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e);
}
var J4 = ["valueAccessor"], eW = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function tW(e) {
  return iW(e) || aW(e) || nW(e) || rW();
}
function rW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nW(e, t) {
  if (e) {
    if (typeof e == "string") return Hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hu(e, t);
  }
}
function aW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function iW(e) {
  if (Array.isArray(e)) return Hu(e);
}
function Hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ns() {
  return Ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ns.apply(this, arguments);
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
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      oW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oW(e, t, r) {
  return t = sW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sW(e) {
  var t = cW(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function cW(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nv(e, t) {
  if (e == null) return {};
  var r = lW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function lW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var uW = function(t) {
  return Array.isArray(t.value) ? jx(t.value) : t.value;
};
function Pt(e) {
  var t = e.valueAccessor, r = t === void 0 ? uW : t, n = nv(e, J4), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, l = nv(n, eW);
  return !a || !a.length ? null : /* @__PURE__ */ A.createElement(ie, {
    className: "recharts-label-list"
  }, a.map(function(u, f) {
    var d = ae(i) ? r(u, f) : he(u && u.payload, i), h = ae(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ A.createElement(nt, Ns({}, Z(u, !0), l, h, {
      parentViewBox: u.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: nt.parseViewBox(ae(o) ? u : rv(rv({}, u), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Pt.displayName = "LabelList";
function fW(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ A.createElement(Pt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ A.isValidElement(e) || te(e) ? /* @__PURE__ */ A.createElement(Pt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Da(e) ? /* @__PURE__ */ A.createElement(Pt, Ns({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function dW(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = ft(n, Pt).map(function(o, s) {
    return /* @__PURE__ */ Xe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = fW(e.label, t);
  return [i].concat(tW(a));
}
Pt.renderCallByParent = dW;
function Qi(e) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e);
}
function Gu() {
  return Gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gu.apply(this, arguments);
}
function av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(r), !0).forEach(function(n) {
      hW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hW(e, t, r) {
  return t = pW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pW(e) {
  var t = mW(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function mW(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vW = function(t, r) {
  var n = yt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, Ho = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, l = t.cornerIsExternal, u = c * (s ? 1 : -1) + a, f = Math.asin(c / u) / ks, d = l ? i : i + o * f, h = ge(r, n, u, d), y = ge(r, n, a, d), m = l ? i - o * f : i, p = ge(r, n, u * Math.cos(f * ks), m);
  return {
    center: h,
    circleTangency: y,
    lineTangency: p,
    theta: f
  };
}, Tx = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, c = vW(o, s), l = o + c, u = ge(r, n, i, o), f = ge(r, n, i, l), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > l), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var h = ge(r, n, a, o), y = ge(r, n, a, l);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= l), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, yW = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, l = t.startAngle, u = t.endAngle, f = yt(u - l), d = Ho({
    cx: r,
    cy: n,
    radius: i,
    angle: l,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), h = d.circleTangency, y = d.lineTangency, m = d.theta, p = Ho({
    cx: r,
    cy: n,
    radius: i,
    angle: u,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), b = p.circleTangency, w = p.lineTangency, x = p.theta, O = c ? Math.abs(l - u) : Math.abs(l - u) - m - x;
  if (O < 0)
    return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Tx({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: l,
      endAngle: u
    });
  var g = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (a > 0) {
    var _ = Ho({
      cx: r,
      cy: n,
      radius: a,
      angle: l,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), S = _.circleTangency, P = _.lineTangency, j = _.theta, E = Ho({
      cx: r,
      cy: n,
      radius: a,
      angle: u,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), $ = E.circleTangency, k = E.lineTangency, C = E.theta, D = c ? Math.abs(l - u) : Math.abs(l - u) - j - C;
    if (D < 0 && o === 0)
      return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(k.x, ",").concat(k.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(D > 180), ",").concat(+(f > 0), ",").concat(S.x, ",").concat(S.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else
    g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, gW = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, $x = function(t) {
  var r = iv(iv({}, gW), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, l = r.cornerIsExternal, u = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || u === f)
    return null;
  var h = oe("recharts-sector", d), y = o - i, m = gt(s, y, 0, !0), p;
  return m > 0 && Math.abs(u - f) < 360 ? p = yW({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(m, y / 2),
    forceCornerRadius: c,
    cornerIsExternal: l,
    startAngle: u,
    endAngle: f
  }) : p = Tx({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: u,
    endAngle: f
  }), /* @__PURE__ */ A.createElement("path", Gu({}, Z(r, !0), {
    className: h,
    d: p,
    role: "img"
  }));
};
function Ji(e) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e);
}
function Ku() {
  return Ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ku.apply(this, arguments);
}
function ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ov(Object(r), !0).forEach(function(n) {
      bW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bW(e, t, r) {
  return t = _W(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _W(e) {
  var t = xW(e, "string");
  return Ji(t) == "symbol" ? t : t + "";
}
function xW(e, t) {
  if (Ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cv = {
  curveBasisClosed: Nk,
  curveBasisOpen: Mk,
  curveBasis: kk,
  curveBumpX: gk,
  curveBumpY: bk,
  curveLinearClosed: Ik,
  curveLinear: Tc,
  curveMonotoneX: Dk,
  curveMonotoneY: Rk,
  curveNatural: Bk,
  curveStep: Lk,
  curveStepAfter: Fk,
  curveStepBefore: zk
}, Go = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, di = function(t) {
  return t.x;
}, hi = function(t) {
  return t.y;
}, wW = function(t, r) {
  if (te(t))
    return t;
  var n = "curve".concat(Pc(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? cv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : cv[n] || Tc;
}, OW = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, c = t.connectNulls, l = c === void 0 ? !1 : c, u = wW(n, s), f = l ? i.filter(function(m) {
    return Go(m);
  }) : i, d;
  if (Array.isArray(o)) {
    var h = l ? o.filter(function(m) {
      return Go(m);
    }) : o, y = f.map(function(m, p) {
      return sv(sv({}, m), {}, {
        base: h[p]
      });
    });
    return s === "vertical" ? d = Io().y(hi).x1(di).x0(function(m) {
      return m.base.x;
    }) : d = Io().x(di).y1(hi).y0(function(m) {
      return m.base.y;
    }), d.defined(Go).curve(u), d(y);
  }
  return s === "vertical" && G(o) ? d = Io().y(hi).x1(di).x0(o) : G(o) ? d = Io().x(di).y1(hi).y0(o) : d = gb().x(di).y(hi), d.defined(Go).curve(u), d(f);
}, rn = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? OW(t) : a;
  return /* @__PURE__ */ A.createElement("path", Ku({}, Z(t, !1), ns(t), {
    className: oe("recharts-curve", r),
    d: o,
    ref: i
  }));
}, qu = { exports: {} }, Ko = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lv;
function SW() {
  if (lv) return xe;
  lv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(g) {
    if (typeof g == "object" && g !== null) {
      var _ = g.$$typeof;
      switch (_) {
        case t:
          switch (g = g.type, g) {
            case c:
            case l:
            case n:
            case i:
            case a:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case u:
                case y:
                case h:
                case o:
                  return g;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function O(g) {
    return x(g) === l;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = l, xe.ContextConsumer = s, xe.ContextProvider = o, xe.Element = t, xe.ForwardRef = u, xe.Fragment = n, xe.Lazy = y, xe.Memo = h, xe.Portal = r, xe.Profiler = i, xe.StrictMode = a, xe.Suspense = f, xe.isAsyncMode = function(g) {
    return O(g) || x(g) === c;
  }, xe.isConcurrentMode = O, xe.isContextConsumer = function(g) {
    return x(g) === s;
  }, xe.isContextProvider = function(g) {
    return x(g) === o;
  }, xe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, xe.isForwardRef = function(g) {
    return x(g) === u;
  }, xe.isFragment = function(g) {
    return x(g) === n;
  }, xe.isLazy = function(g) {
    return x(g) === y;
  }, xe.isMemo = function(g) {
    return x(g) === h;
  }, xe.isPortal = function(g) {
    return x(g) === r;
  }, xe.isProfiler = function(g) {
    return x(g) === i;
  }, xe.isStrictMode = function(g) {
    return x(g) === a;
  }, xe.isSuspense = function(g) {
    return x(g) === f;
  }, xe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === l || g === i || g === a || g === f || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === h || g.$$typeof === o || g.$$typeof === s || g.$$typeof === u || g.$$typeof === p || g.$$typeof === b || g.$$typeof === w || g.$$typeof === m);
  }, xe.typeOf = x, xe;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function AW() {
  return uv || (uv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === l || I === i || I === a || I === f || I === d || typeof I == "object" && I !== null && (I.$$typeof === y || I.$$typeof === h || I.$$typeof === o || I.$$typeof === s || I.$$typeof === u || I.$$typeof === p || I.$$typeof === b || I.$$typeof === w || I.$$typeof === m);
    }
    function O(I) {
      if (typeof I == "object" && I !== null) {
        var le = I.$$typeof;
        switch (le) {
          case t:
            var K = I.type;
            switch (K) {
              case c:
              case l:
              case n:
              case i:
              case a:
              case f:
                return K;
              default:
                var je = K && K.$$typeof;
                switch (je) {
                  case s:
                  case u:
                  case y:
                  case h:
                  case o:
                    return je;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = c, _ = l, S = s, P = o, j = t, E = u, $ = n, k = y, C = h, D = r, N = i, M = a, B = f, W = !1;
    function H(I) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(I) || O(I) === c;
    }
    function T(I) {
      return O(I) === l;
    }
    function R(I) {
      return O(I) === s;
    }
    function L(I) {
      return O(I) === o;
    }
    function z(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function q(I) {
      return O(I) === u;
    }
    function Y(I) {
      return O(I) === n;
    }
    function J(I) {
      return O(I) === y;
    }
    function ee(I) {
      return O(I) === h;
    }
    function X(I) {
      return O(I) === r;
    }
    function U(I) {
      return O(I) === i;
    }
    function V(I) {
      return O(I) === a;
    }
    function re(I) {
      return O(I) === f;
    }
    we.AsyncMode = g, we.ConcurrentMode = _, we.ContextConsumer = S, we.ContextProvider = P, we.Element = j, we.ForwardRef = E, we.Fragment = $, we.Lazy = k, we.Memo = C, we.Portal = D, we.Profiler = N, we.StrictMode = M, we.Suspense = B, we.isAsyncMode = H, we.isConcurrentMode = T, we.isContextConsumer = R, we.isContextProvider = L, we.isElement = z, we.isForwardRef = q, we.isFragment = Y, we.isLazy = J, we.isMemo = ee, we.isPortal = X, we.isProfiler = U, we.isStrictMode = V, we.isSuspense = re, we.isValidElementType = x, we.typeOf = O;
  }()), we;
}
var fv;
function Ex() {
  return fv || (fv = 1, process.env.NODE_ENV === "production" ? Ko.exports = SW() : Ko.exports = AW()), Ko.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ml, dv;
function PW() {
  if (dv) return Ml;
  dv = 1;
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
      var c = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ml = a() ? Object.assign : function(i, o) {
    for (var s, c = n(i), l, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        l = e(s);
        for (var d = 0; d < l.length; d++)
          r.call(s, l[d]) && (c[l[d]] = s[l[d]]);
      }
    }
    return c;
  }, Ml;
}
var Il, hv;
function Vd() {
  if (hv) return Il;
  hv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Il = e, Il;
}
var Dl, pv;
function Cx() {
  return pv || (pv = 1, Dl = Function.call.bind(Object.prototype.hasOwnProperty)), Dl;
}
var Rl, mv;
function jW() {
  if (mv) return Rl;
  mv = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Vd(), r = {}, n = Cx();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (n(i, u)) {
          var f;
          try {
            if (typeof i[u] != "function") {
              var d = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = i[u](o, u, c, s, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = l ? l() : "";
            e(
              "Failed " + s + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Rl = a, Rl;
}
var Bl, vv;
function TW() {
  if (vv) return Bl;
  vv = 1;
  var e = Ex(), t = PW(), r = Vd(), n = Cx(), a = jW(), i = function() {
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
  return Bl = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(T) {
      var R = T && (l && T[l] || T[u]);
      if (typeof R == "function")
        return R;
    }
    var d = "<<anonymous>>", h = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: w(),
      arrayOf: x,
      element: O(),
      elementType: g(),
      instanceOf: _,
      node: E(),
      objectOf: P,
      oneOf: S,
      oneOfType: j,
      shape: k,
      exact: C
    };
    function y(T, R) {
      return T === R ? T !== 0 || 1 / T === 1 / R : T !== T && R !== R;
    }
    function m(T, R) {
      this.message = T, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function p(T) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, L = 0;
      function z(Y, J, ee, X, U, V, re) {
        if (X = X || d, V = V || ee, re !== r) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = X + ":" + ee;
            !R[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[le] = !0, L++);
          }
        }
        return J[ee] == null ? Y ? J[ee] === null ? new m("The " + U + " `" + V + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new m("The " + U + " `" + V + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : T(J, ee, X, U, V);
      }
      var q = z.bind(null, !1);
      return q.isRequired = z.bind(null, !0), q;
    }
    function b(T) {
      function R(L, z, q, Y, J, ee) {
        var X = L[z], U = M(X);
        if (U !== T) {
          var V = B(X);
          return new m(
            "Invalid " + Y + " `" + J + "` of type " + ("`" + V + "` supplied to `" + q + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return p(R);
    }
    function w() {
      return p(o);
    }
    function x(T) {
      function R(L, z, q, Y, J) {
        if (typeof T != "function")
          return new m("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var ee = L[z];
        if (!Array.isArray(ee)) {
          var X = M(ee);
          return new m("Invalid " + Y + " `" + J + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected an array."));
        }
        for (var U = 0; U < ee.length; U++) {
          var V = T(ee, U, q, Y, J + "[" + U + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return p(R);
    }
    function O() {
      function T(R, L, z, q, Y) {
        var J = R[L];
        if (!s(J)) {
          var ee = M(J);
          return new m("Invalid " + q + " `" + Y + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(T);
    }
    function g() {
      function T(R, L, z, q, Y) {
        var J = R[L];
        if (!e.isValidElementType(J)) {
          var ee = M(J);
          return new m("Invalid " + q + " `" + Y + "` of type " + ("`" + ee + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(T);
    }
    function _(T) {
      function R(L, z, q, Y, J) {
        if (!(L[z] instanceof T)) {
          var ee = T.name || d, X = H(L[z]);
          return new m("Invalid " + Y + " `" + J + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return p(R);
    }
    function S(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function R(L, z, q, Y, J) {
        for (var ee = L[z], X = 0; X < T.length; X++)
          if (y(ee, T[X]))
            return null;
        var U = JSON.stringify(T, function(re, I) {
          var le = B(I);
          return le === "symbol" ? String(I) : I;
        });
        return new m("Invalid " + Y + " `" + J + "` of value `" + String(ee) + "` " + ("supplied to `" + q + "`, expected one of " + U + "."));
      }
      return p(R);
    }
    function P(T) {
      function R(L, z, q, Y, J) {
        if (typeof T != "function")
          return new m("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var ee = L[z], X = M(ee);
        if (X !== "object")
          return new m("Invalid " + Y + " `" + J + "` of type " + ("`" + X + "` supplied to `" + q + "`, expected an object."));
        for (var U in ee)
          if (n(ee, U)) {
            var V = T(ee, U, q, Y, J + "." + U, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return p(R);
    }
    function j(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var R = 0; R < T.length; R++) {
        var L = T[R];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + W(L) + " at index " + R + "."
          ), o;
      }
      function z(q, Y, J, ee, X) {
        for (var U = [], V = 0; V < T.length; V++) {
          var re = T[V], I = re(q, Y, J, ee, X, r);
          if (I == null)
            return null;
          I.data && n(I.data, "expectedType") && U.push(I.data.expectedType);
        }
        var le = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new m("Invalid " + ee + " `" + X + "` supplied to " + ("`" + J + "`" + le + "."));
      }
      return p(z);
    }
    function E() {
      function T(R, L, z, q, Y) {
        return D(R[L]) ? null : new m("Invalid " + q + " `" + Y + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return p(T);
    }
    function $(T, R, L, z, q) {
      return new m(
        (T || "React class") + ": " + R + " type `" + L + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function k(T) {
      function R(L, z, q, Y, J) {
        var ee = L[z], X = M(ee);
        if (X !== "object")
          return new m("Invalid " + Y + " `" + J + "` of type `" + X + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var U in T) {
          var V = T[U];
          if (typeof V != "function")
            return $(q, Y, J, U, B(V));
          var re = V(ee, U, q, Y, J + "." + U, r);
          if (re)
            return re;
        }
        return null;
      }
      return p(R);
    }
    function C(T) {
      function R(L, z, q, Y, J) {
        var ee = L[z], X = M(ee);
        if (X !== "object")
          return new m("Invalid " + Y + " `" + J + "` of type `" + X + "` " + ("supplied to `" + q + "`, expected `object`."));
        var U = t({}, L[z], T);
        for (var V in U) {
          var re = T[V];
          if (n(T, V) && typeof re != "function")
            return $(q, Y, J, V, B(re));
          if (!re)
            return new m(
              "Invalid " + Y + " `" + J + "` key `" + V + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(L[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var I = re(ee, V, q, Y, J + "." + V, r);
          if (I)
            return I;
        }
        return null;
      }
      return p(R);
    }
    function D(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(D);
          if (T === null || s(T))
            return !0;
          var R = f(T);
          if (R) {
            var L = R.call(T), z;
            if (R !== T.entries) {
              for (; !(z = L.next()).done; )
                if (!D(z.value))
                  return !1;
            } else
              for (; !(z = L.next()).done; ) {
                var q = z.value;
                if (q && !D(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(T, R) {
      return T === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function M(T) {
      var R = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : N(R, T) ? "symbol" : R;
    }
    function B(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var R = M(T);
      if (R === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function W(T) {
      var R = B(T);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function H(T) {
      return !T.constructor || !T.constructor.name ? d : T.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Bl;
}
var Ll, yv;
function $W() {
  if (yv) return Ll;
  yv = 1;
  var e = Vd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ll = function() {
    function n(o, s, c, l, u, f) {
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
  }, Ll;
}
if (process.env.NODE_ENV !== "production") {
  var EW = Ex(), CW = !0;
  qu.exports = TW()(EW.isElement, CW);
} else
  qu.exports = $W()();
var kW = qu.exports;
const Oe = /* @__PURE__ */ Se(kW);
var NW = Object.getOwnPropertyNames, MW = Object.getOwnPropertySymbols, IW = Object.prototype.hasOwnProperty;
function gv(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function qo(e) {
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
function bv(e) {
  return NW(e).concat(MW(e));
}
var DW = Object.hasOwn || function(e, t) {
  return IW.call(e, t);
};
function In(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var RW = "__v", BW = "__o", LW = "_owner", _v = Object.getOwnPropertyDescriptor, xv = Object.keys;
function zW(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function FW(e, t) {
  return In(e.getTime(), t.getTime());
}
function WW(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function UW(e, t) {
  return e === t;
}
function wv(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.entries(), o, s, c = 0; (o = i.next()) && !o.done; ) {
    for (var l = t.entries(), u = !1, f = 0; (s = l.next()) && !s.done; ) {
      if (a[f]) {
        f++;
        continue;
      }
      var d = o.value, h = s.value;
      if (r.equals(d[0], h[0], c, f, e, t, r) && r.equals(d[1], h[1], d[0], h[0], e, t, r)) {
        u = a[f] = !0;
        break;
      }
      f++;
    }
    if (!u)
      return !1;
    c++;
  }
  return !0;
}
var HW = In;
function GW(e, t, r) {
  var n = xv(e), a = n.length;
  if (xv(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!kx(e, t, r, n[a]))
      return !1;
  return !0;
}
function pi(e, t, r) {
  var n = bv(e), a = n.length;
  if (bv(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !kx(e, t, r, i) || (o = _v(e, i), s = _v(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function KW(e, t) {
  return In(e.valueOf(), t.valueOf());
}
function qW(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Ov(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.values(), o, s; (o = i.next()) && !o.done; ) {
    for (var c = t.values(), l = !1, u = 0; (s = c.next()) && !s.done; ) {
      if (!a[u] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        l = a[u] = !0;
        break;
      }
      u++;
    }
    if (!l)
      return !1;
  }
  return !0;
}
function VW(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function YW(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function kx(e, t, r, n) {
  return (n === LW || n === BW || n === RW) && (e.$$typeof || t.$$typeof) ? !0 : DW(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var XW = "[object Arguments]", ZW = "[object Boolean]", QW = "[object Date]", JW = "[object Error]", e6 = "[object Map]", t6 = "[object Number]", r6 = "[object Object]", n6 = "[object RegExp]", a6 = "[object Set]", i6 = "[object String]", o6 = "[object URL]", s6 = Array.isArray, Sv = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Av = Object.assign, c6 = Object.prototype.toString.call.bind(Object.prototype.toString);
function l6(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, a = e.areFunctionsEqual, i = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, c = e.arePrimitiveWrappersEqual, l = e.areRegExpsEqual, u = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(y, m, p) {
    if (y === m)
      return !0;
    if (y == null || m == null)
      return !1;
    var b = typeof y;
    if (b !== typeof m)
      return !1;
    if (b !== "object")
      return b === "number" ? o(y, m, p) : b === "function" ? a(y, m, p) : !1;
    var w = y.constructor;
    if (w !== m.constructor)
      return !1;
    if (w === Object)
      return s(y, m, p);
    if (s6(y))
      return t(y, m, p);
    if (Sv != null && Sv(y))
      return f(y, m, p);
    if (w === Date)
      return r(y, m, p);
    if (w === RegExp)
      return l(y, m, p);
    if (w === Map)
      return i(y, m, p);
    if (w === Set)
      return u(y, m, p);
    var x = c6(y);
    return x === QW ? r(y, m, p) : x === n6 ? l(y, m, p) : x === e6 ? i(y, m, p) : x === a6 ? u(y, m, p) : x === r6 ? typeof y.then != "function" && typeof m.then != "function" && s(y, m, p) : x === o6 ? d(y, m, p) : x === JW ? n(y, m, p) : x === XW ? s(y, m, p) : x === ZW || x === t6 || x === i6 ? c(y, m, p) : !1;
  };
}
function u6(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? pi : zW,
    areDatesEqual: FW,
    areErrorsEqual: WW,
    areFunctionsEqual: UW,
    areMapsEqual: n ? gv(wv, pi) : wv,
    areNumbersEqual: HW,
    areObjectsEqual: n ? pi : GW,
    arePrimitiveWrappersEqual: KW,
    areRegExpsEqual: qW,
    areSetsEqual: n ? gv(Ov, pi) : Ov,
    areTypedArraysEqual: n ? pi : VW,
    areUrlsEqual: YW
  };
  if (r && (a = Av({}, a, r(a))), t) {
    var i = qo(a.areArraysEqual), o = qo(a.areMapsEqual), s = qo(a.areObjectsEqual), c = qo(a.areSetsEqual);
    a = Av({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: c
    });
  }
  return a;
}
function f6(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function d6(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(c, l) {
      var u = n(), f = u.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, h = u.meta;
      return r(c, l, {
        cache: d,
        equals: a,
        meta: h,
        strict: i
      });
    };
  if (t)
    return function(c, l) {
      return r(c, l, {
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
  return function(c, l) {
    return r(c, l, o);
  };
}
var h6 = cn();
cn({ strict: !0 });
cn({ circular: !0 });
cn({
  circular: !0,
  strict: !0
});
cn({
  createInternalComparator: function() {
    return In;
  }
});
cn({
  strict: !0,
  createInternalComparator: function() {
    return In;
  }
});
cn({
  circular: !0,
  createInternalComparator: function() {
    return In;
  }
});
cn({
  circular: !0,
  createInternalComparator: function() {
    return In;
  },
  strict: !0
});
function cn(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = u6(e), c = l6(s), l = n ? n(c) : f6(c);
  return d6({ circular: r, comparator: c, createState: a, equals: l, strict: o });
}
function p6(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Pv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : p6(a);
  };
  requestAnimationFrame(n);
}
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
function m6(e) {
  return b6(e) || g6(e) || y6(e) || v6();
}
function v6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y6(e, t) {
  if (e) {
    if (typeof e == "string") return jv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jv(e, t);
  }
}
function jv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function g6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b6(e) {
  if (Array.isArray(e)) return e;
}
function _6() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = m6(o), c = s[0], l = s.slice(1);
        if (typeof c == "number") {
          Pv(a.bind(null, l), c);
          return;
        }
        a(c), Pv(a.bind(null, l));
        return;
      }
      Vu(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
function Tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tv(Object(r), !0).forEach(function(n) {
      Nx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nx(e, t, r) {
  return t = x6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x6(e) {
  var t = w6(e, "string");
  return eo(t) === "symbol" ? t : String(t);
}
function w6(e, t) {
  if (eo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (eo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var O6 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, S6 = function(t) {
  return t;
}, A6 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Si = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return $v($v({}, n), {}, Nx({}, a, t(a, r[a])));
  }, {});
}, Ev = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(A6(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, P6 = process.env.NODE_ENV !== "production", Ms = function(t, r, n, a, i, o, s, c) {
  if (P6 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var l = [n, a, i, o, s, c], u = 0;
      console.warn(r.replace(/%s/g, function() {
        return l[u++];
      }));
    }
};
function j6(e, t) {
  return E6(e) || $6(e, t) || Mx(e, t) || T6();
}
function T6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function E6(e) {
  if (Array.isArray(e)) return e;
}
function C6(e) {
  return M6(e) || N6(e) || Mx(e) || k6();
}
function k6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mx(e, t) {
  if (e) {
    if (typeof e == "string") return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yu(e, t);
  }
}
function N6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function M6(e) {
  if (Array.isArray(e)) return Yu(e);
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Is = 1e-4, Ix = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Dx = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Cv = function(t, r) {
  return function(n) {
    var a = Ix(t, r);
    return Dx(a, n);
  };
}, I6 = function(t, r) {
  return function(n) {
    var a = Ix(t, r), i = [].concat(C6(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return Dx(i, n);
  };
}, kv = function() {
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
          var l = c[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), u = j6(l, 4);
          a = u[0], i = u[1], o = u[2], s = u[3];
        } else
          Ms(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Ms([a, o, i, s].every(function(p) {
    return typeof p == "number" && p >= 0 && p <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = Cv(a, o), d = Cv(i, s), h = I6(a, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, m = function(b) {
    for (var w = b > 1 ? 1 : b, x = w, O = 0; O < 8; ++O) {
      var g = f(x) - w, _ = h(x);
      if (Math.abs(g - w) < Is || _ < Is)
        return d(x);
      x = y(x - g / _);
    }
    return d(x);
  };
  return m.isStepper = !1, m;
}, D6 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, c = function(u, f, d) {
    var h = -(u - f) * n, y = d * i, m = d + (h - y) * s / 1e3, p = d * s / 1e3 + u;
    return Math.abs(p - f) < Is && Math.abs(m) < Is ? [f, 0] : [p, m];
  };
  return c.isStepper = !0, c.dt = s, c;
}, R6 = function() {
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
        return kv(a);
      case "spring":
        return D6();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return kv(a);
        Ms(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Ms(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function Nv(e) {
  return z6(e) || L6(e) || Rx(e) || B6();
}
function B6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function z6(e) {
  if (Array.isArray(e)) return Zu(e);
}
function Mv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mv(Object(r), !0).forEach(function(n) {
      Xu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xu(e, t, r) {
  return t = F6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F6(e) {
  var t = W6(e, "string");
  return to(t) === "symbol" ? t : String(t);
}
function W6(e, t) {
  if (to(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (to(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U6(e, t) {
  return K6(e) || G6(e, t) || Rx(e, t) || H6();
}
function H6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rx(e, t) {
  if (e) {
    if (typeof e == "string") return Zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zu(e, t);
  }
}
function Zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function G6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function K6(e) {
  if (Array.isArray(e)) return e;
}
var Ds = function(t, r, n) {
  return t + (r - t) * n;
}, Qu = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, q6 = function e(t, r, n) {
  var a = Si(function(i, o) {
    if (Qu(o)) {
      var s = t(o.from, o.to, o.velocity), c = U6(s, 2), l = c[0], u = c[1];
      return it(it({}, o), {}, {
        from: l,
        velocity: u
      });
    }
    return o;
  }, r);
  return n < 1 ? Si(function(i, o) {
    return Qu(o) ? it(it({}, o), {}, {
      velocity: Ds(o.velocity, a[i].velocity, n),
      from: Ds(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const V6 = function(e, t, r, n, a) {
  var i = O6(e, t), o = i.reduce(function(p, b) {
    return it(it({}, p), {}, Xu({}, b, [e[b], t[b]]));
  }, {}), s = i.reduce(function(p, b) {
    return it(it({}, p), {}, Xu({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), c = -1, l, u, f = function() {
    return null;
  }, d = function() {
    return Si(function(b, w) {
      return w.from;
    }, s);
  }, h = function() {
    return !Object.values(s).filter(Qu).length;
  }, y = function(b) {
    l || (l = b);
    var w = b - l, x = w / r.dt;
    s = q6(r, s, x), a(it(it(it({}, e), t), d())), l = b, h() || (c = requestAnimationFrame(f));
  }, m = function(b) {
    u || (u = b);
    var w = (b - u) / n, x = Si(function(g, _) {
      return Ds.apply(void 0, Nv(_).concat([r(w)]));
    }, o);
    if (a(it(it(it({}, e), t), x)), w < 1)
      c = requestAnimationFrame(f);
    else {
      var O = Si(function(g, _) {
        return Ds.apply(void 0, Nv(_).concat([r(1)]));
      }, o);
      a(it(it(it({}, e), t), O));
    }
  };
  return f = r.isStepper ? y : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function fa(e) {
  "@babel/helpers - typeof";
  return fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fa(e);
}
var Y6 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function X6(e, t) {
  if (e == null) return {};
  var r = Z6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Z6(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function zl(e) {
  return t5(e) || e5(e) || J6(e) || Q6();
}
function Q6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J6(e, t) {
  if (e) {
    if (typeof e == "string") return Ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ju(e, t);
  }
}
function e5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t5(e) {
  if (Array.isArray(e)) return Ju(e);
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Iv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iv(Object(r), !0).forEach(function(n) {
      xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xi(e, t, r) {
  return t = Bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bx(n.key), n);
  }
}
function a5(e, t, r) {
  return t && n5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Bx(e) {
  var t = i5(e, "string");
  return fa(t) === "symbol" ? t : String(t);
}
function i5(e, t) {
  if (fa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ef(e, t);
}
function ef(e, t) {
  return ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ef(e, t);
}
function s5(e) {
  var t = c5();
  return function() {
    var n = Rs(e), a;
    if (t) {
      var i = Rs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return tf(this, a);
  };
}
function tf(e, t) {
  if (t && (fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rf(e);
}
function rf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function c5() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rs(e) {
  return Rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rs(e);
}
var dt = /* @__PURE__ */ function(e) {
  o5(r, e);
  var t = s5(r);
  function r(n, a) {
    var i;
    r5(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, c = o.attributeName, l = o.from, u = o.to, f = o.steps, d = o.children, h = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(rf(i)), i.changeStyle = i.changeStyle.bind(rf(i)), !s || h <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: u
      }), tf(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (l) {
      if (typeof d == "function")
        return i.state = {
          style: l
        }, tf(i);
      i.state = {
        style: c ? xi({}, c, l) : l
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return a5(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, s = i.canBegin, c = i.attributeName, l = i.shouldReAnimate, u = i.to, f = i.from, d = this.state.style;
      if (s) {
        if (!o) {
          var h = {
            style: c ? xi({}, c, u) : u
          };
          this.state && d && (c && d[c] !== u || !c && d !== u) && this.setState(h);
          return;
        }
        if (!(h6(a.to, u) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var m = y || l ? f : a.to;
          if (this.state && d) {
            var p = {
              style: c ? xi({}, c, m) : m
            };
            (c && d[c] !== m || !c && d !== m) && this.setState(p);
          }
          this.runAnimation(qt(qt({}, this.props), {}, {
            from: m,
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
      var i = this, o = a.from, s = a.to, c = a.duration, l = a.easing, u = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, h = V6(o, s, R6(l), c, this.changeStyle), y = function() {
        i.stopJSAnimation = h();
      };
      this.manager.start([d, u, y, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, s = a.begin, c = a.onAnimationStart, l = o[0], u = l.style, f = l.duration, d = f === void 0 ? 0 : f, h = function(m, p, b) {
        if (b === 0)
          return m;
        var w = p.duration, x = p.easing, O = x === void 0 ? "ease" : x, g = p.style, _ = p.properties, S = p.onAnimationEnd, P = b > 0 ? o[b - 1] : p, j = _ || Object.keys(g);
        if (typeof O == "function" || O === "spring")
          return [].concat(zl(m), [i.runJSAnimation.bind(i, {
            from: P.style,
            to: g,
            duration: w,
            easing: O
          }), w]);
        var E = Ev(j, w, O), $ = qt(qt(qt({}, P.style), g), {}, {
          transition: E
        });
        return [].concat(zl(m), [$, w, S]).filter(S6);
      };
      return this.manager.start([c].concat(zl(o.reduce(h, [u, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = _6());
      var i = a.begin, o = a.duration, s = a.attributeName, c = a.to, l = a.easing, u = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, h = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof l == "function" || typeof h == "function" || l === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var m = s ? xi({}, s, c) : c, p = Ev(Object.keys(m), o, l);
      y.start([u, i, qt(qt({}, m), {}, {
        transition: p
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
      var c = X6(a, Y6), l = An.count(i), u = this.state.style;
      if (typeof i == "function")
        return i(u);
      if (!s || l === 0 || o <= 0)
        return i;
      var f = function(h) {
        var y = h.props, m = y.style, p = m === void 0 ? {} : m, b = y.className, w = /* @__PURE__ */ Xe(h, qt(qt({}, c), {}, {
          style: qt(qt({}, p), u),
          className: b
        }));
        return w;
      };
      return l === 1 ? f(An.only(i)) : /* @__PURE__ */ A.createElement("div", null, An.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(ht);
dt.displayName = "Animate";
dt.defaultProps = {
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
dt.propTypes = {
  from: Oe.oneOfType([Oe.object, Oe.string]),
  to: Oe.oneOfType([Oe.object, Oe.string]),
  attributeName: Oe.string,
  // animation duration
  duration: Oe.number,
  begin: Oe.number,
  easing: Oe.oneOfType([Oe.string, Oe.func]),
  steps: Oe.arrayOf(Oe.shape({
    duration: Oe.number.isRequired,
    style: Oe.object.isRequired,
    easing: Oe.oneOfType([Oe.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Oe.func]),
    // transition css properties(dash case), optional
    properties: Oe.arrayOf("string"),
    onAnimationEnd: Oe.func
  })),
  children: Oe.oneOfType([Oe.node, Oe.func]),
  isActive: Oe.bool,
  canBegin: Oe.bool,
  onAnimationEnd: Oe.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Oe.bool,
  onAnimationStart: Oe.func,
  onAnimationReStart: Oe.func
};
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
function l5(e, t) {
  return h5(e) || d5(e, t) || f5(e, t) || u5();
}
function u5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f5(e, t) {
  if (e) {
    if (typeof e == "string") return Dv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dv(e, t);
  }
}
function Dv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function d5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function h5(e) {
  if (Array.isArray(e)) return e;
}
function Rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rv(Object(r), !0).forEach(function(n) {
      p5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p5(e, t, r) {
  return t = m5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m5(e) {
  var t = v5(e, "string");
  return ro(t) == "symbol" ? t : t + "";
}
function v5(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lv = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, l = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, u;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      f[d] = i[d] > o ? o : i[d];
    u = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (u += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(l, ",").concat(t + c * f[0], ",").concat(r)), u += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (u += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(l, `,
        `).concat(t + n, ",").concat(r + s * f[1])), u += "L ".concat(t + n, ",").concat(r + a - s * f[2]), f[2] > 0 && (u += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(l, `,
        `).concat(t + n - c * f[2], ",").concat(r + a)), u += "L ".concat(t + c * f[3], ",").concat(r + a), f[3] > 0 && (u += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(l, `,
        `).concat(t, ",").concat(r + a - s * f[3])), u += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var y = Math.min(o, i);
    u = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + a - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + n - c * y, ",").concat(r + a, `
            L `).concat(t + c * y, ",").concat(r + a, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t, ",").concat(r + a - s * y, " Z");
  } else
    u = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return u;
}, y5 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var l = Math.min(i, i + s), u = Math.max(i, i + s), f = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= l && n <= u && a >= f && a <= d;
  }
  return !1;
}, g5 = {
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
}, Gc = function(t) {
  var r = Bv(Bv({}, g5), t), n = Jo(), a = He(-1), i = l5(a, 2), o = i[0], s = i[1];
  kr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && s(O);
      } catch {
      }
  }, []);
  var c = r.x, l = r.y, u = r.width, f = r.height, d = r.radius, h = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, b = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (c !== +c || l !== +l || u !== +u || f !== +f || u === 0 || f === 0)
    return null;
  var x = oe("recharts-rectangle", h);
  return w ? /* @__PURE__ */ A.createElement(dt, {
    canBegin: o > 0,
    from: {
      width: u,
      height: f,
      x: c,
      y: l
    },
    to: {
      width: u,
      height: f,
      x: c,
      y: l
    },
    duration: m,
    animationEasing: y,
    isActive: w
  }, function(O) {
    var g = O.width, _ = O.height, S = O.x, P = O.y;
    return /* @__PURE__ */ A.createElement(dt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: m,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", Bs({}, Z(r, !0), {
      className: x,
      d: Lv(S, P, g, _, d),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("path", Bs({}, Z(r, !0), {
    className: x,
    d: Lv(c, l, u, f, d)
  }));
}, b5 = ["points", "className", "baseLinePoints", "connectNulls"];
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qn.apply(this, arguments);
}
function _5(e, t) {
  if (e == null) return {};
  var r = x5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function x5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zv(e) {
  return A5(e) || S5(e) || O5(e) || w5();
}
function w5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O5(e, t) {
  if (e) {
    if (typeof e == "string") return nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nf(e, t);
  }
}
function S5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function A5(e) {
  if (Array.isArray(e)) return nf(e);
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Fv = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, P5 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Fv(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Fv(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Ai = function(t, r) {
  var n = P5(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(zv(i), zv(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, j5 = function(t, r, n) {
  var a = Ai(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(Ai(r.reverse(), n).slice(1));
}, Yd = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = _5(t, b5);
  if (!r || !r.length)
    return null;
  var s = oe("recharts-polygon", n);
  if (a && a.length) {
    var c = o.stroke && o.stroke !== "none", l = j5(r, a, i);
    return /* @__PURE__ */ A.createElement("g", {
      className: s
    }, /* @__PURE__ */ A.createElement("path", qn({}, Z(o, !0), {
      fill: l.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: l
    })), c ? /* @__PURE__ */ A.createElement("path", qn({}, Z(o, !0), {
      fill: "none",
      d: Ai(r, i)
    })) : null, c ? /* @__PURE__ */ A.createElement("path", qn({}, Z(o, !0), {
      fill: "none",
      d: Ai(a, i)
    })) : null);
  }
  var u = Ai(r, i);
  return /* @__PURE__ */ A.createElement("path", qn({}, Z(o, !0), {
    fill: u.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: u
  }));
};
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, af.apply(this, arguments);
}
var Xa = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = oe("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ A.createElement("circle", af({}, Z(t, !1), ns(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
var T5 = ["x", "y", "top", "left", "width", "height", "className"];
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, of.apply(this, arguments);
}
function Wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wv(Object(r), !0).forEach(function(n) {
      E5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E5(e, t, r) {
  return t = C5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C5(e) {
  var t = k5(e, "string");
  return no(t) == "symbol" ? t : t + "";
}
function k5(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function N5(e, t) {
  if (e == null) return {};
  var r = M5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var I5 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, D5 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, c = t.left, l = c === void 0 ? 0 : c, u = t.width, f = u === void 0 ? 0 : u, d = t.height, h = d === void 0 ? 0 : d, y = t.className, m = N5(t, T5), p = $5({
    x: n,
    y: i,
    top: s,
    left: l,
    width: f,
    height: h
  }, m);
  return !G(n) || !G(i) || !G(f) || !G(h) || !G(s) || !G(l) ? null : /* @__PURE__ */ A.createElement("path", of({}, Z(p, !0), {
    className: oe("recharts-cross", y),
    d: I5(n, i, f, h, s, l)
  }));
}, R5 = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function B5(e, t) {
  if (e == null) return {};
  var r = L5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      z5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z5(e, t, r) {
  return t = F5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F5(e) {
  var t = W5(e, "string");
  return ao(t) == "symbol" ? t : t + "";
}
function W5(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var U5 = function(t, r, n, a) {
  var i = "";
  return a.forEach(function(o, s) {
    var c = ge(r, n, t, o);
    s ? i += "L ".concat(c.x, ",").concat(c.y) : i += "M ".concat(c.x, ",").concat(c.y);
  }), i += "Z", i;
}, H5 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.polarAngles, s = t.radialLines;
  if (!o || !o.length || !s)
    return null;
  var c = io({
    stroke: "#ccc"
  }, Z(t, !1));
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, o.map(function(l) {
    var u = ge(r, n, a, l), f = ge(r, n, i, l);
    return /* @__PURE__ */ A.createElement("line", Rr({}, c, {
      key: "line-".concat(l),
      x1: u.x,
      y1: u.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, G5 = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.index, o = io(io({
    stroke: "#ccc"
  }, Z(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("circle", Rr({}, o, {
    className: oe("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(i),
    cx: r,
    cy: n,
    r: a
  }));
}, K5 = function(t) {
  var r = t.radius, n = t.index, a = io(io({
    stroke: "#ccc"
  }, Z(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("path", Rr({}, a, {
    className: oe("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(n),
    d: U5(r, t.cx, t.cy, t.polarAngles)
  }));
}, q5 = function(t) {
  var r = t.polarRadius, n = t.gridType;
  return !r || !r.length ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, r.map(function(a, i) {
    var o = i;
    return n === "circle" ? /* @__PURE__ */ A.createElement(G5, Rr({
      key: o
    }, t, {
      radius: a,
      index: i
    })) : /* @__PURE__ */ A.createElement(K5, Rr({
      key: o
    }, t, {
      radius: a,
      index: i
    }));
  }));
}, Lx = function(t) {
  var r = t.cx, n = r === void 0 ? 0 : r, a = t.cy, i = a === void 0 ? 0 : a, o = t.innerRadius, s = o === void 0 ? 0 : o, c = t.outerRadius, l = c === void 0 ? 0 : c, u = t.gridType, f = u === void 0 ? "polygon" : u, d = t.radialLines, h = d === void 0 ? !0 : d, y = B5(t, R5);
  return l <= 0 ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ A.createElement(H5, Rr({
    cx: n,
    cy: i,
    innerRadius: s,
    outerRadius: l,
    gridType: f,
    radialLines: h
  }, y)), /* @__PURE__ */ A.createElement(q5, Rr({
    cx: n,
    cy: i,
    innerRadius: s,
    outerRadius: l,
    gridType: f,
    radialLines: h
  }, y)));
};
Lx.displayName = "PolarGrid";
var V5 = Fc, Y5 = V_, X5 = vr;
function Z5(e, t) {
  return e && e.length ? V5(e, X5(t), Y5) : void 0;
}
var Q5 = Z5;
const J5 = /* @__PURE__ */ Se(Q5);
var eU = Fc, tU = vr, rU = Y_;
function nU(e, t) {
  return e && e.length ? eU(e, tU(t), rU) : void 0;
}
var aU = nU;
const iU = /* @__PURE__ */ Se(aU);
var oU = ["cx", "cy", "angle", "ticks", "axisLine"], sU = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
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
function Hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hv(Object(r), !0).forEach(function(n) {
      Kc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gv(e, t) {
  if (e == null) return {};
  var r = cU(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Fx(n.key), n);
  }
}
function uU(e, t, r) {
  return t && Kv(e.prototype, t), r && Kv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fU(e, t, r) {
  return t = Ls(t), dU(e, zx() ? Reflect.construct(t, r || [], Ls(e).constructor) : t.apply(e, r));
}
function dU(e, t) {
  if (t && (da(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hU(e);
}
function hU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zx = function() {
    return !!e;
  })();
}
function Ls(e) {
  return Ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ls(e);
}
function pU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sf(e, t);
}
function sf(e, t) {
  return sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, sf(e, t);
}
function Kc(e, t, r) {
  return t = Fx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fx(e) {
  var t = mU(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function mU(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Za = /* @__PURE__ */ function(e) {
  function t() {
    return lU(this, t), fU(this, t, arguments);
  }
  return pU(t, e), uU(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, s = i.cx, c = i.cy;
        return ge(s, c, a, o);
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, c = J5(s, function(u) {
        return u.coordinate || 0;
      }), l = iU(s, function(u) {
        return u.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: l.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, c = n.axisLine, l = Gv(n, oU), u = s.reduce(function(y, m) {
        return [Math.min(y[0], m.coordinate), Math.max(y[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), f = ge(a, i, u[0], o), d = ge(a, i, u[1], o), h = hn(hn(hn({}, Z(l, !1)), {}, {
        fill: "none"
      }, Z(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ A.createElement("line", Pi({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, c = a.tickFormatter, l = a.stroke, u = Gv(a, sU), f = this.getTickTextAnchor(), d = Z(u, !1), h = Z(o, !1), y = i.map(function(m, p) {
        var b = n.getTickValueCoord(m), w = hn(hn(hn(hn({
          textAnchor: f,
          transform: "rotate(".concat(90 - s, ", ").concat(b.x, ", ").concat(b.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: l
        }, h), {}, {
          index: p
        }, b), {}, {
          payload: m
        });
        return /* @__PURE__ */ A.createElement(ie, Pi({
          className: oe("recharts-polar-radius-axis-tick", Sx(o)),
          key: "tick-".concat(m.coordinate)
        }, Nr(n.props, m, p)), t.renderTickItem(o, w, c ? c(m.value, p) : m.value));
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ A.createElement(ie, {
        className: oe("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), nt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, a) : te(n) ? o = n(a) : o = /* @__PURE__ */ A.createElement(Tn, Pi({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
}(ht);
Kc(Za, "displayName", "PolarRadiusAxis");
Kc(Za, "axisType", "radiusAxis");
Kc(Za, "defaultProps", {
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
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bn.apply(this, arguments);
}
function qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(r), !0).forEach(function(n) {
      qc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ux(n.key), n);
  }
}
function yU(e, t, r) {
  return t && Vv(e.prototype, t), r && Vv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gU(e, t, r) {
  return t = zs(t), bU(e, Wx() ? Reflect.construct(t, r || [], zs(e).constructor) : t.apply(e, r));
}
function bU(e, t) {
  if (t && (ha(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _U(e);
}
function _U(e) {
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
function zs(e) {
  return zs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zs(e);
}
function xU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cf(e, t);
}
function cf(e, t) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cf(e, t);
}
function qc(e, t, r) {
  return t = Ux(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ux(e) {
  var t = wU(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function wU(e, t) {
  if (ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var OU = Math.PI / 180, Yv = 1e-5, Qa = /* @__PURE__ */ function(e) {
  function t() {
    return vU(this, t), gU(this, t, arguments);
  }
  return xU(t, e), yU(t, [{
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
        var a = this.props, i = a.cx, o = a.cy, s = a.radius, c = a.orientation, l = a.tickSize, u = l || 8, f = ge(i, o, s, n.coordinate), d = ge(i, o, s + (c === "inner" ? -1 : 1) * u, n.coordinate);
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * OU), o;
      return i > Yv ? o = a === "outer" ? "start" : "end" : i < -Yv ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, c = n.axisLineType, l = pn(pn({}, Z(this.props, !1)), {}, {
        fill: "none"
      }, Z(s, !1));
      if (c === "circle")
        return /* @__PURE__ */ A.createElement(Xa, bn({
          className: "recharts-polar-angle-axis-line"
        }, l, {
          cx: a,
          cy: i,
          r: o
        }));
      var u = this.props.ticks, f = u.map(function(d) {
        return ge(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ A.createElement(Yd, bn({
        className: "recharts-polar-angle-axis-line"
      }, l, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, c = a.tickFormatter, l = a.stroke, u = Z(this.props, !1), f = Z(o, !1), d = pn(pn({}, u), {}, {
        fill: "none"
      }, Z(s, !1)), h = i.map(function(y, m) {
        var p = n.getTickLineCoord(y), b = n.getTickTextAnchor(y), w = pn(pn(pn({
          textAnchor: b
        }, u), {}, {
          stroke: "none",
          fill: l
        }, f), {}, {
          index: m,
          payload: y,
          x: p.x2,
          y: p.y2
        });
        return /* @__PURE__ */ A.createElement(ie, bn({
          className: oe("recharts-polar-angle-axis-tick", Sx(o)),
          key: "tick-".concat(y.coordinate)
        }, Nr(n.props, y, m)), s && /* @__PURE__ */ A.createElement("line", bn({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, p)), o && t.renderTickItem(o, w, c ? c(y.value, m) : y.value));
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ A.createElement(ie, {
        className: oe("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, a) : te(n) ? o = n(a) : o = /* @__PURE__ */ A.createElement(Tn, bn({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
}(ht);
qc(Qa, "displayName", "PolarAngleAxis");
qc(Qa, "axisType", "angleAxis");
qc(Qa, "defaultProps", {
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
var SU = Wb, AU = SU(Object.getPrototypeOf, Object), Xd = AU, PU = Fr, jU = Xd, TU = tr, $U = "[object Object]", EU = Function.prototype, CU = Object.prototype, Hx = EU.toString, kU = CU.hasOwnProperty, NU = Hx.call(Object);
function MU(e) {
  if (!TU(e) || PU(e) != $U)
    return !1;
  var t = jU(e);
  if (t === null)
    return !0;
  var r = kU.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Hx.call(r) == NU;
}
var Gx = MU;
const IU = /* @__PURE__ */ Se(Gx);
var DU = Fr, RU = tr, BU = "[object Boolean]";
function LU(e) {
  return e === !0 || e === !1 || RU(e) && DU(e) == BU;
}
var zU = LU;
const FU = /* @__PURE__ */ Se(zU);
function oo(e) {
  "@babel/helpers - typeof";
  return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oo(e);
}
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fs.apply(this, arguments);
}
function WU(e, t) {
  return KU(e) || GU(e, t) || HU(e, t) || UU();
}
function UU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HU(e, t) {
  if (e) {
    if (typeof e == "string") return Xv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xv(e, t);
  }
}
function Xv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GU(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function KU(e) {
  if (Array.isArray(e)) return e;
}
function Zv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zv(Object(r), !0).forEach(function(n) {
      qU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qU(e, t, r) {
  return t = VU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VU(e) {
  var t = YU(e, "string");
  return oo(t) == "symbol" ? t : t + "";
}
function YU(e, t) {
  if (oo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jv = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, XU = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, ZU = function(t) {
  var r = Qv(Qv({}, XU), t), n = Jo(), a = He(-1), i = WU(a, 2), o = i[0], s = i[1];
  kr(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && s(x);
      } catch {
      }
  }, []);
  var c = r.x, l = r.y, u = r.upperWidth, f = r.lowerWidth, d = r.height, h = r.className, y = r.animationEasing, m = r.animationDuration, p = r.animationBegin, b = r.isUpdateAnimationActive;
  if (c !== +c || l !== +l || u !== +u || f !== +f || d !== +d || u === 0 && f === 0 || d === 0)
    return null;
  var w = oe("recharts-trapezoid", h);
  return b ? /* @__PURE__ */ A.createElement(dt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: l
    },
    to: {
      upperWidth: u,
      lowerWidth: f,
      height: d,
      x: c,
      y: l
    },
    duration: m,
    animationEasing: y,
    isActive: b
  }, function(x) {
    var O = x.upperWidth, g = x.lowerWidth, _ = x.height, S = x.x, P = x.y;
    return /* @__PURE__ */ A.createElement(dt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: m,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", Fs({}, Z(r, !0), {
      className: w,
      d: Jv(S, P, O, g, _),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", Fs({}, Z(r, !0), {
    className: w,
    d: Jv(c, l, u, f, d)
  })));
}, QU = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function so(e) {
  "@babel/helpers - typeof";
  return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, so(e);
}
function JU(e, t) {
  if (e == null) return {};
  var r = eH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ws(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      tH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tH(e, t, r) {
  return t = rH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rH(e) {
  var t = nH(e, "string");
  return so(t) == "symbol" ? t : t + "";
}
function nH(e, t) {
  if (so(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (so(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aH(e, t) {
  return Ws(Ws({}, t), e);
}
function iH(e, t) {
  return e === "symbols";
}
function ty(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ A.createElement(Gc, r);
    case "trapezoid":
      return /* @__PURE__ */ A.createElement(ZU, r);
    case "sector":
      return /* @__PURE__ */ A.createElement($x, r);
    case "symbols":
      if (iH(t))
        return /* @__PURE__ */ A.createElement(Ec, r);
      break;
    default:
      return null;
  }
}
function Kx(e) {
  return /* @__PURE__ */ Qt(e) ? e.props : e;
}
function co(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? aH : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, c = JU(e, QU), l;
  if (/* @__PURE__ */ Qt(t))
    l = /* @__PURE__ */ Xe(t, Ws(Ws({}, c), Kx(t)));
  else if (te(t))
    l = t(c);
  else if (IU(t) && !FU(t)) {
    var u = a(t, c);
    l = /* @__PURE__ */ A.createElement(ty, {
      shapeType: r,
      elementProps: u
    });
  } else {
    var f = c;
    l = /* @__PURE__ */ A.createElement(ty, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ A.createElement(ie, {
    className: o
  }, l) : l;
}
function Vc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Yc(e, t) {
  return t != null && "sectors" in e.props;
}
function lo(e, t) {
  return t != null && "points" in e.props;
}
function oH(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function sH(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function cH(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function lH(e, t) {
  var r;
  return Vc(e, t) ? r = oH : Yc(e, t) ? r = sH : lo(e, t) && (r = cH), r;
}
function uH(e, t) {
  var r;
  return Vc(e, t) ? r = "trapezoids" : Yc(e, t) ? r = "sectors" : lo(e, t) && (r = "points"), r;
}
function fH(e, t) {
  if (Vc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Yc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return lo(e, t) ? t.payload : {};
}
function dH(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = uH(r, t), i = fH(r, t), o = n.filter(function(c, l) {
    var u = pr(i, c), f = r.props[a].filter(function(y) {
      var m = lH(r, t);
      return m(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), h = l === d;
    return u && h;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Zo;
function pa(e) {
  "@babel/helpers - typeof";
  return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pa(e);
}
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vn.apply(this, arguments);
}
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      Ft(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ny(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Vx(n.key), n);
  }
}
function pH(e, t, r) {
  return t && ny(e.prototype, t), r && ny(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mH(e, t, r) {
  return t = Us(t), vH(e, qx() ? Reflect.construct(t, r || [], Us(e).constructor) : t.apply(e, r));
}
function vH(e, t) {
  if (t && (pa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yH(e);
}
function yH(e) {
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
function Us(e) {
  return Us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Us(e);
}
function gH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lf(e, t);
}
function lf(e, t) {
  return lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, lf(e, t);
}
function Ft(e, t, r) {
  return t = Vx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vx(e) {
  var t = bH(e, "string");
  return pa(t) == "symbol" ? t : t + "";
}
function bH(e, t) {
  if (pa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return hH(this, t), n = mH(this, t, [r]), Ft(n, "pieRef", null), Ft(n, "sectorRefs", []), Ft(n, "id", Wr("recharts-pie-")), Ft(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), te(a) && a();
    }), Ft(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), te(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return gH(t, e), pH(t, [{
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
      var i = this.props, o = i.label, s = i.labelLine, c = i.dataKey, l = i.valueKey, u = Z(this.props, !1), f = Z(o, !1), d = Z(s, !1), h = o && o.offsetRadius || 20, y = n.map(function(m, p) {
        var b = (m.startAngle + m.endAngle) / 2, w = ge(m.cx, m.cy, m.outerRadius + h, b), x = Me(Me(Me(Me({}, u), m), {}, {
          stroke: "none"
        }, f), {}, {
          index: p,
          textAnchor: t.getTextAnchor(w.x, m.cx)
        }, w), O = Me(Me(Me(Me({}, u), m), {}, {
          fill: "none",
          stroke: m.fill
        }, d), {}, {
          index: p,
          points: [ge(m.cx, m.cy, m.outerRadius, b), w]
        }), g = c;
        return ae(c) && ae(l) ? g = "value" : ae(c) && (g = l), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ A.createElement(ie, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(p)
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, he(m, g)));
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, s = i.blendStroke, c = i.inactiveShape;
      return n.map(function(l, u) {
        if ((l == null ? void 0 : l.startAngle) === 0 && (l == null ? void 0 : l.endAngle) === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(u), d = c && a.hasActiveIndex() ? c : null, h = f ? o : d, y = Me(Me({}, l), {}, {
          stroke: s ? l.fill : l.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ A.createElement(ie, Vn({
          ref: function(p) {
            p && !a.sectorRefs.includes(p) && a.sectorRefs.push(p);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Nr(a.props, l, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(l == null ? void 0 : l.startAngle, "-").concat(l == null ? void 0 : l.endAngle, "-").concat(l.midAngle, "-").concat(u)
        }), /* @__PURE__ */ A.createElement(co, Vn({
          option: h,
          isActive: f,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, l = a.animationEasing, u = a.animationId, f = this.state, d = f.prevSectors, h = f.prevIsAnimationActive;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var m = y.t, p = [], b = i && i[0], w = b.startAngle;
        return i.forEach(function(x, O) {
          var g = d && d[O], _ = O > 0 ? At(x, "paddingAngle", 0) : 0;
          if (g) {
            var S = ue(g.endAngle - g.startAngle, x.endAngle - x.startAngle), P = Me(Me({}, x), {}, {
              startAngle: w + _,
              endAngle: w + S(m) + _
            });
            p.push(P), w = P.endAngle;
          } else {
            var j = x.endAngle, E = x.startAngle, $ = ue(0, j - E), k = $(m), C = Me(Me({}, x), {}, {
              startAngle: w + _,
              endAngle: w + k + _
            });
            p.push(C), w = C.endAngle;
          }
        }), /* @__PURE__ */ A.createElement(ie, null, n.renderSectorsStatically(p));
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
      return i && a && a.length && (!o || !pr(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, s = a.className, c = a.label, l = a.cx, u = a.cy, f = a.innerRadius, d = a.outerRadius, h = a.isAnimationActive, y = this.state.isAnimationFinished;
      if (i || !o || !o.length || !G(l) || !G(u) || !G(f) || !G(d))
        return null;
      var m = oe("recharts-pie", s);
      return /* @__PURE__ */ A.createElement(ie, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(b) {
          n.pieRef = b;
        }
      }, this.renderSectors(), c && this.renderLabels(o), nt.renderCallByParent(this.props, null, !1), (!h || y) && Pt.renderCallByParent(this.props, o, !1));
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
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, a);
      if (te(n))
        return n(a);
      var o = oe("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ A.createElement(rn, Vn({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, a);
      var o = i;
      if (te(n) && (o = n(a), /* @__PURE__ */ A.isValidElement(o)))
        return o;
      var s = oe("recharts-pie-label-text", typeof n != "boolean" && !te(n) ? n.className : "");
      return /* @__PURE__ */ A.createElement(Tn, Vn({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
}(ht);
Zo = Hr;
Ft(Hr, "displayName", "Pie");
Ft(Hr, "defaultProps", {
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
  isAnimationActive: !kt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Ft(Hr, "parseDeltaAngle", function(e, t) {
  var r = yt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Ft(Hr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = Z(e, !1), a = ft(r, Ga);
  return t && t.length ? t.map(function(i, o) {
    return Me(Me(Me({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Me(Me({}, n), i.props);
  }) : [];
});
Ft(Hr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = wx(a, i), s = n + gt(e.cx, a, a / 2), c = r + gt(e.cy, i, i / 2), l = gt(e.innerRadius, o, 0), u = gt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: c,
    innerRadius: l,
    outerRadius: u,
    maxRadius: f
  };
});
Ft(Hr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Me(Me({}, t.type.defaultProps), t.props) : t.props, a = Zo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, c = n.paddingAngle, l = n.dataKey, u = n.nameKey, f = n.valueKey, d = n.tooltipType, h = Math.abs(n.minAngle), y = Zo.parseCoordinateOfPie(n, r), m = Zo.parseDeltaAngle(o, s), p = Math.abs(m), b = l;
  ae(l) && ae(f) ? (Jt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : ae(l) && (Jt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = f);
  var w = a.filter(function(P) {
    return he(P, b, 0) !== 0;
  }).length, x = (p >= 360 ? w : w - 1) * c, O = p - w * h - x, g = a.reduce(function(P, j) {
    var E = he(j, b, 0);
    return P + (G(E) ? E : 0);
  }, 0), _;
  if (g > 0) {
    var S;
    _ = a.map(function(P, j) {
      var E = he(P, b, 0), $ = he(P, u, j), k = (G(E) ? E : 0) / g, C;
      j ? C = S.endAngle + yt(m) * c * (E !== 0 ? 1 : 0) : C = o;
      var D = C + yt(m) * ((E !== 0 ? h : 0) + k * O), N = (C + D) / 2, M = (y.innerRadius + y.outerRadius) / 2, B = [{
        name: $,
        value: E,
        payload: P,
        dataKey: b,
        type: d
      }], W = ge(y.cx, y.cy, M, N);
      return S = Me(Me(Me({
        percent: k,
        cornerRadius: i,
        name: $,
        tooltipPayload: B,
        midAngle: N,
        middleRadius: M,
        tooltipPosition: W
      }, P), y), {}, {
        value: he(P, b),
        startAngle: C,
        endAngle: D,
        payload: P,
        paddingAngle: yt(m) * c
      }), S;
    });
  }
  return Me(Me({}, y), {}, {
    sectors: _,
    data: a
  });
});
function _H(e) {
  return e && e.length ? e[0] : void 0;
}
var xH = _H, wH = xH;
const OH = /* @__PURE__ */ Se(wH);
var SH = ["key"];
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function AH(e, t) {
  if (e == null) return {};
  var r = PH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      Sr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xx(n.key), n);
  }
}
function TH(e, t, r) {
  return t && iy(e.prototype, t), r && iy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $H(e, t, r) {
  return t = Gs(t), EH(e, Yx() ? Reflect.construct(t, r || [], Gs(e).constructor) : t.apply(e, r));
}
function EH(e, t) {
  if (t && (ma(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CH(e);
}
function CH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Yx = function() {
    return !!e;
  })();
}
function Gs(e) {
  return Gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Gs(e);
}
function kH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, uf(e, t);
}
function Sr(e, t, r) {
  return t = Xx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xx(e) {
  var t = NH(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function NH(e, t) {
  if (ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var To = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    jH(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = $H(this, t, [].concat(a)), Sr(r, "state", {
      isAnimationFinished: !1
    }), Sr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), te(o) && o();
    }), Sr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), te(o) && o();
    }), Sr(r, "handleMouseEnter", function(o) {
      var s = r.props.onMouseEnter;
      s && s(r.props, o);
    }), Sr(r, "handleMouseLeave", function(o) {
      var s = r.props.onMouseLeave;
      s && s(r.props, o);
    }), r;
  }
  return kH(t, e), TH(t, [{
    key: "renderDots",
    value: function(n) {
      var a = this.props, i = a.dot, o = a.dataKey, s = Z(this.props, !1), c = Z(i, !0), l = n.map(function(u, f) {
        var d = vt(vt(vt({
          key: "dot-".concat(f),
          r: 3
        }, s), c), {}, {
          dataKey: o,
          cx: u.x,
          cy: u.y,
          index: f,
          payload: u
        });
        return t.renderDotItem(i, d);
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-radar-dots"
      }, l);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(n) {
      var a = this.props, i = a.shape, o = a.dot, s = a.isRange, c = a.baseLinePoints, l = a.connectNulls, u;
      return /* @__PURE__ */ A.isValidElement(i) ? u = /* @__PURE__ */ A.cloneElement(i, vt(vt({}, this.props), {}, {
        points: n
      })) : te(i) ? u = i(vt(vt({}, this.props), {}, {
        points: n
      })) : u = /* @__PURE__ */ A.createElement(Yd, Hs({}, Z(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: n,
        baseLinePoints: s ? c : null,
        connectNulls: l
      })), /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-radar-polygon"
      }, u, o ? this.renderDots(n) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.points, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, l = a.animationEasing, u = a.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(u),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var h = d.t, y = f && f.length / i.length, m = i.map(function(p, b) {
          var w = f && f[Math.floor(b * y)];
          if (w) {
            var x = ue(w.x, p.x), O = ue(w.y, p.y);
            return vt(vt({}, p), {}, {
              x: x(h),
              y: O(h)
            });
          }
          var g = ue(p.cx, p.x), _ = ue(p.cy, p.y);
          return vt(vt({}, p), {}, {
            x: g(h),
            y: _(h)
          });
        });
        return n.renderPolygonStatically(m);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var n = this.props, a = n.points, i = n.isAnimationActive, o = n.isRange, s = this.state.prevPoints;
      return i && a && a.length && !o && (!s || !pr(s, a)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(a);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.className, o = n.points, s = n.isAnimationActive;
      if (a || !o || !o.length)
        return null;
      var c = this.state.isAnimationFinished, l = oe("recharts-radar", i);
      return /* @__PURE__ */ A.createElement(ie, {
        className: l
      }, this.renderPolygon(), (!s || c) && Pt.renderCallByParent(this.props, o));
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
      if (/* @__PURE__ */ A.isValidElement(n))
        i = /* @__PURE__ */ A.cloneElement(n, a);
      else if (te(n))
        i = n(a);
      else {
        var o = a.key, s = AH(a, SH);
        i = /* @__PURE__ */ A.createElement(Xa, Hs({}, s, {
          key: o,
          className: oe("recharts-radar-dot", typeof n != "boolean" ? n.className : "")
        }));
      }
      return i;
    }
  }]);
}(ht);
Sr(To, "displayName", "Radar");
Sr(To, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !kt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Sr(To, "getComposedData", function(e) {
  var t = e.radiusAxis, r = e.angleAxis, n = e.displayedData, a = e.dataKey, i = e.bandSize, o = r.cx, s = r.cy, c = !1, l = [], u = r.type !== "number" ? i ?? 0 : 0;
  n.forEach(function(d, h) {
    var y = he(d, r.dataKey, h), m = he(d, a), p = r.scale(y) + u, b = Array.isArray(m) ? jx(m) : m, w = ae(b) ? void 0 : t.scale(b);
    Array.isArray(m) && m.length >= 2 && (c = !0), l.push(vt(vt({}, ge(o, s, w, p)), {}, {
      name: y,
      value: m,
      cx: o,
      cy: s,
      radius: w,
      angle: p,
      payload: d
    }));
  });
  var f = [];
  return c && l.forEach(function(d) {
    if (Array.isArray(d.value)) {
      var h = OH(d.value), y = ae(h) ? void 0 : t.scale(h);
      f.push(vt(vt({}, d), {}, {
        radius: y
      }, ge(o, s, y, d.angle)));
    } else
      f.push(d);
  }), {
    points: l,
    isRange: c,
    baseLinePoints: f
  };
});
var MH = Math.ceil, IH = Math.max;
function DH(e, t, r, n) {
  for (var a = -1, i = IH(MH((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var RH = DH, BH = l_, oy = 1 / 0, LH = 17976931348623157e292;
function zH(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = BH(e), e === oy || e === -oy) {
    var t = e < 0 ? -1 : 1;
    return t * LH;
  }
  return e === e ? e : 0;
}
var Zx = zH, FH = RH, WH = Mc, Fl = Zx;
function UH(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && WH(t, r, n) && (r = n = void 0), t = Fl(t), r === void 0 ? (r = t, t = 0) : r = Fl(r), n = n === void 0 ? t < r ? 1 : -1 : Fl(n), FH(t, r, n, e);
  };
}
var HH = UH, GH = HH, KH = GH(), qH = KH;
const Ks = /* @__PURE__ */ Se(qH);
function uo(e) {
  "@babel/helpers - typeof";
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e);
}
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sy(Object(r), !0).forEach(function(n) {
      Qx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qx(e, t, r) {
  return t = VH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VH(e) {
  var t = YH(e, "string");
  return uo(t) == "symbol" ? t : t + "";
}
function YH(e, t) {
  if (uo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (uo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var XH = ["Webkit", "Moz", "O", "ms"], ZH = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = XH.reduce(function(i, o) {
    return cy(cy({}, i), {}, Qx({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function va(e) {
  "@babel/helpers - typeof";
  return va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, va(e);
}
function qs() {
  return qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qs.apply(this, arguments);
}
function ly(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ly(Object(r), !0).forEach(function(n) {
      $t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ly(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, e0(n.key), n);
  }
}
function JH(e, t, r) {
  return t && uy(e.prototype, t), r && uy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function e7(e, t, r) {
  return t = Vs(t), t7(e, Jx() ? Reflect.construct(t, r || [], Vs(e).constructor) : t.apply(e, r));
}
function t7(e, t) {
  if (t && (va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return r7(e);
}
function r7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jx = function() {
    return !!e;
  })();
}
function Vs(e) {
  return Vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vs(e);
}
function n7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ff(e, t);
}
function $t(e, t, r) {
  return t = e0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e0(e) {
  var t = a7(e, "string");
  return va(t) == "symbol" ? t : t + "";
}
function a7(e, t) {
  if (va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var i7 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, l = wi().domain(Ks(0, c)).range([i, i + o - s]), u = l.domain().map(function(f) {
    return l(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: l(n),
    endX: l(a),
    scale: l,
    scaleValues: u
  };
}, fy = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, ya = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return QH(this, t), n = e7(this, t, [r]), $t(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), $t(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), $t(n, "handleDragEnd", function() {
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
    }), $t(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), $t(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), $t(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), $t(n, "handleSlideDragStart", function(a) {
      var i = fy(a) ? a.changedTouches[0] : a;
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
  return n7(t, e), JH(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, s = this.props, c = s.gap, l = s.data, u = l.length - 1, f = Math.min(a, i), d = Math.max(a, i), h = t.getIndexInRange(o, f), y = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % c,
        endIndex: y === u ? u : y - y % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, s = a.dataKey, c = he(i[n], s, n);
      return te(o) ? o(c, n) : c;
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
      var a = this.state, i = a.slideMoveStartX, o = a.startX, s = a.endX, c = this.props, l = c.x, u = c.width, f = c.travellerWidth, d = c.startIndex, h = c.endIndex, y = c.onChange, m = n.pageX - i;
      m > 0 ? m = Math.min(m, l + u - f - s, l + u - f - o) : m < 0 && (m = Math.max(m, l - o, l - s));
      var p = this.getIndex({
        startX: o + m,
        endX: s + m
      });
      (p.startIndex !== d || p.endIndex !== h) && y && y(p), this.setState({
        startX: o + m,
        endX: s + m,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = fy(a) ? a.changedTouches[0] : a;
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
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, s = a.endX, c = a.startX, l = this.state[o], u = this.props, f = u.x, d = u.width, h = u.travellerWidth, y = u.onChange, m = u.gap, p = u.data, b = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - i;
      w > 0 ? w = Math.min(w, f + d - h - l) : w < 0 && (w = Math.max(w, f - l)), b[o] = l + w;
      var x = this.getIndex(b), O = x.startIndex, g = x.endIndex, _ = function() {
        var P = p.length - 1;
        return o === "startX" && (s > c ? O % m === 0 : g % m === 0) || s < c && g === P || o === "endX" && (s > c ? g % m === 0 : O % m === 0) || s > c && g === P;
      };
      this.setState($t($t({}, o, l + w), "brushMoveStartX", n.pageX), function() {
        y && _() && y(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, s = o.scaleValues, c = o.startX, l = o.endX, u = this.state[a], f = s.indexOf(u);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= s.length)) {
          var h = s[d];
          a === "startX" && h >= l || a === "endX" && h <= c || this.setState($t({}, a, h), function() {
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.fill, l = n.stroke;
      return /* @__PURE__ */ A.createElement("rect", {
        stroke: l,
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.data, l = n.children, u = n.padding, f = An.only(l);
      return f ? /* @__PURE__ */ A.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: s,
        margin: u,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, s = this, c = this.props, l = c.y, u = c.travellerWidth, f = c.height, d = c.traveller, h = c.ariaLabel, y = c.data, m = c.startIndex, p = c.endIndex, b = Math.max(n, this.props.x), w = Wl(Wl({}, Z(this.props, !1)), {}, {
        x: b,
        y: l,
        width: u,
        height: f
      }), x = h || "Min value: ".concat((i = y[m]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ A.createElement(ie, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(g) {
          ["ArrowLeft", "ArrowRight"].includes(g.key) && (g.preventDefault(), g.stopPropagation(), s.handleTravellerMoveKeyboard(g.key === "ArrowRight" ? 1 : -1, a));
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
      var i = this.props, o = i.y, s = i.height, c = i.stroke, l = i.travellerWidth, u = Math.min(n, a) + l, f = Math.max(Math.abs(a - n) - l, 0);
      return /* @__PURE__ */ A.createElement("rect", {
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
        x: u,
        y: o,
        width: f,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, s = n.height, c = n.travellerWidth, l = n.stroke, u = this.state, f = u.startX, d = u.endX, h = 5, y = {
        pointerEvents: "none",
        fill: l
      };
      return /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ A.createElement(Tn, qs({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - h,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ A.createElement(Tn, qs({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + c + h,
        y: o + s / 2
      }, y), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, s = n.x, c = n.y, l = n.width, u = n.height, f = n.alwaysShowText, d = this.state, h = d.startX, y = d.endX, m = d.isTextActive, p = d.isSlideMoving, b = d.isTravellerMoving, w = d.isTravellerFocused;
      if (!a || !a.length || !G(s) || !G(c) || !G(l) || !G(u) || l <= 0 || u <= 0)
        return null;
      var x = oe("recharts-brush", i), O = A.Children.count(o) === 1, g = ZH("userSelect", "none");
      return /* @__PURE__ */ A.createElement(ie, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: g
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (m || p || b || w || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, s = n.height, c = n.stroke, l = Math.floor(i + s / 2) - 1;
      return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: s,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: a + 1,
        y1: l,
        x2: a + o - 1,
        y2: l,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: a + 1,
        y1: l + 2,
        x2: a + o - 1,
        y2: l + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ A.isValidElement(n) ? i = /* @__PURE__ */ A.cloneElement(n, a) : te(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, s = n.x, c = n.travellerWidth, l = n.updateId, u = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || l !== a.prevUpdateId)
        return Wl({
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: l,
          prevX: s,
          prevWidth: o
        }, i && i.length ? i7({
          data: i,
          width: o,
          x: s,
          travellerWidth: c,
          startIndex: u,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || s !== a.prevX || c !== a.prevTravellerWidth)) {
        a.scale.range([s, s + o - c]);
        var d = a.scale.domain().map(function(h) {
          return a.scale(h);
        });
        return {
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: l,
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
}(ht);
$t(ya, "displayName", "Brush");
$t(ya, "defaultProps", {
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
var o7 = _d;
function s7(e, t) {
  var r;
  return o7(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var c7 = s7, l7 = Nb, u7 = vr, f7 = c7, d7 = xt, h7 = Mc;
function p7(e, t, r) {
  var n = d7(e) ? l7 : f7;
  return r && h7(e, t, r) && (t = void 0), n(e, u7(t));
}
var m7 = p7;
const v7 = /* @__PURE__ */ Se(m7);
var dr = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, dy = n_;
function y7(e, t, r) {
  t == "__proto__" && dy ? dy(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Zd = y7, g7 = Zd, b7 = e_, _7 = vr;
function x7(e, t) {
  var r = {};
  return t = _7(t), b7(e, function(n, a, i) {
    g7(r, a, t(n, a, i));
  }), r;
}
var w7 = x7;
const O7 = /* @__PURE__ */ Se(w7);
function S7(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var A7 = S7, P7 = _d;
function j7(e, t) {
  var r = !0;
  return P7(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var T7 = j7, $7 = A7, E7 = T7, C7 = vr, k7 = xt, N7 = Mc;
function M7(e, t, r) {
  var n = k7(e) ? $7 : E7;
  return r && N7(e, t, r) && (t = void 0), n(e, C7(t));
}
var I7 = M7;
const t0 = /* @__PURE__ */ Se(I7);
var D7 = ["x", "y"];
function ga(e) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
}
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, df.apply(this, arguments);
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
function mi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      R7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R7(e, t, r) {
  return t = B7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B7(e) {
  var t = L7(e, "string");
  return ga(t) == "symbol" ? t : t + "";
}
function L7(e, t) {
  if (ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z7(e, t) {
  if (e == null) return {};
  var r = F7(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function W7(e, t) {
  var r = e.x, n = e.y, a = z7(e, D7), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), c = parseInt(s, 10), l = "".concat(t.height || a.height), u = parseInt(l, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return mi(mi(mi(mi(mi({}, t), a), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: u,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function py(e) {
  return /* @__PURE__ */ A.createElement(co, df({
    shapeType: "rectangle",
    propTransformer: W7,
    activeClassName: "recharts-active-bar"
  }, e));
}
var U7 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? St(!1, "minPointSize callback function received a value with type of ".concat(ga(n), ". Currently only numbers are supported.")) : St()), r);
  };
}, H7 = ["value", "background"], r0;
function ba(e) {
  "@babel/helpers - typeof";
  return ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ba(e);
}
function G7(e, t) {
  if (e == null) return {};
  var r = K7(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function K7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ys() {
  return Ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ys.apply(this, arguments);
}
function my(e, t) {
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
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      Jr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, a0(n.key), n);
  }
}
function V7(e, t, r) {
  return t && vy(e.prototype, t), r && vy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y7(e, t, r) {
  return t = Xs(t), X7(e, n0() ? Reflect.construct(t, r || [], Xs(e).constructor) : t.apply(e, r));
}
function X7(e, t) {
  if (t && (ba(t) === "object" || typeof t == "function"))
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
function n0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (n0 = function() {
    return !!e;
  })();
}
function Xs(e) {
  return Xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xs(e);
}
function Q7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hf(e, t);
}
function hf(e, t) {
  return hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hf(e, t);
}
function Jr(e, t, r) {
  return t = a0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a0(e) {
  var t = J7(e, "string");
  return ba(t) == "symbol" ? t : t + "";
}
function J7(e, t) {
  if (ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hr = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    q7(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Y7(this, t, [].concat(a)), Jr(r, "state", {
      isAnimationFinished: !1
    }), Jr(r, "id", Wr("recharts-bar-")), Jr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Jr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return Q7(t, e), V7(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.dataKey, c = i.activeIndex, l = i.activeBar, u = Z(this.props, !1);
      return n && n.map(function(f, d) {
        var h = d === c, y = h ? l : o, m = Ke(Ke(Ke({}, u), f), {}, {
          isActive: h,
          option: y,
          index: d,
          dataKey: s,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ A.createElement(ie, Ys({
          className: "recharts-bar-rectangle"
        }, Nr(a.props, f, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(d)
        }), /* @__PURE__ */ A.createElement(py, m));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, s = a.isAnimationActive, c = a.animationBegin, l = a.animationDuration, u = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: c,
        duration: l,
        isActive: s,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var y = h.t, m = i.map(function(p, b) {
          var w = d && d[b];
          if (w) {
            var x = ue(w.x, p.x), O = ue(w.y, p.y), g = ue(w.width, p.width), _ = ue(w.height, p.height);
            return Ke(Ke({}, p), {}, {
              x: x(y),
              y: O(y),
              width: g(y),
              height: _(y)
            });
          }
          if (o === "horizontal") {
            var S = ue(0, p.height), P = S(y);
            return Ke(Ke({}, p), {}, {
              y: p.y + p.height - P,
              height: P
            });
          }
          var j = ue(0, p.width), E = j(y);
          return Ke(Ke({}, p), {}, {
            width: E
          });
        });
        return /* @__PURE__ */ A.createElement(ie, null, n.renderRectanglesStatically(m));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !pr(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, c = Z(this.props.background, !1);
      return i.map(function(l, u) {
        l.value;
        var f = l.background, d = G7(l, H7);
        if (!f)
          return null;
        var h = Ke(Ke(Ke(Ke(Ke({}, d), {}, {
          fill: "#eee"
        }, f), c), Nr(n.props, l, u)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: u,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ A.createElement(py, Ys({
          key: "background-bar-".concat(u),
          option: n.props.background,
          isActive: u === s
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, s = i.xAxis, c = i.yAxis, l = i.layout, u = i.children, f = ft(u, Ya);
      if (!f)
        return null;
      var d = l === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, b) {
        var w = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: w,
          errorVal: he(p, b)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ie, y, f.map(function(m) {
        return /* @__PURE__ */ A.cloneElement(m, {
          key: "error-bar-".concat(a, "-").concat(m.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: c,
          layout: l,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, s = n.xAxis, c = n.yAxis, l = n.left, u = n.top, f = n.width, d = n.height, h = n.isAnimationActive, y = n.background, m = n.id;
      if (a || !i || !i.length)
        return null;
      var p = this.state.isAnimationFinished, b = oe("recharts-bar", o), w = s && s.allowDataOverflow, x = c && c.allowDataOverflow, O = w || x, g = ae(m) ? this.id : m;
      return /* @__PURE__ */ A.createElement(ie, {
        className: b
      }, w || x ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? l : l - f / 2,
        y: x ? u : u - d / 2,
        width: w ? f : f * 2,
        height: x ? d : d * 2
      }))) : null, /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(g, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, g), (!h || p) && Pt.renderCallByParent(this.props, i));
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
}(ht);
r0 = hr;
Jr(hr, "displayName", "Bar");
Jr(hr, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !kt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Jr(hr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, c = e.yAxisTicks, l = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, h = f4(n, r);
  if (!h)
    return null;
  var y = t.layout, m = r.type.defaultProps, p = m !== void 0 ? Ke(Ke({}, m), r.props) : r.props, b = p.dataKey, w = p.children, x = p.minPointSize, O = y === "horizontal" ? o : i, g = l ? O.scale.domain() : null, _ = g4({
    numericAxis: O
  }), S = ft(w, Ga), P = f.map(function(j, E) {
    var $, k, C, D, N, M;
    l ? $ = d4(l[u + E], g) : ($ = he(j, b), Array.isArray($) || ($ = [_, $]));
    var B = U7(x, r0.defaultProps.minPointSize)($[1], E);
    if (y === "horizontal") {
      var W, H = [o.scale($[0]), o.scale($[1])], T = H[0], R = H[1];
      k = qm({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: h.offset,
        entry: j,
        index: E
      }), C = (W = R ?? T) !== null && W !== void 0 ? W : void 0, D = h.size;
      var L = T - R;
      if (N = Number.isNaN(L) ? 0 : L, M = {
        x: k,
        y: o.y,
        width: D,
        height: o.height
      }, Math.abs(B) > 0 && Math.abs(N) < Math.abs(B)) {
        var z = yt(N || B) * (Math.abs(B) - Math.abs(N));
        C -= z, N += z;
      }
    } else {
      var q = [i.scale($[0]), i.scale($[1])], Y = q[0], J = q[1];
      if (k = Y, C = qm({
        axis: o,
        ticks: c,
        bandSize: a,
        offset: h.offset,
        entry: j,
        index: E
      }), D = J - Y, N = h.size, M = {
        x: i.x,
        y: C,
        width: i.width,
        height: N
      }, Math.abs(B) > 0 && Math.abs(D) < Math.abs(B)) {
        var ee = yt(D || B) * (Math.abs(B) - Math.abs(D));
        D += ee;
      }
    }
    return Ke(Ke(Ke({}, j), {}, {
      x: k,
      y: C,
      width: D,
      height: N,
      value: l ? $ : $[1],
      payload: j,
      background: M
    }, S && S[E] && S[E].props), {}, {
      tooltipPayload: [_x(r, j)],
      tooltipPosition: {
        x: k + D / 2,
        y: C + N / 2
      }
    });
  });
  return Ke({
    data: P,
    layout: y
  }, d);
});
function fo(e) {
  "@babel/helpers - typeof";
  return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fo(e);
}
function eG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i0(n.key), n);
  }
}
function tG(e, t, r) {
  return t && yy(e.prototype, t), r && yy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function Yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gy(Object(r), !0).forEach(function(n) {
      Xc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xc(e, t, r) {
  return t = i0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i0(e) {
  var t = rG(e, "string");
  return fo(t) == "symbol" ? t : t + "";
}
function rG(e, t) {
  if (fo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $o = function(t, r, n, a, i) {
  var o = t.width, s = t.height, c = t.layout, l = t.children, u = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!ct(l, hr);
  return u.reduce(function(h, y) {
    var m = r[y], p = m.orientation, b = m.domain, w = m.padding, x = w === void 0 ? {} : w, O = m.mirror, g = m.reversed, _ = "".concat(p).concat(O ? "Mirror" : ""), S, P, j, E, $;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var k = b[1] - b[0], C = 1 / 0, D = m.categoricalDomain.sort(sC);
      if (D.forEach(function(q, Y) {
        Y > 0 && (C = Math.min((q || 0) - (D[Y - 1] || 0), C));
      }), Number.isFinite(C)) {
        var N = C / k, M = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && (S = N * M / 2), m.padding === "no-gap") {
          var B = gt(t.barCategoryGap, N * M), W = N * M / 2;
          S = W - B - (W - B) / M * B;
        }
      }
    }
    a === "xAxis" ? P = [n.left + (x.left || 0) + (S || 0), n.left + n.width - (x.right || 0) - (S || 0)] : a === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (S || 0), n.top + n.height - (x.bottom || 0) - (S || 0)] : P = m.range, g && (P = [P[1], P[0]]);
    var H = vx(m, i, d), T = H.scale, R = H.realScaleType;
    T.domain(b).range(P), yx(T);
    var L = gx(T, Yt(Yt({}, m), {}, {
      realScaleType: R
    }));
    a === "xAxis" ? ($ = p === "top" && !O || p === "bottom" && O, j = n.left, E = f[_] - $ * m.height) : a === "yAxis" && ($ = p === "left" && !O || p === "right" && O, j = f[_] - $ * m.width, E = n.top);
    var z = Yt(Yt(Yt({}, m), L), {}, {
      realScaleType: R,
      x: j,
      y: E,
      scale: T,
      width: a === "xAxis" ? n.width : m.width,
      height: a === "yAxis" ? n.height : m.height
    });
    return z.bandSize = Cs(z, L), !m.hide && a === "xAxis" ? f[_] += ($ ? -1 : 1) * z.height : m.hide || (f[_] += ($ ? -1 : 1) * z.width), Yt(Yt({}, h), {}, Xc({}, y, z));
  }, {});
}, o0 = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, nG = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return o0({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, s0 = /* @__PURE__ */ function() {
  function e(t) {
    eG(this, e), this.scale = t;
  }
  return tG(e, [{
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
Xc(s0, "EPS", 1e-4);
var Qd = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return Yt(Yt({}, n), {}, Xc({}, a, s0.create(t[a])));
  }, {});
  return Yt(Yt({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return O7(a, function(c, l) {
        return r[l].apply(c, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return t0(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function aG(e) {
  return (e % 180 + 180) % 180;
}
var iG = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = aG(a), o = i * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, oG = vr, sG = Fa, cG = Wa;
function lG(e) {
  return function(t, r, n) {
    var a = Object(t);
    if (!sG(t)) {
      var i = oG(r);
      t = cG(t), r = function(s) {
        return i(a[s], s, a);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? a[i ? t[o] : o] : void 0;
  };
}
var uG = lG, fG = Zx;
function dG(e) {
  var t = fG(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var hG = dG, pG = Yb, mG = vr, vG = hG, yG = Math.max;
function gG(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : vG(r);
  return a < 0 && (a = yG(n + a, 0)), pG(e, mG(t), a);
}
var bG = gG, _G = uG, xG = bG, wG = _G(xG), OG = wG;
const SG = /* @__PURE__ */ Se(OG);
var AG = fE(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Zs(e) {
  "@babel/helpers - typeof";
  return Zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zs(e);
}
var Jd = /* @__PURE__ */ Ht(void 0), eh = /* @__PURE__ */ Ht(void 0), c0 = /* @__PURE__ */ Ht(void 0), l0 = /* @__PURE__ */ Ht({}), u0 = /* @__PURE__ */ Ht(void 0), f0 = /* @__PURE__ */ Ht(0), d0 = /* @__PURE__ */ Ht(0), by = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, c = t.width, l = t.height, u = AG(i);
  return /* @__PURE__ */ A.createElement(Jd.Provider, {
    value: n
  }, /* @__PURE__ */ A.createElement(eh.Provider, {
    value: a
  }, /* @__PURE__ */ A.createElement(l0.Provider, {
    value: i
  }, /* @__PURE__ */ A.createElement(c0.Provider, {
    value: u
  }, /* @__PURE__ */ A.createElement(u0.Provider, {
    value: o
  }, /* @__PURE__ */ A.createElement(f0.Provider, {
    value: l
  }, /* @__PURE__ */ A.createElement(d0.Provider, {
    value: c
  }, s)))))));
}, PG = function() {
  return _t(u0);
};
function h0(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var p0 = function(t) {
  var r = _t(Jd);
  r == null && (process.env.NODE_ENV !== "production" ? St(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : St());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? St(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Zs(t), "]. ").concat(h0(r))) : St()), n;
}, jG = function() {
  var t = _t(Jd);
  return Zr(t);
}, TG = function() {
  var t = _t(eh), r = SG(t, function(n) {
    return t0(n.domain, Number.isFinite);
  });
  return r || Zr(t);
}, m0 = function(t) {
  var r = _t(eh);
  r == null && (process.env.NODE_ENV !== "production" ? St(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : St());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? St(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Zs(t), "]. ").concat(h0(r))) : St()), n;
}, $G = function() {
  var t = _t(c0);
  return t;
}, EG = function() {
  return _t(l0);
}, th = function() {
  return _t(d0);
}, rh = function() {
  return _t(f0);
};
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _a(e);
}
function CG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kG(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, y0(n.key), n);
  }
}
function NG(e, t, r) {
  return t && kG(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MG(e, t, r) {
  return t = Qs(t), IG(e, v0() ? Reflect.construct(t, r || [], Qs(e).constructor) : t.apply(e, r));
}
function IG(e, t) {
  if (t && (_a(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return DG(e);
}
function DG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function v0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (v0 = function() {
    return !!e;
  })();
}
function Qs(e) {
  return Qs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qs(e);
}
function RG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pf(e, t);
}
function pf(e, t) {
  return pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pf(e, t);
}
function _y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _y(Object(r), !0).forEach(function(n) {
      nh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nh(e, t, r) {
  return t = y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y0(e) {
  var t = BG(e, "string");
  return _a(t) == "symbol" ? t : t + "";
}
function BG(e, t) {
  if (_a(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_a(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function LG(e, t) {
  return UG(e) || WG(e, t) || FG(e, t) || zG();
}
function zG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FG(e, t) {
  if (e) {
    if (typeof e == "string") return wy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wy(e, t);
  }
}
function wy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function WG(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function UG(e) {
  if (Array.isArray(e)) return e;
}
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mf.apply(this, arguments);
}
var HG = function(t, r) {
  var n;
  return /* @__PURE__ */ A.isValidElement(t) ? n = /* @__PURE__ */ A.cloneElement(t, r) : te(t) ? n = t(r) : n = /* @__PURE__ */ A.createElement("line", mf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, GG = function(t, r, n, a, i, o, s, c, l) {
  var u = i.x, f = i.y, d = i.width, h = i.height;
  if (n) {
    var y = l.y, m = t.y.apply(y, {
      position: o
    });
    if (dr(l, "discard") && !t.y.isInRange(m))
      return null;
    var p = [{
      x: u + d,
      y: m
    }, {
      x: u,
      y: m
    }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var b = l.x, w = t.x.apply(b, {
      position: o
    });
    if (dr(l, "discard") && !t.x.isInRange(w))
      return null;
    var x = [{
      x: w,
      y: f + h
    }, {
      x: w,
      y: f
    }];
    return s === "top" ? x.reverse() : x;
  }
  if (a) {
    var O = l.segment, g = O.map(function(_) {
      return t.apply(_, {
        position: o
      });
    });
    return dr(l, "discard") && v7(g, function(_) {
      return !t.isInRange(_);
    }) ? null : g;
  }
  return null;
};
function KG(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, c = e.alwaysShow, l = PG(), u = p0(a), f = m0(i), d = $G();
  if (!l || !d)
    return null;
  Jt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = Qd({
    x: u.scale,
    y: f.scale
  }), y = Qe(t), m = Qe(r), p = n && n.length === 2, b = GG(h, y, m, p, d, e.position, u.orientation, f.orientation, e);
  if (!b)
    return null;
  var w = LG(b, 2), x = w[0], O = x.x, g = x.y, _ = w[1], S = _.x, P = _.y, j = dr(e, "hidden") ? "url(#".concat(l, ")") : void 0, E = xy(xy({
    clipPath: j
  }, Z(e, !0)), {}, {
    x1: O,
    y1: g,
    x2: S,
    y2: P
  });
  return /* @__PURE__ */ A.createElement(ie, {
    className: oe("recharts-reference-line", s)
  }, HG(o, E), nt.renderCallByParent(e, nG({
    x1: O,
    y1: g,
    x2: S,
    y2: P
  })));
}
var ah = /* @__PURE__ */ function(e) {
  function t() {
    return CG(this, t), MG(this, t, arguments);
  }
  return RG(t, e), NG(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(KG, this.props);
    }
  }]);
}(A.Component);
nh(ah, "displayName", "ReferenceLine");
nh(ah, "defaultProps", {
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
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function Oy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oy(Object(r), !0).forEach(function(n) {
      Zc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VG(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b0(n.key), n);
  }
}
function YG(e, t, r) {
  return t && VG(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XG(e, t, r) {
  return t = Js(t), ZG(e, g0() ? Reflect.construct(t, r || [], Js(e).constructor) : t.apply(e, r));
}
function ZG(e, t) {
  if (t && (xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QG(e);
}
function QG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (g0 = function() {
    return !!e;
  })();
}
function Js(e) {
  return Js = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Js(e);
}
function JG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
function Zc(e, t, r) {
  return t = b0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b0(e) {
  var t = eK(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function eK(e, t) {
  if (xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var tK = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Qd({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return dr(t, "discard") && !o.isInRange(s) ? null : s;
}, Qc = /* @__PURE__ */ function(e) {
  function t() {
    return qG(this, t), XG(this, t, arguments);
  }
  return JG(t, e), YG(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, l = Qe(a), u = Qe(i);
      if (Jt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !l || !u)
        return null;
      var f = tK(this.props);
      if (!f)
        return null;
      var d = f.x, h = f.y, y = this.props, m = y.shape, p = y.className, b = dr(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, w = Sy(Sy({
        clipPath: b
      }, Z(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ A.createElement(ie, {
        className: oe("recharts-reference-dot", p)
      }, t.renderDot(m, w), nt.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(A.Component);
Zc(Qc, "displayName", "ReferenceDot");
Zc(Qc, "defaultProps", {
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
Zc(Qc, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : te(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Xa, vf({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function wa(e) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wa(e);
}
function Ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Py(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ay(Object(r), !0).forEach(function(n) {
      Jc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nK(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, x0(n.key), n);
  }
}
function aK(e, t, r) {
  return t && nK(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iK(e, t, r) {
  return t = ec(t), oK(e, _0() ? Reflect.construct(t, r || [], ec(e).constructor) : t.apply(e, r));
}
function oK(e, t) {
  if (t && (wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sK(e);
}
function sK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_0 = function() {
    return !!e;
  })();
}
function ec(e) {
  return ec = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ec(e);
}
function cK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && bf(e, t);
}
function bf(e, t) {
  return bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, bf(e, t);
}
function Jc(e, t, r) {
  return t = x0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x0(e) {
  var t = lK(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function lK(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var uK = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, c = i.y1, l = i.y2, u = i.xAxis, f = i.yAxis;
  if (!u || !f) return null;
  var d = Qd({
    x: u.scale,
    y: f.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(s, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(l, {
      position: "end"
    }) : d.y.rangeMax
  };
  return dr(i, "discard") && (!d.isInRange(h) || !d.isInRange(y)) ? null : o0(h, y);
}, el = /* @__PURE__ */ function(e) {
  function t() {
    return rK(this, t), iK(this, t, arguments);
  }
  return cK(t, e), aK(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, c = n.className, l = n.alwaysShow, u = n.clipPathId;
      Jt(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Qe(a), d = Qe(i), h = Qe(o), y = Qe(s), m = this.props.shape;
      if (!f && !d && !h && !y && !m)
        return null;
      var p = uK(f, d, h, y, this.props);
      if (!p && !m)
        return null;
      var b = dr(this.props, "hidden") ? "url(#".concat(u, ")") : void 0;
      return /* @__PURE__ */ A.createElement(ie, {
        className: oe("recharts-reference-area", c)
      }, t.renderRect(m, Py(Py({
        clipPath: b
      }, Z(this.props, !0)), p)), nt.renderCallByParent(this.props, p));
    }
  }]);
}(A.Component);
Jc(el, "displayName", "ReferenceArea");
Jc(el, "defaultProps", {
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
Jc(el, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : te(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Gc, gf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function w0(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function fK(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return iG(n, r);
}
function dK(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function tc(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function hK(e, t) {
  return w0(e, t + 1);
}
function pK(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, c = 0, l = 1, u = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0)
      return {
        v: w0(n, l)
      };
    var m = c, p, b = function() {
      return p === void 0 && (p = r(y, m)), p;
    }, w = y.coordinate, x = c === 0 || tc(e, w, b, u, s);
    x || (c = 0, u = o, l += 1), x && (u = w + e * (b() / 2 + a), c += l);
  }, d; l <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function ho(e) {
  "@babel/helpers - typeof";
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
function jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jy(Object(r), !0).forEach(function(n) {
      mK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mK(e, t, r) {
  return t = vK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vK(e) {
  var t = yK(e, "string");
  return ho(t) == "symbol" ? t : t + "";
}
function yK(e, t) {
  if (ho(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ho(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gK(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, s = t.start, c = t.end, l = function(d) {
    var h = i[d], y, m = function() {
      return y === void 0 && (y = r(h, d)), y;
    };
    if (d === o - 1) {
      var p = e * (h.coordinate + e * m() / 2 - c);
      i[d] = h = st(st({}, h), {}, {
        tickCoord: p > 0 ? h.coordinate - p * e : h.coordinate
      });
    } else
      i[d] = h = st(st({}, h), {}, {
        tickCoord: h.coordinate
      });
    var b = tc(e, h.tickCoord, m, s, c);
    b && (c = h.tickCoord - e * (m() / 2 + a), i[d] = st(st({}, h), {}, {
      isShow: !0
    }));
  }, u = o - 1; u >= 0; u--)
    l(u);
  return i;
}
function bK(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, c = t.start, l = t.end;
  if (i) {
    var u = n[s - 1], f = r(u, s - 1), d = e * (u.coordinate + e * f / 2 - l);
    o[s - 1] = u = st(st({}, u), {}, {
      tickCoord: d > 0 ? u.coordinate - d * e : u.coordinate
    });
    var h = tc(e, u.tickCoord, function() {
      return f;
    }, c, l);
    h && (l = u.tickCoord - e * (f / 2 + a), o[s - 1] = st(st({}, u), {}, {
      isShow: !0
    }));
  }
  for (var y = i ? s - 1 : s, m = function(w) {
    var x = o[w], O, g = function() {
      return O === void 0 && (O = r(x, w)), O;
    };
    if (w === 0) {
      var _ = e * (x.coordinate - e * g() / 2 - c);
      o[w] = x = st(st({}, x), {}, {
        tickCoord: _ < 0 ? x.coordinate - _ * e : x.coordinate
      });
    } else
      o[w] = x = st(st({}, x), {}, {
        tickCoord: x.coordinate
      });
    var S = tc(e, x.tickCoord, g, c, l);
    S && (c = x.tickCoord + e * (g() / 2 + a), o[w] = st(st({}, x), {}, {
      isShow: !0
    }));
  }, p = 0; p < y; p++)
    m(p);
  return o;
}
function ih(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, c = e.interval, l = e.tickFormatter, u = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(c) || kt.isSsr)
    return hK(a, typeof c == "number" && G(c) ? c : 0);
  var d = [], h = s === "top" || s === "bottom" ? "width" : "height", y = u && h === "width" ? Qn(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(x, O) {
    var g = te(l) ? l(x.value, O) : x.value;
    return h === "width" ? fK(Qn(g, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : Qn(g, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, p = a.length >= 2 ? yt(a[1].coordinate - a[0].coordinate) : 1, b = dK(i, p, h);
  return c === "equidistantPreserveStart" ? pK(p, b, m, a, o) : (c === "preserveStart" || c === "preserveStartEnd" ? d = bK(p, b, m, a, o, c === "preserveStartEnd") : d = gK(p, b, m, a, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var _K = ["viewBox"], xK = ["viewBox"], wK = ["ticks"];
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(e);
}
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
function Ty(e, t) {
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
    t % 2 ? Ty(Object(r), !0).forEach(function(n) {
      oh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ul(e, t) {
  if (e == null) return {};
  var r = OK(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function SK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $y(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S0(n.key), n);
  }
}
function AK(e, t, r) {
  return t && $y(e.prototype, t), r && $y(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PK(e, t, r) {
  return t = rc(t), jK(e, O0() ? Reflect.construct(t, r || [], rc(e).constructor) : t.apply(e, r));
}
function jK(e, t) {
  if (t && (Oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return TK(e);
}
function TK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function O0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (O0 = function() {
    return !!e;
  })();
}
function rc(e) {
  return rc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rc(e);
}
function $K(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
function oh(e, t, r) {
  return t = S0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S0(e) {
  var t = EK(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function EK(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ja = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return SK(this, t), n = PK(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return $K(t, e), AK(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Ul(n, _K), s = this.props, c = s.viewBox, l = Ul(s, xK);
      return !Zn(i, c) || !Zn(o, l) || !Zn(a, this.state);
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
      var a = this.props, i = a.x, o = a.y, s = a.width, c = a.height, l = a.orientation, u = a.tickSize, f = a.mirror, d = a.tickMargin, h, y, m, p, b, w, x = f ? -1 : 1, O = n.tickSize || u, g = G(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (l) {
        case "top":
          h = y = n.coordinate, p = o + +!f * c, m = p - x * O, w = m - x * d, b = g;
          break;
        case "left":
          m = p = n.coordinate, y = i + +!f * s, h = y - x * O, b = h - x * d, w = g;
          break;
        case "right":
          m = p = n.coordinate, y = i + +f * s, h = y + x * O, b = h + x * d, w = g;
          break;
        default:
          h = y = n.coordinate, p = o + +f * c, m = p + x * O, w = m + x * d, b = g;
          break;
      }
      return {
        line: {
          x1: h,
          y1: m,
          x2: y,
          y2: p
        },
        tick: {
          x: b,
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.orientation, l = n.mirror, u = n.axisLine, f = pt(pt(pt({}, Z(this.props, !1)), Z(u, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var d = +(c === "top" && !l || c === "bottom" && l);
        f = pt(pt({}, f), {}, {
          x1: a,
          y1: i + d * s,
          x2: a + o,
          y2: i + d * s
        });
      } else {
        var h = +(c === "left" && !l || c === "right" && l);
        f = pt(pt({}, f), {}, {
          x1: a + h * o,
          y1: i,
          x2: a + h * o,
          y2: i + s
        });
      }
      return /* @__PURE__ */ A.createElement("line", Yn({}, f, {
        className: oe("recharts-cartesian-axis-line", At(u, "className"))
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
        var o = this, s = this.props, c = s.tickLine, l = s.stroke, u = s.tick, f = s.tickFormatter, d = s.unit, h = ih(pt(pt({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = Z(this.props, !1), b = Z(u, !1), w = pt(pt({}, p), {}, {
          fill: "none"
        }, Z(c, !1)), x = h.map(function(O, g) {
          var _ = o.getTickLineCoord(O), S = _.line, P = _.tick, j = pt(pt(pt(pt({
            textAnchor: y,
            verticalAnchor: m
          }, p), {}, {
            stroke: "none",
            fill: l
          }, b), P), {}, {
            index: g,
            payload: O,
            visibleTicksCount: h.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ A.createElement(ie, Yn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Nr(o.props, O, g)), c && /* @__PURE__ */ A.createElement("line", Yn({}, w, S, {
            className: oe("recharts-cartesian-axis-tick-line", At(c, "className"))
          })), u && t.renderTickItem(u, j, "".concat(te(f) ? f(O.value, g) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ A.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, x);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, s = a.height, c = a.ticksGenerator, l = a.className, u = a.hide;
      if (u)
        return null;
      var f = this.props, d = f.ticks, h = Ul(f, wK), y = d;
      return te(c) && (y = d && d.length > 0 ? c(this.props) : c(h)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ A.createElement(ie, {
        className: oe("recharts-cartesian-axis", l),
        ref: function(p) {
          n.layerReference = p;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), nt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, a) : te(n) ? o = n(a) : o = /* @__PURE__ */ A.createElement(Tn, Yn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
}(Og);
oh(Ja, "displayName", "CartesianAxis");
oh(Ja, "defaultProps", {
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
var CK = ["x1", "y1", "x2", "y2", "key"], kK = ["offset"];
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
function Ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ey(Object(r), !0).forEach(function(n) {
      NK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NK(e, t, r) {
  return t = MK(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MK(e) {
  var t = IK(e, "string");
  return En(t) == "symbol" ? t : t + "";
}
function IK(e, t) {
  if (En(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function On() {
  return On = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, On.apply(this, arguments);
}
function Cy(e, t) {
  if (e == null) return {};
  var r = DK(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var RK = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, a = t.x, i = t.y, o = t.width, s = t.height, c = t.ry;
  return /* @__PURE__ */ A.createElement("rect", {
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
function A0(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (te(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, c = Cy(t, CK), l = Z(c, !1);
    l.offset;
    var u = Cy(l, kK);
    r = /* @__PURE__ */ A.createElement("line", On({}, u, {
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
function BK(e) {
  var t = e.x, r = e.width, n = e.horizontal, a = n === void 0 ? !0 : n, i = e.horizontalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, c) {
    var l = ut(ut({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(c),
      index: c
    });
    return A0(a, l);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function LK(e) {
  var t = e.y, r = e.height, n = e.vertical, a = n === void 0 ? !0 : n, i = e.verticalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, c) {
    var l = ut(ut({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return A0(a, l);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function zK(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, a = e.y, i = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal, l = c === void 0 ? !0 : c;
  if (!l || !t || !t.length)
    return null;
  var u = s.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, h) {
    return d - h;
  });
  a !== u[0] && u.unshift(0);
  var f = u.map(function(d, h) {
    var y = !u[h + 1], m = y ? a + o - d : u[h + 1] - d;
    if (m <= 0)
      return null;
    var p = h % t.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(h),
      y: d,
      x: n,
      height: m,
      width: i,
      stroke: "none",
      fill: t[p],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function FK(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, a = e.fillOpacity, i = e.x, o = e.y, s = e.width, c = e.height, l = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var u = l.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, h) {
    return d - h;
  });
  i !== u[0] && u.unshift(0);
  var f = u.map(function(d, h) {
    var y = !u[h + 1], m = y ? i + s - d : u[h + 1] - d;
    if (m <= 0)
      return null;
    var p = h % n.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(h),
      x: d,
      y: o,
      width: m,
      height: c,
      stroke: "none",
      fill: n[p],
      fillOpacity: a,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var WK = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return mx(ih(ut(ut(ut({}, Ja.defaultProps), n), {}, {
    ticks: jr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, UK = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return mx(ih(ut(ut(ut({}, Ja.defaultProps), n), {}, {
    ticks: jr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, Fn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function P0(e) {
  var t, r, n, a, i, o, s = th(), c = rh(), l = EG(), u = ut(ut({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Fn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Fn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Fn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : Fn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : Fn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Fn.verticalFill,
    x: G(e.x) ? e.x : l.left,
    y: G(e.y) ? e.y : l.top,
    width: G(e.width) ? e.width : l.width,
    height: G(e.height) ? e.height : l.height
  }), f = u.x, d = u.y, h = u.width, y = u.height, m = u.syncWithTicks, p = u.horizontalValues, b = u.verticalValues, w = jG(), x = TG();
  if (!G(h) || h <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = u.verticalCoordinatesGenerator || WK, g = u.horizontalCoordinatesGenerator || UK, _ = u.horizontalPoints, S = u.verticalPoints;
  if ((!_ || !_.length) && te(g)) {
    var P = p && p.length, j = g({
      yAxis: x ? ut(ut({}, x), {}, {
        ticks: P ? p : x.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: l
    }, P ? !0 : m);
    Jt(Array.isArray(j), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(En(j), "]")), Array.isArray(j) && (_ = j);
  }
  if ((!S || !S.length) && te(O)) {
    var E = b && b.length, $ = O({
      xAxis: w ? ut(ut({}, w), {}, {
        ticks: E ? b : w.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: l
    }, E ? !0 : m);
    Jt(Array.isArray($), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(En($), "]")), Array.isArray($) && (S = $);
  }
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ A.createElement(RK, {
    fill: u.fill,
    fillOpacity: u.fillOpacity,
    x: u.x,
    y: u.y,
    width: u.width,
    height: u.height,
    ry: u.ry
  }), /* @__PURE__ */ A.createElement(BK, On({}, u, {
    offset: l,
    horizontalPoints: _,
    xAxis: w,
    yAxis: x
  })), /* @__PURE__ */ A.createElement(LK, On({}, u, {
    offset: l,
    verticalPoints: S,
    xAxis: w,
    yAxis: x
  })), /* @__PURE__ */ A.createElement(zK, On({}, u, {
    horizontalPoints: _
  })), /* @__PURE__ */ A.createElement(FK, On({}, u, {
    verticalPoints: S
  })));
}
P0.displayName = "CartesianGrid";
var HK = ["type", "layout", "connectNulls", "ref"], GK = ["key"];
function Sa(e) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
function ky(e, t) {
  if (e == null) return {};
  var r = KK(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ji() {
  return ji = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ji.apply(this, arguments);
}
function Ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ny(Object(r), !0).forEach(function(n) {
      Xt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wn(e) {
  return XK(e) || YK(e) || VK(e) || qK();
}
function qK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VK(e, t) {
  if (e) {
    if (typeof e == "string") return xf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xf(e, t);
  }
}
function YK(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function XK(e) {
  if (Array.isArray(e)) return xf(e);
}
function xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function My(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T0(n.key), n);
  }
}
function QK(e, t, r) {
  return t && My(e.prototype, t), r && My(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function JK(e, t, r) {
  return t = nc(t), eq(e, j0() ? Reflect.construct(t, r || [], nc(e).constructor) : t.apply(e, r));
}
function eq(e, t) {
  if (t && (Sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tq(e);
}
function tq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j0 = function() {
    return !!e;
  })();
}
function nc(e) {
  return nc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nc(e);
}
function rq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wf(e, t);
}
function wf(e, t) {
  return wf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, wf(e, t);
}
function Xt(e, t, r) {
  return t = T0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T0(e) {
  var t = nq(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function nq(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Cn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    ZK(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = JK(this, t, [].concat(a)), Xt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Xt(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Xt(r, "getStrokeDasharray", function(o, s, c) {
      var l = c.reduce(function(b, w) {
        return b + w;
      });
      if (!l)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var u = Math.floor(o / l), f = o % l, d = s - o, h = [], y = 0, m = 0; y < c.length; m += c[y], ++y)
        if (m + c[y] > f) {
          h = [].concat(Wn(c.slice(0, y)), [f - m]);
          break;
        }
      var p = h.length % 2 === 0 ? [0, d] : [d];
      return [].concat(Wn(t.repeat(c, u)), Wn(h), p).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), Xt(r, "id", Wr("recharts-line-")), Xt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Xt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Xt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return rq(t, e), QK(t, [{
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
      var i = this.props, o = i.points, s = i.xAxis, c = i.yAxis, l = i.layout, u = i.children, f = ft(u, Ya);
      if (!f)
        return null;
      var d = function(m, p) {
        return {
          x: m.x,
          y: m.y,
          value: m.value,
          errorVal: he(m.payload, p)
        };
      }, h = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ie, h, f.map(function(y) {
        return /* @__PURE__ */ A.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: c,
          layout: l,
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
      var s = this.props, c = s.dot, l = s.points, u = s.dataKey, f = Z(this.props, !1), d = Z(c, !0), h = l.map(function(m, p) {
        var b = Tt(Tt(Tt({
          key: "dot-".concat(p),
          r: 3
        }, f), d), {}, {
          index: p,
          cx: m.x,
          cy: m.y,
          value: m.value,
          dataKey: u,
          payload: m.payload,
          points: l
        });
        return t.renderDotItem(c, b);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ie, ji({
        className: "recharts-line-dots",
        key: "dots"
      }, y), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, c = s.type, l = s.layout, u = s.connectNulls;
      s.ref;
      var f = ky(s, HK), d = Tt(Tt(Tt({}, Z(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: c,
        layout: l,
        connectNulls: u
      });
      return /* @__PURE__ */ A.createElement(rn, ji({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, c = o.strokeDasharray, l = o.isAnimationActive, u = o.animationBegin, f = o.animationDuration, d = o.animationEasing, h = o.animationId, y = o.animateNewValues, m = o.width, p = o.height, b = this.state, w = b.prevPoints, x = b.totalLength;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: u,
        duration: f,
        isActive: l,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(O) {
        var g = O.t;
        if (w) {
          var _ = w.length / s.length, S = s.map(function(k, C) {
            var D = Math.floor(C * _);
            if (w[D]) {
              var N = w[D], M = ue(N.x, k.x), B = ue(N.y, k.y);
              return Tt(Tt({}, k), {}, {
                x: M(g),
                y: B(g)
              });
            }
            if (y) {
              var W = ue(m * 2, k.x), H = ue(p / 2, k.y);
              return Tt(Tt({}, k), {}, {
                x: W(g),
                y: H(g)
              });
            }
            return Tt(Tt({}, k), {}, {
              x: k.x,
              y: k.y
            });
          });
          return i.renderCurveStatically(S, n, a);
        }
        var P = ue(0, x), j = P(g), E;
        if (c) {
          var $ = "".concat(c).split(/[,\s]+/gim).map(function(k) {
            return parseFloat(k);
          });
          E = i.getStrokeDasharray(j, x, $);
        } else
          E = i.generateSimpleStrokeDasharray(x, j);
        return i.renderCurveStatically(s, n, a, {
          strokeDasharray: E
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.isAnimationActive, c = this.state, l = c.prevPoints, u = c.totalLength;
      return s && o && o.length && (!l && u > 0 || !pr(l, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, c = a.className, l = a.xAxis, u = a.yAxis, f = a.top, d = a.left, h = a.width, y = a.height, m = a.isAnimationActive, p = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, w = s.length === 1, x = oe("recharts-line", c), O = l && l.allowDataOverflow, g = u && u.allowDataOverflow, _ = O || g, S = ae(p) ? this.id : p, P = (n = Z(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, j = P.r, E = j === void 0 ? 3 : j, $ = P.strokeWidth, k = $ === void 0 ? 2 : $, C = ab(o) ? o : {}, D = C.clipDot, N = D === void 0 ? !0 : D, M = E * 2 + k;
      return /* @__PURE__ */ A.createElement(ie, {
        className: x
      }, O || g ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: O ? d : d - h / 2,
        y: g ? f : f - y / 2,
        width: O ? h : h * 2,
        height: g ? y : y * 2
      })), !N && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: d - M / 2,
        y: f - M / 2,
        width: h + M,
        height: y + M
      }))) : null, !w && this.renderCurve(_, S), this.renderErrorBar(_, S), (w || o) && this.renderDots(_, N, S), (!m || b) && Pt.renderCallByParent(this.props, s));
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
      for (var i = n.length % 2 !== 0 ? [].concat(Wn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(Wn(o), Wn(i));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, a) {
      var i;
      if (/* @__PURE__ */ A.isValidElement(n))
        i = /* @__PURE__ */ A.cloneElement(n, a);
      else if (te(n))
        i = n(a);
      else {
        var o = a.key, s = ky(a, GK), c = oe("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ A.createElement(Xa, ji({
          key: o
        }, s, {
          className: c
        }));
      }
      return i;
    }
  }]);
}(ht);
Xt(Cn, "displayName", "Line");
Xt(Cn, "defaultProps", {
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
  isAnimationActive: !kt.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Xt(Cn, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, l = e.offset, u = t.layout, f = c.map(function(d, h) {
    var y = he(d, o);
    return u === "horizontal" ? {
      x: ua({
        axis: r,
        ticks: a,
        bandSize: s,
        entry: d,
        index: h
      }),
      y: ae(y) ? null : n.scale(y),
      value: y,
      payload: d
    } : {
      x: ae(y) ? null : r.scale(y),
      y: ua({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: d,
        index: h
      }),
      value: y,
      payload: d
    };
  });
  return Tt({
    points: f,
    layout: u
  }, l);
});
var aq = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], iq = ["key"], $0;
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
function E0(e, t) {
  if (e == null) return {};
  var r = oq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iy(Object(r), !0).forEach(function(n) {
      lr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, k0(n.key), n);
  }
}
function cq(e, t, r) {
  return t && Dy(e.prototype, t), r && Dy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lq(e, t, r) {
  return t = ac(t), uq(e, C0() ? Reflect.construct(t, r || [], ac(e).constructor) : t.apply(e, r));
}
function uq(e, t) {
  if (t && (Aa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fq(e);
}
function fq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function C0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (C0 = function() {
    return !!e;
  })();
}
function ac(e) {
  return ac = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ac(e);
}
function dq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Of(e, t);
}
function lr(e, t, r) {
  return t = k0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k0(e) {
  var t = hq(e, "string");
  return Aa(t) == "symbol" ? t : t + "";
}
function hq(e, t) {
  if (Aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gr = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    sq(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = lq(this, t, [].concat(a)), lr(r, "state", {
      isAnimationFinished: !0
    }), lr(r, "id", Wr("recharts-area-")), lr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), te(o) && o();
    }), lr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), te(o) && o();
    }), r;
  }
  return dq(t, e), cq(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var c = this.props, l = c.dot, u = c.points, f = c.dataKey, d = Z(this.props, !1), h = Z(l, !0), y = u.map(function(p, b) {
        var w = Yr(Yr(Yr({
          key: "dot-".concat(b),
          r: 3
        }, d), h), {}, {
          index: b,
          cx: p.x,
          cy: p.y,
          dataKey: f,
          value: p.value,
          payload: p.payload,
          points: u
        });
        return t.renderDotItem(l, w);
      }), m = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(ie, Sn({
        className: "recharts-area-dots"
      }, m), y);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, c = o[0].x, l = o[o.length - 1].x, u = n * Math.abs(c - l), f = Qr(o.map(function(d) {
        return d.y || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Qr(i.map(function(d) {
        return d.y || 0;
      })), f)), G(f) ? /* @__PURE__ */ A.createElement("rect", {
        x: c < l ? c : c - u,
        y: 0,
        width: u,
        height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, c = o[0].y, l = o[o.length - 1].y, u = n * Math.abs(c - l), f = Qr(o.map(function(d) {
        return d.x || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Qr(i.map(function(d) {
        return d.x || 0;
      })), f)), G(f) ? /* @__PURE__ */ A.createElement("rect", {
        x: 0,
        y: c < l ? c : c - u,
        width: f + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(u)
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
      var s = this.props, c = s.layout, l = s.type, u = s.stroke, f = s.connectNulls, d = s.isRange;
      s.ref;
      var h = E0(s, aq);
      return /* @__PURE__ */ A.createElement(ie, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ A.createElement(rn, Sn({}, Z(h, !0), {
        points: n,
        connectNulls: f,
        type: l,
        baseLine: a,
        layout: c,
        stroke: "none",
        className: "recharts-area-area"
      })), u !== "none" && /* @__PURE__ */ A.createElement(rn, Sn({}, Z(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: l,
        connectNulls: f,
        fill: "none",
        points: n
      })), u !== "none" && d && /* @__PURE__ */ A.createElement(rn, Sn({}, Z(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: l,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, c = o.baseLine, l = o.isAnimationActive, u = o.animationBegin, f = o.animationDuration, d = o.animationEasing, h = o.animationId, y = this.state, m = y.prevPoints, p = y.prevBaseLine;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: u,
        duration: f,
        isActive: l,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(b) {
        var w = b.t;
        if (m) {
          var x = m.length / s.length, O = s.map(function(P, j) {
            var E = Math.floor(j * x);
            if (m[E]) {
              var $ = m[E], k = ue($.x, P.x), C = ue($.y, P.y);
              return Yr(Yr({}, P), {}, {
                x: k(w),
                y: C(w)
              });
            }
            return P;
          }), g;
          if (G(c) && typeof c == "number") {
            var _ = ue(p, c);
            g = _(w);
          } else if (ae(c) || an(c)) {
            var S = ue(p, 0);
            g = S(w);
          } else
            g = c.map(function(P, j) {
              var E = Math.floor(j * x);
              if (p[E]) {
                var $ = p[E], k = ue($.x, P.x), C = ue($.y, P.y);
                return Yr(Yr({}, P), {}, {
                  x: k(w),
                  y: C(w)
                });
              }
              return P;
            });
          return i.renderAreaStatically(O, g, n, a);
        }
        return /* @__PURE__ */ A.createElement(ie, null, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(w))), /* @__PURE__ */ A.createElement(ie, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(s, c, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.baseLine, c = i.isAnimationActive, l = this.state, u = l.prevPoints, f = l.prevBaseLine, d = l.totalLength;
      return c && o && o.length && (!u && d > 0 || !pr(u, o) || !pr(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, c = a.className, l = a.top, u = a.left, f = a.xAxis, d = a.yAxis, h = a.width, y = a.height, m = a.isAnimationActive, p = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, w = s.length === 1, x = oe("recharts-area", c), O = f && f.allowDataOverflow, g = d && d.allowDataOverflow, _ = O || g, S = ae(p) ? this.id : p, P = (n = Z(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, j = P.r, E = j === void 0 ? 3 : j, $ = P.strokeWidth, k = $ === void 0 ? 2 : $, C = ab(o) ? o : {}, D = C.clipDot, N = D === void 0 ? !0 : D, M = E * 2 + k;
      return /* @__PURE__ */ A.createElement(ie, {
        className: x
      }, O || g ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: O ? u : u - h / 2,
        y: g ? l : l - y / 2,
        width: O ? h : h * 2,
        height: g ? y : y * 2
      })), !N && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(S)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: u - M / 2,
        y: l - M / 2,
        width: h + M,
        height: y + M
      }))) : null, w ? null : this.renderArea(_, S), (o || w) && this.renderDots(_, N, S), (!m || b) && Pt.renderCallByParent(this.props, s));
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
}(ht);
$0 = Gr;
lr(Gr, "displayName", "Area");
lr(Gr, "defaultProps", {
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
  isAnimationActive: !kt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
lr(Gr, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, s = o ?? i;
  if (G(s) && typeof s == "number")
    return s;
  var c = a === "horizontal" ? n : r, l = c.scale.domain();
  if (c.type === "number") {
    var u = Math.max(l[0], l[1]), f = Math.min(l[0], l[1]);
    return s === "dataMin" ? f : s === "dataMax" || u < 0 ? u : Math.max(Math.min(l[0], l[1]), 0);
  }
  return s === "dataMin" ? l[0] : s === "dataMax" ? l[1] : l[0];
});
lr(Gr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, c = e.dataKey, l = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, h = t.layout, y = l && l.length, m = $0.getBaseValue(t, r, n, a), p = h === "horizontal", b = !1, w = f.map(function(O, g) {
    var _;
    y ? _ = l[u + g] : (_ = he(O, c), Array.isArray(_) ? b = !0 : _ = [m, _]);
    var S = _[1] == null || y && he(O, c) == null;
    return p ? {
      x: ua({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: O,
        index: g
      }),
      y: S ? null : a.scale(_[1]),
      value: _,
      payload: O
    } : {
      x: S ? null : n.scale(_[1]),
      y: ua({
        axis: a,
        ticks: o,
        bandSize: s,
        entry: O,
        index: g
      }),
      value: _,
      payload: O
    };
  }), x;
  return y || b ? x = w.map(function(O) {
    var g = Array.isArray(O.value) ? O.value[0] : null;
    return p ? {
      x: O.x,
      y: g != null && O.y != null ? a.scale(g) : null
    } : {
      x: g != null ? n.scale(g) : null,
      y: O.y
    };
  }) : x = p ? a.scale(m) : n.scale(m), Yr({
    points: w,
    baseLine: x,
    layout: h,
    isRange: b
  }, d);
});
lr(Gr, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (te(e))
    r = e(t);
  else {
    var n = oe("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = E0(t, iq);
    r = /* @__PURE__ */ A.createElement(Xa, Sn({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function Pa(e) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(e);
}
function pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, I0(n.key), n);
  }
}
function vq(e, t, r) {
  return t && mq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yq(e, t, r) {
  return t = ic(t), gq(e, N0() ? Reflect.construct(t, r || [], ic(e).constructor) : t.apply(e, r));
}
function gq(e, t) {
  if (t && (Pa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bq(e);
}
function bq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function N0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (N0 = function() {
    return !!e;
  })();
}
function ic(e) {
  return ic = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ic(e);
}
function _q(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Sf(e, t);
}
function M0(e, t, r) {
  return t = I0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I0(e) {
  var t = xq(e, "string");
  return Pa(t) == "symbol" ? t : t + "";
}
function xq(e, t) {
  if (Pa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Eo = /* @__PURE__ */ function(e) {
  function t() {
    return pq(this, t), yq(this, t, arguments);
  }
  return _q(t, e), vq(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(A.Component);
M0(Eo, "displayName", "ZAxis");
M0(Eo, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var wq = ["option", "isActive"];
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
function Oq(e, t) {
  if (e == null) return {};
  var r = Sq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Sq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Aq(e) {
  var t = e.option, r = e.isActive, n = Oq(e, wq);
  return typeof t == "string" ? /* @__PURE__ */ A.createElement(co, Ti({
    option: /* @__PURE__ */ A.createElement(Ec, Ti({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ A.createElement(co, Ti({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
function ja(e) {
  "@babel/helpers - typeof";
  return ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ja(e);
}
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $i.apply(this, arguments);
}
function Ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ry(Object(r), !0).forEach(function(n) {
      en(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function By(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R0(n.key), n);
  }
}
function jq(e, t, r) {
  return t && By(e.prototype, t), r && By(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Tq(e, t, r) {
  return t = oc(t), $q(e, D0() ? Reflect.construct(t, r || [], oc(e).constructor) : t.apply(e, r));
}
function $q(e, t) {
  if (t && (ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Eq(e);
}
function Eq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (D0 = function() {
    return !!e;
  })();
}
function oc(e) {
  return oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oc(e);
}
function Cq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Af(e, t);
}
function en(e, t, r) {
  return t = R0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R0(e) {
  var t = kq(e, "string");
  return ja(t) == "symbol" ? t : t + "";
}
function kq(e, t) {
  if (ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ei = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Pq(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Tq(this, t, [].concat(a)), en(r, "state", {
      isAnimationFinished: !1
    }), en(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), en(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), en(r, "id", Wr("recharts-scatter-")), r;
  }
  return Cq(t, e), jq(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.activeShape, c = i.activeIndex, l = Z(this.props, !1);
      return n.map(function(u, f) {
        var d = c === f, h = d ? s : o, y = zt(zt({}, l), u);
        return /* @__PURE__ */ A.createElement(ie, $i({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(u == null ? void 0 : u.cx, "-").concat(u == null ? void 0 : u.cy, "-").concat(u == null ? void 0 : u.size, "-").concat(f)
        }, Nr(a.props, u, f), {
          role: "img"
        }), /* @__PURE__ */ A.createElement(Aq, $i({
          option: h,
          isActive: d,
          key: "symbol-".concat(f)
        }, y)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.points, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, l = a.animationEasing, u = a.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var h = d.t, y = i.map(function(m, p) {
          var b = f && f[p];
          if (b) {
            var w = ue(b.cx, m.cx), x = ue(b.cy, m.cy), O = ue(b.size, m.size);
            return zt(zt({}, m), {}, {
              cx: w(h),
              cy: x(h),
              size: O(h)
            });
          }
          var g = ue(0, m.size);
          return zt(zt({}, m), {}, {
            size: g(h)
          });
        });
        return /* @__PURE__ */ A.createElement(ie, null, n.renderSymbolsStatically(y));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, a = n.points, i = n.isAnimationActive, o = this.state.prevPoints;
      return i && a && a.length && (!o || !pr(o, a)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(a);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var a = this.props, i = a.points, o = a.xAxis, s = a.yAxis, c = a.children, l = ft(c, Ya);
      return l ? l.map(function(u, f) {
        var d = u.props, h = d.direction, y = d.dataKey;
        return /* @__PURE__ */ A.cloneElement(u, {
          key: "".concat(h, "-").concat(y, "-").concat(i[f]),
          data: i,
          xAxis: o,
          yAxis: s,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(p, b) {
            return {
              x: p.cx,
              y: p.cy,
              value: h === "x" ? +p.node.x : +p.node.y,
              errorVal: he(p, b)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, a = n.points, i = n.line, o = n.lineType, s = n.lineJointType, c = Z(this.props, !1), l = Z(i, !1), u, f;
      if (o === "joint")
        u = a.map(function(x) {
          return {
            x: x.cx,
            y: x.cy
          };
        });
      else if (o === "fitting") {
        var d = oC(a), h = d.xmin, y = d.xmax, m = d.a, p = d.b, b = function(O) {
          return m * O + p;
        };
        u = [{
          x: h,
          y: b(h)
        }, {
          x: y,
          y: b(y)
        }];
      }
      var w = zt(zt(zt({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, l), {}, {
        points: u
      });
      return /* @__PURE__ */ A.isValidElement(i) ? f = /* @__PURE__ */ A.cloneElement(i, w) : te(i) ? f = i(w) : f = /* @__PURE__ */ A.createElement(rn, $i({}, w, {
        type: s
      })), /* @__PURE__ */ A.createElement(ie, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.points, o = n.line, s = n.className, c = n.xAxis, l = n.yAxis, u = n.left, f = n.top, d = n.width, h = n.height, y = n.id, m = n.isAnimationActive;
      if (a || !i || !i.length)
        return null;
      var p = this.state.isAnimationFinished, b = oe("recharts-scatter", s), w = c && c.allowDataOverflow, x = l && l.allowDataOverflow, O = w || x, g = ae(y) ? this.id : y;
      return /* @__PURE__ */ A.createElement(ie, {
        className: b,
        clipPath: O ? "url(#clipPath-".concat(g, ")") : null
      }, w || x ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? u : u - d / 2,
        y: x ? f : f - h / 2,
        width: w ? d : d * 2,
        height: x ? h : h * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ A.createElement(ie, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!m || p) && Pt.renderCallByParent(this.props, i));
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
}(ht);
en(ei, "displayName", "Scatter");
en(ei, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !kt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
en(ei, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, a = e.item, i = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, l = a.props.tooltipType, u = ft(a.props.children, Ga), f = ae(t.dataKey) ? a.props.dataKey : t.dataKey, d = ae(r.dataKey) ? a.props.dataKey : r.dataKey, h = n && n.dataKey, y = n ? n.range : Eo.defaultProps.range, m = y && y[0], p = t.scale.bandwidth ? t.scale.bandwidth() : 0, b = r.scale.bandwidth ? r.scale.bandwidth() : 0, w = i.map(function(x, O) {
    var g = he(x, f), _ = he(x, d), S = !ae(h) && he(x, h) || "-", P = [{
      name: ae(t.dataKey) ? a.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: g,
      payload: x,
      dataKey: f,
      type: l
    }, {
      name: ae(r.dataKey) ? a.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: _,
      payload: x,
      dataKey: d,
      type: l
    }];
    S !== "-" && P.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: S,
      payload: x,
      dataKey: h,
      type: l
    });
    var j = ua({
      axis: t,
      ticks: o,
      bandSize: p,
      entry: x,
      index: O,
      dataKey: f
    }), E = ua({
      axis: r,
      ticks: s,
      bandSize: b,
      entry: x,
      index: O,
      dataKey: d
    }), $ = S !== "-" ? n.scale(S) : m, k = Math.sqrt(Math.max($, 0) / Math.PI);
    return zt(zt({}, x), {}, {
      cx: j,
      cy: E,
      x: j - k,
      y: E - k,
      xAxis: t,
      yAxis: r,
      zAxis: n,
      width: 2 * k,
      height: 2 * k,
      size: $,
      node: {
        x: g,
        y: _,
        z: S
      },
      tooltipPayload: P,
      tooltipPosition: {
        x: j,
        y: E
      },
      payload: x
    }, u && u[O] && u[O].props);
  });
  return zt({
    points: w
  }, c);
});
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function Nq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z0(n.key), n);
  }
}
function Iq(e, t, r) {
  return t && Mq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Dq(e, t, r) {
  return t = sc(t), Rq(e, B0() ? Reflect.construct(t, r || [], sc(e).constructor) : t.apply(e, r));
}
function Rq(e, t) {
  if (t && (Ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Bq(e);
}
function Bq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function B0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (B0 = function() {
    return !!e;
  })();
}
function sc(e) {
  return sc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sc(e);
}
function Lq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pf(e, t);
}
function Pf(e, t) {
  return Pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pf(e, t);
}
function L0(e, t, r) {
  return t = z0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z0(e) {
  var t = zq(e, "string");
  return Ta(t) == "symbol" ? t : t + "";
}
function zq(e, t) {
  if (Ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jf.apply(this, arguments);
}
function Fq(e) {
  var t = e.xAxisId, r = th(), n = rh(), a = p0(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ A.createElement(Ja, jf({}, a, {
      className: oe("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return jr(o, !0);
      }
    }))
  );
}
var Br = /* @__PURE__ */ function(e) {
  function t() {
    return Nq(this, t), Dq(this, t, arguments);
  }
  return Lq(t, e), Iq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(Fq, this.props);
    }
  }]);
}(A.Component);
L0(Br, "displayName", "XAxis");
L0(Br, "defaultProps", {
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
function $a(e) {
  "@babel/helpers - typeof";
  return $a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $a(e);
}
function Wq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Uq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, U0(n.key), n);
  }
}
function Hq(e, t, r) {
  return t && Uq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Gq(e, t, r) {
  return t = cc(t), Kq(e, F0() ? Reflect.construct(t, r || [], cc(e).constructor) : t.apply(e, r));
}
function Kq(e, t) {
  if (t && ($a(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qq(e);
}
function qq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function F0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (F0 = function() {
    return !!e;
  })();
}
function cc(e) {
  return cc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cc(e);
}
function Vq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tf(e, t);
}
function Tf(e, t) {
  return Tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Tf(e, t);
}
function W0(e, t, r) {
  return t = U0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U0(e) {
  var t = Yq(e, "string");
  return $a(t) == "symbol" ? t : t + "";
}
function Yq(e, t) {
  if ($a(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($a(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $f.apply(this, arguments);
}
var Xq = function(t) {
  var r = t.yAxisId, n = th(), a = rh(), i = m0(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ A.createElement(Ja, $f({}, i, {
      className: oe("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(s) {
        return jr(s, !0);
      }
    }))
  );
}, Lr = /* @__PURE__ */ function(e) {
  function t() {
    return Wq(this, t), Gq(this, t, arguments);
  }
  return Vq(t, e), Hq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(Xq, this.props);
    }
  }]);
}(A.Component);
W0(Lr, "displayName", "YAxis");
W0(Lr, "defaultProps", {
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
function Ly(e) {
  return eV(e) || Jq(e) || Qq(e) || Zq();
}
function Zq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qq(e, t) {
  if (e) {
    if (typeof e == "string") return Ef(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ef(e, t);
  }
}
function Jq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eV(e) {
  if (Array.isArray(e)) return Ef(e);
}
function Ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Cf = function(t, r, n, a, i) {
  var o = ft(t, ah), s = ft(t, Qc), c = [].concat(Ly(o), Ly(s)), l = ft(t, el), u = "".concat(a, "Id"), f = a[0], d = r;
  if (c.length && (d = c.reduce(function(m, p) {
    if (p.props[u] === n && dr(p.props, "extendDomain") && G(p.props[f])) {
      var b = p.props[f];
      return [Math.min(m[0], b), Math.max(m[1], b)];
    }
    return m;
  }, d)), l.length) {
    var h = "".concat(f, "1"), y = "".concat(f, "2");
    d = l.reduce(function(m, p) {
      if (p.props[u] === n && dr(p.props, "extendDomain") && G(p.props[h]) && G(p.props[y])) {
        var b = p.props[h], w = p.props[y];
        return [Math.min(m[0], b, w), Math.max(m[1], b, w)];
      }
      return m;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(m, p) {
    return G(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, d)), d;
}, H0 = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(c, l, u) {
    this.fn = c, this.context = l, this.once = u || !1;
  }
  function i(c, l, u, f, d) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var h = new a(u, f || c, d), y = r ? r + l : l;
    return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], h] : c._events[y].push(h) : (c._events[y] = h, c._eventsCount++), c;
  }
  function o(c, l) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[l];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var l = [], u, f;
    if (this._eventsCount === 0) return l;
    for (f in u = this._events)
      t.call(u, f) && l.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
  }, s.prototype.listeners = function(l) {
    var u = r ? r + l : l, f = this._events[u];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, h = f.length, y = new Array(h); d < h; d++)
      y[d] = f[d].fn;
    return y;
  }, s.prototype.listenerCount = function(l) {
    var u = r ? r + l : l, f = this._events[u];
    return f ? f.fn ? 1 : f.length : 0;
  }, s.prototype.emit = function(l, u, f, d, h, y) {
    var m = r ? r + l : l;
    if (!this._events[m]) return !1;
    var p = this._events[m], b = arguments.length, w, x;
    if (p.fn) {
      switch (p.once && this.removeListener(l, p.fn, void 0, !0), b) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, u), !0;
        case 3:
          return p.fn.call(p.context, u, f), !0;
        case 4:
          return p.fn.call(p.context, u, f, d), !0;
        case 5:
          return p.fn.call(p.context, u, f, d, h), !0;
        case 6:
          return p.fn.call(p.context, u, f, d, h, y), !0;
      }
      for (x = 1, w = new Array(b - 1); x < b; x++)
        w[x - 1] = arguments[x];
      p.fn.apply(p.context, w);
    } else {
      var O = p.length, g;
      for (x = 0; x < O; x++)
        switch (p[x].once && this.removeListener(l, p[x].fn, void 0, !0), b) {
          case 1:
            p[x].fn.call(p[x].context);
            break;
          case 2:
            p[x].fn.call(p[x].context, u);
            break;
          case 3:
            p[x].fn.call(p[x].context, u, f);
            break;
          case 4:
            p[x].fn.call(p[x].context, u, f, d);
            break;
          default:
            if (!w) for (g = 1, w = new Array(b - 1); g < b; g++)
              w[g - 1] = arguments[g];
            p[x].fn.apply(p[x].context, w);
        }
    }
    return !0;
  }, s.prototype.on = function(l, u, f) {
    return i(this, l, u, f, !1);
  }, s.prototype.once = function(l, u, f) {
    return i(this, l, u, f, !0);
  }, s.prototype.removeListener = function(l, u, f, d) {
    var h = r ? r + l : l;
    if (!this._events[h]) return this;
    if (!u)
      return o(this, h), this;
    var y = this._events[h];
    if (y.fn)
      y.fn === u && (!d || y.once) && (!f || y.context === f) && o(this, h);
    else {
      for (var m = 0, p = [], b = y.length; m < b; m++)
        (y[m].fn !== u || d && !y[m].once || f && y[m].context !== f) && p.push(y[m]);
      p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
    }
    return this;
  }, s.prototype.removeAllListeners = function(l) {
    var u;
    return l ? (u = r ? r + l : l, this._events[u] && o(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(H0);
var tV = H0.exports;
const rV = /* @__PURE__ */ Se(tV);
var Hl = new rV(), Gl = "recharts.syncMouseEvents";
function po(e) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, po(e);
}
function nV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, G0(n.key), n);
  }
}
function iV(e, t, r) {
  return t && aV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kl(e, t, r) {
  return t = G0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G0(e) {
  var t = oV(e, "string");
  return po(t) == "symbol" ? t : t + "";
}
function oV(e, t) {
  if (po(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (po(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var sV = /* @__PURE__ */ function() {
  function e() {
    nV(this, e), Kl(this, "activeIndex", 0), Kl(this, "coordinateList", []), Kl(this, "layout", "horizontal");
  }
  return iV(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, s = o === void 0 ? null : o, c = r.layout, l = c === void 0 ? null : c, u = r.offset, f = u === void 0 ? null : u, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = l ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, s = a.height, c = this.coordinateList[this.activeIndex].coordinate, l = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, u = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + c + l, d = o + this.offset.top + s / 2 + u;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function cV(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function lV(e, t, r, n) {
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
function K0(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = ge(t, r, n, a), s = ge(t, r, n, i);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function uV(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, c = t.cy, l = t.innerRadius, u = t.outerRadius, f = t.angle, d = ge(s, c, l, f), h = ge(s, c, u, f);
      n = d.x, a = d.y, i = h.x, o = h.y;
    } else
      return K0(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function mo(e) {
  "@babel/helpers - typeof";
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
function zy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zy(Object(r), !0).forEach(function(n) {
      fV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fV(e, t, r) {
  return t = dV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dV(e) {
  var t = hV(e, "string");
  return mo(t) == "symbol" ? t : t + "";
}
function hV(e, t) {
  if (mo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pV(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, c = e.offset, l = e.activeTooltipIndex, u = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, m = rn;
  if (d === "ScatterChart")
    y = o, m = D5;
  else if (d === "BarChart")
    y = lV(f, o, c, u), m = Gc;
  else if (f === "radial") {
    var p = K0(o), b = p.cx, w = p.cy, x = p.radius, O = p.startAngle, g = p.endAngle;
    y = {
      cx: b,
      cy: w,
      startAngle: O,
      endAngle: g,
      innerRadius: x,
      outerRadius: x
    }, m = $x;
  } else
    y = {
      points: uV(f, o, c)
    }, m = rn;
  var _ = Vo(Vo(Vo(Vo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), y), Z(h, !1)), {}, {
    payload: s,
    payloadIndex: l,
    className: oe("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ Qt(h) ? /* @__PURE__ */ Xe(h, _) : /* @__PURE__ */ wg(m, _);
}
var mV = ["item"], vV = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Ea(e) {
  "@babel/helpers - typeof";
  return Ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ea(e);
}
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xn.apply(this, arguments);
}
function Fy(e, t) {
  return bV(e) || gV(e, t) || V0(e, t) || yV();
}
function yV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function bV(e) {
  if (Array.isArray(e)) return e;
}
function Wy(e, t) {
  if (e == null) return {};
  var r = _V(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _V(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y0(n.key), n);
  }
}
function OV(e, t, r) {
  return t && wV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SV(e, t, r) {
  return t = lc(t), AV(e, q0() ? Reflect.construct(t, r || [], lc(e).constructor) : t.apply(e, r));
}
function AV(e, t) {
  if (t && (Ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PV(e);
}
function PV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function q0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (q0 = function() {
    return !!e;
  })();
}
function lc(e) {
  return lc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lc(e);
}
function jV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kf(e, t);
}
function kf(e, t) {
  return kf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kf(e, t);
}
function Ca(e) {
  return EV(e) || $V(e) || V0(e) || TV();
}
function TV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V0(e, t) {
  if (e) {
    if (typeof e == "string") return Nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nf(e, t);
  }
}
function $V(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EV(e) {
  if (Array.isArray(e)) return Nf(e);
}
function Nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uy(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = Y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y0(e) {
  var t = CV(e, "string");
  return Ea(t) == "symbol" ? t : t + "";
}
function CV(e, t) {
  if (Ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kV = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, NV = {
  width: "100%",
  height: "100%"
}, X0 = {
  x: 0,
  y: 0
};
function Yo(e) {
  return e;
}
var MV = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, IV = function(t, r, n, a) {
  var i = r.find(function(u) {
    return u && u.index === n;
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
      return F(F(F({}, a), ge(a.cx, a.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var c = i.coordinate, l = a.angle;
    return F(F(F({}, a), ge(a.cx, a.cy, c, l)), {}, {
      angle: l,
      radius: c
    });
  }
  return X0;
}, tl = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var l = c.props.data;
    return l && l.length ? [].concat(Ca(s), Ca(l)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function Z0(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Mf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = tl(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(c, l) {
    var u, f = (u = l.props.data) !== null && u !== void 0 ? u : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = f === void 0 ? s : f;
      d = rs(h, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(Ca(c), [_x(l, d)]) : c;
  }, []);
}, Hy = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = MV(i, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, l = t.tooltipTicks, u = i4(o, s, l, c);
  if (u >= 0 && l) {
    var f = l[u] && l[u].value, d = Mf(t, r, u, f), h = IV(n, s, u, i);
    return {
      activeTooltipIndex: u,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, DV = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, l = r.dataEndIndex, u = t.layout, f = t.children, d = t.stackOffset, h = px(u, i);
  return n.reduce(function(y, m) {
    var p, b = m.type.defaultProps !== void 0 ? F(F({}, m.type.defaultProps), m.props) : m.props, w = b.type, x = b.dataKey, O = b.allowDataOverflow, g = b.allowDuplicatedCategory, _ = b.scale, S = b.ticks, P = b.includeHidden, j = b[o];
    if (y[j])
      return y;
    var E = tl(t.data, {
      graphicalItems: a.filter(function(L) {
        var z, q = o in L.props ? L.props[o] : (z = L.type.defaultProps) === null || z === void 0 ? void 0 : z[o];
        return q === j;
      }),
      dataStartIndex: c,
      dataEndIndex: l
    }), $ = E.length, k, C, D;
    cV(b.domain, O, w) && (k = Wu(b.domain, null, O), h && (w === "number" || _ !== "auto") && (D = Oi(E, x, "category")));
    var N = Z0(w);
    if (!k || k.length === 0) {
      var M, B = (M = b.domain) !== null && M !== void 0 ? M : N;
      if (x) {
        if (k = Oi(E, x, w), w === "category" && h) {
          var W = iC(k);
          g && W ? (C = k, k = Ks(0, $)) : g || (k = Xm(B, k, m).reduce(function(L, z) {
            return L.indexOf(z) >= 0 ? L : [].concat(Ca(L), [z]);
          }, []));
        } else if (w === "category")
          g ? k = k.filter(function(L) {
            return L !== "" && !ae(L);
          }) : k = Xm(B, k, m).reduce(function(L, z) {
            return L.indexOf(z) >= 0 || z === "" || ae(z) ? L : [].concat(Ca(L), [z]);
          }, []);
        else if (w === "number") {
          var H = u4(E, a.filter(function(L) {
            var z, q, Y = o in L.props ? L.props[o] : (z = L.type.defaultProps) === null || z === void 0 ? void 0 : z[o], J = "hide" in L.props ? L.props.hide : (q = L.type.defaultProps) === null || q === void 0 ? void 0 : q.hide;
            return Y === j && (P || !J);
          }), x, i, u);
          H && (k = H);
        }
        h && (w === "number" || _ !== "auto") && (D = Oi(E, x, "category"));
      } else h ? k = Ks(0, $) : s && s[j] && s[j].hasStack && w === "number" ? k = d === "expand" ? [0, 1] : bx(s[j].stackGroups, c, l) : k = hx(E, a.filter(function(L) {
        var z = o in L.props ? L.props[o] : L.type.defaultProps[o], q = "hide" in L.props ? L.props.hide : L.type.defaultProps.hide;
        return z === j && (P || !q);
      }), w, u, !0);
      if (w === "number")
        k = Cf(f, k, j, i, S), B && (k = Wu(B, k, O));
      else if (w === "category" && B) {
        var T = B, R = k.every(function(L) {
          return T.indexOf(L) >= 0;
        });
        R && (k = T);
      }
    }
    return F(F({}, y), {}, se({}, j, F(F({}, b), {}, {
      axisType: i,
      domain: k,
      categoricalDomain: D,
      duplicateDomain: C,
      originalDomain: (p = b.domain) !== null && p !== void 0 ? p : N,
      isCategorical: h,
      layout: u
    })));
  }, {});
}, RV = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, l = r.dataEndIndex, u = t.layout, f = t.children, d = tl(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: l
  }), h = d.length, y = px(u, i), m = -1;
  return n.reduce(function(p, b) {
    var w = b.type.defaultProps !== void 0 ? F(F({}, b.type.defaultProps), b.props) : b.props, x = w[o], O = Z0("number");
    if (!p[x]) {
      m++;
      var g;
      return y ? g = Ks(0, h) : s && s[x] && s[x].hasStack ? (g = bx(s[x].stackGroups, c, l), g = Cf(f, g, x, i)) : (g = Wu(O, hx(d, n.filter(function(_) {
        var S, P, j = o in _.props ? _.props[o] : (S = _.type.defaultProps) === null || S === void 0 ? void 0 : S[o], E = "hide" in _.props ? _.props.hide : (P = _.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return j === x && !E;
      }), "number", u), a.defaultProps.allowDataOverflow), g = Cf(f, g, x, i)), F(F({}, p), {}, se({}, x, F(F({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: At(kV, "".concat(i, ".").concat(m % 2), null),
        domain: g,
        originalDomain: O,
        isCategorical: y,
        layout: u
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, BV = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, l = r.dataEndIndex, u = t.children, f = "".concat(a, "Id"), d = ft(u, i), h = {};
  return d && d.length ? h = DV(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: l
  }) : o && o.length && (h = RV(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: l
  })), h;
}, LV = function(t) {
  var r = Zr(t), n = jr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: xd(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Cs(r, n)
  };
}, Gy = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = ct(r, ya), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, zV = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Tr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Ky = function(t) {
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
}, FV = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, c = s === void 0 ? {} : s, l = n.width, u = n.height, f = n.children, d = n.margin || {}, h = ct(f, ya), y = ct(f, ur), m = Object.keys(c).reduce(function(g, _) {
    var S = c[_], P = S.orientation;
    return !S.mirror && !S.hide ? F(F({}, g), {}, se({}, P, g[P] + S.width)) : g;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(g, _) {
    var S = o[_], P = S.orientation;
    return !S.mirror && !S.hide ? F(F({}, g), {}, se({}, P, At(g, "".concat(P)) + S.height)) : g;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = F(F({}, p), m), w = b.bottom;
  h && (b.bottom += h.props.height || ya.defaultProps.height), y && r && (b = c4(b, a, n, r));
  var x = l - b.left - b.right, O = u - b.top - b.bottom;
  return F(F({
    brushBottom: w
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, WV = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, ln = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, l = t.legendContent, u = t.formatAxisMap, f = t.defaultProps, d = function(b, w) {
    var x = w.graphicalItems, O = w.stackGroups, g = w.offset, _ = w.updateId, S = w.dataStartIndex, P = w.dataEndIndex, j = b.barSize, E = b.layout, $ = b.barGap, k = b.barCategoryGap, C = b.maxBarSize, D = Ky(E), N = D.numericAxisName, M = D.cateAxisName, B = zV(x), W = [];
    return x.forEach(function(H, T) {
      var R = tl(b.data, {
        graphicalItems: [H],
        dataStartIndex: S,
        dataEndIndex: P
      }), L = H.type.defaultProps !== void 0 ? F(F({}, H.type.defaultProps), H.props) : H.props, z = L.dataKey, q = L.maxBarSize, Y = L["".concat(N, "Id")], J = L["".concat(M, "Id")], ee = {}, X = c.reduce(function(yr, Kt) {
        var ti, ri, et = w["".concat(Kt.axisType, "Map")], ko = L["".concat(Kt.axisType, "Id")];
        et && et[ko] || Kt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? St(!1, "Specifying a(n) ".concat(Kt.axisType, "Id requires a corresponding ").concat(
          Kt.axisType,
          "Id on the targeted graphical component "
        ).concat((ti = H == null || (ri = H.type) === null || ri === void 0 ? void 0 : ri.displayName) !== null && ti !== void 0 ? ti : "")) : St());
        var uh = et[ko];
        return F(F({}, yr), {}, se(se({}, Kt.axisType, uh), "".concat(Kt.axisType, "Ticks"), jr(uh)));
      }, ee), U = X[M], V = X["".concat(M, "Ticks")], re = O && O[Y] && O[Y].hasStack && b4(H, O[Y].stackGroups), I = Tr(H.type).indexOf("Bar") >= 0, le = Cs(U, V), K = [], je = B && o4({
        barSize: j,
        stackGroups: O,
        totalSize: WV(X, M)
      });
      if (I) {
        var Ce, Ve, ar = ae(q) ? C : q, Kr = (Ce = (Ve = Cs(U, V, !0)) !== null && Ve !== void 0 ? Ve : ar) !== null && Ce !== void 0 ? Ce : 0;
        K = s4({
          barGap: $,
          barCategoryGap: k,
          bandSize: Kr !== le ? Kr : le,
          sizeList: je[J],
          maxBarSize: ar
        }), Kr !== le && (K = K.map(function(yr) {
          return F(F({}, yr), {}, {
            position: F(F({}, yr.position), {}, {
              offset: yr.position.offset - Kr / 2
            })
          });
        }));
      }
      var Dn = H && H.type && H.type.getComposedData;
      Dn && W.push({
        props: F(F({}, Dn(F(F({}, X), {}, {
          displayedData: R,
          props: b,
          dataKey: z,
          item: H,
          bandSize: le,
          barPosition: K,
          offset: g,
          stackedData: re,
          layout: E,
          dataStartIndex: S,
          dataEndIndex: P
        }))), {}, se(se(se({
          key: H.key || "item-".concat(T)
        }, N, X[N]), M, X[M]), "animationId", _)),
        childIndex: gC(H, b.children),
        item: H
      });
    }), W;
  }, h = function(b, w) {
    var x = b.props, O = b.dataStartIndex, g = b.dataEndIndex, _ = b.updateId;
    if (!nu({
      props: x
    }))
      return null;
    var S = x.children, P = x.layout, j = x.stackOffset, E = x.data, $ = x.reverseStackOrder, k = Ky(P), C = k.numericAxisName, D = k.cateAxisName, N = ft(S, n), M = y4(E, N, "".concat(C, "Id"), "".concat(D, "Id"), j, $), B = c.reduce(function(L, z) {
      var q = "".concat(z.axisType, "Map");
      return F(F({}, L), {}, se({}, q, BV(x, F(F({}, z), {}, {
        graphicalItems: N,
        stackGroups: z.axisType === C && M,
        dataStartIndex: O,
        dataEndIndex: g
      }))));
    }, {}), W = FV(F(F({}, B), {}, {
      props: x,
      graphicalItems: N
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(B).forEach(function(L) {
      B[L] = u(x, B[L], W, L.replace("Map", ""), r);
    });
    var H = B["".concat(D, "Map")], T = LV(H), R = d(x, F(F({}, B), {}, {
      dataStartIndex: O,
      dataEndIndex: g,
      updateId: _,
      graphicalItems: N,
      stackGroups: M,
      offset: W
    }));
    return F(F({
      formattedGraphicalItems: R,
      graphicalItems: N,
      offset: W,
      stackGroups: M
    }, T), B);
  }, y = /* @__PURE__ */ function(p) {
    function b(w) {
      var x, O, g;
      return xV(this, b), g = SV(this, b, [w]), se(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), se(g, "accessibilityManager", new sV()), se(g, "handleLegendBBoxUpdate", function(_) {
        if (_) {
          var S = g.state, P = S.dataStartIndex, j = S.dataEndIndex, E = S.updateId;
          g.setState(F({
            legendBBox: _
          }, h({
            props: g.props,
            dataStartIndex: P,
            dataEndIndex: j,
            updateId: E
          }, F(F({}, g.state), {}, {
            legendBBox: _
          }))));
        }
      }), se(g, "handleReceiveSyncEvent", function(_, S, P) {
        if (g.props.syncId === _) {
          if (P === g.eventEmitterSymbol && typeof g.props.syncMethod != "function")
            return;
          g.applySyncEvent(S);
        }
      }), se(g, "handleBrushChange", function(_) {
        var S = _.startIndex, P = _.endIndex;
        if (S !== g.state.dataStartIndex || P !== g.state.dataEndIndex) {
          var j = g.state.updateId;
          g.setState(function() {
            return F({
              dataStartIndex: S,
              dataEndIndex: P
            }, h({
              props: g.props,
              dataStartIndex: S,
              dataEndIndex: P,
              updateId: j
            }, g.state));
          }), g.triggerSyncEvent({
            dataStartIndex: S,
            dataEndIndex: P
          });
        }
      }), se(g, "handleMouseEnter", function(_) {
        var S = g.getMouseInfo(_);
        if (S) {
          var P = F(F({}, S), {}, {
            isTooltipActive: !0
          });
          g.setState(P), g.triggerSyncEvent(P);
          var j = g.props.onMouseEnter;
          te(j) && j(P, _);
        }
      }), se(g, "triggeredAfterMouseMove", function(_) {
        var S = g.getMouseInfo(_), P = S ? F(F({}, S), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        g.setState(P), g.triggerSyncEvent(P);
        var j = g.props.onMouseMove;
        te(j) && j(P, _);
      }), se(g, "handleItemMouseEnter", function(_) {
        g.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: _,
            activePayload: _.tooltipPayload,
            activeCoordinate: _.tooltipPosition || {
              x: _.cx,
              y: _.cy
            }
          };
        });
      }), se(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), se(g, "handleMouseMove", function(_) {
        _.persist(), g.throttleTriggeredAfterMouseMove(_);
      }), se(g, "handleMouseLeave", function(_) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var S = {
          isTooltipActive: !1
        };
        g.setState(S), g.triggerSyncEvent(S);
        var P = g.props.onMouseLeave;
        te(P) && P(S, _);
      }), se(g, "handleOuterEvent", function(_) {
        var S = yC(_), P = At(g.props, "".concat(S));
        if (S && te(P)) {
          var j, E;
          /.*touch.*/i.test(S) ? E = g.getMouseInfo(_.changedTouches[0]) : E = g.getMouseInfo(_), P((j = E) !== null && j !== void 0 ? j : {}, _);
        }
      }), se(g, "handleClick", function(_) {
        var S = g.getMouseInfo(_);
        if (S) {
          var P = F(F({}, S), {}, {
            isTooltipActive: !0
          });
          g.setState(P), g.triggerSyncEvent(P);
          var j = g.props.onClick;
          te(j) && j(P, _);
        }
      }), se(g, "handleMouseDown", function(_) {
        var S = g.props.onMouseDown;
        if (te(S)) {
          var P = g.getMouseInfo(_);
          S(P, _);
        }
      }), se(g, "handleMouseUp", function(_) {
        var S = g.props.onMouseUp;
        if (te(S)) {
          var P = g.getMouseInfo(_);
          S(P, _);
        }
      }), se(g, "handleTouchMove", function(_) {
        _.changedTouches != null && _.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(_.changedTouches[0]);
      }), se(g, "handleTouchStart", function(_) {
        _.changedTouches != null && _.changedTouches.length > 0 && g.handleMouseDown(_.changedTouches[0]);
      }), se(g, "handleTouchEnd", function(_) {
        _.changedTouches != null && _.changedTouches.length > 0 && g.handleMouseUp(_.changedTouches[0]);
      }), se(g, "handleDoubleClick", function(_) {
        var S = g.props.onDoubleClick;
        if (te(S)) {
          var P = g.getMouseInfo(_);
          S(P, _);
        }
      }), se(g, "handleContextMenu", function(_) {
        var S = g.props.onContextMenu;
        if (te(S)) {
          var P = g.getMouseInfo(_);
          S(P, _);
        }
      }), se(g, "triggerSyncEvent", function(_) {
        g.props.syncId !== void 0 && Hl.emit(Gl, g.props.syncId, _, g.eventEmitterSymbol);
      }), se(g, "applySyncEvent", function(_) {
        var S = g.props, P = S.layout, j = S.syncMethod, E = g.state.updateId, $ = _.dataStartIndex, k = _.dataEndIndex;
        if (_.dataStartIndex !== void 0 || _.dataEndIndex !== void 0)
          g.setState(F({
            dataStartIndex: $,
            dataEndIndex: k
          }, h({
            props: g.props,
            dataStartIndex: $,
            dataEndIndex: k,
            updateId: E
          }, g.state)));
        else if (_.activeTooltipIndex !== void 0) {
          var C = _.chartX, D = _.chartY, N = _.activeTooltipIndex, M = g.state, B = M.offset, W = M.tooltipTicks;
          if (!B)
            return;
          if (typeof j == "function")
            N = j(W, _);
          else if (j === "value") {
            N = -1;
            for (var H = 0; H < W.length; H++)
              if (W[H].value === _.activeLabel) {
                N = H;
                break;
              }
          }
          var T = F(F({}, B), {}, {
            x: B.left,
            y: B.top
          }), R = Math.min(C, T.x + T.width), L = Math.min(D, T.y + T.height), z = W[N] && W[N].value, q = Mf(g.state, g.props.data, N), Y = W[N] ? {
            x: P === "horizontal" ? W[N].coordinate : R,
            y: P === "horizontal" ? L : W[N].coordinate
          } : X0;
          g.setState(F(F({}, _), {}, {
            activeLabel: z,
            activeCoordinate: Y,
            activePayload: q,
            activeTooltipIndex: N
          }));
        } else
          g.setState(_);
      }), se(g, "renderCursor", function(_) {
        var S, P = g.state, j = P.isTooltipActive, E = P.activeCoordinate, $ = P.activePayload, k = P.offset, C = P.activeTooltipIndex, D = P.tooltipAxisBandSize, N = g.getTooltipEventType(), M = (S = _.props.active) !== null && S !== void 0 ? S : j, B = g.props.layout, W = _.key || "_recharts-cursor";
        return /* @__PURE__ */ A.createElement(pV, {
          key: W,
          activeCoordinate: E,
          activePayload: $,
          activeTooltipIndex: C,
          chartName: r,
          element: _,
          isActive: M,
          layout: B,
          offset: k,
          tooltipAxisBandSize: D,
          tooltipEventType: N
        });
      }), se(g, "renderPolarAxis", function(_, S, P) {
        var j = At(_, "type.axisType"), E = At(g.state, "".concat(j, "Map")), $ = _.type.defaultProps, k = $ !== void 0 ? F(F({}, $), _.props) : _.props, C = E && E[k["".concat(j, "Id")]];
        return /* @__PURE__ */ Xe(_, F(F({}, C), {}, {
          className: oe(j, C.className),
          key: _.key || "".concat(S, "-").concat(P),
          ticks: jr(C, !0)
        }));
      }), se(g, "renderPolarGrid", function(_) {
        var S = _.props, P = S.radialLines, j = S.polarAngles, E = S.polarRadius, $ = g.state, k = $.radiusAxisMap, C = $.angleAxisMap, D = Zr(k), N = Zr(C), M = N.cx, B = N.cy, W = N.innerRadius, H = N.outerRadius;
        return /* @__PURE__ */ Xe(_, {
          polarAngles: Array.isArray(j) ? j : jr(N, !0).map(function(T) {
            return T.coordinate;
          }),
          polarRadius: Array.isArray(E) ? E : jr(D, !0).map(function(T) {
            return T.coordinate;
          }),
          cx: M,
          cy: B,
          innerRadius: W,
          outerRadius: H,
          key: _.key || "polar-grid",
          radialLines: P
        });
      }), se(g, "renderLegend", function() {
        var _ = g.state.formattedGraphicalItems, S = g.props, P = S.children, j = S.width, E = S.height, $ = g.props.margin || {}, k = j - ($.left || 0) - ($.right || 0), C = fx({
          children: P,
          formattedGraphicalItems: _,
          legendWidth: k,
          legendContent: l
        });
        if (!C)
          return null;
        var D = C.item, N = Wy(C, mV);
        return /* @__PURE__ */ Xe(D, F(F({}, N), {}, {
          chartWidth: j,
          chartHeight: E,
          margin: $,
          onBBoxUpdate: g.handleLegendBBoxUpdate
        }));
      }), se(g, "renderTooltip", function() {
        var _, S = g.props, P = S.children, j = S.accessibilityLayer, E = ct(P, lt);
        if (!E)
          return null;
        var $ = g.state, k = $.isTooltipActive, C = $.activeCoordinate, D = $.activePayload, N = $.activeLabel, M = $.offset, B = (_ = E.props.active) !== null && _ !== void 0 ? _ : k;
        return /* @__PURE__ */ Xe(E, {
          viewBox: F(F({}, M), {}, {
            x: M.left,
            y: M.top
          }),
          active: B,
          label: N,
          payload: B ? D : [],
          coordinate: C,
          accessibilityLayer: j
        });
      }), se(g, "renderBrush", function(_) {
        var S = g.props, P = S.margin, j = S.data, E = g.state, $ = E.offset, k = E.dataStartIndex, C = E.dataEndIndex, D = E.updateId;
        return /* @__PURE__ */ Xe(_, {
          key: _.key || "_recharts-brush",
          onChange: Uo(g.handleBrushChange, _.props.onChange),
          data: j,
          x: G(_.props.x) ? _.props.x : $.left,
          y: G(_.props.y) ? _.props.y : $.top + $.height + $.brushBottom - (P.bottom || 0),
          width: G(_.props.width) ? _.props.width : $.width,
          startIndex: k,
          endIndex: C,
          updateId: "brush-".concat(D)
        });
      }), se(g, "renderReferenceElement", function(_, S, P) {
        if (!_)
          return null;
        var j = g, E = j.clipPathId, $ = g.state, k = $.xAxisMap, C = $.yAxisMap, D = $.offset, N = _.type.defaultProps || {}, M = _.props, B = M.xAxisId, W = B === void 0 ? N.xAxisId : B, H = M.yAxisId, T = H === void 0 ? N.yAxisId : H;
        return /* @__PURE__ */ Xe(_, {
          key: _.key || "".concat(S, "-").concat(P),
          xAxis: k[W],
          yAxis: C[T],
          viewBox: {
            x: D.left,
            y: D.top,
            width: D.width,
            height: D.height
          },
          clipPathId: E
        });
      }), se(g, "renderActivePoints", function(_) {
        var S = _.item, P = _.activePoint, j = _.basePoint, E = _.childIndex, $ = _.isRange, k = [], C = S.props.key, D = S.item.type.defaultProps !== void 0 ? F(F({}, S.item.type.defaultProps), S.item.props) : S.item.props, N = D.activeDot, M = D.dataKey, B = F(F({
          index: E,
          dataKey: M,
          cx: P.x,
          cy: P.y,
          r: 4,
          fill: qd(S.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: P.payload,
          value: P.value
        }, Z(N, !1)), ns(N));
        return k.push(b.renderActiveDot(N, B, "".concat(C, "-activePoint-").concat(E))), j ? k.push(b.renderActiveDot(N, F(F({}, B), {}, {
          cx: j.x,
          cy: j.y
        }), "".concat(C, "-basePoint-").concat(E))) : $ && k.push(null), k;
      }), se(g, "renderGraphicChild", function(_, S, P) {
        var j = g.filterFormatItem(_, S, P);
        if (!j)
          return null;
        var E = g.getTooltipEventType(), $ = g.state, k = $.isTooltipActive, C = $.tooltipAxis, D = $.activeTooltipIndex, N = $.activeLabel, M = g.props.children, B = ct(M, lt), W = j.props, H = W.points, T = W.isRange, R = W.baseLine, L = j.item.type.defaultProps !== void 0 ? F(F({}, j.item.type.defaultProps), j.item.props) : j.item.props, z = L.activeDot, q = L.hide, Y = L.activeBar, J = L.activeShape, ee = !!(!q && k && B && (z || Y || J)), X = {};
        E !== "axis" && B && B.props.trigger === "click" ? X = {
          onClick: Uo(g.handleItemMouseEnter, _.props.onClick)
        } : E !== "axis" && (X = {
          onMouseLeave: Uo(g.handleItemMouseLeave, _.props.onMouseLeave),
          onMouseEnter: Uo(g.handleItemMouseEnter, _.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ Xe(_, F(F({}, j.props), X));
        function V(Kt) {
          return typeof C.dataKey == "function" ? C.dataKey(Kt.payload) : null;
        }
        if (ee)
          if (D >= 0) {
            var re, I;
            if (C.dataKey && !C.allowDuplicatedCategory) {
              var le = typeof C.dataKey == "function" ? V : "payload.".concat(C.dataKey.toString());
              re = rs(H, le, N), I = T && R && rs(R, le, N);
            } else
              re = H == null ? void 0 : H[D], I = T && R && R[D];
            if (J || Y) {
              var K = _.props.activeIndex !== void 0 ? _.props.activeIndex : D;
              return [/* @__PURE__ */ Xe(_, F(F(F({}, j.props), X), {}, {
                activeIndex: K
              })), null, null];
            }
            if (!ae(re))
              return [U].concat(Ca(g.renderActivePoints({
                item: j,
                activePoint: re,
                basePoint: I,
                childIndex: D,
                isRange: T
              })));
          } else {
            var je, Ce = (je = g.getItemByXY(g.state.activeCoordinate)) !== null && je !== void 0 ? je : {
              graphicalItem: U
            }, Ve = Ce.graphicalItem, ar = Ve.item, Kr = ar === void 0 ? _ : ar, Dn = Ve.childIndex, yr = F(F(F({}, j.props), X), {}, {
              activeIndex: Dn
            });
            return [/* @__PURE__ */ Xe(Kr, yr), null, null];
          }
        return T ? [U, null, null] : [U, null];
      }), se(g, "renderCustomized", function(_, S, P) {
        return /* @__PURE__ */ Xe(_, F(F({
          key: "recharts-customized-".concat(P)
        }, g.props), g.state));
      }), se(g, "renderMap", {
        CartesianGrid: {
          handler: Yo,
          once: !0
        },
        ReferenceArea: {
          handler: g.renderReferenceElement
        },
        ReferenceLine: {
          handler: Yo
        },
        ReferenceDot: {
          handler: g.renderReferenceElement
        },
        XAxis: {
          handler: Yo
        },
        YAxis: {
          handler: Yo
        },
        Brush: {
          handler: g.renderBrush,
          once: !0
        },
        Bar: {
          handler: g.renderGraphicChild
        },
        Line: {
          handler: g.renderGraphicChild
        },
        Area: {
          handler: g.renderGraphicChild
        },
        Radar: {
          handler: g.renderGraphicChild
        },
        RadialBar: {
          handler: g.renderGraphicChild
        },
        Scatter: {
          handler: g.renderGraphicChild
        },
        Pie: {
          handler: g.renderGraphicChild
        },
        Funnel: {
          handler: g.renderGraphicChild
        },
        Tooltip: {
          handler: g.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: g.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: g.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: g.renderPolarAxis
        },
        Customized: {
          handler: g.renderCustomized
        }
      }), g.clipPathId = "".concat((x = w.id) !== null && x !== void 0 ? x : Wr("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = u_(g.triggeredAfterMouseMove, (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), g.state = {}, g;
    }
    return jV(b, p), OV(b, [{
      key: "componentDidMount",
      value: function() {
        var x, O;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
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
        var x = this.props, O = x.children, g = x.data, _ = x.height, S = x.layout, P = ct(O, lt);
        if (P) {
          var j = P.props.defaultIndex;
          if (!(typeof j != "number" || j < 0 || j > this.state.tooltipTicks.length - 1)) {
            var E = this.state.tooltipTicks[j] && this.state.tooltipTicks[j].value, $ = Mf(this.state, g, j, E), k = this.state.tooltipTicks[j].coordinate, C = (this.state.offset.top + _) / 2, D = S === "horizontal", N = D ? {
              x: k,
              y: C
            } : {
              y: k,
              x: C
            }, M = this.state.formattedGraphicalItems.find(function(W) {
              var H = W.item;
              return H.type.name === "Scatter";
            });
            M && (N = F(F({}, N), M.props.points[j].tooltipPosition), $ = M.props.points[j].tooltipPayload);
            var B = {
              activeTooltipIndex: j,
              isTooltipActive: !0,
              activeLabel: E,
              activePayload: $,
              activeCoordinate: N
            };
            this.setState(B), this.renderCursor(P), this.accessibilityManager.setIndex(j);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x, O) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== x.margin) {
          var g, _;
          this.accessibilityManager.setDetails({
            offset: {
              left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
              top: (_ = this.props.margin.top) !== null && _ !== void 0 ? _ : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(x) {
        au([ct(x.children, lt)], [ct(this.props.children, lt)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = ct(this.props.children, lt);
        if (x && typeof x.props.shared == "boolean") {
          var O = x.props.shared ? "axis" : "item";
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
      value: function(x) {
        if (!this.container)
          return null;
        var O = this.container, g = O.getBoundingClientRect(), _ = N3(g), S = {
          chartX: Math.round(x.pageX - _.left),
          chartY: Math.round(x.pageY - _.top)
        }, P = g.width / O.offsetWidth || 1, j = this.inRange(S.chartX, S.chartY, P);
        if (!j)
          return null;
        var E = this.state, $ = E.xAxisMap, k = E.yAxisMap, C = this.getTooltipEventType(), D = Hy(this.state, this.props.data, this.props.layout, j);
        if (C !== "axis" && $ && k) {
          var N = Zr($).scale, M = Zr(k).scale, B = N && N.invert ? N.invert(S.chartX) : null, W = M && M.invert ? M.invert(S.chartY) : null;
          return F(F({}, S), {}, {
            xValue: B,
            yValue: W
          }, D);
        }
        return D ? F(F({}, S), D) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, _ = this.props.layout, S = x / g, P = O / g;
        if (_ === "horizontal" || _ === "vertical") {
          var j = this.state.offset, E = S >= j.left && S <= j.left + j.width && P >= j.top && P <= j.top + j.height;
          return E ? {
            x: S,
            y: P
          } : null;
        }
        var $ = this.state, k = $.angleAxisMap, C = $.radiusAxisMap;
        if (k && C) {
          var D = Zr(k);
          return Jm({
            x: S,
            y: P
          }, D);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), g = ct(x, lt), _ = {};
        g && O === "axis" && (g.props.trigger === "click" ? _ = {
          onClick: this.handleClick
        } : _ = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var S = ns(this.props, this.handleOuterEvent);
        return F(F({}, S), _);
      }
    }, {
      key: "addListener",
      value: function() {
        Hl.on(Gl, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Hl.removeListener(Gl, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, O, g) {
        for (var _ = this.state.formattedGraphicalItems, S = 0, P = _.length; S < P; S++) {
          var j = _[S];
          if (j.item === x || j.props.key === x.key || O === Tr(j.item.type) && g === j.childIndex)
            return j;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, O = this.state.offset, g = O.left, _ = O.top, S = O.height, P = O.width;
        return /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ A.createElement("rect", {
          x: g,
          y: _,
          height: S,
          width: P
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(O, g) {
          var _ = Fy(g, 2), S = _[0], P = _[1];
          return F(F({}, O), {}, se({}, S, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, g) {
          var _ = Fy(g, 2), S = _[0], P = _[1];
          return F(F({}, O), {}, se({}, S, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(x) {
        var O;
        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(x) {
        var O;
        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(x) {
        var O = this.state, g = O.formattedGraphicalItems, _ = O.activeItem;
        if (g && g.length)
          for (var S = 0, P = g.length; S < P; S++) {
            var j = g[S], E = j.props, $ = j.item, k = $.type.defaultProps !== void 0 ? F(F({}, $.type.defaultProps), $.props) : $.props, C = Tr($.type);
            if (C === "Bar") {
              var D = (E.data || []).find(function(W) {
                return y5(x, W);
              });
              if (D)
                return {
                  graphicalItem: j,
                  payload: D
                };
            } else if (C === "RadialBar") {
              var N = (E.data || []).find(function(W) {
                return Jm(x, W);
              });
              if (N)
                return {
                  graphicalItem: j,
                  payload: N
                };
            } else if (Vc(j, _) || Yc(j, _) || lo(j, _)) {
              var M = dH({
                graphicalItem: j,
                activeTooltipItem: _,
                itemData: k.data
              }), B = k.activeIndex === void 0 ? M : k.activeIndex;
              return {
                graphicalItem: F(F({}, j), {}, {
                  childIndex: B
                }),
                payload: lo(j, _) ? k.data[M] : j.props.data[M]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!nu(this))
          return null;
        var O = this.props, g = O.children, _ = O.className, S = O.width, P = O.height, j = O.style, E = O.compact, $ = O.title, k = O.desc, C = Wy(O, vV), D = Z(C, !1);
        if (E)
          return /* @__PURE__ */ A.createElement(by, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ A.createElement(as, Xn({}, D, {
            width: S,
            height: P,
            title: $,
            desc: k
          }), this.renderClipPath(), Kh(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var N, M;
          D.tabIndex = (N = this.props.tabIndex) !== null && N !== void 0 ? N : 0, D.role = (M = this.props.role) !== null && M !== void 0 ? M : "application", D.onKeyDown = function(W) {
            x.accessibilityManager.keyboardEvent(W);
          }, D.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var B = this.parseEventsOfWrapper();
        return /* @__PURE__ */ A.createElement(by, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ A.createElement("div", Xn({
          className: oe("recharts-wrapper", _),
          style: F({
            position: "relative",
            cursor: "default",
            width: S,
            height: P
          }, j)
        }, B, {
          ref: function(H) {
            x.container = H;
          }
        }), /* @__PURE__ */ A.createElement(as, Xn({}, D, {
          width: S,
          height: P,
          title: $,
          desc: k,
          style: NV
        }), this.renderClipPath(), Kh(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(Og);
  se(y, "displayName", r), se(y, "defaultProps", F({
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
  }, f)), se(y, "getDerivedStateFromProps", function(p, b) {
    var w = p.dataKey, x = p.data, O = p.children, g = p.width, _ = p.height, S = p.layout, P = p.stackOffset, j = p.margin, E = b.dataStartIndex, $ = b.dataEndIndex;
    if (b.updateId === void 0) {
      var k = Gy(p);
      return F(F(F({}, k), {}, {
        updateId: 0
      }, h(F(F({
        props: p
      }, k), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: w,
        prevData: x,
        prevWidth: g,
        prevHeight: _,
        prevLayout: S,
        prevStackOffset: P,
        prevMargin: j,
        prevChildren: O
      });
    }
    if (w !== b.prevDataKey || x !== b.prevData || g !== b.prevWidth || _ !== b.prevHeight || S !== b.prevLayout || P !== b.prevStackOffset || !Zn(j, b.prevMargin)) {
      var C = Gy(p), D = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, N = F(F({}, Hy(b, x, S)), {}, {
        updateId: b.updateId + 1
      }), M = F(F(F({}, C), D), N);
      return F(F(F({}, M), h(F({
        props: p
      }, M), b)), {}, {
        prevDataKey: w,
        prevData: x,
        prevWidth: g,
        prevHeight: _,
        prevLayout: S,
        prevStackOffset: P,
        prevMargin: j,
        prevChildren: O
      });
    }
    if (!au(O, b.prevChildren)) {
      var B, W, H, T, R = ct(O, ya), L = R && (B = (W = R.props) === null || W === void 0 ? void 0 : W.startIndex) !== null && B !== void 0 ? B : E, z = R && (H = (T = R.props) === null || T === void 0 ? void 0 : T.endIndex) !== null && H !== void 0 ? H : $, q = L !== E || z !== $, Y = !ae(x), J = Y && !q ? b.updateId : b.updateId + 1;
      return F(F({
        updateId: J
      }, h(F(F({
        props: p
      }, b), {}, {
        updateId: J,
        dataStartIndex: L,
        dataEndIndex: z
      }), b)), {}, {
        prevChildren: O,
        dataStartIndex: L,
        dataEndIndex: z
      });
    }
    return null;
  }), se(y, "renderActiveDot", function(p, b, w) {
    var x;
    return /* @__PURE__ */ Qt(p) ? x = /* @__PURE__ */ Xe(p, b) : te(p) ? x = p(b) : x = /* @__PURE__ */ A.createElement(Xa, b), /* @__PURE__ */ A.createElement(ie, {
      className: "recharts-active-dot",
      key: w
    }, x);
  });
  var m = /* @__PURE__ */ ve(function(b, w) {
    return /* @__PURE__ */ A.createElement(y, Xn({}, b, {
      ref: w
    }));
  });
  return m.displayName = y.displayName, m;
}, UV = ln({
  chartName: "LineChart",
  GraphicalChild: Cn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Br
  }, {
    axisType: "yAxis",
    AxisComp: Lr
  }],
  formatAxisMap: $o
}), qy = ln({
  chartName: "BarChart",
  GraphicalChild: hr,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Br
  }, {
    axisType: "yAxis",
    AxisComp: Lr
  }],
  formatAxisMap: $o
}), HV = ln({
  chartName: "PieChart",
  GraphicalChild: Hr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Qa
  }, {
    axisType: "radiusAxis",
    AxisComp: Za
  }],
  formatAxisMap: Ox,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
function GV(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var KV = GV, qV = Zd, VV = gc, YV = Object.prototype, XV = YV.hasOwnProperty;
function ZV(e, t, r) {
  var n = e[t];
  (!(XV.call(e, t) && VV(n, r)) || r === void 0 && !(t in e)) && qV(e, t, r);
}
var Q0 = ZV, QV = Q0, JV = Zd;
function eY(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var s = t[i], c = n ? n(r[s], e[s], s, r, e) : void 0;
    c === void 0 && (c = e[s]), a ? JV(r, s, c) : QV(r, s, c);
  }
  return r;
}
var Co = eY, tY = Co, rY = Wa;
function nY(e, t) {
  return e && tY(t, rY(t), e);
}
var aY = nY;
function iY(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var oY = iY, sY = rr, cY = yd, lY = oY, uY = Object.prototype, fY = uY.hasOwnProperty;
function dY(e) {
  if (!sY(e))
    return lY(e);
  var t = cY(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !fY.call(e, n)) || r.push(n);
  return r;
}
var hY = dY, pY = Fb, mY = hY, vY = Fa;
function yY(e) {
  return vY(e) ? pY(e, !0) : mY(e);
}
var sh = yY, gY = Co, bY = sh;
function _Y(e, t) {
  return e && gY(t, bY(t), e);
}
var xY = _Y, uc = { exports: {} };
uc.exports;
(function(e, t) {
  var r = er, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i ? r.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function c(l, u) {
    if (u)
      return l.slice();
    var f = l.length, d = s ? s(f) : new l.constructor(f);
    return l.copy(d), d;
  }
  e.exports = c;
})(uc, uc.exports);
var wY = uc.exports;
function OY(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var SY = OY, AY = Co, PY = fd;
function jY(e, t) {
  return AY(e, PY(e), t);
}
var TY = jY, $Y = ud, EY = Xd, CY = fd, kY = Bb, NY = Object.getOwnPropertySymbols, MY = NY ? function(e) {
  for (var t = []; e; )
    $Y(t, CY(e)), e = EY(e);
  return t;
} : kY, J0 = MY, IY = Co, DY = J0;
function RY(e, t) {
  return IY(e, DY(e), t);
}
var BY = RY, LY = Rb, zY = J0, FY = sh;
function WY(e) {
  return LY(e, FY, zY);
}
var ew = WY, UY = Object.prototype, HY = UY.hasOwnProperty;
function GY(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && HY.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var KY = GY, Vy = Db;
function qY(e) {
  var t = new e.constructor(e.byteLength);
  return new Vy(t).set(new Vy(e)), t;
}
var ch = qY, VY = ch;
function YY(e, t) {
  var r = t ? VY(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var XY = YY, ZY = /\w*$/;
function QY(e) {
  var t = new e.constructor(e.source, ZY.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var JY = QY, Yy = Ma, Xy = Yy ? Yy.prototype : void 0, Zy = Xy ? Xy.valueOf : void 0;
function eX(e) {
  return Zy ? Object(Zy.call(e)) : {};
}
var tX = eX, rX = ch;
function nX(e, t) {
  var r = t ? rX(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var aX = nX, iX = ch, oX = XY, sX = JY, cX = tX, lX = aX, uX = "[object Boolean]", fX = "[object Date]", dX = "[object Map]", hX = "[object Number]", pX = "[object RegExp]", mX = "[object Set]", vX = "[object String]", yX = "[object Symbol]", gX = "[object ArrayBuffer]", bX = "[object DataView]", _X = "[object Float32Array]", xX = "[object Float64Array]", wX = "[object Int8Array]", OX = "[object Int16Array]", SX = "[object Int32Array]", AX = "[object Uint8Array]", PX = "[object Uint8ClampedArray]", jX = "[object Uint16Array]", TX = "[object Uint32Array]";
function $X(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case gX:
      return iX(e);
    case uX:
    case fX:
      return new n(+e);
    case bX:
      return oX(e, r);
    case _X:
    case xX:
    case wX:
    case OX:
    case SX:
    case AX:
    case PX:
    case jX:
    case TX:
      return lX(e, r);
    case dX:
      return new n();
    case hX:
    case vX:
      return new n(e);
    case pX:
      return sX(e);
    case mX:
      return new n();
    case yX:
      return cX(e);
  }
}
var EX = $X, CX = rr, Qy = Object.create, kX = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!CX(t))
      return {};
    if (Qy)
      return Qy(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), NX = kX, MX = NX, IX = Xd, DX = yd;
function RX(e) {
  return typeof e.constructor == "function" && !DX(e) ? MX(IX(e)) : {};
}
var BX = RX, LX = kc, zX = tr, FX = "[object Map]";
function WX(e) {
  return zX(e) && LX(e) == FX;
}
var UX = WX, HX = UX, GX = Cc, Jy = vd, eg = Jy && Jy.isMap, KX = eg ? GX(eg) : HX, qX = KX, VX = kc, YX = tr, XX = "[object Set]";
function ZX(e) {
  return YX(e) && VX(e) == XX;
}
var QX = ZX, JX = QX, eZ = Cc, tg = vd, rg = tg && tg.isSet, tZ = rg ? eZ(rg) : JX, rZ = tZ, nZ = cd, aZ = KV, iZ = Q0, oZ = aY, sZ = xY, cZ = wY, lZ = SY, uZ = TY, fZ = BY, dZ = Ub, hZ = ew, pZ = kc, mZ = KY, vZ = EX, yZ = BX, gZ = xt, bZ = hd, _Z = qX, xZ = rr, wZ = rZ, OZ = Wa, SZ = sh, AZ = 1, PZ = 2, jZ = 4, tw = "[object Arguments]", TZ = "[object Array]", $Z = "[object Boolean]", EZ = "[object Date]", CZ = "[object Error]", rw = "[object Function]", kZ = "[object GeneratorFunction]", NZ = "[object Map]", MZ = "[object Number]", nw = "[object Object]", IZ = "[object RegExp]", DZ = "[object Set]", RZ = "[object String]", BZ = "[object Symbol]", LZ = "[object WeakMap]", zZ = "[object ArrayBuffer]", FZ = "[object DataView]", WZ = "[object Float32Array]", UZ = "[object Float64Array]", HZ = "[object Int8Array]", GZ = "[object Int16Array]", KZ = "[object Int32Array]", qZ = "[object Uint8Array]", VZ = "[object Uint8ClampedArray]", YZ = "[object Uint16Array]", XZ = "[object Uint32Array]", ke = {};
ke[tw] = ke[TZ] = ke[zZ] = ke[FZ] = ke[$Z] = ke[EZ] = ke[WZ] = ke[UZ] = ke[HZ] = ke[GZ] = ke[KZ] = ke[NZ] = ke[MZ] = ke[nw] = ke[IZ] = ke[DZ] = ke[RZ] = ke[BZ] = ke[qZ] = ke[VZ] = ke[YZ] = ke[XZ] = !0;
ke[CZ] = ke[rw] = ke[LZ] = !1;
function Qo(e, t, r, n, a, i) {
  var o, s = t & AZ, c = t & PZ, l = t & jZ;
  if (r && (o = a ? r(e, n, a, i) : r(e)), o !== void 0)
    return o;
  if (!xZ(e))
    return e;
  var u = gZ(e);
  if (u) {
    if (o = mZ(e), !s)
      return lZ(e, o);
  } else {
    var f = pZ(e), d = f == rw || f == kZ;
    if (bZ(e))
      return cZ(e, s);
    if (f == nw || f == tw || d && !a) {
      if (o = c || d ? {} : yZ(e), !s)
        return c ? fZ(e, sZ(o, e)) : uZ(e, oZ(o, e));
    } else {
      if (!ke[f])
        return a ? e : {};
      o = vZ(e, f, s);
    }
  }
  i || (i = new nZ());
  var h = i.get(e);
  if (h)
    return h;
  i.set(e, o), wZ(e) ? e.forEach(function(p) {
    o.add(Qo(p, t, r, p, e, i));
  }) : _Z(e) && e.forEach(function(p, b) {
    o.set(b, Qo(p, t, r, b, e, i));
  });
  var y = l ? c ? hZ : dZ : c ? SZ : OZ, m = u ? void 0 : y(e);
  return aZ(m || e, function(p, b) {
    m && (b = p, p = e[b]), iZ(o, b, Qo(p, t, r, b, e, i));
  }), o;
}
var ZZ = Qo, QZ = Sc, JZ = ib;
function eQ(e, t) {
  return t.length < 2 ? e : QZ(e, JZ(t, 0, -1));
}
var tQ = eQ, rQ = Oc, nQ = Px, aQ = tQ, iQ = Oo;
function oQ(e, t) {
  return t = rQ(t, e), e = aQ(e, t), e == null || delete e[iQ(nQ(t))];
}
var sQ = oQ, cQ = Gx;
function lQ(e) {
  return cQ(e) ? void 0 : e;
}
var uQ = lQ, fQ = bd;
function dQ(e) {
  var t = e == null ? 0 : e.length;
  return t ? fQ(e, 1) : [];
}
var hQ = dQ, pQ = hQ, mQ = r_, vQ = a_;
function yQ(e) {
  return vQ(mQ(e, void 0, pQ), e + "");
}
var gQ = yQ, bQ = wc, _Q = ZZ, xQ = sQ, wQ = Oc, OQ = Co, SQ = uQ, AQ = gQ, PQ = ew, jQ = 1, TQ = 2, $Q = 4, EQ = AQ(function(e, t) {
  var r = {};
  if (e == null)
    return r;
  var n = !1;
  t = bQ(t, function(i) {
    return i = wQ(i, e), n || (n = i.length > 1), i;
  }), OQ(e, PQ(e), r), n && (r = _Q(r, jQ | TQ | $Q, SQ));
  for (var a = t.length; a--; )
    xQ(r, t[a]);
  return r;
}), CQ = EQ;
const aw = /* @__PURE__ */ Se(CQ);
var kQ = ["#1890FF", "#66B5FF", "#41D9C7", "#2FC25B", "#6EDB8F", "#9AE65C", "#FACC14", "#E6965C", "#57AD71", "#223273", "#738AE6", "#7564CC", "#8543E0", "#A877ED", "#5C8EE6", "#13C2C2", "#70E0E0", "#5CA3E6", "#3436C7", "#8082FF", "#DD81E6", "#F04864", "#FA7D92", "#D598D9"], NQ = ["width", "height", "className", "style", "children", "type"];
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
function fc() {
  return fc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fc.apply(this, arguments);
}
function MQ(e, t) {
  if (e == null) return {};
  var r = IQ(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IQ(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function DQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ng(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ow(n.key), n);
  }
}
function RQ(e, t, r) {
  return t && ng(e.prototype, t), r && ng(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BQ(e, t, r) {
  return t = dc(t), LQ(e, iw() ? Reflect.construct(t, r || [], dc(e).constructor) : t.apply(e, r));
}
function LQ(e, t) {
  if (t && (ka(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zQ(e);
}
function zQ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (iw = function() {
    return !!e;
  })();
}
function dc(e) {
  return dc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, dc(e);
}
function FQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && If(e, t);
}
function If(e, t) {
  return If = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, If(e, t);
}
function ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ag(Object(r), !0).forEach(function(n) {
      Er(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Er(e, t, r) {
  return t = ow(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ow(e) {
  var t = WQ(e, "string");
  return ka(t) == "symbol" ? t : t + "";
}
function WQ(e, t) {
  if (ka(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ka(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var vo = "value", ql = function e(t) {
  var r = t.depth, n = t.node, a = t.index, i = t.valueKey, o = n.children, s = r + 1, c = o && o.length ? o.map(function(u, f) {
    return e({
      depth: s,
      node: u,
      index: f,
      valueKey: i
    });
  }) : null, l;
  return o && o.length ? l = c.reduce(function(u, f) {
    return u + f[vo];
  }, 0) : l = an(n[i]) || n[i] <= 0 ? 0 : n[i], Ne(Ne({}, n), {}, Er(Er(Er({
    children: c
  }, vo, l), "depth", r), "index", a));
}, UQ = function(t) {
  return {
    x: t.x,
    y: t.y,
    width: t.width,
    height: t.height
  };
}, HQ = function(t, r) {
  var n = r < 0 ? 0 : r;
  return t.map(function(a) {
    var i = a[vo] * n;
    return Ne(Ne({}, a), {}, {
      area: an(i) || i <= 0 ? 0 : i
    });
  });
}, GQ = function(t, r, n) {
  var a = r * r, i = t.area * t.area, o = t.reduce(function(l, u) {
    return {
      min: Math.min(l.min, u.area),
      max: Math.max(l.max, u.area)
    };
  }, {
    min: 1 / 0,
    max: 0
  }), s = o.min, c = o.max;
  return i ? Math.max(a * c * n / i, i / (a * s * n)) : 1 / 0;
}, KQ = function(t, r, n, a) {
  var i = r ? Math.round(t.area / r) : 0;
  (a || i > n.height) && (i = n.height);
  for (var o = n.x, s, c = 0, l = t.length; c < l; c++)
    s = t[c], s.x = o, s.y = n.y, s.height = i, s.width = Math.min(i ? Math.round(s.area / i) : 0, n.x + n.width - o), o += s.width;
  return s.width += n.x + n.width - o, Ne(Ne({}, n), {}, {
    y: n.y + i,
    height: n.height - i
  });
}, qQ = function(t, r, n, a) {
  var i = r ? Math.round(t.area / r) : 0;
  (a || i > n.width) && (i = n.width);
  for (var o = n.y, s, c = 0, l = t.length; c < l; c++)
    s = t[c], s.x = n.x, s.y = o, s.width = i, s.height = Math.min(i ? Math.round(s.area / i) : 0, n.y + n.height - o), o += s.height;
  return s && (s.height += n.y + n.height - o), Ne(Ne({}, n), {}, {
    x: n.x + i,
    width: n.width - i
  });
}, ig = function(t, r, n, a) {
  return r === n.width ? KQ(t, r, n, a) : qQ(t, r, n, a);
}, Vl = function e(t, r) {
  var n = t.children;
  if (n && n.length) {
    var a = UQ(t), i = [], o = 1 / 0, s, c, l = Math.min(a.width, a.height), u = HQ(n, a.width * a.height / t[vo]), f = u.slice();
    for (i.area = 0; f.length > 0; )
      i.push(s = f[0]), i.area += s.area, c = GQ(i, l, r), c <= o ? (f.shift(), o = c) : (i.area -= i.pop().area, a = ig(i, l, a, !1), l = Math.min(a.width, a.height), i.length = i.area = 0, o = 1 / 0);
    return i.length && (a = ig(i, l, a, !0), i.length = i.area = 0), Ne(Ne({}, t), {}, {
      children: u.map(function(d) {
        return e(d, r);
      })
    });
  }
  return t;
}, VQ = {
  isTooltipActive: !1,
  isAnimationFinished: !1,
  activeNode: null,
  formatRoot: null,
  currentRoot: null,
  nestIndex: []
}, lh = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    DQ(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = BQ(this, t, [].concat(a)), Er(r, "state", Ne({}, VQ)), Er(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), te(o) && o();
    }), Er(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), te(o) && o();
    }), r;
  }
  return FQ(t, e), RQ(t, [{
    key: "handleMouseEnter",
    value: function(n, a) {
      a.persist();
      var i = this.props, o = i.onMouseEnter, s = i.children, c = ct(s, lt);
      c ? this.setState({
        isTooltipActive: !0,
        activeNode: n
      }, function() {
        o && o(n, a);
      }) : o && o(n, a);
    }
  }, {
    key: "handleMouseLeave",
    value: function(n, a) {
      a.persist();
      var i = this.props, o = i.onMouseLeave, s = i.children, c = ct(s, lt);
      c ? this.setState({
        isTooltipActive: !1,
        activeNode: null
      }, function() {
        o && o(n, a);
      }) : o && o(n, a);
    }
  }, {
    key: "handleClick",
    value: function(n) {
      var a = this.props, i = a.onClick, o = a.type;
      if (o === "nest" && n.children) {
        var s = this.props, c = s.width, l = s.height, u = s.dataKey, f = s.aspectRatio, d = ql({
          depth: 0,
          node: Ne(Ne({}, n), {}, {
            x: 0,
            y: 0,
            width: c,
            height: l
          }),
          index: 0,
          valueKey: u
        }), h = Vl(d, f), y = this.state.nestIndex;
        y.push(n), this.setState({
          formatRoot: h,
          currentRoot: d,
          nestIndex: y
        });
      }
      i && i(n);
    }
  }, {
    key: "handleNestIndex",
    value: function(n, a) {
      var i = this.state.nestIndex, o = this.props, s = o.width, c = o.height, l = o.dataKey, u = o.aspectRatio, f = ql({
        depth: 0,
        node: Ne(Ne({}, n), {}, {
          x: 0,
          y: 0,
          width: s,
          height: c
        }),
        index: 0,
        valueKey: l
      }), d = Vl(f, u);
      i = i.slice(0, a + 1), this.setState({
        formatRoot: d,
        currentRoot: n,
        nestIndex: i
      });
    }
  }, {
    key: "renderItem",
    value: function(n, a, i) {
      var o = this, s = this.props, c = s.isAnimationActive, l = s.animationBegin, u = s.animationDuration, f = s.animationEasing, d = s.isUpdateAnimationActive, h = s.type, y = s.animationId, m = s.colorPanel, p = this.state.isAnimationFinished, b = a.width, w = a.height, x = a.x, O = a.y, g = a.depth, _ = parseInt("".concat((Math.random() * 2 - 1) * b), 10), S = {};
      return (i || h === "nest") && (S = {
        onMouseEnter: this.handleMouseEnter.bind(this, a),
        onMouseLeave: this.handleMouseLeave.bind(this, a),
        onClick: this.handleClick.bind(this, a)
      }), c ? /* @__PURE__ */ A.createElement(dt, {
        begin: l,
        duration: u,
        isActive: c,
        easing: f,
        key: "treemap-".concat(y),
        from: {
          x,
          y: O,
          width: b,
          height: w
        },
        to: {
          x,
          y: O,
          width: b,
          height: w
        },
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(P) {
        var j = P.x, E = P.y, $ = P.width, k = P.height;
        return /* @__PURE__ */ A.createElement(dt, {
          from: "translate(".concat(_, "px, ").concat(_, "px)"),
          to: "translate(0, 0)",
          attributeName: "transform",
          begin: l,
          easing: f,
          isActive: c,
          duration: u
        }, /* @__PURE__ */ A.createElement(ie, S, function() {
          return g > 2 && !p ? null : o.constructor.renderContentItem(n, Ne(Ne({}, a), {}, {
            isAnimationActive: c,
            isUpdateAnimationActive: !d,
            width: $,
            height: k,
            x: j,
            y: E
          }), h, m);
        }()));
      }) : /* @__PURE__ */ A.createElement(ie, S, this.constructor.renderContentItem(n, Ne(Ne({}, a), {}, {
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        width: b,
        height: w,
        x,
        y: O
      }), h, m));
    }
  }, {
    key: "renderNode",
    value: function(n, a) {
      var i = this, o = this.props, s = o.content, c = o.type, l = Ne(Ne(Ne({}, Z(this.props, !1)), a), {}, {
        root: n
      }), u = !a.children || !a.children.length, f = this.state.currentRoot, d = (f.children || []).filter(function(h) {
        return h.depth === a.depth && h.name === a.name;
      });
      return !d.length && n.depth && c === "nest" ? null : /* @__PURE__ */ A.createElement(ie, {
        key: "recharts-treemap-node-".concat(l.x, "-").concat(l.y, "-").concat(l.name),
        className: "recharts-treemap-depth-".concat(a.depth)
      }, this.renderItem(s, l, u), a.children && a.children.length ? a.children.map(function(h) {
        return i.renderNode(a, h);
      }) : null);
    }
  }, {
    key: "renderAllNodes",
    value: function() {
      var n = this.state.formatRoot;
      return n ? this.renderNode(n, n) : null;
    }
  }, {
    key: "renderTooltip",
    value: function() {
      var n = this.props, a = n.children, i = n.nameKey, o = ct(a, lt);
      if (!o)
        return null;
      var s = this.props, c = s.width, l = s.height, u = this.state, f = u.isTooltipActive, d = u.activeNode, h = {
        x: 0,
        y: 0,
        width: c,
        height: l
      }, y = d ? {
        x: d.x + d.width / 2,
        y: d.y + d.height / 2
      } : null, m = f && d ? [{
        payload: d,
        name: he(d, i, ""),
        value: he(d, vo)
      }] : [];
      return /* @__PURE__ */ A.cloneElement(o, {
        viewBox: h,
        active: f,
        coordinate: y,
        label: "",
        payload: m
      });
    }
    // render nest treemap
  }, {
    key: "renderNestIndex",
    value: function() {
      var n = this, a = this.props, i = a.nameKey, o = a.nestIndexContent, s = this.state.nestIndex;
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-treemap-nest-index-wrapper",
        style: {
          marginTop: "8px",
          textAlign: "center"
        }
      }, s.map(function(c, l) {
        var u = At(c, i, "root"), f = null;
        return /* @__PURE__ */ A.isValidElement(o) && (f = /* @__PURE__ */ A.cloneElement(o, c, l)), te(o) ? f = o(c, l) : f = u, // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        /* @__PURE__ */ A.createElement("div", {
          onClick: n.handleNestIndex.bind(n, c, l),
          key: "nest-index-".concat(Wr()),
          className: "recharts-treemap-nest-index-box",
          style: {
            cursor: "pointer",
            display: "inline-block",
            padding: "0 7px",
            background: "#000",
            color: "#fff",
            marginRight: "3px"
          }
        }, f);
      }));
    }
  }, {
    key: "render",
    value: function() {
      if (!nu(this))
        return null;
      var n = this.props, a = n.width, i = n.height, o = n.className, s = n.style, c = n.children, l = n.type, u = MQ(n, NQ), f = Z(u, !1);
      return /* @__PURE__ */ A.createElement("div", {
        className: oe("recharts-wrapper", o),
        style: Ne(Ne({}, s), {}, {
          position: "relative",
          cursor: "default",
          width: a,
          height: i
        }),
        role: "region"
      }, /* @__PURE__ */ A.createElement(as, fc({}, f, {
        width: a,
        height: l === "nest" ? i - 30 : i
      }), this.renderAllNodes(), vC(c)), this.renderTooltip(), l === "nest" && this.renderNestIndex());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      if (n.data !== a.prevData || n.type !== a.prevType || n.width !== a.prevWidth || n.height !== a.prevHeight || n.dataKey !== a.prevDataKey || n.aspectRatio !== a.prevAspectRatio) {
        var i = ql({
          depth: 0,
          node: {
            children: n.data,
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
          },
          index: 0,
          valueKey: n.dataKey
        }), o = Vl(i, n.aspectRatio);
        return Ne(Ne({}, a), {}, {
          formatRoot: o,
          currentRoot: i,
          nestIndex: [i],
          prevAspectRatio: n.aspectRatio,
          prevData: n.data,
          prevWidth: n.width,
          prevHeight: n.height,
          prevDataKey: n.dataKey,
          prevType: n.type
        });
      }
      return null;
    }
  }, {
    key: "renderContentItem",
    value: function(n, a, i, o) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, a);
      if (te(n))
        return n(a);
      var s = a.x, c = a.y, l = a.width, u = a.height, f = a.index, d = null;
      l > 10 && u > 10 && a.children && i === "nest" && (d = /* @__PURE__ */ A.createElement(Yd, {
        points: [{
          x: s + 2,
          y: c + u / 2
        }, {
          x: s + 6,
          y: c + u / 2 + 3
        }, {
          x: s + 2,
          y: c + u / 2 + 6
        }]
      }));
      var h = null, y = Qn(a.name);
      l > 20 && u > 20 && y.width < l && y.height < u && (h = /* @__PURE__ */ A.createElement("text", {
        x: s + 8,
        y: c + u / 2 + 7,
        fontSize: 14
      }, a.name));
      var m = o || kQ;
      return /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement(Gc, fc({
        fill: a.depth < 2 ? m[f % m.length] : "rgba(255,255,255,0)",
        stroke: "#fff"
      }, aw(a, "children"), {
        role: "img"
      })), d, h);
    }
  }]);
}(ht);
Er(lh, "displayName", "Treemap");
Er(lh, "defaultProps", {
  aspectRatio: 0.5 * (1 + Math.sqrt(5)),
  dataKey: "value",
  type: "flat",
  isAnimationActive: !kt.isSsr,
  isUpdateAnimationActive: !kt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "linear"
});
var YQ = ln({
  chartName: "RadarChart",
  GraphicalChild: To,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Qa
  }, {
    axisType: "radiusAxis",
    AxisComp: Za
  }],
  formatAxisMap: Ox,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), XQ = ln({
  chartName: "ScatterChart",
  GraphicalChild: ei,
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: ["item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Br
  }, {
    axisType: "yAxis",
    AxisComp: Lr
  }, {
    axisType: "zAxis",
    AxisComp: Eo
  }],
  formatAxisMap: $o
}), ZQ = ln({
  chartName: "AreaChart",
  GraphicalChild: Gr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Br
  }, {
    axisType: "yAxis",
    AxisComp: Lr
  }],
  formatAxisMap: $o
}), QQ = ln({
  chartName: "ComposedChart",
  GraphicalChild: [Cn, Gr, hr, ei],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Br
  }, {
    axisType: "yAxis",
    AxisComp: Lr
  }, {
    axisType: "zAxis",
    AxisComp: Eo
  }],
  formatAxisMap: $o
});
function yo(e) {
  "@babel/helpers - typeof";
  return yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yo(e);
}
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Df.apply(this, arguments);
}
function og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      JQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JQ(e, t, r) {
  return t = eJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eJ(e) {
  var t = tJ(e, "string");
  return yo(t) == "symbol" ? t : t + "";
}
function tJ(e, t) {
  if (yo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rJ(e, t) {
  var r = "".concat(t.x || e.x), n = parseInt(r, 10), a = "".concat(t.y || e.y), i = parseInt(a, 10), o = "".concat((t == null ? void 0 : t.height) || (e == null ? void 0 : e.height)), s = parseInt(o, 10);
  return Yl(Yl(Yl({}, t), Kx(e)), {}, {
    height: s,
    x: n,
    y: i
  });
}
function nJ(e) {
  return /* @__PURE__ */ A.createElement(co, Df({
    shapeType: "trapezoid",
    propTransformer: rJ
  }, e));
}
var Rf;
function sg(e, t) {
  return sJ(e) || oJ(e, t) || iJ(e, t) || aJ();
}
function aJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iJ(e, t) {
  if (e) {
    if (typeof e == "string") return cg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cg(e, t);
  }
}
function cg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oJ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw a;
      }
    }
    return s;
  }
}
function sJ(e) {
  if (Array.isArray(e)) return e;
}
function Na(e) {
  "@babel/helpers - typeof";
  return Na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Na(e);
}
function hc() {
  return hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hc.apply(this, arguments);
}
function lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), !0).forEach(function(n) {
      Cr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ug(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cw(n.key), n);
  }
}
function lJ(e, t, r) {
  return t && ug(e.prototype, t), r && ug(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uJ(e, t, r) {
  return t = pc(t), fJ(e, sw() ? Reflect.construct(t, r || [], pc(e).constructor) : t.apply(e, r));
}
function fJ(e, t) {
  if (t && (Na(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dJ(e);
}
function dJ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sw = function() {
    return !!e;
  })();
}
function pc(e) {
  return pc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pc(e);
}
function hJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bf(e, t);
}
function Bf(e, t) {
  return Bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bf(e, t);
}
function Cr(e, t, r) {
  return t = cw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cw(e) {
  var t = pJ(e, "string");
  return Na(t) == "symbol" ? t : t + "";
}
function pJ(e, t) {
  if (Na(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var un = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    cJ(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = uJ(this, t, [].concat(a)), Cr(r, "state", {
      isAnimationFinished: !1
    }), Cr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), te(o) && o();
    }), Cr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), te(o) && o();
    }), r;
  }
  return hJ(t, e), lJ(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(n) !== -1 : n === a;
    }
  }, {
    key: "renderTrapezoidsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.activeShape;
      return n.map(function(c, l) {
        var u = a.isActiveIndex(l) ? s : o, f = Ze(Ze({}, c), {}, {
          isActive: a.isActiveIndex(l),
          stroke: c.stroke
        });
        return /* @__PURE__ */ A.createElement(ie, hc({
          className: "recharts-funnel-trapezoid"
        }, Nr(a.props, c, l), {
          key: "trapezoid-".concat(c == null ? void 0 : c.x, "-").concat(c == null ? void 0 : c.y, "-").concat(c == null ? void 0 : c.name, "-").concat(c == null ? void 0 : c.value),
          role: "img"
        }), /* @__PURE__ */ A.createElement(nJ, hc({
          option: u
        }, f)));
      });
    }
  }, {
    key: "renderTrapezoidsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.trapezoids, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, l = a.animationEasing, u = a.animationId, f = this.state.prevTrapezoids;
      return /* @__PURE__ */ A.createElement(dt, {
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "funnel-".concat(u),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(d) {
        var h = d.t, y = i.map(function(m, p) {
          var b = f && f[p];
          if (b) {
            var w = ue(b.x, m.x), x = ue(b.y, m.y), O = ue(b.upperWidth, m.upperWidth), g = ue(b.lowerWidth, m.lowerWidth), _ = ue(b.height, m.height);
            return Ze(Ze({}, m), {}, {
              x: w(h),
              y: x(h),
              upperWidth: O(h),
              lowerWidth: g(h),
              height: _(h)
            });
          }
          var S = ue(m.x + m.upperWidth / 2, m.x), P = ue(m.y + m.height / 2, m.y), j = ue(0, m.upperWidth), E = ue(0, m.lowerWidth), $ = ue(0, m.height);
          return Ze(Ze({}, m), {}, {
            x: S(h),
            y: P(h),
            upperWidth: j(h),
            lowerWidth: E(h),
            height: $(h)
          });
        });
        return /* @__PURE__ */ A.createElement(ie, null, n.renderTrapezoidsStatically(y));
      });
    }
  }, {
    key: "renderTrapezoids",
    value: function() {
      var n = this.props, a = n.trapezoids, i = n.isAnimationActive, o = this.state.prevTrapezoids;
      return i && a && a.length && (!o || !pr(o, a)) ? this.renderTrapezoidsWithAnimation() : this.renderTrapezoidsStatically(a);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.trapezoids, o = n.className, s = n.isAnimationActive, c = this.state.isAnimationFinished;
      if (a || !i || !i.length)
        return null;
      var l = oe("recharts-trapezoids", o);
      return /* @__PURE__ */ A.createElement(ie, {
        className: l
      }, this.renderTrapezoids(), (!s || c) && Pt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curTrapezoids: n.trapezoids,
        prevTrapezoids: a.curTrapezoids
      } : n.trapezoids !== a.curTrapezoids ? {
        curTrapezoids: n.trapezoids
      } : null;
    }
  }]);
}(ht);
Rf = un;
Cr(un, "displayName", "Funnel");
Cr(un, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  labelLine: !0,
  hide: !1,
  isAnimationActive: !kt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  lastShapeType: "triangle"
});
Cr(un, "getRealFunnelData", function(e) {
  var t = e.props, r = t.data, n = t.children, a = Z(e.props, !1), i = ft(n, Ga);
  return r && r.length ? r.map(function(o, s) {
    return Ze(Ze(Ze({
      payload: o
    }, a), o), i && i[s] && i[s].props);
  }) : i && i.length ? i.map(function(o) {
    return Ze(Ze({}, a), o.props);
  }) : [];
});
Cr(un, "getRealWidthHeight", function(e, t) {
  var r = e.props.width, n = t.width, a = t.height, i = t.left, o = t.right, s = t.top, c = t.bottom, l = a, u = n;
  return rb(r) ? u = r : nn(r) && (u = u * parseFloat(r) / 100), {
    realWidth: u - i - o - 50,
    realHeight: l - c - s,
    offsetX: (n - u) / 2,
    offsetY: (a - l) / 2
  };
});
Cr(un, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Rf.getRealFunnelData(t), a = t.props, i = a.dataKey, o = a.nameKey, s = a.tooltipType, c = a.lastShapeType, l = a.reversed, u = r.left, f = r.top, d = Rf.getRealWidthHeight(t, r), h = d.realHeight, y = d.realWidth, m = d.offsetX, p = d.offsetY, b = Math.max.apply(null, n.map(function(_) {
    return he(_, i, 0);
  })), w = n.length, x = h / w, O = {
    x: r.left,
    y: r.top,
    width: r.width,
    height: r.height
  }, g = n.map(function(_, S) {
    var P = he(_, i, 0), j = he(_, o, S), E = P, $;
    if (S !== w - 1) {
      if ($ = he(n[S + 1], i, 0), $ instanceof Array) {
        var k = $, C = sg(k, 1);
        $ = C[0];
      }
    } else if (P instanceof Array && P.length === 2) {
      var D = sg(P, 2);
      E = D[0], $ = D[1];
    } else c === "rectangle" ? $ = E : $ = 0;
    var N = (b - E) * y / (2 * b) + f + 25 + m, M = x * S + u + p, B = E / b * y, W = $ / b * y, H = [{
      name: j,
      value: E,
      payload: _,
      dataKey: i,
      type: s
    }], T = {
      x: N + B / 2,
      y: M + x / 2
    };
    return Ze(Ze({
      x: N,
      y: M,
      width: Math.max(B, W),
      upperWidth: B,
      lowerWidth: W,
      height: x,
      name: j,
      val: E,
      tooltipPayload: H,
      tooltipPosition: T
    }, aw(_, "width")), {}, {
      payload: _,
      parentViewBox: O,
      labelViewBox: {
        x: N + (B - W) / 4,
        y: M,
        width: Math.abs(B - W) / 2 + Math.min(B, W),
        height: x
      }
    });
  });
  return l && (g = g.map(function(_, S) {
    var P = _.y - S * x + (w - 1 - S) * x;
    return Ze(Ze({}, _), {}, {
      upperWidth: _.lowerWidth,
      lowerWidth: _.upperWidth,
      x: _.x - (_.lowerWidth - _.upperWidth) / 2,
      y: _.y - S * x + (w - 1 - S) * x,
      tooltipPosition: Ze(Ze({}, _.tooltipPosition), {}, {
        y: P + x / 2
      }),
      labelViewBox: Ze(Ze({}, _.labelViewBox), {}, {
        y: P
      })
    });
  })), {
    trapezoids: g,
    data: n
  };
});
var mJ = ln({
  chartName: "FunnelChart",
  GraphicalChild: un,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  axisComponents: [],
  defaultProps: {
    layout: "centric"
  }
});
const vJ = "_graphsContainer_esp8c_19", yJ = "_graphsTitle_esp8c_27", gJ = "_barChart_esp8c_34", bJ = "_stackedBarChart_esp8c_41", _J = "_groupedBarChart_esp8c_45", xJ = "_horizontalBarChart_esp8c_52", wJ = "_horizontalStackedBarChart_esp8c_59", OJ = "_lineChart_esp8c_63", SJ = "_smoothLineChart_esp8c_76", AJ = "_multiLineChart_esp8c_81", PJ = "_steppedLineChart_esp8c_89", jJ = "_areaChart_esp8c_97", TJ = "_stackedAreaChart_esp8c_104", $J = "_smoothAreaChart_esp8c_108", EJ = "_pieChart_esp8c_113", CJ = "_doughnutChart_esp8c_121", kJ = "_labeledPieChart_esp8c_129", NJ = "_radarChart_esp8c_141", MJ = "_scatterChart_esp8c_154", IJ = "_composedChart_esp8c_162", DJ = "_treemapChart_esp8c_173", RJ = "_funnelChart_esp8c_181", BJ = "_analyticsTrendChart_esp8c_188", LJ = "_analyticsComparisonChart_esp8c_196", zJ = "_analyticsDistributionChart_esp8c_204", FJ = "_analyticsPerformanceChart_esp8c_211", WJ = "_dashboardSummaryChart_esp8c_220", UJ = "_dashboardKpiChart_esp8c_227", HJ = "_dashboardTrendChart_esp8c_232", GJ = "_dashboardMiniChart_esp8c_240", KJ = "_statsScoreChart_esp8c_247", qJ = "_statsPerformanceChart_esp8c_259", VJ = "_statsMatchHistoryChart_esp8c_268", YJ = "_statsCategoryChart_esp8c_277", XJ = "_statsTimeSeriesChart_esp8c_290", ZJ = "_srOnly_esp8c_329", fe = {
  graphsContainer: vJ,
  graphsTitle: yJ,
  barChart: gJ,
  stackedBarChart: bJ,
  groupedBarChart: _J,
  horizontalBarChart: xJ,
  horizontalStackedBarChart: wJ,
  lineChart: OJ,
  smoothLineChart: SJ,
  multiLineChart: AJ,
  steppedLineChart: PJ,
  areaChart: jJ,
  stackedAreaChart: TJ,
  smoothAreaChart: $J,
  pieChart: EJ,
  doughnutChart: CJ,
  labeledPieChart: kJ,
  radarChart: NJ,
  scatterChart: MJ,
  composedChart: IJ,
  treemapChart: DJ,
  funnelChart: RJ,
  analyticsTrendChart: BJ,
  analyticsComparisonChart: LJ,
  analyticsDistributionChart: zJ,
  analyticsPerformanceChart: FJ,
  dashboardSummaryChart: WJ,
  dashboardKpiChart: UJ,
  dashboardTrendChart: HJ,
  dashboardMiniChart: GJ,
  statsScoreChart: KJ,
  statsPerformanceChart: qJ,
  statsMatchHistoryChart: VJ,
  statsCategoryChart: YJ,
  statsTimeSeriesChart: XJ,
  srOnly: ZJ
}, lw = {
  default: [
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
  ],
  primary: [
    "#2563eb",
    "#3b82f6",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a"
  ],
  secondary: [
    "#38bdf8",
    "#0ea5e9",
    "#0284c7",
    "#0369a1",
    "#075985"
  ],
  rainbow: [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#14b8a6",
    "#06b6d4",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#d946ef",
    "#ec4899"
  ],
  monochrome: [
    "#1f2937",
    "#374151",
    "#4b5563",
    "#6b7280",
    "#9ca3af",
    "#d1d5db",
    "#e5e7eb",
    "#f3f4f6",
    "#f9fafb"
  ],
  custom: [
    "#2563eb",
    "#38bdf8",
    "#a78bfa",
    "#fbbf24",
    "#ef4444"
  ]
}, _r = {
  // Basic bar charts
  bar: {
    variant: "chart",
    shape: "bar",
    colorScheme: "default",
    height: 140,
    className: fe.barChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [6, 6, 0, 0],
    xAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    yAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 500 }
  },
  "bar-stacked": {
    variant: "analytics",
    shape: "bar",
    colorScheme: "rainbow",
    height: 160,
    className: fe.stackedBarChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [4, 4, 0, 0],
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 600 }
  },
  "bar-grouped": {
    variant: "comparison",
    shape: "bar",
    colorScheme: "primary",
    height: 160,
    className: fe.groupedBarChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [4, 4, 0, 0],
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 600 }
  },
  "bar-horizontal": {
    variant: "chart",
    shape: "horizontalBar",
    colorScheme: "default",
    height: 160,
    className: fe.horizontalBarChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [0, 6, 6, 0],
    xAxis: { show: !0, fontSize: 12, type: "number" },
    yAxis: { show: !0, fontSize: 12, type: "category" },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 500 },
    margin: { top: 8, right: 8, left: 8, bottom: 8 }
  },
  "bar-horizontal-stacked": {
    variant: "analytics",
    shape: "horizontalBar",
    colorScheme: "rainbow",
    height: 180,
    className: fe.horizontalStackedBarChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [0, 4, 4, 0],
    xAxis: { show: !0, fontSize: 12, type: "number" },
    yAxis: { show: !0, fontSize: 12, type: "category" },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 600 },
    margin: { top: 8, right: 8, left: 20, bottom: 8 }
  },
  // Line charts
  line: {
    variant: "trend",
    shape: "line",
    colorScheme: "primary",
    height: 140,
    className: fe.lineChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !1,
    xAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    yAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 800 }
  },
  "line-smooth": {
    variant: "trend",
    shape: "line",
    colorScheme: "secondary",
    height: 140,
    className: fe.smoothLineChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 3,
    lineSmooth: !0,
    xAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    yAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 1e3 }
  },
  "line-multi": {
    variant: "comparison",
    shape: "line",
    colorScheme: "rainbow",
    height: 160,
    className: fe.multiLineChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !0,
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 800 }
  },
  "line-stepped": {
    variant: "analytics",
    shape: "line",
    colorScheme: "monochrome",
    height: 140,
    className: fe.steppedLineChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !1,
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 600 }
  },
  // Area charts
  area: {
    variant: "trend",
    shape: "area",
    colorScheme: "primary",
    height: 140,
    className: fe.areaChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    areaOpacity: 0.5,
    xAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    yAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 800 }
  },
  "area-stacked": {
    variant: "analytics",
    shape: "area",
    colorScheme: "rainbow",
    height: 160,
    className: fe.stackedAreaChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 1,
    areaOpacity: 0.7,
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 1e3 }
  },
  "area-smooth": {
    variant: "trend",
    shape: "area",
    colorScheme: "secondary",
    height: 140,
    className: fe.smoothAreaChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !0,
    areaOpacity: 0.6,
    xAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    yAxis: {
      show: !0,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 1200 }
  },
  // Pie charts
  pie: {
    variant: "distribution",
    shape: "pie",
    colorScheme: "rainbow",
    height: 200,
    className: fe.pieChart,
    responsive: !0,
    pieOuterRadius: 80,
    showLabels: !0,
    tooltip: { show: !0, format: "percentage" },
    legend: { show: !0, position: "bottom" },
    animation: { enabled: !0, duration: 800 }
  },
  doughnut: {
    variant: "distribution",
    shape: "pie",
    colorScheme: "primary",
    height: 200,
    className: fe.doughnutChart,
    responsive: !0,
    pieInnerRadius: 40,
    pieOuterRadius: 80,
    showLabels: !1,
    tooltip: { show: !0, format: "percentage" },
    legend: { show: !0, position: "right" },
    animation: { enabled: !0, duration: 1e3 }
  },
  "pie-with-labels": {
    variant: "distribution",
    shape: "pie",
    colorScheme: "rainbow",
    height: 220,
    className: fe.labeledPieChart,
    responsive: !0,
    pieOuterRadius: 85,
    showLabels: !0,
    showValues: !0,
    tooltip: { show: !0, format: "percentage" },
    legend: { show: !0, position: "bottom" },
    animation: { enabled: !0, duration: 800 }
  },
  // Specialized charts
  radar: {
    variant: "comparison",
    shape: "radar",
    colorScheme: "primary",
    height: 180,
    className: fe.radarChart,
    responsive: !0,
    areaOpacity: 0.6,
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 1e3 }
  },
  scatter: {
    variant: "analytics",
    shape: "scatter",
    colorScheme: "secondary",
    height: 160,
    className: fe.scatterChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 600 }
  },
  "composed-bar-line": {
    variant: "analytics",
    shape: "composed",
    colorScheme: "rainbow",
    height: 180,
    className: fe.composedChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [6, 6, 0, 0],
    lineWidth: 2,
    xAxis: { show: !0, fontSize: 12 },
    yAxis: { show: !0, fontSize: 12 },
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "top" },
    animation: { enabled: !0, duration: 800 }
  },
  treemap: {
    variant: "distribution",
    shape: "treemap",
    colorScheme: "rainbow",
    height: 200,
    className: fe.treemapChart,
    responsive: !0,
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 600 }
  },
  funnel: {
    variant: "analytics",
    shape: "funnel",
    colorScheme: "primary",
    height: 180,
    className: fe.funnelChart,
    responsive: !0,
    tooltip: { show: !0, format: "percentage" },
    legend: { show: !0, position: "right" },
    animation: { enabled: !0, duration: 800 }
  },
  // Analytics specific
  "analytics-trend": {
    variant: "analytics",
    shape: "line",
    colorScheme: "primary",
    height: 120,
    className: fe.analyticsTrendChart,
    showGrid: !1,
    showAxes: !1,
    responsive: !0,
    lineWidth: 3,
    lineSmooth: !0,
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 1e3 },
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  },
  "analytics-comparison": {
    variant: "analytics",
    shape: "bar",
    colorScheme: "rainbow",
    height: 100,
    className: fe.analyticsComparisonChart,
    showGrid: !1,
    showAxes: !1,
    responsive: !0,
    barRadius: [2, 2, 0, 0],
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 600 },
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  },
  "analytics-distribution": {
    variant: "analytics",
    shape: "pie",
    colorScheme: "monochrome",
    height: 120,
    className: fe.analyticsDistributionChart,
    responsive: !0,
    pieOuterRadius: 50,
    showLabels: !1,
    tooltip: { show: !0, format: "percentage" },
    animation: { enabled: !0, duration: 800 }
  },
  "analytics-performance": {
    variant: "analytics",
    shape: "radar",
    colorScheme: "secondary",
    height: 140,
    className: fe.analyticsPerformanceChart,
    responsive: !0,
    areaOpacity: 0.3,
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 1e3 }
  },
  // Dashboard specific
  "dashboard-summary": {
    variant: "dashboard",
    shape: "area",
    colorScheme: "primary",
    height: 80,
    className: fe.dashboardSummaryChart,
    showGrid: !1,
    showAxes: !1,
    responsive: !0,
    lineWidth: 2,
    areaOpacity: 0.2,
    tooltip: { show: !1 },
    animation: { enabled: !0, duration: 600 },
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  },
  "dashboard-kpi": {
    variant: "dashboard",
    shape: "bar",
    colorScheme: "primary",
    height: 60,
    className: fe.dashboardKpiChart,
    showGrid: !1,
    showAxes: !1,
    responsive: !0,
    barRadius: [2, 2, 0, 0],
    tooltip: { show: !1 },
    animation: { enabled: !0, duration: 400 },
    margin: { top: 5, right: 5, bottom: 5, left: 5 }
  },
  "dashboard-trend": {
    variant: "dashboard",
    shape: "line",
    colorScheme: "secondary",
    height: 100,
    className: fe.dashboardTrendChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !0,
    xAxis: { show: !0, fontSize: 10 },
    yAxis: { show: !0, fontSize: 10 },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 800 },
    margin: { top: 10, right: 10, bottom: 20, left: 20 }
  },
  "dashboard-mini": {
    variant: "dashboard",
    shape: "line",
    colorScheme: "primary",
    height: 40,
    className: fe.dashboardMiniChart,
    showGrid: !1,
    showAxes: !1,
    responsive: !0,
    lineWidth: 1,
    tooltip: { show: !1 },
    animation: { enabled: !1 },
    margin: { top: 2, right: 2, bottom: 2, left: 2 }
  },
  // Game/Statistics specific
  "stats-score-progression": {
    variant: "trend",
    shape: "area",
    colorScheme: "primary",
    height: 160,
    className: fe.statsScoreChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 3,
    areaOpacity: 0.3,
    xAxis: { show: !0, fontSize: 12, label: "Games" },
    yAxis: { show: !0, fontSize: 12, label: "Score" },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 1e3 }
  },
  "stats-performance-radar": {
    variant: "comparison",
    shape: "radar",
    colorScheme: "rainbow",
    height: 200,
    className: fe.statsPerformanceChart,
    responsive: !0,
    areaOpacity: 0.4,
    tooltip: { show: !0, format: "default" },
    legend: { show: !0, position: "bottom" },
    animation: { enabled: !0, duration: 1200 }
  },
  "stats-match-history": {
    variant: "trend",
    shape: "bar",
    colorScheme: "secondary",
    height: 140,
    className: fe.statsMatchHistoryChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    barRadius: [4, 4, 0, 0],
    xAxis: {
      show: !0,
      fontSize: 11,
      label: "Recent Matches"
    },
    yAxis: { show: !0, fontSize: 11, label: "Score" },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 600 }
  },
  "stats-category-breakdown": {
    variant: "distribution",
    shape: "pie",
    colorScheme: "rainbow",
    height: 180,
    className: fe.statsCategoryChart,
    responsive: !0,
    pieOuterRadius: 70,
    showLabels: !0,
    tooltip: { show: !0, format: "percentage" },
    legend: { show: !0, position: "right" },
    animation: { enabled: !0, duration: 800 }
  },
  "stats-time-series": {
    variant: "trend",
    shape: "line",
    colorScheme: "primary",
    height: 120,
    className: fe.statsTimeSeriesChart,
    showGrid: !0,
    showAxes: !0,
    responsive: !0,
    lineWidth: 2,
    lineSmooth: !0,
    xAxis: { show: !0, fontSize: 10, type: "date" },
    yAxis: { show: !0, fontSize: 10 },
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 800 }
  },
  // Custom fallback
  custom: {
    variant: "custom",
    shape: "custom",
    colorScheme: "default",
    height: 140,
    className: "",
    responsive: !0,
    tooltip: { show: !0, format: "default" },
    animation: { enabled: !0, duration: 500 }
  }
};
function QJ(e, t = {}) {
  return {
    ..._r[e],
    ...t,
    // Merge nested objects properly
    colors: t.colors || _r[e].colors || [
      ...lw[t.colorScheme || _r[e].colorScheme || "default"]
    ],
    xAxis: {
      ..._r[e].xAxis,
      ...t.xAxis
    },
    yAxis: {
      ..._r[e].yAxis,
      ...t.yAxis
    },
    legend: {
      ..._r[e].legend,
      ...t.legend
    },
    tooltip: {
      ..._r[e].tooltip,
      ...t.tooltip
    },
    animation: {
      ..._r[e].animation,
      ...t.animation
    },
    margin: {
      ..._r[e].margin,
      ...t.margin
    }
  };
}
function fg(e) {
  return [...lw[e]];
}
const Un = (e, t, r = !1) => {
  var a, i, o, s, c, l, u, f, d, h, y, m, p, b, w, x, O, g;
  const n = [];
  return ((a = e.xAxis) == null ? void 0 : a.show) !== !1 && n.push(
    r ? /* @__PURE__ */ v.jsx(
      Br,
      {
        type: "number",
        fontSize: ((i = e.xAxis) == null ? void 0 : i.fontSize) || 12,
        tickLine: ((o = e.xAxis) == null ? void 0 : o.tickLine) !== !1,
        axisLine: ((s = e.xAxis) == null ? void 0 : s.axisLine) !== !1,
        label: (c = e.xAxis) == null ? void 0 : c.label
      },
      "x"
    ) : /* @__PURE__ */ v.jsx(
      Br,
      {
        dataKey: t,
        fontSize: ((l = e.xAxis) == null ? void 0 : l.fontSize) || 12,
        tickLine: ((u = e.xAxis) == null ? void 0 : u.tickLine) !== !1,
        axisLine: ((f = e.xAxis) == null ? void 0 : f.axisLine) !== !1,
        label: (d = e.xAxis) == null ? void 0 : d.label
      },
      "x"
    )
  ), ((h = e.yAxis) == null ? void 0 : h.show) !== !1 && n.push(
    r ? /* @__PURE__ */ v.jsx(
      Lr,
      {
        dataKey: t,
        type: "category",
        fontSize: ((y = e.yAxis) == null ? void 0 : y.fontSize) || 12,
        tickLine: ((m = e.yAxis) == null ? void 0 : m.tickLine) !== !1,
        axisLine: ((p = e.yAxis) == null ? void 0 : p.axisLine) !== !1,
        label: (b = e.yAxis) == null ? void 0 : b.label
      },
      "y"
    ) : /* @__PURE__ */ v.jsx(
      Lr,
      {
        fontSize: ((w = e.yAxis) == null ? void 0 : w.fontSize) || 12,
        tickLine: ((x = e.yAxis) == null ? void 0 : x.tickLine) !== !1,
        axisLine: ((O = e.yAxis) == null ? void 0 : O.axisLine) !== !1,
        label: (g = e.yAxis) == null ? void 0 : g.label
      },
      "y"
    )
  ), n;
}, Hn = (e) => {
  var r, n;
  const t = [];
  return e.showGrid !== !1 && t.push(
    /* @__PURE__ */ v.jsx(P0, { strokeDasharray: "3 3" }, "grid")
  ), ((r = e.tooltip) == null ? void 0 : r.show) !== !1 && t.push(/* @__PURE__ */ v.jsx(lt, {}, "tooltip")), (n = e.legend) != null && n.show && t.push(
    /* @__PURE__ */ v.jsx(
      ur,
      {
        verticalAlign: e.legend.verticalAlign,
        layout: e.legend.layout,
        align: e.legend.align
      },
      "legend"
    )
  ), t;
}, uw = ve(
  ({
    kind: e,
    data: t,
    dataKey: r = "value",
    labelKey: n = "name",
    valueKey: a,
    nameKey: i,
    title: o,
    colors: s,
    colorScheme: c,
    className: l = "",
    style: u = {},
    width: f = "100%",
    height: d,
    margin: h,
    showGrid: y,
    showAxes: m,
    showLegend: p,
    showTooltip: b,
    showLabels: w,
    showValues: x,
    animationDuration: O,
    animationEnabled: g,
    configuration: _ = {},
    onClick: S,
    onHover: P,
    ariaLabel: j,
    ariaDescription: E,
    ...$
  }, k) => {
    var T, R;
    const C = QJ(e, {
      ..._,
      colors: s || (c ? fg(c) : void 0),
      height: d || _.height,
      margin: h || _.margin,
      showGrid: y !== void 0 ? y : _.showGrid,
      showAxes: m !== void 0 ? m : _.showAxes,
      legend: p !== void 0 ? { ..._.legend, show: p } : _.legend,
      tooltip: b !== void 0 ? { ..._.tooltip, show: b } : _.tooltip,
      showLabels: w !== void 0 ? w : _.showLabels,
      showValues: x !== void 0 ? x : _.showValues,
      animation: {
        ..._.animation,
        enabled: g !== void 0 ? g : (T = _.animation) == null ? void 0 : T.enabled,
        duration: O || ((R = _.animation) == null ? void 0 : R.duration)
      }
    }), D = a || r, N = i || n, M = C.colors || fg("default"), B = {
      data: t,
      margin: C.margin || { left: -18, right: 8 }
    }, W = {
      width: f,
      height: (C.height || 140) + 40,
      margin: "1.2em 0 0.5em 0",
      ...u
    }, H = () => {
      var L, z, q, Y, J, ee, X;
      switch (C.shape) {
        case "bar":
          return /* @__PURE__ */ v.jsxs(
            qy,
            {
              ...B,
              layout: e.includes("horizontal") ? "vertical" : "horizontal",
              children: [
                Un(
                  C,
                  N,
                  e.includes("horizontal")
                ),
                Hn(C),
                /* @__PURE__ */ v.jsx(
                  hr,
                  {
                    dataKey: D,
                    fill: M[0],
                    radius: C.barRadius,
                    onClick: S,
                    onMouseEnter: P
                  }
                )
              ]
            }
          );
        case "horizontalBar":
          return /* @__PURE__ */ v.jsxs(qy, { ...B, layout: "vertical", children: [
            Un(C, N, !0),
            Hn(C),
            /* @__PURE__ */ v.jsx(
              hr,
              {
                dataKey: D,
                fill: M[0],
                radius: C.barRadius,
                onClick: S,
                onMouseEnter: P
              }
            )
          ] });
        case "line":
          return /* @__PURE__ */ v.jsxs(UV, { ...B, children: [
            Un(C, N),
            Hn(C),
            /* @__PURE__ */ v.jsx(
              Cn,
              {
                type: C.lineSmooth ? "monotone" : "linear",
                dataKey: D,
                stroke: M[0],
                strokeWidth: C.lineWidth || 2,
                dot: { r: 3 }
              }
            )
          ] });
        case "area":
          return /* @__PURE__ */ v.jsxs(ZQ, { ...B, children: [
            Un(C, N),
            Hn(C),
            /* @__PURE__ */ v.jsx(
              Gr,
              {
                type: C.lineSmooth ? "monotone" : "linear",
                dataKey: D,
                stroke: M[0],
                fill: M[1] || M[0],
                fillOpacity: C.areaOpacity || 0.5
              }
            )
          ] });
        case "pie":
          return /* @__PURE__ */ v.jsxs(HV, { children: [
            /* @__PURE__ */ v.jsxs(
              Hr,
              {
                data: t,
                dataKey: D,
                nameKey: N,
                cx: "50%",
                cy: "50%",
                outerRadius: C.pieOuterRadius || (C.height || 140) / 2 - 10,
                innerRadius: C.pieInnerRadius || 0,
                fill: M[0],
                label: C.showLabels,
                onClick: S,
                onMouseEnter: P,
                children: [
                  t.map((U, V) => /* @__PURE__ */ v.jsx(
                    Ga,
                    {
                      fill: M[V % M.length]
                    },
                    `cell-${V}`
                  )),
                  C.showValues && /* @__PURE__ */ v.jsx(Pt, { dataKey: D })
                ]
              }
            ),
            ((L = C.tooltip) == null ? void 0 : L.show) !== !1 && /* @__PURE__ */ v.jsx(lt, {}),
            ((z = C.legend) == null ? void 0 : z.show) && /* @__PURE__ */ v.jsx(ur, {})
          ] });
        case "radar":
          return /* @__PURE__ */ v.jsxs(
            YQ,
            {
              cx: "50%",
              cy: "50%",
              outerRadius: (C.height || 140) / 2 - 10,
              data: t,
              children: [
                /* @__PURE__ */ v.jsx(Lx, {}),
                /* @__PURE__ */ v.jsx(Qa, { dataKey: N }),
                /* @__PURE__ */ v.jsx(Za, {}),
                /* @__PURE__ */ v.jsx(
                  To,
                  {
                    name: D,
                    dataKey: D,
                    stroke: M[0],
                    fill: M[1] || M[0],
                    fillOpacity: C.areaOpacity || 0.6
                  }
                ),
                ((q = C.legend) == null ? void 0 : q.show) && /* @__PURE__ */ v.jsx(ur, {}),
                ((Y = C.tooltip) == null ? void 0 : Y.show) !== !1 && /* @__PURE__ */ v.jsx(lt, {})
              ]
            }
          );
        case "scatter":
          return /* @__PURE__ */ v.jsxs(XQ, { ...B, children: [
            Un(C, N),
            Hn(C),
            /* @__PURE__ */ v.jsx(
              ei,
              {
                dataKey: D,
                fill: M[0],
                onClick: S,
                onMouseEnter: P
              }
            )
          ] });
        case "composed":
          return /* @__PURE__ */ v.jsxs(QQ, { ...B, children: [
            Un(C, N),
            Hn(C),
            /* @__PURE__ */ v.jsx(
              hr,
              {
                dataKey: D,
                fill: M[0],
                radius: C.barRadius
              }
            ),
            /* @__PURE__ */ v.jsx(
              Cn,
              {
                type: "monotone",
                dataKey: D,
                stroke: M[1] || M[0],
                strokeWidth: C.lineWidth || 2
              }
            )
          ] });
        case "treemap":
          return /* @__PURE__ */ v.jsx(wl, { width: "100%", height: "100%", children: /* @__PURE__ */ v.jsx(
            lh,
            {
              data: t,
              dataKey: D,
              stroke: "#fff",
              fill: M[0]
            }
          ) });
        case "funnel":
          return /* @__PURE__ */ v.jsx(wl, { width: "100%", height: "100%", children: /* @__PURE__ */ v.jsxs(mJ, { children: [
            /* @__PURE__ */ v.jsx(
              un,
              {
                dataKey: D,
                data: t,
                isAnimationActive: ((J = C.animation) == null ? void 0 : J.enabled) !== !1
              }
            ),
            ((ee = C.tooltip) == null ? void 0 : ee.show) !== !1 && /* @__PURE__ */ v.jsx(lt, {}),
            ((X = C.legend) == null ? void 0 : X.show) && /* @__PURE__ */ v.jsx(ur, {})
          ] }) });
        default:
          return /* @__PURE__ */ v.jsxs("div", { children: [
            "Unsupported chart type: ",
            C.shape
          ] });
      }
    };
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        ref: k,
        className: `${fe.graphsContainer} ${C.className || ""} ${l}`.trim(),
        style: W,
        role: "img",
        "aria-label": j || `${e} chart`,
        "aria-description": E,
        ...$,
        children: [
          o && /* @__PURE__ */ v.jsx("h4", { className: fe.graphsTitle, children: o }),
          /* @__PURE__ */ v.jsx("div", { className: fe.srOnly, children: E || `A ${e} chart with ${t.length} data points` }),
          /* @__PURE__ */ v.jsx(
            wl,
            {
              width: "100%",
              height: C.height || 140,
              children: H()
            }
          )
        ]
      }
    );
  }
);
uw.displayName = "UnifiedGraph";
const Mre = ({
  shape: e = "bar",
  kind: t,
  ...r
}) => {
  const n = t || e;
  return /* @__PURE__ */ v.jsx(uw, { kind: n, ...r });
}, fw = 6048e5, JJ = 864e5, dw = 6e4, hw = 36e5, dg = Symbol.for("constructDateFrom");
function zr(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && dg in e ? e[dg](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Nt(e, t) {
  return zr(t || e, e);
}
let eee = {};
function rl() {
  return eee;
}
function go(e, t) {
  var s, c, l, u;
  const r = rl(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((u = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Nt(e, t == null ? void 0 : t.in), i = a.getDay(), o = (i < n ? 7 : 0) + i - n;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function mc(e, t) {
  return go(e, { ...t, weekStartsOn: 1 });
}
function pw(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = zr(r, 0);
  a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const i = mc(a), o = zr(r, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = mc(o);
  return r.getTime() >= i.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function hg(e) {
  const t = Nt(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function tee(e, ...t) {
  const r = zr.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function pg(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function ree(e, t, r) {
  const [n, a] = tee(
    r == null ? void 0 : r.in,
    e,
    t
  ), i = pg(n), o = pg(a), s = +i - hg(i), c = +o - hg(o);
  return Math.round((s - c) / JJ);
}
function nee(e, t) {
  const r = pw(e, t), n = zr(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), mc(n);
}
function aee(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function iee(e) {
  return !(!aee(e) && typeof e != "number" || isNaN(+Nt(e)));
}
function oee(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const see = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, cee = (e, t, r) => {
  let n;
  const a = see[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Xl(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const lee = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, uee = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fee = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dee = {
  date: Xl({
    formats: lee,
    defaultWidth: "full"
  }),
  time: Xl({
    formats: uee,
    defaultWidth: "full"
  }),
  dateTime: Xl({
    formats: fee,
    defaultWidth: "full"
  })
}, hee = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pee = (e, t, r, n) => hee[e];
function vi(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : o;
      a = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[s] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const mee = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vee = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yee = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, gee = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, bee = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, _ee = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, xee = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, wee = {
  ordinalNumber: xee,
  era: vi({
    values: mee,
    defaultWidth: "wide"
  }),
  quarter: vi({
    values: vee,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: vi({
    values: yee,
    defaultWidth: "wide"
  }),
  day: vi({
    values: gee,
    defaultWidth: "wide"
  }),
  dayPeriod: vi({
    values: bee,
    defaultWidth: "wide",
    formattingValues: _ee,
    defaultFormattingWidth: "wide"
  })
};
function yi(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const o = i[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? See(s, (f) => f.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      Oee(s, (f) => f.test(o))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const u = t.slice(o.length);
    return { value: l, rest: u };
  };
}
function Oee(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function See(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Aee(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const s = t.slice(a.length);
    return { value: o, rest: s };
  };
}
const Pee = /^(\d+)(th|st|nd|rd)?/i, jee = /\d+/i, Tee = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $ee = {
  any: [/^b/i, /^(a|c)/i]
}, Eee = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Cee = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kee = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Nee = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Mee = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Iee = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Dee = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ree = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Bee = {
  ordinalNumber: Aee({
    matchPattern: Pee,
    parsePattern: jee,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yi({
    matchPatterns: Tee,
    defaultMatchWidth: "wide",
    parsePatterns: $ee,
    defaultParseWidth: "any"
  }),
  quarter: yi({
    matchPatterns: Eee,
    defaultMatchWidth: "wide",
    parsePatterns: Cee,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yi({
    matchPatterns: kee,
    defaultMatchWidth: "wide",
    parsePatterns: Nee,
    defaultParseWidth: "any"
  }),
  day: yi({
    matchPatterns: Mee,
    defaultMatchWidth: "wide",
    parsePatterns: Iee,
    defaultParseWidth: "any"
  }),
  dayPeriod: yi({
    matchPatterns: Dee,
    defaultMatchWidth: "any",
    parsePatterns: Ree,
    defaultParseWidth: "any"
  })
}, Lee = {
  code: "en-US",
  formatDistance: cee,
  formatLong: dee,
  formatRelative: pee,
  localize: wee,
  match: Bee,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function zee(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in);
  return ree(r, oee(r)) + 1;
}
function Fee(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in), n = +mc(r) - +nee(r);
  return Math.round(n / fw) + 1;
}
function mw(e, t) {
  var u, f, d, h;
  const r = Nt(e, t == null ? void 0 : t.in), n = r.getFullYear(), a = rl(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((h = (d = a.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, o = zr((t == null ? void 0 : t.in) || e, 0);
  o.setFullYear(n + 1, 0, i), o.setHours(0, 0, 0, 0);
  const s = go(o, t), c = zr((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(n, 0, i), c.setHours(0, 0, 0, 0);
  const l = go(c, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function Wee(e, t) {
  var s, c, l, u;
  const r = rl(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((u = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = mw(e, t), i = zr((t == null ? void 0 : t.in) || e, 0);
  return i.setFullYear(a, 0, n), i.setHours(0, 0, 0, 0), go(i, t);
}
function Uee(e, t) {
  const r = Nt(e, t == null ? void 0 : t.in), n = +go(r, t) - +Wee(r, t);
  return Math.round(n / fw) + 1;
}
function Pe(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Vr = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Pe(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Pe(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Pe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Pe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Pe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Pe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Pe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Pe(a, t.length);
  }
}, Gn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, mg = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return Vr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = mw(e, n), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = i % 100;
      return Pe(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(i, { unit: "year" }) : Pe(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = pw(e);
    return Pe(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return Pe(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Pe(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return Pe(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Vr.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return Pe(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = Uee(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : Pe(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Fee(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Pe(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Vr.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = zee(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Pe(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return Pe(i, 2);
      case "eo":
        return r.ordinalNumber(i, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), i = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return Pe(i, t.length);
      case "co":
        return r.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return Pe(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = Gn.noon : n === 0 ? a = Gn.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = Gn.evening : n >= 12 ? a = Gn.afternoon : n >= 4 ? a = Gn.morning : a = Gn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Vr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Vr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Pe(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Pe(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Vr.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Vr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Vr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return yg(n);
      case "XXXX":
      case "XX":
        return gn(n);
      case "XXXXX":
      case "XXX":
      default:
        return gn(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return yg(n);
      case "xxxx":
      case "xx":
        return gn(n);
      case "xxxxx":
      case "xxx":
      default:
        return gn(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + vg(n, ":");
      case "OOOO":
      default:
        return "GMT" + gn(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + vg(n, ":");
      case "zzzz":
      default:
        return "GMT" + gn(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return Pe(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return Pe(+e, t.length);
  }
};
function vg(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), i = n % 60;
  return i === 0 ? r + String(a) : r + String(a) + t + Pe(i, 2);
}
function yg(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Pe(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Pe(Math.trunc(n / 60), 2), i = Pe(n % 60, 2);
  return r + a + t + i;
}
const gg = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, vw = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Hee = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return gg(e, t);
  let i;
  switch (n) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", gg(n, t)).replace("{{time}}", vw(a, t));
}, Gee = {
  p: vw,
  P: Hee
}, Kee = /^D+$/, qee = /^Y+$/, Vee = ["D", "DD", "YY", "YYYY"];
function Yee(e) {
  return Kee.test(e);
}
function Xee(e) {
  return qee.test(e);
}
function Zee(e, t, r) {
  const n = Qee(e, t, r);
  if (console.warn(n), Vee.includes(e)) throw new RangeError(n);
}
function Qee(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Jee = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ete = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tte = /^'([^]*?)'?$/, rte = /''/g, nte = /[a-zA-Z]/;
function bg(e, t, r) {
  var u, f, d, h;
  const n = rl(), a = n.locale ?? Lee, i = n.firstWeekContainsDate ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = n.weekStartsOn ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? 0, s = Nt(e, r == null ? void 0 : r.in);
  if (!iee(s))
    throw new RangeError("Invalid time value");
  let c = t.match(ete).map((y) => {
    const m = y[0];
    if (m === "p" || m === "P") {
      const p = Gee[m];
      return p(y, a.formatLong);
    }
    return y;
  }).join("").match(Jee).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const m = y[0];
    if (m === "'")
      return { isToken: !1, value: ate(y) };
    if (mg[m])
      return { isToken: !0, value: y };
    if (m.match(nte))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (c = a.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: a
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const m = y.value;
    (Xee(m) || Yee(m)) && Zee(m, t, String(e));
    const p = mg[m[0]];
    return p(s, m, a.localize, l);
  }).join("");
}
function ate(e) {
  const t = e.match(tte);
  return t ? t[1].replace(rte, "'") : e;
}
function _g(e, t) {
  const r = () => zr(t == null ? void 0 : t.in, NaN), a = cte(e);
  let i;
  if (a.date) {
    const l = lte(a.date, 2);
    i = ute(l.restDateString, l.year);
  }
  if (!i || isNaN(+i)) return r();
  const o = +i;
  let s = 0, c;
  if (a.time && (s = fte(a.time), isNaN(s)))
    return r();
  if (a.timezone) {
    if (c = dte(a.timezone), isNaN(c)) return r();
  } else {
    const l = new Date(o + s), u = Nt(0, t == null ? void 0 : t.in);
    return u.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), u.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), u;
  }
  return Nt(o + s + c, t == null ? void 0 : t.in);
}
const Xo = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, ite = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ote = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, ste = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function cte(e) {
  const t = {}, r = e.split(Xo.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], Xo.timeZoneDelimiter.test(t.date) && (t.date = e.split(Xo.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const a = Xo.timezone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timezone = a[1]) : t.time = n;
  }
  return t;
}
function lte(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null, i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function ute(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(ite);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], a = gi(r[1]), i = gi(r[2]) - 1, o = gi(r[3]), s = gi(r[4]), c = gi(r[5]) - 1;
  if (n)
    return yte(t, s, c) ? hte(t, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const l = /* @__PURE__ */ new Date(0);
    return !mte(t, i, o) || !vte(t, a) ? /* @__PURE__ */ new Date(NaN) : (l.setUTCFullYear(t, i, Math.max(a, o)), l);
  }
}
function gi(e) {
  return e ? parseInt(e) : 1;
}
function fte(e) {
  const t = e.match(ote);
  if (!t) return NaN;
  const r = Zl(t[1]), n = Zl(t[2]), a = Zl(t[3]);
  return gte(r, n, a) ? r * hw + n * dw + a * 1e3 : NaN;
}
function Zl(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function dte(e) {
  if (e === "Z") return 0;
  const t = e.match(ste);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return bte(n, a) ? r * (n * hw + a * dw) : NaN;
}
function hte(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const a = n.getUTCDay() || 7, i = (t - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
const pte = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function yw(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function mte(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (pte[t] || (yw(e) ? 29 : 28));
}
function vte(e, t) {
  return t >= 1 && t <= (yw(e) ? 366 : 365);
}
function yte(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function gte(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function bte(e, t) {
  return t >= 0 && t <= 59;
}
const Ire = ({
  stats: e,
  mode: t,
  className: r = "",
  style: n,
  opponentStats: a,
  globalStats: i
}) => t === "daily" ? /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: `endgame-modal-stats-summary ${r}`.trim(),
    style: { ...n },
    children: [
      /* @__PURE__ */ v.jsx(
        "h3",
        {
          style: {
            color: "#2563eb",
            margin: "0 0 0.7em 0"
          },
          children: "Daily Puzzle Stats"
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 18
          },
          children: [
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Your Time:" }),
              " ",
              e.average_solve_time,
              "s"
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Mistakes:" }),
              " ",
              e.mistake_rate * 100,
              "%"
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Streak:" }),
              " ",
              e.current_streak
            ] }),
            (i == null ? void 0 : i.percentileRank) !== void 0 && /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Global Percentile:" }),
              " Top",
              " ",
              i.percentileRank,
              "%"
            ] }),
            (i == null ? void 0 : i.leaderboardPosition) !== void 0 && /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Leaderboard:" }),
              " #",
              i.leaderboardPosition
            ] })
          ]
        }
      )
    ]
  }
) : t === "vs" ? /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: `endgame-modal-stats-summary ${r}`.trim(),
    style: { ...n },
    children: [
      /* @__PURE__ */ v.jsx(
        "h3",
        {
          style: {
            color: "#2563eb",
            margin: "0 0 0.7em 0"
          },
          children: "VS Match Summary"
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 32
          },
          children: [
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("h4", { style: { color: "#0ea5e9" }, children: "You" }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Score:" }),
                " ",
                e.win_count
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Groups Found:" }),
                " ",
                e.perfect_puzzles
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Mistakes:" }),
                " ",
                e.mistake_rate * 100,
                "%"
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Solve Time:" }),
                " ",
                e.average_solve_time,
                "s"
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Streak:" }),
                " ",
                e.current_streak
              ] })
            ] }),
            a && /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("h4", { style: { color: "#ef4444" }, children: "Opponent" }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Score:" }),
                " ",
                a.win_count
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Groups Found:" }),
                " ",
                a.perfect_puzzles
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Mistakes:" }),
                " ",
                a.mistake_rate * 100,
                "%"
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Solve Time:" }),
                " ",
                a.average_solve_time,
                "s"
              ] }),
              /* @__PURE__ */ v.jsxs("div", { children: [
                /* @__PURE__ */ v.jsx("b", { children: "Streak:" }),
                " ",
                a.current_streak
              ] })
            ] })
          ]
        }
      )
    ]
  }
) : /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: `endgame-modal-stats-summary ${r}`.trim(),
    style: { ...n },
    children: [
      /* @__PURE__ */ v.jsx(
        "h3",
        {
          style: { color: "#2563eb", margin: "0 0 0.7em 0" },
          children: "Lifetime Stats"
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 18
          },
          children: [
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Matches Played:" }),
              " ",
              e.total_matches_played
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "VS Bot:" }),
              " ",
              e.vs_bot_matches_played
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "VS Multiplayer:" }),
              " ",
              e.vs_multiplayer_matches_played
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Wins:" }),
              " ",
              e.win_count
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Losses:" }),
              " ",
              e.loss_count
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Perfect Puzzles:" }),
              " ",
              e.perfect_puzzles
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Longest Streak:" }),
              " ",
              e.longest_streak
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Current Streak:" }),
              " ",
              e.current_streak
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Avg. Solve Time:" }),
              " ",
              e.average_solve_time,
              "s"
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Mistake Rate:" }),
              " ",
              e.mistake_rate * 100,
              "%"
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Favorite Category:" }),
              " ",
              e.favorite_category
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Last Played:" }),
              " ",
              bg(
                _g(e.last_played_at),
                "MMM d, yyyy"
              )
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Joined:" }),
              " ",
              bg(_g(e.join_date), "MMM d, yyyy")
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Achievements Unlocked:" }),
              " "
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Games by Mode:" }),
              " "
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Time-of-Day Activity:" }),
              " "
            ] }),
            /* @__PURE__ */ v.jsxs("div", { children: [
              /* @__PURE__ */ v.jsx("b", { children: "Streaks Broken:" }),
              " "
            ] })
          ]
        }
      )
    ]
  }
), _te = "_sessionDebugger_rumj1_1", xte = {
  sessionDebugger: _te
}, Dre = ({
  enabled: e = !1
}) => {
  const [t, r] = He(null);
  return kr(() => {
    r((/* @__PURE__ */ new Date()).toLocaleTimeString());
  }, []), e ? /* @__PURE__ */ v.jsxs("div", { className: xte.sessionDebugger, children: [
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("strong", { children: "Session Status:" }),
      " ",
      "unknown"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("strong", { children: "User ID:" }),
      " ",
      "None"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("strong", { children: "Email:" }),
      " ",
      "None"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("strong", { children: "Session Exists:" }),
      " ",
      "No"
    ] }),
    /* @__PURE__ */ v.jsxs("div", { children: [
      /* @__PURE__ */ v.jsx("strong", { children: "Timestamp:" }),
      " ",
      t || "..."
    ] })
  ] }) : null;
};
export {
  Mte as AchievementSocketListener,
  Rn as B,
  zg as BANNER_CONFIGURATIONS,
  Sg as BUTTON_CONFIGURATIONS,
  Ote as BUTTON_GROUPS,
  Mt as Ban,
  Kf as Banner,
  qf as BannerBodyFactory,
  Fg as BannerFactory,
  KA as BannerFactoryClass,
  pre as BannerPresets,
  Jte as BrowseHeader,
  Cte as Button,
  Jl as ButtonFactory,
  kte as ButtonPresets,
  Fe as C,
  Dg as CARD_CONFIGURATIONS,
  nre as CARD_GROUPS,
  jj as CHAT_CONFIGURATIONS,
  o1 as CHECKBOX_CONFIGURATIONS,
  i1 as COMPONENT_CONFIGURATIONS,
  US as Card,
  ire as CardC,
  mt as CardFactory,
  sr as CardFactoryClass,
  ore as CardPresets,
  Gg as Chat,
  Kg as ChatBodyFactory,
  Zf as ChatFactory,
  _i as ChatFactoryClass,
  kre as ChatFactoryShortcut,
  Nre as ChatPresets,
  D1 as Checkbox,
  Bte as CheckboxC,
  R1 as CheckboxFactory,
  Lte as CheckboxPresets,
  Tg as ComponentFactory,
  $te as ComponentPresets,
  Are as CustomizationCategory,
  B1 as DarkModeToggle,
  $e as F,
  Lf as FORM_FIELD_CONFIGURATIONS,
  Ate as FORM_FIELD_GROUPS,
  Pte as FORM_FIELD_PRESETS,
  qA as FeedbackBanner,
  _re as Footer,
  Ag as FormField,
  Pg as FormFieldBodyFactory,
  zf as FormFieldFactory,
  Tte as FormFieldPresets,
  Cre as FriendsSidebar,
  fre as G,
  Gf as GRID_CONFIGURATIONS,
  cre as GRID_GROUPS,
  Mo as GRID_PRESETS,
  qA as GlobalToast,
  Mre as Graphs,
  ure as Grid,
  Bg as GridFactory,
  dre as GridPresets,
  ere as H,
  Hf as HEADER_CONFIGURATIONS,
  Vte as HEADER_GROUPS,
  Qte as Header,
  We as HeaderFactory,
  tre as HeaderPresets,
  jt as M,
  NO as MODAL_CONFIGURATIONS,
  _o as MODAL_GROUPS,
  F1 as Modal,
  DO as ModalBodyFactory,
  Ig as ModalFactory,
  RO as ModalFooterFactory,
  Kte as ModalPresets,
  qA as NotificationBanner,
  Dte as P,
  Ng as PROVIDER_CONFIGURATIONS,
  mre as Page,
  wt as PageFactory,
  vre as PageP,
  yre as PagePresets,
  Ff as Provider,
  Ci as ProviderBodyFactory,
  xr as ProviderFactory,
  ii as ProviderPresets,
  Ste as QUICK_BUTTONS,
  are as QUICK_CARDS,
  Yte as QUICK_HEADERS,
  sre as QuickCards,
  Ete as QuickComponents,
  hre as QuickGrids,
  Rte as QuickProviders,
  Sre as QuickSettings,
  Ore as S,
  tj as SETTINGS_CONFIGURATIONS,
  Dre as SessionDebugger,
  Wg as Settings,
  Ug as SettingsBodyFactory,
  Or as SettingsFactory,
  Tre as SettingsPanel,
  Bn as SettingsPresets,
  gh as SimpleModalFactory,
  Hg as SocketContext,
  Ere as SocketProvider,
  bre as StartupPage,
  Ire as StatisticsSummary,
  Wf as ThemePaletteContext,
  Ite as ThemePaletteProvider,
  wre as ThemeSelector,
  qA as ToastBanner,
  qA as UnifiedBanner,
  ze as UnifiedButton,
  Rg as UnifiedCard,
  Tj as UnifiedChat,
  bo as UnifiedCheckbox,
  jg as UnifiedFormField,
  Et as UnifiedGrid,
  vc as UnifiedHeader,
  Mg as UnifiedModal,
  Vf as UnifiedPage,
  Uf as UnifiedProvider,
  Yf as UnifiedSettings,
  Xf as UserSettingsContext,
  jre as UserSettingsProvider,
  Pj as VSQuickChatBar,
  qA as VSStatusBar,
  Oh as accessibilitySettings,
  BA as achievementNotification,
  ll as achievementSocketListener,
  RA as burnNotification,
  ir as createButtonConfig,
  fn as createCardConfig,
  Xw as createFormFieldConfig,
  HS as createGridConfig,
  rre as createHeader,
  Xte as createHeaderConfig,
  qte as createModal,
  gre as createPage,
  _h as customizationCategory,
  WA as errorToast,
  IA as feedbackBanner,
  MO as getModalConfiguration,
  DA as globalToastBanner,
  HA as infoToast,
  Wte as isCommerceModal,
  zte as isGameModal,
  Ute as isInteractionModal,
  Hte as isLayoutModal,
  Fte as isVersusModal,
  Zte as mergeActions,
  IO as mergeModalConfiguration,
  xo as notificationBanner,
  Sh as privacySettings,
  bh as settingsPanel,
  mh as socketProvider,
  Lg as statusBanner,
  FA as successToast,
  LA as systemNotification,
  zA as tauntNotification,
  vh as themePaletteProvider,
  wh as themeSettings,
  SP as themes,
  wo as toastBanner,
  Gte as useModal,
  $re as useSocket,
  Nte as useThemePalette,
  Pre as useUserSettings,
  xh as userSettings,
  cl as userSettingsProvider,
  jte as validateFormField,
  lre as validateGrid,
  xre as vsModeDefaults,
  GA as vsStatusBar,
  UA as warningToast
};
//# sourceMappingURL=index.es.js.map
