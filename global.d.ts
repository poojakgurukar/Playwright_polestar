// global.d.ts

import { Browser, BrowserContext } from 'playwright';

declare global {
    namespace NodeJS {
        interface Global {
            browser: Browser;           // Type for the browser instance
            context: BrowserContext;    // Type for the browser context
        }
    }
}

// This export statement is necessary to make this file a module
export {};
