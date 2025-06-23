import { Selector } from 'testcafe';

export class DeportistasPage {
    constructor() {
        this.athletesTitle = Selector('#athletes');        
        this.backButton    = Selector('#backdeportistas'); 
    }

    async irADeportistas(t) {
        await t.click(this.athletesTitle);
    }

    async volver(t) {
        await t.click(this.backButton);
    }
}
