import { Selector } from 'testcafe';

class MarcasPage {
  constructor() {
    this.card = Selector('#cardmarcas');
    this.backButton = Selector('#backmarcas');
  }

  async validatePage(t) {
    await t.expect(this.card.exists).ok();
  }

  async goBack(t) {
    await t.click(this.backButton);
  }
}

export default new MarcasPage();
