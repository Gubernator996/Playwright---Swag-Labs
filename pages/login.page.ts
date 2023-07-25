import { Page, expect } from '@playwright/test';
import { loginData } from '../test-data/login.data';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators

  loginInput = this.page.getByPlaceholder('Username');
  passwordInput = this.page.getByPlaceholder('Password');
  loginButton = this.page.locator('[data-test="login-button"]');

  loginFailed = this.page.locator('[data-test="error"]');

  // Actions

  async loginAsStandardUser(): Promise<void> {
    await this.loginInput.fill(loginData.standardUser);
    await this.passwordInput.fill(loginData.secretSauce);
    await this.loginButton.click();
  }

  async loginAsLockedOutUser(): Promise<void> {
    await this.loginInput.fill(loginData.lockedOutUser);
    await this.passwordInput.fill(loginData.secretSauce);
    await this.loginButton.click();
  }

  async loginAsProblemUser(): Promise<void> {
    await this.loginInput.fill(loginData.problemUser);
    await this.passwordInput.fill(loginData.secretSauce);
    await this.loginButton.click();
  }

  async loginAsPerformanceUser(): Promise<void> {
    await this.loginInput.fill(loginData.performanceGlitchUser);
    await this.passwordInput.fill(loginData.secretSauce);
    await this.loginButton.click();
  }

  async loginWithIncorrectLogin(): Promise<void> {
    await this.loginInput.fill(loginData.incorrectLoginUser);
    await this.passwordInput.fill(loginData.secretSauce);
    await this.loginButton.click();
  }

  async loginWithIncorrectPassword(): Promise<void> {
    await this.loginInput.fill(loginData.standardUser);
    await this.passwordInput.fill(loginData.incorrectPassword);
    await this.loginButton.click();
  }

  async loginWithoutLoginAndPassword(): Promise<void> {
    await this.loginInput.fill(loginData.blankLogin);
    await this.passwordInput.fill(loginData.blankPassword);
    await this.loginButton.click();
  }

  // Asserts

  async assertLoginAsStandardUser(): Promise<void> {
    await expect(this.loginFailed).not.toBeVisible();
  }

  async assertLoginAsLockedOutUser(): Promise<void> {
    await expect(this.loginFailed).toBeVisible();
  }

  async assertLoginAsProblemUser(): Promise<void> {
    await expect(this.loginFailed).not.toBeVisible();
  }

  async assertLoginAsPerformanceUser(): Promise<void> {
    await expect(this.loginFailed).not.toBeVisible();
  }

  async assertLoginWithIncorrectLogin(): Promise<void> {
    await expect(this.loginFailed).toBeVisible();
  }

  async assertLoginWithIncorrectPassword(): Promise<void> {
    await expect(this.loginFailed).toBeVisible();
  }

  async assertLoginWithoutLoginAndPassword(): Promise<void> {
    await expect(this.loginFailed).toBeVisible();
  }
}
