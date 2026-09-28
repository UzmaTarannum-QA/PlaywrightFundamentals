import {test,expect}from '@playwright/test';

test("OrangeHRM", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button',{name:"Login"}).click();

    await page.locator("//a[contains(@href,'viewPimModule')]").click();
    await page.getByRole('button',{name:'Add'}).click();
    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Middle Name").fill("Michael");
    await page.getByPlaceholder("Last Name").fill("Smith");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("2302");
    await page.getByRole('button',{name:'Save'}).click();

    await page.locator("//a[contains(@href,'viewPimModule')]").click();
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("2302");
    await page.getByRole('button', {name:'Search'}).click();
    await page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").nth(1).click();
    await page.getByRole('button',{name:'Delete Selected'}).click();
    await page.getByRole('button',{name:'Yes, Delete'}).click();
    await page.pause();
    
});
