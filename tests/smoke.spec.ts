import { expect, test } from '@playwright/test';

test('home page renders featured projects', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Taofeek F. Obafemi-Babatunde' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mingla' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Open Health Initiative' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Text to Handwriting' })).toBeVisible();
  await expect(page.locator('#about')).toBeVisible();
  await expect(page.locator('#jobs')).toBeVisible();
  await expect(page.locator('#contact')).toBeVisible();
});

test('archive page lists projects', async ({ page }) => {
  await page.goto('/archive/');
  await expect(page.getByRole('heading', { name: 'Archive' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Mingla' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Open Health Initiative' })).toBeVisible();
});
