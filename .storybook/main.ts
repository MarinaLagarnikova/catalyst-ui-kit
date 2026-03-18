import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "docs": {
    "autodocs": "tag",
  },
  "framework": "@storybook/vue3-vite"
};
export default config;