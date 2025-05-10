import { expect } from "playwright/test";
export class UserHomePageSummaryShopping {

    convertSubTotalValue;
    convertTaxValue;
    convertTotalValue;

    constructor(page) {
        this.page = page;

        this.contentSumaryShopping = page.locator('[data-test="checkout-summary-container"]');
        this.subTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.convertSubTotalValue = 0;
        this.convertTaxValue = 0;
        this.convertTotalValue = 0;

    }

    async captureShoppingPrice() {

        await expect(this.contentSumaryShopping).toBeVisible({ timeout: 5000 });

        const subTotalValue = await this.subTotal.innerText();
        const subTotalCleaned = subTotalValue.replace(/[^0-9.]/g, '');
        this.convertSubTotalValue = parseFloat(subTotalCleaned)

        const taxValue = await this.tax.innerText();
        const taxCleaned = taxValue.replace(/[^0-9.]/g, '');
        this.convertTaxValue = parseFloat(taxCleaned);

        const totalValue = await this.total.innerText();
        const totalCleaned = totalValue.replace(/[^0-9.]/g, '');
        this.convertTotalValue = parseFloat(totalCleaned);
        await this.page.screenshot({ path: 'images/summary_shopping.png' });

    }

    async finishShopping() {

        await this.finishButton.click();

    }

}




