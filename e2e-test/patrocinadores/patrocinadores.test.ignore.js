// import { Selector } from 'testcafe';
// import { LoginPage } from '../pages/login.page.js';
// import { PatrocinadoresPage } from '../pages/patrocinadores.page.js';

// const loginPage = new LoginPage();
// const patrocinadoresPage = new PatrocinadoresPage();

// fixture('Vista de Deportistas')
//     .page('http://localhost:4200/login');

// test('Navegar a patrocinadores y volver', async t => {

//     await loginPage.login(t, 'alejandro.bravo', '1234');

//     await patrocinadoresPage.irAPatrocinadores(t);

//     //await t.expect(Selector('h1').innerText).eql('PATROCINADORES');
//     await t.expect(Selector('#sponsors').innerText).eql('PATROCINADORES');


//     await patrocinadoresPage.volver(t);

//     //await t.expect(Selector('h2').innerText).eql('Conecta. Entrena. Crece.');
//     await t.expect(Selector('#conectar').innerText).eql('Conecta. Entrena. Crece.');
//     console.log('vovlviendo al home');

// });

