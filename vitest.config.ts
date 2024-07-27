/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

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