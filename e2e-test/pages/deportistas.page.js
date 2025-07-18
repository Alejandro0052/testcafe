import { Selector } from 'testcafe';

class DeportistasPage {
  constructor() {
    this.card = Selector('#carddeportistas');
    this.backButton = Selector('#backdeportistas');
  }

  async validatePage(t) {
    await t.expect(this.card.exists).ok();
  }

  async goBack(t) {
    await t.click(this.backButton);
  }
}

export default new DeportistasPage();
