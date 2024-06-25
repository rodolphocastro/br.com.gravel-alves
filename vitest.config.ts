/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import type { UserConfig as VitestUserConfig } from 'vitest/config';

// Type augmentation for Typescript to be aware of ViteTest configuration
declare module 'vite' {
  export interface UserConfig {
    test: VitestUserConfig['test'];
  }
}

export default getViteConfig({
  test: {
    // Vitest configuration options
    coverage: {
      include: ['src/**/*.ts'],
      reporter: ['text', 'lcov'],
    },
    reporters: [
      ['vitest-sonar-reporter', { outputFile: 'sonar-report.xml' }]
    ]
  },
});