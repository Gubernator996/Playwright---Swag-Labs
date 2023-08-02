import { CartPage } from '../pages/cart.page';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/products.page';
import { test, expect } from '@playwright/test';
import { CheckOutPage } from '../pages/checkOut.page';



test.describe('Sorting Produsts', () => {
    let productPage: ProductPage;
    let cartPage: CartPage;
    let checkoutPage: CheckOutPage;
  
    test.beforeEach(async ({ page }) => {
      // Arange
      const loginPage = new LoginPage(page);
      productPage = new ProductPage(page);
      cartPage = new CartPage(page);
      checkoutPage = new CheckOutPage(page);
      // Act
      await page.goto('/');
      await loginPage.loginAsStandardUser();
    });
  
    test('Sorting Products By Cheapest', async () => {
      await productPage.sortByCheapest();
    })
  
  });