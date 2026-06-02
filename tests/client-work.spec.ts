import { test, expect } from '@playwright/test';

test('EPAM Services header navigates to Client Work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesMenu = page.getByRole('menuitem', { name: 'Services' });
  await expect(servicesMenu).toBeVisible();
  await servicesMenu.hover();

  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
