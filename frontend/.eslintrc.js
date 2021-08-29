module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["import", "simple-import-sort", "react-hooks", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }], //コンソール書いてることを知らせてくれる
    "no-restricted-syntax": [
      //禁止構文設定
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ], // enum禁止
    "prefer-arrow-callback": "error", //コールバックにはアロー関数
    "prefer-const": "error", //変更のない変数は定数に
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "always"], // アロー関数中括弧必要
    "no-restricted-imports": [
      // importの制限
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] },
    ],
    "react/prop-types": "off", //typescriptでチェックしてる 不要
    "react/react-in-jsx-scope": "off",
    "react/display-name": "error",
    "react-hooks/rules-of-hooks": "error", //フックのルールをチェック
    "import/newline-after-import": "error", // import後に空行作る
    "import/no-default-export": "error", //default export禁止
    "simple-import-sort/imports": "error", // import 並び替え
    "simple-import-sort/exports": "error", // export 並び替え
    "@typescript-eslint/no-explicit-any": "off", //any を許す、警告出す?
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "tailwindcss/classnames-order": "warn", // tailwind関連
    "tailwindcss/no-custom-classname": "warn", // tailwind関連
    "tailwindcss/no-contradicting-classname": "error", // tailwind関連
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
