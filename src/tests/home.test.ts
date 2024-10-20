import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { CarFeaturePage } from '../Pages/CarFeaturePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;
    let carFeaturePage: CarFeaturePage;

    test.beforeEach(async ({page} ) => {
       
        homePage = new HomePage(page);
        carFeaturePage = new CarFeaturePage(page);
        
    });

    test('@smoke: User can navigate to car models', async ({page}) => {
        await homePage.navigate();
        await page.waitForSelector('button:has-text("Accept All")');
        await page.click('button:has-text("Accept All")');
        await homePage.clickCarModels();
        const countofVideos = await carFeaturePage.getNumberofCarVideos();
        expect(countofVideos).toBeTruthy;
    });
});
