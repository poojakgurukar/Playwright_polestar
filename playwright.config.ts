import { defineConfig } from '@playwright/test';
import { json } from 'stream/consumers';

export default defineConfig({
  reporter: [["dot"],["json",{outputFile:"test-result.json"}],
  ['experimental-allure-playwright']],
  timeout: 30000,
  use: {
    headless: true,
    
  },
});
