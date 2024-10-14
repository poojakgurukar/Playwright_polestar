// src/pages/polestarPage.ts
import { Page, Locator } from '@playwright/test';

class PolestarPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method to navigate to the page
  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://www.polestar.com/se');
  }

  // Method to get the page title
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  // Method to check for main header
  async hasMainHeader(text: string): Promise<boolean> {
    const header: Locator = this.page.locator('h1');
    
    const count = await header.count();

    // Ensure header exists and check if its text includes the specified text
    if (count > 0) {
      const headerText = await header.textContent(); // Await the text content
      return headerText?.includes(text) ?? false; // Check includes, handle null
    }

    return false; 
  }

// Method to check if the first visible element from a list is visible
async isFirstVisibleElementFromList(selector: string): Promise<boolean> {
    const elements: Locator = this.page.locator(selector);
    const count = await elements.count();
    
    if (count > 0) {
      const firstElement: Locator = elements.first();
      return await firstElement.isVisible(); // Return visibility status
    }

    return false; // Return false if no elements are found
  }

  
  // Method to check if navigation menu is visible
  async isNavMenuVisible(): Promise<boolean> {
    const elements:Locator= await this.page.locator('nav a');
    const count = await elements.count();
    
    // Check if there are any elements in the list
    if (count > 0) {
      const firstElement: Locator = elements.first();
      return await firstElement.isVisible(); // Return visibility status
    }

    return false;
  }

  // Method to check if a button is visible
  async isButtonVisible(buttonText: string): Promise<boolean> {
    return await this.page.locator(`text=${buttonText}`).isVisible();
  }

  // Method to check if logo is visible
  async isLogoVisible(): Promise<boolean> {
   
     const items =await this.page.locator("xpath =//img[contains(@alt,'Polestar')]");

     return items.nth(0).isVisible();    
  }

  // Method to check if footer is visible
  async isFooterVisible(): Promise<boolean> {
    const items =   await this.page.$$('xpath=//footer//a');
   
return  items[0].isVisible();
}}

export default PolestarPage;
