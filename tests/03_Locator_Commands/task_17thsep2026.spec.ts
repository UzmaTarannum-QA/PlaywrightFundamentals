import{test,expect} from "@playwright/test";

test("URL change", async({page})=>{
    const oldurl = page.url();
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.locator("//input[@id='email']").fill("erty@ghj.com");
    await page.locator("//input[@id='password']").fill("234567");
    await page.locator("//input[@name='remember']").click();
    await page.locator(".login-btn").first().click();

    let newurl = page.url();
    await expect(oldurl).not.toBe(newurl);
});