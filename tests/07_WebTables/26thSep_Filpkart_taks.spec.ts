import {test,expect} from"@playwright/test";

test("flipkart", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator(".b3wTlE").click();
    await page.getByPlaceholder("Search for products, brands and more").first().fill("DSLR Camera");
    await page.getByRole('button', {name:"Search for Products, Brands"}).click();
    await page.waitForTimeout(5000);
    await getTitlesandprices(page);
    page.close();
});
 async function getTitlesandprices(page: Page): Promise<void>{
  const nextbutton = page.locator("span:has-text('NEXT')");
  while(true){
   const titles = page.locator("//div[@class='RG5Slk']");
   const count = await titles.count();
   const names = await  titles.allInnerTexts();
   
   const prices =  await page.locator("//div[@class='hZ3P6w DeU9vF']").allInnerTexts(); 
   for(const name of names){
    console.log(name);
   }
   for(const price of prices){
    console.log(price);
   }
   
   //const isNextVisible = await nextbutton.isVisible().catch(()=>false);
   if(await nextbutton.isDisabled()){
    break;
   }
   if(nextbutton.isVisible()){
   await nextbutton.click();
   await page.locator(".RG5Slk").first().waitFor({state:'visible'});
   }
   
  }
 }