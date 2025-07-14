import { Selector } from 'testcafe';

class HomePage {
  constructor() {
    this.routerDeportistas = Selector('a[routerlink="/deportistas"]');
    this.routerPatrocinadores = Selector('a[routerlink="/patrocinadores"]');
  }

  async goToDeportistas(t) {
    await t.click(this.routerDeportistas);
  }

  async goToPatrocinadores(t) {
    await t.click(this.routerPatrocinadores);
  }
}

export default new HomePage();
