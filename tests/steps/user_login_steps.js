import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/fixture';
import { expect } from 'playwright/test'; 
import { url } from 'inspector';


const { Given, When, Then } = createBdd(test);

//EJECUCION DE PRUEBAS CON USUARIO DESBLOQUEADO

Given("que el usuario navega a la página de inicio de sesión en {string}",
  async ({ userLoginPage }, urlSauceDemo) => {
    // Step: Given que el usuario navega a la página de inicio de sesión en "https://www.saucedemo.com/"
    await userLoginPage.navigateToLoginPage(urlSauceDemo);
  }
);


Given('ingresa el nombre de usuario y la contraseña',
  async ({ userLoginPage }, username, password) => {
    // Step: And ingresa el nombre de usuario "standard_user" y la contraseña "secret_sauce"
    await userLoginPage.userInputLoginUnlocked(username, password);

  }
);

When('de clic en el botón de Login',
  async ({ userLoginPage }) => {
    // Step: When hace clic en el botón de "Login"
    await userLoginPage.clickLoginButton();

  }
);

Then('debería ver la página de inventario de productos',
  async ({ userLoginPage }) => {
    // Step: Then debería ver la página de inventario con el título "Products"
    await userLoginPage.verifyUserIsOnHomePage();

  }
);

// EJECUCION DE PRUEBAS CON USUARIO BLOQUEADO

Given('ingresa el nombre de usuario y la contraseña bloqueada', async ({ userLoginPage }, username, password) => {
  // Step: And ingresa el nombre de usuario y la contraseña bloqueada
  userLoginPage.userInputLoginLocked(username, password);


});

When('hace clic en el botón de Login',
  async ({ userLoginPage }) => {
    // Step: When hace clic en el botón de "Login" bloqueado
    await userLoginPage.clickLoginButton();
  }
);

Then('debería ver un mensaje de error de usuario bloqueado {string}',
  async ({ userLoginPage }, message) => {
    // Step: Then debería ver el mensaje de usuario bloqueado "Epic sadface: Sorry, this user has been locked out."
    await userLoginPage.verifyUserIsOnLockedUserMessage(message);
  }
);

//EJECUCION DE PRUEBAS CON USUARIO NO EXISTENTE
Given('ingresa el nombre de usuario y la contraseña inválidas',
  async ({ userLoginPage }, username, password) => {
    // Step: And ingresa el nombre de usuario "fake_user" y la contraseña "wrong_pass"
    await userLoginPage.userInputloginUserNotExist(username, password);
  }
);

When('hace clic en el botón de Login inválido',
  async ({ userLoginPage }) => {
    // Step: When hace clic en el botón de "Login" inválido
    await userLoginPage.clickLoginButton();
  }
);

Then('debería ver un mensaje de error de usuario inexistente {string}',
  async ({ userLoginPage }, message) => {
    // Step: Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    await userLoginPage.verifyUserNotExistMessage(message);
  }
);

//EJECUCION DE PRUEBAS CON USUARIO VACIO
Given('deja los campos de nombre de usuario y contraseña vacíos',
  async ({ userLoginPage }, username, password) => {
    // Step: And ingresa el nombre de usuario y la contraseña vacías
    await userLoginPage.userInputloginUserAndPasswordEmpty(username, password);
  }
);

When('hace clic en el botón de Login vacío',
  async ({ userLoginPage }) => {
    // Step: When hace clic en el botón de "Login" vacío
    await userLoginPage.clickLoginButton();
  }
);

Then('debería ver un mensaje de error de campos vacíos {string}',
  async ({ userLoginPage }, message) => {
    // Step: Then debería ver el mensaje de error vacío "Epic sadface: Username is required"
    await userLoginPage.verifyUserEmptyMessage(message);
  }
);

//CERRAR SESION DE USUARIO
Given('que el usuario ha iniciado sesión correctamente',
  async ({ userLoginPage }, username, password) => {
    // Step: Given que el usuario está en la página de inicio de sesión
    await userLoginPage.userInputLoginUnlocked(username, password);
    await userLoginPage.clickLoginButton();
  }
);

When('hace clic en el botón de cerrar sesión',
  async ({ userHomePageInventory }) => {
    // Step: When hace clic en el botón de "Cerrar Sesión"
    await userHomePageInventory.logoutUser();
  }
);

Then('debería ver la página de inicio de sesión nuevamente',
  async ({ userLoginPage }) => {
    // Step: Then debería ver la página de inicio de sesión
    await userLoginPage.verifyUserIsOnIndexPage();
  }
);

//NAVEGAR A LA PAGINA DE INVENTARIO SIN INICIAR SESION
Given('que el usuario no ha iniciado sesión esta en {string}',
  async ({ userLoginPage }, urlSauceDemo) => {
    // Step: Given que el usuario no ha iniciado sesión

    await userLoginPage.navigateToLoginPage(urlSauceDemo);

  });

When('intenta acceder a la página de inventario de productos {string}',
  async ({ userLoginPage }, urlProducts) => {
    // Step: When intenta acceder a la página de inventario directamente

    await userLoginPage.navigateToLoginPage(urlProducts);

  });

Then('debería ver un mensaje de error {string}',
  async ({ userLoginPage }, message) => {
    // Step: Then debería ver un mensaje de error

    await userLoginPage.verifyErrorMessageAccesProductsPage(message);

  });

//EJECUCION DE PRUEBAS CON USUARIO DESBLOQUEADO Y PRODUCTOS EN EL CARRITO
Given('que el usuario esta a la página de inicio de sesión en {string}',
  async ({ userLoginPage }, username, password, urlSauceDemo) => {
    // Step: Given que el usuario navega a la página de inicio de sesión en https://www.saucedemo.com/
    // From: tests\features\add_products_to_cart_and_shopping.feature:4:5
    await userLoginPage.navigateToLoginPage(urlSauceDemo);
    await userLoginPage.userInputLoginUnlocked(username, password);
    await userLoginPage.clickLoginButton();
  }
);

When('el usuario añade el producto al carrito de compras', async ({ userHomePageInventory },) => {
  // Step: When el usuario añade el producto "Sauce Labs Backpack" al carrito de compras
  await userHomePageInventory.addProductsToShoppingCart();


});

Then('debería ver la cantidad de productos añadidos en el carrito de compras', async ({ userHomePageInventory }) => {
  // Step: Then debería ver la cantidad de productos añadidos en el carrito de compras
  await userHomePageInventory.validateQuantityProductsInShoppingCartIcon();


});

When('hace clic en el botón de carrito de compras', async ({ userHomePageInventory }) => {
  // Step: When hace clic en el botón de carrito de compras
  await userHomePageInventory.goIntoToShoppingCart();
});

Then('se visualiza los productos añadidos en el carrito de compras', async ({ userHomePageCart,page}) => {
  // Step: Then debería ver la página de checkout para diligenciar la información del cliente
 
  await userHomePageCart.validateProductsAddedIntoShoppingCart();
  console.log(userHomePageCart.totalToPay);
  console.log(userHomePageCart.ivaValue);
  console.log(userHomePageCart.totalShoppingValue);

 

});

When('se hace clic en el botón de remove del producto', async ({userHomePageCart}) => {
  // Step: When se elimina el producto del carrito de compras
   await userHomePageCart.removeProductsCarShopping();
   console.log('numero', userHomePageCart.totalProductsInCart);
});

Then('no se visualiza el producto en el carrito de compras', async ({}) => {
  // Step: Then no se visualiza el producto en el carrito de compras
  // From: tests\features\user_login.feature:50:5
});

Then('se actualiza el valor de la compra', async ({}) => {
  // Step: And se actualiza el valor de la compra
  // From: tests\features\user_login.feature:51:5
});

/*
Then('hace clic en el botón de checkout', async ({}) => {
  // Step: And hace clic en el botón de checkout
//await userHomePageCart.buttonCheckout();
});

Then('deberia visualizar la pagina de checkout con el formulario para diligenciar la informacion', async ({userHomePageCheckout}) => {
  // Step: Then deberia visualizar la pagina de checkout con el formulario para diligenciar la informacion
  await userHomePageCheckout.checkoutFormInformation();
 

});

When('hace clic en el botón continue', async ({userHomePageCheckout}) => {
  // Step: When hace clic en el botón continue
  await userHomePageCheckout.continueShopping();
});

Then('debe visualizar el resumen de la compra', async ({userHomePageSummaryShopping, userHomePageCart}) => {
  // Step: Then debe visualizar el resumen de la compra
  console.log('page cart',userHomePageCart.totalToPay);
 
  await userHomePageSummaryShopping.captureShoppingPrice();
  await expect(userHomePageSummaryShopping.convertSubTotalValue).toBe(userHomePageCart.totalToPay);
  await expect(userHomePageSummaryShopping.convertTaxValue).toBe(userHomePageCart.ivaValue);
  await expect(userHomePageSummaryShopping.convertTotalValue).toBe(userHomePageCart.totalShoppingValue);
   
});
*/

