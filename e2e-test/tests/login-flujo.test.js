import loginPage from '../pages/login.page';
import homePage from '../pages/home.page';
import deportistasPage from '../pages/deportistas.page';
import patrocinadoresPage from '../pages/patrocinadores.page';
import marcasPage from '../pages/marcas.page';
import { validUser } from '../data/credentials';
import nutricionistasPage from '../pages/nutricionistas.page';
import eventosPage from '../pages/eventos.page';
import contactenosPage from '../pages/contactenos.page';
import privacidadPage from '../pages/privacidad.page';
import quienes_somosPage from '../pages/quienes_somos.page';
import terminos_condicionesPage from '../pages/terminos_condiciones.page';





fixture`Flujo completo en Elite Hub`
  .page`http://localhost:4200/login`; 

test('Login y navegación entre vistas', async t => {
  
  await loginPage.login(t, validUser.username, validUser.password);

 
  await homePage.goToDeportistas(t);
  await deportistasPage.validatePage(t);
  await deportistasPage.goBack(t);

  await homePage.goToPatrocinadores(t);
  await patrocinadoresPage.validatePage(t);
  await patrocinadoresPage.goBack(t);

  await homePage.goToMarcas(t);
  await marcasPage.validatePage(t);
  await marcasPage.goBack(t);

  await homePage.goToNutricionistas(t);
  await nutricionistasPage.validatePage(t);
  await nutricionistasPage.goBack(t);

  await homePage.goToEventos(t);
  await eventosPage.validatePage(t);
  await eventosPage.goBack(t);


  await homePage.goToQuienessomos(t);
  await quienes_somosPage.validatePage(t);
  await quienes_somosPage.goBack(t);


  await homePage.goToPrivacidad(t);
  await privacidadPage.validatePage(t);
  await privacidadPage.goBack(t);


  await homePage.goToTerminosCondiciones(t);
  await terminos_condicionesPage.validatePage(t);
  await terminos_condicionesPage.goBack(t);

  await homePage.goToContactenos(t);
  await contactenosPage.validatePage(t);
  await contactenosPage.goBack(t);









});





//Comando para ejecutar con captura de pantalla en caso de error

//npx testcafe chrome e2e-test/tests/login-flujo.test.js --screenshots path=./screenshots,takeOnFails=true

//Ejecutar la prueba a corta velocidad 

// npx testcafe chrome e2e-test/tests/login-flujo.test.js --speed 0.5  