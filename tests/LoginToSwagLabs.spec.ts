import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('User login to Swag Labs', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
  });

  test('Successful login as Standard user', async ({}) => {
    // Act
    await loginPage.loginAsStandardUser();
    //Assert
    await loginPage.assertLoginAsStandardUser();
  });

  test('Successful login as Locked out user', async ({}) => {
    // Act
    await loginPage.loginAsLockedOutUser();
    //Assert
    await loginPage.assertLoginAsLockedOutUser();
  });

  test('Successful login as Problem user', async ({}) => {
    // Act
    await loginPage.loginAsProblemUser();
    //Assert
    await loginPage.assertLoginAsProblemUser();
  });

  test('Successful login as Performance glitch user', async ({}) => {
    // Act
    await loginPage.loginAsPerformanceUser();
    //Assert
    await loginPage.assertLoginAsPerformanceUser();
  });

  test('Unsuccessful login with incorrect login', async ({}) => {
    // Act
    await loginPage.loginWithIncorrectLogin();
    //Assert
    await loginPage.assertLoginWithIncorrectLogin();
  });

  test('Unsuccessful login with incorrect password', async ({}) => {
    // Act
    await loginPage.loginWithIncorrectPassword();
    //Assert
    await loginPage.assertLoginWithIncorrectPassword();
  });
});
