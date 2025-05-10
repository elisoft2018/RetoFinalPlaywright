import { expect, } from "@playwright/test";
import { personalData } from "../fixtures/fixture";


export class UserHomePageCheckout {
    constructor(page) {

        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('.btn_primary.cart_button');

    }

    //Diligenciar los datos del formulario de 
    async checkoutFormInformation() {

        await this.firstNameInput.fill(personalData.firstName);
        await this.lastNameInput.fill(personalData.lastName);
        await this.postalCodeInput.fill(personalData.postalCode);
        await this.page.screenshot({ path: 'images/checkout_form_information.png' });


    }

    //Hacer el clic en botón de continuar
    async continueShopping() {

        await this.continueButton.click();
        this.scrollPage();
        await this.page.screenshot({ path: 'images/summary_shopping.png' });

    }


    //Realizar scroll a la pagina
    async scrollPage() {

        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

    }

}

