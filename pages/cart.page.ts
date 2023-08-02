import { Page, expect } from '@playwright/test';
import { cartData } from '../test-data/cart.data';
import { productData } from '../test-data/products.data';

export class CartPage {
  constructor(private page: Page) {
    
  }

  // Locators

  quantity = this.page.getByText('QTY');
  description = this.page.getByText('Description');
  orderDescription = this.page.getByRole('link', {
    name: productData.productName,
  });
  checkout = this.page.locator('[data-test="checkout"]');
  removeProduct = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  continueShopping = this.page.locator('[data-test="continue-shopping"]');
  quantityNumber = this.page.locator('[class="cart_quantity"]');
  prizeAmount = this.page.locator('[class="inventory_item_price"]');

  async checkOrderOnCart(): Promise<void> {
    await expect(this.orderDescription).toHaveText(productData.productName);
    await expect(this.prizeAmount).toHaveText(productData.prize);
    await expect(this.quantityNumber).toHaveText('1');
  }
}
