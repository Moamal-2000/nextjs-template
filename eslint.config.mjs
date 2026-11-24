import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: ["node_modules/", ".next/", "out/", "dist/", "public/"],

    files: ["src/**/*.{js,jsx}"],

    plugins: {
      "jsx-a11y": jsxA11y,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    rules: {
      "no-unused-vars": "warn",
      "no-debugger": "error",
      eqeqeq: "error",
      curly: "error",
      "react/react-in-jsx-scope": "off",
      "no-var": "error",
      "prefer-const": "error",
      "react/prop-types": "off",
      ...jsxA11y.configs.recommended.rules,
    },
  },
];
