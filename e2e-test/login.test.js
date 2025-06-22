import { Selector } from 'testcafe';

fixture('Login')
    .page('http://localhost:4200/login');  

test('Login exitoso', async t => {
    await t
        .typeText('#username', 'alejandro.bravo')
        .typeText('#password', '1234')
        .click('#login-button')
        .expect(Selector('h1').innerText).eql('Bienvenido');
});
