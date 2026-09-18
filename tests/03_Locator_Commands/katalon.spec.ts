import {test,expect,Browser, chromium, BrowserContext} from '@playwright/test';

test("katalon", async ({browser})=>{
  let bw: Browser = await chromium.launch({headless:false});
  let bc: BrowserContext = await bw.newContext();
  let page = await bc.newPage();
   await page.goto("https://katalon-demo-cura.herokuapp.com/");
   await page.locator("#btn-make-appointment").click();
   await page.locator("#txt-username").fill("John Doe");
   await page.locator("#txt-password").fill("ThisIsNotAPassword");
   await page.locator("#btn-login").click();
   const loc = await page.locator("//h2").textContent();
   console.log(loc);
   await expect(loc).toContain("Make Appointment");
});
