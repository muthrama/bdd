const { Given } = require('@cucumber/cucumber');
const { chromium, firefox, webkit, expect } = require('@playwright/test');

Given('I test login on all supported browsers', async function () {
  const browsers = [
    { name: 'chromium', instance: chromium },
    { name: 'firefox', instance: firefox },
    { name: 'webkit', instance: webkit }
  ];

  for (const { name, instance } of browsers) {
    const browser = await instance.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    console.log(`\n--- Testing on ${name} ---`);
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('input[name="userName"]').fill('mercury');
    await page.locator('input[name="password"]').fill('mercury');
    await page.locator('input[name="submit"]').click();
    await expect(page.locator('text=Login Successfully')).toBeVisible();
    await page.screenshot({ path: `guru99-login-${name}.png` });
    await browser.close();
  }
});