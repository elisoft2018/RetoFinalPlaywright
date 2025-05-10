import { expect } from "playwright/test";

export class UserHomePageFinishShopping {
    constructor(page) {
        this.page = page;
        this.messageSuccesShopping = page.locator('[data-test="complete-header"]');
        this.messageInformation = page.locator('[data-test="complete-text"]');
        this.buttonBackToProducts = page.locator('[data-test="back-to-products"]');

    }

    async validateMessageSuccesShopping() {

      

        await expect(this.messageSuccesShopping).toContainText('Thank you for your order!');
        await expect(this.messageInformation).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await this.page.screenshot({ path: 'images/finish_shopping.png' });

    }

/*     async backToProducts() {

        await this.buttonBackToProducts.click();


    } */

}

