import { Selector } from 'testcafe';

class HomePage {
  constructor() {
    this.routerDeportistas = Selector('a[routerlink="/deportistas"]');
    this.routerPatrocinadores = Selector('a[routerlink="/patrocinadores"]');
    this.routerMarcas = Selector('a[routerLink="/marcas"]');
    this.routerNutricionistas = Selector('a[routerLink="/nutricionistas"]');
    this.routerEventos = Selector('a[routerLink="/eventos"]');
  }

  async goToDeportistas(t) {
    await t.click(this.routerDeportistas);
  }

  async goToPatrocinadores(t) {
    await t.click(this.routerPatrocinadores);
  }

  async goToMarcas(t){
    await t.click(this.routerMarcas)
  }

  async goToNutricionistas(t){
    await t.click(this.routerNutricionistas)
  }

   async goToEventos(t){
    await t.click(this.routerEventos)
  }





}

export default new HomePage();
