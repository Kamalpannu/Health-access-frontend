import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // enable browser-like DOM environment for tests
  },
});
