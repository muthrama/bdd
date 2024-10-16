const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

Given('providing valid url', async function(){

    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    setDefaultTimeout(10000)
    await page.goto("https://demo.guru99.com/test/newtours/")

    // Assert that the page title is correct
  await expect(page).toHaveTitle('Welcome: Mercury Tours');

  // Assert that the page URL is correct
  //await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/');

  // Assert that the page has a certain text
  //await expect(page).toHaveText('Registered users can sign-in here');



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
    await page.close()
    await browser.close()
})




