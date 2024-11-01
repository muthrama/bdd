const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

Given('providing valid url', async function(){

    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    setDefaultTimeout(10000)
    await page.goto("https://demo.guru99.com/test/newtours/")

     // Print the current URL for debugging
  console.log('Current URL:', page.url());

    // Assert that the page title is correct
  await expect(page).toHaveTitle('Welcome: Mercury Tours'); 

  // Add a short delay to ensure the page has fully loaded
  await page.waitForTimeout(2000);

  // Assert that the page URL is correct
  await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/');




})

When('providing valid username and passowrd', async function(){    
    await page.locator("//input[@name='userName']").fill('mercury')
    await page.locator("//input[@name='password']").fill('mercury')
})

When('providing valid username as {string} and passowrd as {string}', async function(name, password){
      await page.locator("//input[@name='userName']").fill(name)
    await page.locator("//input[@name='password']").fill(password)
})

Then('clicking login button', async function(){
    await page.locator("//input[@name='submit']").click()   
    
})

// This Then means "And" in the Gherkin language
Then('verifying login is successful', async function(){
  await expect(page.locator('text=Login Successfully')).toBeVisible();
  await page.close();
  await browser.close();
});
