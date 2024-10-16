const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require('@playwright/test')

let browser;
let page;

Given('providing valid fusion url', async function(){

    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    setDefaultTimeout(10000)
    await page.goto("https://fusion.equinor.com/")
    setDefaultTimeout(10000)
})



