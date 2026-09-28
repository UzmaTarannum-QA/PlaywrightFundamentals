import {test,expect} from"@playwright/test";

test("web table", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    const firstPart = "//tbody[@id='employee-body']/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    let rows =await page.locator("//tbody[@id='employee-body']/tr").count();
    let cols = await page.locator("//tbody[@id='employee-body']/tr[2]/td").count();

    // console.log(rows);
    // console.log(cols);

    for(let i =2;i<=rows;i++){
        for(let j=1;j<=cols;j++){
           // const dxpath = `S{firstPart}${i}${secondPart}${j}${thirdPart}`;
            const dxpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dxpath).innerText();
            if(data.includes('Rohan.Mehta')){
                const checkbox = `${dxpath}/preceding-sibling::td`;
                const countryText = await page.locator(checkbox).click();
            }
        
        }
    }
page.pause();
});