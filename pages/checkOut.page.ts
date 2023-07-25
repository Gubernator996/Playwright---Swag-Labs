import { Page, expect } from '@playwright/test';
import { checkOutData } from "../test-data/checkOut.data";

export class CartPage {
    constructor(private page: Page) {}

    // Locators

    firstNameInput = this.page.locator('[data-test="firstName"]');
    lastNameInput = this.page.locator('[data-test="lastName"]')
    postalCodeInput = this.page.locator('[data-test="postalCode"]')
    cancelCheckOut = this.page.locator('[data-test="cancel"]');
    continueCheckOut = this.page.locator('[data-test="continue"]');
    errorCheckOut = this.page.locator('[data-test="error"]');
    taxNumber = this.page.getByText('Tax: $2.40');
    totalPrize = this.page.getByText('Total: $32.39');
    finishCheckOut = this.page.locator('[data-test="finish"]');
    checkoutMessage = this.page.getByRole('heading', { name: 'Thank you for your order!' });
    backToProducts = this.page.locator('[data-test="back-to-products"]');
}