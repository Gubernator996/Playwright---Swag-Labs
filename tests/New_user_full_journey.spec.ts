import { CartPage } from '../pages/cart.page';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/products.page';
import { test, expect } from '@playwright/test';

test.describe('E2E Tests', () => {
  let productPage: ProductPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    // Arange
    const loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    // Act
    await page.goto('/');
    await loginPage.loginAsStandardUser();
  });

  test.only('Adding product to Cart', async ({ page }) => {
    // Act
    await productPage.addProductToCart();
    await cartPage.checkOrderOnCart();
    // Assert
  });
});
