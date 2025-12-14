//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // 🔑 let Prettier respect ESLint fixes
  plugins: [
    'prettier-plugin-eslint',
    '@trivago/prettier-plugin-sort-imports',

    // at the end
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
