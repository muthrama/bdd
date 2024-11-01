const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

Given('providing the valid url', async function(){

    // Launch a browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the URL
  await page.goto('https://demo.guru99.com/test/newtours/');

  // Print the current URL for debugging
  console.log('Current URL:', page.url());

  // Assert that the page title is correct
  await expect(page).toHaveTitle('Welcome: Mercury Tours');

  // Interact with elements: Fill in the username and password
  await page.locator("input[name='userName']").fill('mercury');
  await page.locator("input[name='password']").fill('mercury');

  // Click the login button
  await page.locator("input[name='submit']").click();

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Assert that the login was successful by checking for a specific element or text
  await expect(page.locator('text=Login Successfully')).toBeVisible();

  // Take a screenshot after login
  await page.screenshot({ path: 'login-success.png' });

  // Close the browser
  await browser.close();



})

