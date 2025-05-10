import { console } from "inspector";
import { expect } from "playwright/test";
import { personalData } from "../fixtures/fixture";
import { th } from "@faker-js/faker";


export class UserHomePageInventory {
    mapProducts;
    constructor(page) {
        this.page = page;
        this.hamburguerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.productsList = page.locator('[data-test="inventory-container"]');
        this.productsPrice = page.locator('.inventory_item_price');
        this.productsName = page.locator('.inventory_item_name');
        this.buttonAddProduct = page.locator('.btn_inventory');
        this.cartShoppingIcon = page.locator('.shopping_cart_badge');
        this.cartShopping = page.locator('[data-test="shopping-cart-link"]');
        this.mapProducts = new Map();


    }

    //Adicionar productos al carrito de compras
    async addProductsToShoppingCart() {

        this.adjustmentZoom();
        await expect(this.productsList).toBeVisible({ timeout: 5000 });

        this.totalProducts = await this.buttonAddProduct.count();


        for (let i = 0; i < this.totalProducts; i++) {

            await this.buttonAddProduct.nth(i).click();
            const nameProduct = await this.productsName.nth(i).innerText();
            const priceProduct = await this.productsPrice.nth(i).innerText();
            this.mapProducts.set(nameProduct, priceProduct);

            console.log('Botón clickeado:', i);
        }

        await this.page.screenshot({ path: 'images/add_products_to_cart.png' });

    }

    //Validar que los productos se han añadido al carrito de compras
    // y que la cantidad de productos es correcta en el icono del carrito
    async validateQuantityProductsInShoppingCartIcon() {

        const cartCount = await this.cartShoppingIcon.innerText();
        const cartCountItems = parseInt(cartCount, 10);
        console.log('Cantidad de productos en el carrito:', cartCountItems);
        expect(cartCountItems).toBe(this.totalProducts);

    }

    //Ingresar a la página de carrito de compras
    async goIntoToShoppingCart() {

        await this.adjustmentZoom();
        await expect(this.cartShopping).toBeVisible({ timeout: 5000 });
        await this.cartShopping.click();
        const urlCartShopping = await this.page.url();
        expect(urlCartShopping).toBe('https://www.saucedemo.com/cart.html');
        await this.page.screenshot({ path: 'images/cart_shopping.png' });

    }

    //Cerrar sesión del usuario
    async logoutUser() {

        await this.hamburguerMenu.click();
        await this.logoutButton.click();

    }

    //Ajustamos el zoom de la pagina
    async adjustmentZoom() {

        await this.page.evaluate(() => {
            document.body.style.zoom = "50%";
        });

    }

}