module.exports = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react", "tailwindcss", "prettier"],
  rules: {
    // Customize rules as needed
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  settings: {
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl"],
      config: "tailwind.config.js",
      cssFiles: ["**/*.css", "**/*.scss"],
      removeDuplicates: true
    }
  }
};
