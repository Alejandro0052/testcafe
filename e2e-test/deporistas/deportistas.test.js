import { LoginPage } from '../pages/login.page.js';
import { DeportistasPage } from '../pages/deportistas.page.js';

const loginPage = new LoginPage();
const deportistasPage = new DeportistasPage();

fixture('Vista de Deportistas')
    .page('http://localhost:4200/login');

test('Navegar a deportistas y volver', async t => {
    // Login
    await loginPage.login(t, 'alejandro.bravo', '1234');

    // Ir al listado de deportistas
    await deportistasPage.irADeportistas(t);
    await t.wait(1000); // opcional, para ver el cambio de vista

    // Volver desde el listado
    await deportistasPage.volver(t);
});
