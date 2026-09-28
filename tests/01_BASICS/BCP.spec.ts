import {test,expect} from "@playwright/test";

test("Navigate", async({page})=>{
    await page.goto("https://courses.thetestingacademy.com/");

    });

test("conetxt",async({browser})=>{

    let admincontext= await browser.newContext();
    let adminpage = await admincontext.newPage();
    adminpage.goto("https:google.com");
});