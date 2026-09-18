import{test,expect}from "@playwright/test";

test("wingify negative test", async ({page})=>{
await page.goto("https://wingify.com/free-trial/");
let emailinput= page.locator("//input[@id='free-trial-step1-email']");
await emailinput.fill("wertyu");
let input = page.locator("input[id='free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox']");
await input.click();
await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox").click();
await page.locator("//button[contains(@data-qa,'page-su-submit')]").first().click();
let error_message_locator =page.locator("//div[contains(@class,'invalid-input+Op(1)')]").first();
let error_message =await error_message_locator.textContent();
expect(error_message).toContain("The email address you entered is incorrect.");
});