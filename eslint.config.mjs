import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
  js.configs.recommended,
  {
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "quotes": [2, "double", { "avoidEscape": true }]
    },
    languageOptions: {
      globals: {
        console: true,
        chrome: true,
      }
    }
  }
]
