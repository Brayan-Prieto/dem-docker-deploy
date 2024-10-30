import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Buscar').click();
  await page.getByPlaceholder('Buscar').fill('mr beast');
  await page.getByPlaceholder('Buscar').press('Enter');
  await page.locator('#avatar-section').getByRole('link').click();
  await expect(page.getByLabel('MrBeast, verificado').locator('div')).toBeVisible();
  await expect(page.getByLabel('MrBeast, verificado')).toContainText('MrBeast');
});