Feature: Inicio de sesión de usuario en el sitio https://www.saucedemo.com/

  Background:
    Given que el usuario navega a la página de inicio de sesión en "https://www.saucedemo.com/"

  @loginUsuarioExitoso
  Scenario: Inicio de sesión exitoso con credenciales válidas
    And ingresa el nombre de usuario y la contraseña
    When de clic en el botón de Login
    Then debería ver la página de inventario de productos

  @loginUsuarioBloqueado
  Scenario: Inicio de sesión fallido con usuario bloqueado
    And ingresa el nombre de usuario y la contraseña bloqueada
    When hace clic en el botón de Login
    Then debería ver un mensaje de error de usuario bloqueado "Epic sadface: Sorry, this user has been locked out."

  @loginUsuarioNoExistente
  Scenario: Inicio de sesión fallido con credenciales inválidas
    And ingresa el nombre de usuario y la contraseña inválidas
    When hace clic en el botón de Login
    Then debería ver un mensaje de error de usuario inexistente "Epic sadface: Username and password do not match any user in this service"

  @loginUsuarioYContrasenaVacio
  Scenario: Inicio de sesión fallido con campos vacíos
    And deja los campos de nombre de usuario y contraseña vacíos
    When hace clic en el botón de Login
    Then debería ver un mensaje de error de campos vacíos "Epic sadface: Username is required"

  @logoutUsuario
  Scenario: Cerrar sesión del usuario
    Given que el usuario ha iniciado sesión correctamente
    When hace clic en el botón de cerrar sesión
    Then debería ver la página de inicio de sesión nuevamente

  @navegarPaginaInventarioSinIniciarSesion
  Scenario: Navegar a la página de inventario sin iniciar sesión
    Given que el usuario no ha iniciado sesión esta en "https://www.saucedemo.com/"
    When intenta acceder a la página de inventario de productos "https://www.saucedemo.com/inventory.html"
    Then debería ver un mensaje de error "Epic sadface: You can only access '/inventory.html' when you are logged in."

  @adicionarProductoAlCarrito
  Scenario: Añadir un producto al carrito de compras
    Given que el usuario ha iniciado sesión correctamente
    When el usuario añade el producto al carrito de compras
    Then debería ver la cantidad de productos añadidos en el carrito de compras
    When hace clic en el botón de carrito de compras
    Then se visualiza los productos añadidos en el carrito de compras
    When se hace clic en el botón de remove del producto
    Then no se visualiza el producto en el carrito de compras
    And se actualiza el valor de la compra


    #Then deberia visualizar la pagina de checkout con el formulario para diligenciar la informacion
    #When hace clic en el botón continue
    #Then debe visualizar el resumen de la compra
  





