import { Page, expect } from '@playwright/test';
import { cartData } from '../test-data/cart.data';
import { productData } from '../test-data/products.data';

export class CartPage {
  constructor(private page: Page) {}

  // Locators

  quantity = this.page.getByText('QTY');
  description = this.page.getByText('Description');
  orderDescription = this.page.getByRole('link', {
    name: productData.productName,
  });
//   orderDescription2 = this.page.locator('#inventory_item_name');
  checkout = this.page.locator('[data-test="checkout"]');
  removeProduct = this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  continueShopping = this.page.locator('[data-test="continue-shopping"]');
  quantityNumber = this.page.locator('#cart_contents_container').getByText('1');

  checkOrderOnCart = async () => {
    await expect(this.orderDescription).toHaveText(productData.productName);
  };

  async checkOrderOnCart2(): Promise<void> {
    await expect(this.orderDescription).toHaveText(productData.productName);
    await expect(this.quantity).toHaveText(productData.prize)
  }
}
