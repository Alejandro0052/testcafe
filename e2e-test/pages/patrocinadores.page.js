import { Selector } from 'testcafe';

class PatrocinadoresPage {
  constructor() {
    this.card = Selector('#cardpatrocinadores');
    this.backButton = Selector('#backpatrocinadores');
  }

  async validatePage(t) {
    await t.expect(this.card.exists).ok();
  }

  async goBack(t) {
    await t.click(this.backButton);
  }
}

export default new PatrocinadoresPage();
