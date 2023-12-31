import { CartPage } from '../pages/cart.page';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/products.page';
import { test, expect } from '@playwright/test';
import { CheckOutPage } from '../pages/checkOut.page';

test.describe('New user full journey', () => {
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

  test('Full journey process', async () => {
    // Act
    await productPage.addProductToCart();
    await cartPage.checkOrderOnCart();
    await checkoutPage.fillCorrectInformation();
    await checkoutPage.overViewProduct();
    // Assert
    await checkoutPage.verifySuccessfulCheckout();

  });

  test('Full journey process without providing contact informations', async () => {
    // Act
    await productPage.addProductToCart();
    await cartPage.checkOrderOnCart();
    await cartPage.checkout.click();
    await checkoutPage.continueCheckOut.click();
    // Assert
    await checkoutPage.verifyUnSuccessfulCheckout();
  });
});

