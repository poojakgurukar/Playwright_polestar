import { test,expect} from '@playwright/test';
import  './src/tests/home.test';
import './src/tests/carVideos.test';
import './src/tests/fillNewsletterRegisterForm.test';
import './api.test';


// Optionally, you can group them under a single describe block
test.describe('Smoke Regression Tests', () => {
  // All tests will be included in the described group
  
  let page;
  
  test.beforeAll(async () => {
     // Call the setup function
     const context= global['context'];
     page = await context.newPage(); // Create a new page from the global context
});
  
  test.afterAll(async () => {
      await page.close(); // Close the browser after all tests
  });
});
