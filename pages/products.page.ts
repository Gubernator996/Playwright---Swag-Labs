import { Page, expect } from '@playwright/test';
import { productData } from '../test-data/products.data';

export class ProductPage {
  productPage: any;
  constructor(private page: Page) {}

  // Locators

  addToCart = this.page.locator(
    '[data-test="add-to-cart-sauce-labs-backpack"]'
  );
  removeFromCart = this.page.locator(
    '[data-test="remove-sauce-labs-backpack"]'
  );
  prize = this.page.getByText(productData.prize);
  shoppingCart = this.page.locator('[id="shopping_cart_container"]');
  shoppingCartAfterAddind1Item = this.page
    .locator('a')
    .filter({ hasText: '1' });
//   filterZA = this.page
//     .locator('[data-test="product_sort_container"]')
//     .selectOption('za');
//   filterAZ = this.page
//     .locator('[data-test="product_sort_container"]')
//     .selectOption('az');
//   filterLOHI = this.page
//     .locator('[data-test="product_sort_container"]')
//     .selectOption('lohi');
//   filterHILO = this.page
//     .locator('[data-test="product_sort_container"]')
//     .selectOption('hilo');
  openMenu = this.page.getByRole('button', { name: 'Open Menu' });
  allItems = this.page.getByRole('link', { name: 'All Items' });
  logout = this.page.getByRole('link', { name: 'Logout' });

  // Actions

  addProductToCart = async () => {
    await this.addToCart.waitFor();
    await expect(this.addToCart).toHaveText('Add to cart');
    const productCountBeforeAdding = await this.getProductCount();
    await this.addToCart.click();
    await expect(this.removeFromCart).toHaveText('Remove');
    const productCountAfterAdding = await this.getProductCount();
    await expect(productCountBeforeAdding).toBeNaN();
    await expect(productCountAfterAdding).toBeGreaterThanOrEqual(1);
    await this.shoppingCart.click();
  }

  getProductCount = async () => {
    await this.shoppingCart.waitFor();
    const text = await this.shoppingCart.innerText();
    return parseInt(text, 10);
  }

  // Assertions
}
