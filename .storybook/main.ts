import type { StorybookConfig } from '@storybook/nextjs-vite';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-docs',
  ],

  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],

  viteFinal: async (config) => {
    if (config.css && config.css.preprocessorOptions) {
      config.css.preprocessorOptions.scss = {
        ...config.css.preprocessorOptions.scss,
        additionalData: `@use '../styles/foundation/inject' as *;`,
        loadPaths: [path.join(__dirname, '../src/styles')],
      };
    } else {
      config.css = {
        preprocessorOptions: {
          scss: {
            additionalData: `@use '../styles/foundation/inject' as *;`,
            loadPaths: [path.join(__dirname, '../src/styles')],
          },
        },
      };
    }
    return config;
  },
};
export default config;
