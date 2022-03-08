module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  globals: {
    __static: 'readonly',
  },
  rules: {
    "no-unused-vars": "off",
    'vue/no-deprecated-slot-attribute': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
  },
};
