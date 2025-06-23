import { LoginPage } from '../pages/login.page.js'; 

const loginPage = new LoginPage();

fixture('Login')
    .page('http://localhost:4200/login');

test('Login exitoso', async t => {
    await loginPage.login(t, 'alejandro.bravo', '1234');
});
