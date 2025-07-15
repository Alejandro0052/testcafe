import { Selector } from 'testcafe';

class EventosPage {
  constructor() {
    this.card = Selector('#cardeventos');
    this.backButton = Selector('#backeventos');
  }

  async validatePage(t) {
    await t.expect(this.card.exists).ok();
  }

   async goBack(t) {
     await t.click(this.backButton);
   }
}

export default new EventosPage();
