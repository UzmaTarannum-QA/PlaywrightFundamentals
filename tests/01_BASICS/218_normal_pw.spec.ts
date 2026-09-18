import {Browser, BrowserContext, chromium} from "playwright";

async function run(){
    let browser: Browser = await chromium.launch({headless:false});
    let context:BrowserContext = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://example.com");
    console.log("Title:", await page.title());
}

run();