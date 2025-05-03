module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ["airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: { "no-console": "warn", "prettier/prettier": ["error"] },
};
