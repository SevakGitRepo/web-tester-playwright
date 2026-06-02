import { test, expect } from '@playwright/test';

test('EPAM Services header navigates to Client Work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('menuitem', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
