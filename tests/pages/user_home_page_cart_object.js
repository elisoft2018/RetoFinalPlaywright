import path from "path";
import { expect } from "playwright/test";

export class UserHomePageCart {

    mapProductsInCart;
    totalToPay;
    ivaValue;
    totalShoppingValue;

    constructor(page) {

        this.page = page;
        this.productsInCar = page.locator('[data-test="cart-list"]')
        this.productsPrice = page.locator('.inventory_item_price');
        this.productsName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('.btn_action.checkout_button');
        this.removeProductButton = page.getByRole('button', { name: 'Remove' });
        this.listProductsInCart = page.locator('.cart_item');
        this.mapProductsInCart = new Map();
        this.totalProducts = 0;
        this.totalToPay = 0;
        this.ivaValue = 0;
        this.totalShoppingValue = 0;
        this.totalProductsInCart = 0;
        this.totalProductsInCart = 0;

    }
    //Validar que los productos seleccionados inicialmente en la pagina de productos
    //  son los mismos que estan actualmente el carrito de compras


    async validateProductsAddedIntoShoppingCart() {

        await expect(this.productsInCar).toBeVisible({ timeout: 5000 });

         this.totalProductsInCart = await this.listProductsInCart.count();

        for (let i = 0; i < this.totalProductsInCart; i++) {

            const nameProduct = await this.productsName.nth(i).innerText();
            const priceProduct = await this.productsPrice.nth(i).innerText();
            const convertedPrice = parseFloat(priceProduct.replace('$', '').replace(',', ''));
            this.totalToPay += convertedPrice;
            this.ivaValue = this.totalToPay * 0.08;
            this.ivaValue = Number(this.ivaValue.toFixed(2));
            this.mapProductsInCart.set(nameProduct, priceProduct);
            this.totalShoppingValue = this.totalToPay + this.ivaValue;

        }

        expect(this.mapProductsInCart).toEqual(this.mapProductsInCart);

        await this.page.screenshot({ path: 'images/validate_products_into_cart.png' });

    }

    async removeProductsCarShopping() {

        for (let i = 0; i < (this.totalProductsInCart-3); i++) {

            await this.removeProductButton.nth(i).click();

           } 
             await this.page.screenshot({path:'images/remove_products_into_cart.png'});    

    }
    /*     async buttonCheckout(){
    
            await this.checkoutButton.click();
    
        }   
     */
}