import{test, chromium, Browser, BrowserContext} from "@playwright/test";

test("BCP",async ({browser})=>{
    let bw: Browser = await chromium.launch();
    let bc:BrowserContext = await bw.newContext();
    let page = await bc.newPage();
    page.goto("https://google.com");
    page.close();
});