import {test,expect} from"@playwright/test";

test("flipkart", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator(".b3wTlE").click();
    await page.getByPlaceholder("Search for products, brands and more").first().fill("DSLR Camera");
    await page.getByRole('button', {name:"Search for Products, Brands"}).click();
   // await page.waitForTimeout(5000);
    await getTitlesandprices(page);
   // await page.pause();
    page.close();
});
 async function getTitlesandprices(page: Page): Promise<void>{
  const nextbutton = page.locator("span:has-text('NEXT')");
  const banner = page.locator(".iu0OAI");
  let bcount= await banner.locator("//a[contains(@class,'i2eZXn')]").count();
  
  let n= 1;
  while(bcount){
    console.log(bcount);
    console.log(n);
   const titles = page.locator("//div[@class='RG5Slk']");

   const names = await  titles.allInnerTexts();
   
   const prices =  await page.locator("//div[@class='hZ3P6w DeU9vF']").allInnerTexts(); 
   for(const name of names){
    console.log(name);
   }
   for(const price of prices){
    console.log(price);
   }
  //  const firstpart ="//a[contains(text(),${";
  //  const seconpart="})]";
   if(bcount === 1 ){
   break;
  }else{
    // await banner.locator(`${firstpart}${n}${seconpart}`).click();
    await nextbutton.click();
   await page.locator(".RG5Slk").first().waitFor({state:'visible'});
   bcount --;
   n++;
   }
  // await page.pause();
   
  }
}