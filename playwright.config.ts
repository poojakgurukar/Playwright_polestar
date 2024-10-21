import { defineConfig ,devices , test as base  } from '@playwright/test';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { json } from 'stream/consumers';
export const test = base.extend<{
  browser: Browser;
  context: BrowserContext;
  page: Page;
}>({
  browser: async ({}, use) => {
      const browser = await chromium.launch({ headless: false });
      await use(browser);
      await browser.close();
  },
  context: async ({ browser }, use) => {
      const context = await browser.newContext();
      await use(context);
      await context.close();
  },
  page: async ({ context }, use) => {
      const page = await context.newPage();
      await use(page);
      await page.close();
  },
});
export default defineConfig({
  reporter: [["dot"],["json",{outputFile:"test-result.json"}],
  ['experimental-allure-playwright']],
  timeout: 30000,
  use: {
    headless: true, // Set to true for headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' },
    },
  ],
  globalSetup: './global-setup.ts', // Set up global fixtures if needed
});
