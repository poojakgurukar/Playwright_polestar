import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['html'], // HTML reporter
    ['allure-playwright'], // Allure reporter
  ],
  timeout: 30000,
  use: {
    headless: true,
    
  },
});
