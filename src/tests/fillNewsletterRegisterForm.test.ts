import { test, expect, chromium } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { CarFeaturePage } from '../Pages/CarFeaturePage';
import { NewsletterRegisterForm } from '../Pages/NewsletterRegisterForm';
import {Env} from '../env';

test.describe('Contact Page Tests', () => {
    let homePage: HomePage;
    let carFeaturePage: CarFeaturePage;
    let newsletterRegisterForm: NewsletterRegisterForm;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        carFeaturePage = new CarFeaturePage(page);
        newsletterRegisterForm = new NewsletterRegisterForm(page);
       
    });

    test('@smoke: Get NewsLetter for Registered User', async ({page}) => {
        const baseurl = Env.baseURL;
        const subscibeNewsletter = new URL('/se/sign-up-newsletter/',baseurl);
        await page.goto(subscibeNewsletter.toString());
        
        await page.waitForSelector('button:has-text("Accept All")');
        await page.click('button:has-text("Accept All")');
        await newsletterRegisterForm.firstName().fill("xyz");
        await newsletterRegisterForm.lastName().fill("zxc");
        await newsletterRegisterForm.email().fill("xyz@gmail.com");
        await newsletterRegisterForm.postalCode().fill("560022");
        await newsletterRegisterForm.checkbox().check();
        await newsletterRegisterForm.clickSubscribe();
    });
});
