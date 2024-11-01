const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

setDefaultTimeout(60000);

Given('I navigate to the login page', async function() {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://automationintesting.online/');
});

When('I click the button {string}', async function(buttonText) {
    await page.locator(`text=${buttonText}`).click();
  });
  
  Then('I should see {string} on the page', async function(text) {
    // Make the locator more specific to avoid strict mode violation
    await expect(page.locator(`text=${text}`).first()).toBeVisible();
  });
  
  Then('Close the browser', async function() {
    await browser.close();
  });