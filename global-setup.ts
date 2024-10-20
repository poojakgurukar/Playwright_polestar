import { FullConfig } from '@playwright/test';
import { chromium, Browser, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;

async function globalSetup(config: FullConfig) {
    // Launch the browser once
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();

    // Store the browser and context in the global object
    global['browser'] = browser;
    global['context'] = context;
}

// Export the single globalSetup function
export default globalSetup;
