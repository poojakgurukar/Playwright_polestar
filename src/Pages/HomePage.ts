import { Locator, Page } from 'playwright';
import {Env} from '../env';

export class HomePage {
    private page: Page;
    

    constructor(page: Page) {
        this.page = page;
        
        
    }
    private getCarModelsLink(): Locator {
        
        return this.page.locator('//font[contains(normalize-space(text()), "Explore")]');
    }

    async navigate() {
        await this.page.goto(Env.baseURL, { waitUntil: 'networkidle' });
    }

    async clickCarModels() {
        const translations = {
            en: 'Explore',
            sv: 'Utforska',
            // Other languages...
        };
        
        const currentLanguage = 'sv'; // This could be dynamically determined
        const exploreText = translations[currentLanguage];
        
        try {
            await this.page.click(`text=${exploreText}`);
        } catch {
            
            // Try a different language or a default value
            await this.page.click('//font[contains(normalize-space(text()), "Explore")]'); // Fallback to English if needed
        }
}
}
