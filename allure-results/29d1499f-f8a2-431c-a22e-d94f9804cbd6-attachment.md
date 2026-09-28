# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_Multiple_Element_Filter\235_ME.spec.ts >> Handle Multiple Elements
- Location: tests\06_Multiple_Element_Filter\235_ME.spec.ts:3:5

# Error details

```
Error: locator.all: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test";
  2  | 
  3  | test("Handle Multiple Elements",async({page}) =>{
  4  |     await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
  5  |     const allitems:string[] = await page.locator("a.list-group-item").allInnerTexts();
  6  | 
  7  |     // for(const link of allitems){
  8  |     //     console.log(link);
  9  |     // }
  10 |      for(const linkText of allitems){
  11 |         if( linkText === "Forgotten Password"){
  12 |              await page.getByText(linkText).nth(4).click();
  13 |              await page.pause();
  14 |         }
  15 |     }
  16 | 
> 17 |     const rightPanelLinks = await page.locator('a.list-group-item').all();
     |                                                                     ^ Error: locator.all: Target page, context or browser has been closed
  18 |     for (const link of rightPanelLinks) {
  19 |         console.log(await link.getAttribute("href"));
  20 |     }
  21 | 
  22 |     await page.pause();
  23 | 
  24 | });
  25 | 
```