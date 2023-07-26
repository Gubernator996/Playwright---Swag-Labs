import { Page, expect } from '@playwright/test';
import { checkOutData } from "../test-data/checkOut.data";

export class CheckOutPage {
    constructor(private page: Page) {}

    // Locators

    firstNameInput = this.page.locator('[data-test="firstName"]');
    lastNameInput = this.page.locator('[data-test="lastName"]')
    postalCodeInput = this.page.locator('[data-test="postalCode"]')
    cancelCheckOut = this.page.locator('[data-test="cancel"]');
    continueCheckOut = this.page.locator('[data-test="continue"]');
    errorCheckOut = this.page.locator('[data-test="error"]');
    itemTotal = this.page.getByText('Item total: $29.99');
    taxNumber = this.page.getByText('Tax: $2.40');
    totalPrize = this.page.getByText('Total: $32.39');
    finishCheckOut = this.page.locator('[data-test="finish"]');
    checkoutMessage = this.page.getByRole('heading', { name: 'Thank you for your order!' });
    backToProducts = this.page.locator('[data-test="back-to-products"]');


    async fillCorrectInformation (): Promise<void> {
        await this.firstNameInput.fill(checkOutData.firstName);
        await this.lastNameInput.fill(checkOutData.lastName);
        await this.postalCodeInput.fill(checkOutData.postalCode);
        }

    async overViewProduct (): Promise<void> {
        const itemTotalText = await this.itemTotal.innerText();
        const itemTotalValue = parseFloat(itemTotalText.replace(/[^0-9.]/g, ''));
        const taxTotalText = await this.taxNumber.innerText();
        const taxTotalValue = parseFloat(taxTotalText.replace(/[^0-9.]/g, ''));
        const totalPrizeText = await this.totalPrize.innerText();
        const totalPrizeValue = parseFloat(totalPrizeText.replace(/[^0-9.]/g, ''));
        await expect(itemTotalValue + taxTotalValue).toEqual(totalPrizeValue);

    }
}