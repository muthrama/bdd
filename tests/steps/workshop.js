const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
let browser, page;

Given('I open the Guru99 demo page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://demo.guru99.com/test/newtours/');
});

When('I type {string} in the username box', async function (username) {
  const input = page.locator('input[name="userName"]');
  await input.waitFor({ state: 'visible' });
  await input.fill(username);
});

When('I type {string} in the password box', async function (password) {
  const input = page.locator('input[name="password"]');
  await input.waitFor({ state: 'visible' });
  await input.fill(password);
});

When('I click the login button', async function () {
  await page.locator('input[name="submit"]').click();
});

Then('I should see {string} in the results', async function (expected) {
  await expect(page.locator(`text=${expected}`)).toBeVisible();
});

Then('I take a screenshot', async function () {
  await page.screenshot({ path: 'guru99-login.png' });
  await browser.close();
});



When('I navigate to the flight finder page', async function () {
  await page.locator('a[href="reservation.php"]').click();
  await page.waitForURL('**/reservation.php');
});

Then('I should see the flight finder table', async function () {
  await expect(page.locator('table[border="1"]')).toBeVisible();
});

Then('I print all table headers', async function () {
  const headers = await page.locator('td[align="right"]').allTextContents();
  console.log('Flight Finder Table Headers:', headers);
});

Then('I close the browser', async function () {
  await browser.close();
});