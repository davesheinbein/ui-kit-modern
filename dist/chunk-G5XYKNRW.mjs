// src/components/Button/Button.tsx
import React from "react";
var Button = ({ label, onClick, className }) => {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      role: "button",
      "aria-label": label,
      onClick,
      className: `bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className || ""}`.trim()
    },
    label
  );
};
var Button_default = Button;

export {
  Button_default
};
//# sourceMappingURL=chunk-G5XYKNRW.mjs.map