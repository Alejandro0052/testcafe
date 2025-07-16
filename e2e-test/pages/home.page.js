import { Selector } from 'testcafe';

class HomePage {
  constructor() {
    this.routerDeportistas = Selector('a[routerlink="/deportistas"]');
    this.routerPatrocinadores = Selector('a[routerlink="/patrocinadores"]');
    this.routerMarcas = Selector('a[routerLink="/marcas"]');
    this.routerNutricionistas = Selector('a[routerLink="/nutricionistas"]');
    this.routerEventos = Selector('a[routerLink="/eventos"]');
    this.routerQuienes_Somos = Selector('a[routerLink="/quienes_somos"]');
    this.routerPrivacidad = Selector('a[routerLink="/politicas_privacidad"]');
    this.routerCondiciones = Selector('a[routerLink="/terminos_condiciones"]');
    this.routerContactenos = Selector('a[routerLink="/contactenos"]');
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

  async goToQuienessomos(t){
     await t.click(this.routerQuienes_Somos)
  }

  async goToPrivacidad(t){
    await t.click(this.routerPrivacidad)
  }

  async goToTerminosCondiciones(t){
    await t.click(this.routerCondiciones)
  }

  async goToContactenos(t){
     await t.click(this.routerContactenos)
  }

 

}

export default new HomePage();
