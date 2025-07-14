import { Selector } from 'testcafe';

class NutricionistasPage {
  constructor() {
    this.card = Selector('#cardnutricionistas');
    this.backButton = Selector('#backnutricionistas');
  }

  async validatePage(t) {
    await t.expect(this.card.exists).ok();
  }

  async goBack(t) {
    await t.click(this.backButton);
  }
}

export default new NutricionistasPage();
