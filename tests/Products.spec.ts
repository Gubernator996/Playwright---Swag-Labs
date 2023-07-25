import { LoginPage } from "../pages/login.page";
import { test, expect } from "@playwright/test";

test.describe('Creating projects form - admin role', () => {
  
    test.beforeEach(async ({ page }) => {
      // Arange
      const loginPage = new LoginPage(page);
      // Act
      await page.goto('/');
      await loginPage.loginAsStandardUser();
    });

    test('Removing Projects with Admin Role assigned', async ({ page }) => {
      // Act

      // Assert
      
    });
});