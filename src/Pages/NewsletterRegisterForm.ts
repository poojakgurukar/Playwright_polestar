import { Locator, Page } from 'playwright';

export class NewsletterRegisterForm {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    public firstName(): Locator {
        
        return this.page.locator('//input[contains(@id,"first-name")]');
    }
   
    public lastName(): Locator {
        
        return this.page.locator('//input[contains(@id,"last-name")]');
    }
   
    public email(): Locator {
        
        return this.page.locator('//input[@type="email"]');
    }
   
    public postalCode(): Locator {
        
        return this.page.locator('//input[@name="postalCode"]');
    }
   
    public checkbox(): Locator {
        
        return this.page.locator('//div[@class="css-sh0wlw"]//input[@type="checkbox"]');
    }
   
    public submit(): Locator {
        
        return this.page.locator('//button[@type="submit"]');
    }

    async clickSubscribe(){
        const translations = {
            en: 'Subscribe',
            sv: 'Prenumerera',
            // Other languages...
        };
        
        const currentLanguage = 'sv'; // This could be dynamically determined
        const exploreText = translations[currentLanguage];
        
        try {
            await this.page.click(`text=${exploreText}`);
        } catch {
            
            // Try a different language or a default value
            await this.page.click('//font[contains(normalize-space(text()), "Subscribe")]');
        }
    }
}