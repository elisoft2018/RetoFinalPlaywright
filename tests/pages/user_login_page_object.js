import { console } from "inspector";
import { expect } from "playwright/test";
import { users } from "../fixtures/fixture";


export class UserLoginPage {
    constructor(page) {
        this.page = page;
        this.userInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.messageError = page.locator('[data-test="error"]');

    }


    async navigateToLoginPage(urlSauceDemo) {
        await this.page.goto(urlSauceDemo);
    }

    async userInputLoginUnlocked() {

        await this.userInput.fill(users.validUser.username);
        await this.passwordInput.fill(users.validUser.password);

    }

    async userInputLoginLocked() {

        await this.userInput.fill(users.lockedUser.username);
        await this.passwordInput.fill(users.lockedUser.password);
    
    }

    async userInputloginUserNotExist() {

        await this.userInput.fill(users.invalidUser.username);
        await this.passwordInput.fill(users.invalidUser.password);

    }

    async userInputloginUserAndPasswordEmpty() {

        await this.userInput.fill(users.emptyUserAndPassword.username);
        await this.passwordInput.fill(users.emptyUserAndPassword.password);

    }


    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyUserIsOnHomePage() {
        const urlhomePage = await this.page.url();
        console.log('URL de la página de inicio:', urlhomePage);
        expect(urlhomePage).toBe('https://www.saucedemo.com/inventory.html');
    }

    async verifyUserIsOnLockedUserMessage(message) {
        const userLockedMessage = await this.messageError.textContent();
        console.log('Mensaje de usuario bloqueado:', userLockedMessage);
        expect(userLockedMessage).toBe(message);
    }

    async verifyUserNotExistMessage(message) {
        const userNotExistMessage = await this.messageError.textContent();
        console.log('Mensaje de usuario no existe:', userNotExistMessage);
        expect(userNotExistMessage).toBe(message);
    }

    async verifyUserEmptyMessage(message) {
        const userEmptyMessage = await this.messageError.textContent();
        console.log('Mensaje de usuario vacio:', userEmptyMessage);
        expect(userEmptyMessage).toBe(message);
    }

    async verifyErrorMessageAccesProductsPage(message) {

        const verifyErrorMessageAccesProductsPage = await this.messageError.textContent();
        console.log('Mensaje de error de acceso a la página de productos:', verifyErrorMessageAccesProductsPage);
        expect(verifyErrorMessageAccesProductsPage).toBe(message);

    }

    async verifyUserIsOnIndexPage() {
        const urlIndexPage = await this.page.url();
        console.log('URL de la página de inicio:', urlIndexPage);
        expect(urlIndexPage).toBe('https://www.saucedemo.com/');
    }
} 