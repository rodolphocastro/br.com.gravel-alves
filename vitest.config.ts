/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
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