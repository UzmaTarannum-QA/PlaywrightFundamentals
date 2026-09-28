import{test,expect} from "@playwright/test";

test("Handle Multiple Elements",async({page}) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const allitems:string[] = await page.locator("a.list-group-item").allInnerTexts();

    // for(const link of allitems){
    //     console.log(link);
    // }
     for(const linkText of allitems){
        if( linkText === "Forgotten Password"){
             await page.getByText(linkText).nth(4).click();
            //  await page.pause();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

    // await page.pause();

});
