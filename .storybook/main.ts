import type { StorybookConfig } from "@storybook/angular";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: [
    { from: '../src/assets', to: '/assets' }
  ],
  webpackFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "@styles": path.resolve(__dirname, "../src/app/styles"), // Aquí mapeas el alias
    };
    return config;
  },
};

export default config;
