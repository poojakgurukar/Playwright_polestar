// tests/polestar.test.ts
import { test, expect, chromium } from '@playwright/test';
import {Env} from '../src/env';
import PolestarPage from '../src/pages/polestarPage'; // Adjust path if necessary
import { strict } from 'assert';

test('Validate Polestar Developer Portal', async ({  }) => {
  const browser =await chromium.launch({headless:false});
  const context =await browser.newContext();
  const page = await context.newPage();
  test.setTimeout(60000);

  const polestarPage = new PolestarPage(page);
  
  await polestarPage.goto();
  
  await page.waitForSelector('button:has-text("Accept All")');
  await page.click('button:has-text("Accept All")');
  // Validate the page title
  const title = await polestarPage.getTitle();
  expect(title).toBe('Polestar – Elbilar | Polestar Sverige');

  // Check if the first visible navigation link is visible
  const isVisible = await polestarPage.isFirstVisibleElementFromList('nav a'); // Example selector for navigation links
  expect(isVisible).toBe(true); // Adjust assertion based on expected result
console.log("ji");
  // Check if the main header includes expected text
  const headerIncludes = await polestarPage.hasMainHeader('Polestar');
  expect(headerIncludes).toBe(true);
  console.log("ji");


  // Validate that the main header is present
  const hasHeader = await polestarPage.hasMainHeader('Polestar');
  expect(hasHeader).toBe(true);
  console.log("ji");
  // Validate that the navigation menu is visible
  const isNavVisible = await polestarPage.isNavMenuVisible();
  expect(isNavVisible).toBe(true);
  console.log("ji");
  

  // Check for logo visibility
  const isLogoVisible = await polestarPage.isLogoVisible();
  console.log(isLogoVisible);
  expect(isLogoVisible).toBe(true);
  console.log("jfgi");
  // Optionally: Check that footer element is visible
  const isFooterVisible = await polestarPage.isFooterVisible();
  expect(isFooterVisible).toBe(true);
  console.log("ji");
});
