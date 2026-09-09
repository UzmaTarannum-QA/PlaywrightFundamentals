import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_fill');
  await page.getByRole('link', { name: 'Return to Home' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Sign in with Google Continue' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
});