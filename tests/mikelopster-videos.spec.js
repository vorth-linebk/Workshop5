const { test, expect } = require('@playwright/test');

test.describe('Mikelopster Home - Videos section', () => {
  test('should render exactly 12 video items', async ({ page }) => {
    await page.goto('https://mikelopster.dev/');

    const videosRegion = page.getByRole('region', { name: 'Video list' });
    await expect(videosRegion.getByRole('heading', { level: 2, name: 'Videos' })).toBeVisible();

    const videoLinks = videosRegion.getByRole('link');
    await expect(videoLinks).toHaveCount(12);
  });
});


