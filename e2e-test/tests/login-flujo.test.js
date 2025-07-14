import loginPage from '../pages/login.page';
import homePage from '../pages/home.page';
import deportistasPage from '../pages/deportistas.page';
import patrocinadoresPage from '../pages/patrocinadores.page';
import marcasPage from '../pages/marcas.page';
import { validUser } from '../data/credentials';
import nutricionistasPage from '../pages/nutricionistas.page';

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
  await nutricionistasPage.goBack;

});





//Comando para ejecutar con captura de pantalla en caso de error

//npx testcafe chrome e2e-test/tests/login-flujo.test.js --screenshots path=./screenshots,takeOnFails=true

//Ejecutar la prueba a corta velocidad 

// npx testcafe chrome e2e-test/tests/login-flujo.test.js --speed 0.5  