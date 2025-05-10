// Generated from: tests\features\user_login.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Inicio de sesión de usuario en el sitio https://www.saucedemo.com/', () => {

  test.beforeEach('Background', async ({ Given, userLoginPage }) => {
    await Given('que el usuario navega a la página de inicio de sesión en "https://www.saucedemo.com/"', null, { userLoginPage }); 
  });
  
  test('Inicio de sesión exitoso con credenciales válidas', { tag: ['@loginUsuarioExitoso'] }, async ({ And, userLoginPage, When, Then }) => { 
    await And('ingresa el nombre de usuario y la contraseña', null, { userLoginPage }); 
    await When('de clic en el botón de Login', null, { userLoginPage }); 
    await Then('debería ver la página de inventario de productos', null, { userLoginPage }); 
  });

  test('Inicio de sesión fallido con usuario bloqueado', { tag: ['@loginUsuarioBloqueado'] }, async ({ And, userLoginPage, When, Then }) => { 
    await And('ingresa el nombre de usuario y la contraseña bloqueada', null, { userLoginPage }); 
    await When('hace clic en el botón de Login', null, { userLoginPage }); 
    await Then('debería ver un mensaje de error de usuario bloqueado "Epic sadface: Sorry, this user has been locked out."', null, { userLoginPage }); 
  });

  test('Inicio de sesión fallido con credenciales inválidas', { tag: ['@loginUsuarioNoExistente'] }, async ({ And, userLoginPage, When, Then }) => { 
    await And('ingresa el nombre de usuario y la contraseña inválidas', null, { userLoginPage }); 
    await When('hace clic en el botón de Login', null, { userLoginPage }); 
    await Then('debería ver un mensaje de error de usuario inexistente "Epic sadface: Username and password do not match any user in this service"', null, { userLoginPage }); 
  });

  test('Inicio de sesión fallido con campos vacíos', { tag: ['@loginUsuarioYContrasenaVacio'] }, async ({ And, userLoginPage, When, Then }) => { 
    await And('deja los campos de nombre de usuario y contraseña vacíos', null, { userLoginPage }); 
    await When('hace clic en el botón de Login', null, { userLoginPage }); 
    await Then('debería ver un mensaje de error de campos vacíos "Epic sadface: Username is required"', null, { userLoginPage }); 
  });

  test('Cerrar sesión del usuario', { tag: ['@logoutUsuario'] }, async ({ Given, userLoginPage, When, userHomePageInventory, Then }) => { 
    await Given('que el usuario ha iniciado sesión correctamente', null, { userLoginPage }); 
    await When('hace clic en el botón de cerrar sesión', null, { userHomePageInventory }); 
    await Then('debería ver la página de inicio de sesión nuevamente', null, { userLoginPage }); 
  });

  test('Navegar a la página de inventario sin iniciar sesión', { tag: ['@navegarPaginaInventarioSinIniciarSesion'] }, async ({ Given, userLoginPage, When, Then }) => { 
    await Given('que el usuario no ha iniciado sesión esta en "https://www.saucedemo.com/"', null, { userLoginPage }); 
    await When('intenta acceder a la página de inventario de productos "https://www.saucedemo.com/inventory.html"', null, { userLoginPage }); 
    await Then('debería ver un mensaje de error "Epic sadface: You can only access \'/inventory.html\' when you are logged in."', null, { userLoginPage }); 
  });

  test('Añadir un producto al carrito de compras', { tag: ['@adicionarProductoAlCarrito'] }, async ({ Given, userLoginPage, When, userHomePageInventory, Then, userHomePageCart, page, And }) => { 
    await Given('que el usuario ha iniciado sesión correctamente', null, { userLoginPage }); 
    await When('el usuario añade el producto al carrito de compras', null, { userHomePageInventory }); 
    await Then('debería ver la cantidad de productos añadidos en el carrito de compras', null, { userHomePageInventory }); 
    await When('hace clic en el botón de carrito de compras', null, { userHomePageInventory }); 
    await Then('se visualiza los productos añadidos en el carrito de compras', null, { userHomePageCart, page }); 
    await When('se hace clic en el botón de remove del producto', null, { userHomePageCart }); 
    await Then('no se visualiza el producto en el carrito de compras'); 
    await And('se actualiza el valor de la compra'); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks, browser }) => $runBeforeAllHooks(test, { browser }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $beforeEach }) => {});
test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\user_login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $beforeEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@loginUsuarioExitoso"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And ingresa el nombre de usuario y la contraseña","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When de clic en el botón de Login","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then debería ver la página de inventario de productos","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@loginUsuarioBloqueado"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And ingresa el nombre de usuario y la contraseña bloqueada","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When hace clic en el botón de Login","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error de usuario bloqueado \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":53,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":54,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@loginUsuarioNoExistente"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And ingresa el nombre de usuario y la contraseña inválidas","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When hace clic en el botón de Login","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error de usuario inexistente \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":55,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":56,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":["@loginUsuarioYContrasenaVacio"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"And deja los campos de nombre de usuario y contraseña vacíos","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When hace clic en el botón de Login","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error de campos vacíos \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":49,"value":"\"Epic sadface: Username is required\"","children":[{"start":50,"value":"Epic sadface: Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":31,"tags":["@logoutUsuario"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given que el usuario ha iniciado sesión correctamente","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When hace clic en el botón de cerrar sesión","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then debería ver la página de inicio de sesión nuevamente","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":37,"tags":["@navegarPaginaInventarioSinIniciarSesion"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given que el usuario no ha iniciado sesión esta en \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":45,"value":"\"https://www.saucedemo.com/\"","children":[{"start":46,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When intenta acceder a la página de inventario de productos \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":55,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":56,"value":"https://www.saucedemo.com/inventory.html","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then debería ver un mensaje de error \"Epic sadface: You can only access '/inventory.html' when you are logged in.\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: You can only access '/inventory.html' when you are logged in.\"","children":[{"start":33,"value":"Epic sadface: You can only access '/inventory.html' when you are logged in.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":43,"tags":["@adicionarProductoAlCarrito"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario navega a la página de inicio de sesión en \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":57,"value":"\"https://www.saucedemo.com/\"","children":[{"start":58,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given que el usuario ha iniciado sesión correctamente","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When el usuario añade el producto al carrito de compras","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then debería ver la cantidad de productos añadidos en el carrito de compras","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When hace clic en el botón de carrito de compras","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then se visualiza los productos añadidos en el carrito de compras","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When se hace clic en el botón de remove del producto","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then no se visualiza el producto en el carrito de compras","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And se actualiza el valor de la compra","stepMatchArguments":[]}]},
]; // bdd-data-end