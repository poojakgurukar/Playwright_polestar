import { test, expect } from '@playwright/test';
import { HomePage }  from '../Pages/HomePage';
import { CarFeaturePage } from '../Pages/CarFeaturePage';
import {Env} from '../env';

test.describe('Car Details Page Tests', () => {
    let homePage: HomePage;
    let carFeaturePage: CarFeaturePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        carFeaturePage = new CarFeaturePage(page);       
    });

    test('@regression: Get Number of Car Features shown in video format', async ({page}) => {
        const baseurl = Env.baseURL;
        const carDetailsURL = new URL('/se/precept/',baseurl);
        await page.goto(carDetailsURL.toString());
        
        await page.waitForSelector('button:has-text("Accept All")');
        await page.click('button:has-text("Accept All")');        
        const carFeaturesCount = await carFeaturePage.getNumberofCarVideos();
        expect(carFeaturesCount).toBeTruthy();
    });
});
