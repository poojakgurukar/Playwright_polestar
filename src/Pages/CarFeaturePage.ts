import { Console } from 'console';
import { Locator, Page } from 'playwright';

export class CarFeaturePage {
    private page: Page;
    

    constructor(page: Page) {
        this.page = page;
      
    }

    private carTitle(): Locator {
        
        return this.page.locator('//font[contains(normalize-space(text()), "Subscribe")]');
    }
    
async goToRegisterFormPage(){
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

    async  getNumberofCarVideos() {
        await this.page.waitForSelector('video');
        const tagCount = await this.page.evaluate(() => {
            return document.evaluate('count(//video)', document, null, XPathResult.NUMBER_TYPE, null).numberValue;
          });
          return tagCount;
    }
}
