const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { authenticator } = require('otplib');

let browser;
let page;

setDefaultTimeout(60000);

Given('I navigate to the Azure login page', async function() {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://portal.azure.com/');
});

When('I provide valid username and password', async function() {
    await page.locator("input[name='loginfmt']").fill('your-username@example.com');
    await page.locator("input[type='submit']").click();
    await page.waitForTimeout(2000); // Adjust the timeout as needed
    await page.locator("input[name='passwd']").fill('your-password');
    await page.locator("input[type='submit']").click();
});

When('I provide the TOTP code', async function() {
    // Generate the TOTP code using otplib
    const secret = 'YOUR_TOTP_SECRET'; // Replace with your actual TOTP secret
    const token = authenticator.generate(secret);
    await page.locator("input[name='otc']").fill(token);
    await page.locator("input[type='submit']").click();
});

Then('I should see the Azure dashboard', async function() {
    await page.waitForSelector('text=Azure Portal');
    await expect(page.locator('text=Azure Portal')).toBeVisible();
});

Then('Close the browser', async function() {
    await browser.close();
});