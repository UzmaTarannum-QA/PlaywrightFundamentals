# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26thFilpkart_taks.spec.ts >> flipkart
- Location: tests\07_WebTables\26thFilpkart_taks.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span:has-text(\'NEXT\')')
    - locator resolved to <span>Next</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e7]:
    - generic [ref=f1e9]:
      - link [ref=f1e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f1e11]
      - link "Explore Plus" [ref=f1e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f1e16]:
      - textbox "Search for products, brands and more" [ref=f1e18]: DSLR Camera
      - button [ref=f1e19] [cursor=pointer]
    - link "Login" [ref=f1e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D6
    - link "Become a Seller" [ref=f1e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f1e32]: More
    - link "Cart" [ref=f1e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f1e50]:
    - generic [ref=f1e51] [cursor=pointer]: Electronics
    - generic [ref=f1e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f1e57] [cursor=pointer]: Men
    - generic [ref=f1e60] [cursor=pointer]: Women
    - generic [ref=f1e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f1e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f1e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f1e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f1e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f1e74]:
    - generic [ref=f1e75]:
      - generic [ref=f1e77]:
        - generic [ref=f1e79]:
          - generic [ref=f1e80]: Filters
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: CATEGORIES
            - generic [ref=f1e87]:
              - img [ref=f1e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f1e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e93]:
              - img [ref=f1e95] [cursor=pointer]
              - link "Cameras" [ref=f1e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e99]:
              - img [ref=f1e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f1e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f1e104]: Brand
          - generic [ref=f1e109]:
            - generic [ref=f1e110]: Price
            - generic [ref=f1e118]:
              - generic [ref=f1e119] [cursor=pointer]
              - generic [ref=f1e126]:
                - generic [ref=f1e127]: .
                - generic [ref=f1e128]: .
                - generic [ref=f1e129]: .
                - generic [ref=f1e130]: .
                - generic [ref=f1e131]: .
                - generic [ref=f1e132]: .
                - generic: .
            - generic [ref=f1e133]:
              - combobox [ref=f1e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f1e136]: to
              - combobox [ref=f1e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f1e139]: Video Resolution
          - generic [ref=f1e144]:
            - generic [ref=f1e145] [cursor=pointer]: Customer Ratings
            - generic [ref=f1e150]:
              - generic "4★ & above" [ref=f1e151] [cursor=pointer]
              - generic "3★ & above" [ref=f1e156] [cursor=pointer]
              - generic "2★ & above" [ref=f1e161] [cursor=pointer]
              - generic "1★ & above" [ref=f1e166] [cursor=pointer]
          - generic [ref=f1e171]: Delivery in 1 day
          - generic [ref=f1e176]: Lens Mount
          - generic [ref=f1e181]: Mega Pixel
          - generic [ref=f1e186]: Effective Pixels
          - generic [ref=f1e191]: Sensor Size
          - generic [ref=f1e196]: Shutter Speed
          - generic [ref=f1e201]: Type
          - generic [ref=f1e206]: Color
          - generic [ref=f1e211]: Discount
          - generic [ref=f1e216]:
            - generic [ref=f1e217] [cursor=pointer]
            - generic [ref=f1e222]: "?"
          - generic [ref=f1e224]: Number of Lens
          - generic [ref=f1e229]: FPS in Burst Mode
          - generic [ref=f1e234]: Country Of Origin
          - generic [ref=f1e239]:
            - generic [ref=f1e240] [cursor=pointer]: Offers
            - generic [ref=f1e245]:
              - generic "Buy More, Save More" [ref=f1e246] [cursor=pointer]
              - generic "Special Price" [ref=f1e251] [cursor=pointer]
          - generic [ref=f1e256]: Maximum ISO
          - generic [ref=f1e261]: Maximum Shutter Speed
          - generic [ref=f1e266]: Availability
          - generic [ref=f1e271]: GST Invoice Available
          - generic [ref=f1e276]: Features
        - link "Need help? Help me decide Buying Guide" [ref=f1e282] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f1e283]: Need help?
          - generic [ref=f1e284]: Help me decide
          - img "Buying Guide" [ref=f1e287]
      - generic [ref=f1e288]:
        - generic [ref=f1e291]:
          - generic [ref=f1e292]:
            - link "Home" [ref=f1e294] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f1e298] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f1e302] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f1e306] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f1e307]: Showing 121 – 120 of 120 results for "DSLR Camera"
          - generic [ref=f1e308]:
            - generic [ref=f1e309]: Sort By
            - generic [ref=f1e310]: Relevance
            - generic [ref=f1e311] [cursor=pointer]: Popularity
            - generic [ref=f1e312] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e313] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e314] [cursor=pointer]: Newest First
        - generic [ref=f1e317]:
          - generic [ref=f1e318]: Page 6 of 5
          - navigation [ref=f1e319]:
            - link "Previous" [ref=f1e320] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "1" [ref=f1e321] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e322] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e323] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e324] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e325] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
    - generic [ref=f1e327]:
      - generic [ref=f1e328]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e329]:
        - generic [ref=f1e330]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e333]
          - generic [ref=f1e334]:
            - link "1. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e335] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e336]: 1. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e338]:
                - generic [ref=f1e339]: "4.5"
                - generic [ref=f1e341]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e342]: "&154 Reviews"
              - generic [ref=f1e344]:
                - generic [ref=f1e345]: ₹78,990
                - generic [ref=f1e346]: 16% off
            - list [ref=f1e347]:
              - listitem [ref=f1e348]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e349]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e350]: "Sensor Type: CMOS"
        - generic [ref=f1e351]:
          - generic [ref=f1e352]: Most Helpful Review
          - generic [ref=f1e354]:
            - generic [ref=f1e355]:
              - generic [ref=f1e356]: "5"
              - paragraph [ref=f1e358]: Brilliant
            - generic [ref=f1e361]:
              - generic [ref=f1e362]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e363] [cursor=pointer]: Read full review
            - generic [ref=f1e365]:
              - paragraph [ref=f1e366]: Satyajit Acharjee
              - paragraph [ref=f1e371]: Certified Buyer
              - paragraph [ref=f1e372]: Aug, 2019
        - generic [ref=f1e373]:
          - generic [ref=f1e374]: Recent Review
          - generic [ref=f1e376]:
            - generic [ref=f1e377]:
              - generic [ref=f1e378]: "5"
              - paragraph [ref=f1e380]: Perfect product!
            - generic [ref=f1e381]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e386]:
              - paragraph [ref=f1e387]: Flipkart Customer
              - paragraph [ref=f1e392]: Certified Buyer
              - paragraph [ref=f1e393]: 3 months ago
      - generic [ref=f1e394]:
        - generic [ref=f1e395]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e398]
          - generic [ref=f1e399]:
            - link "2. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e400] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e401]: 2. Toy Imagine Top Quality Kid...
              - generic [ref=f1e403]:
                - generic [ref=f1e404]: "3.3"
                - generic [ref=f1e406]:
                  - text: 15 Ratings
                  - generic [ref=f1e407]: "&2 Reviews"
              - generic [ref=f1e409]:
                - generic [ref=f1e410]: ₹619
                - generic [ref=f1e411]: 61% off
            - list [ref=f1e412]:
              - listitem [ref=f1e413]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e414]: "Sensor Type: CCD"
              - listitem [ref=f1e415]: "1080"
        - generic [ref=f1e416]:
          - generic [ref=f1e417]: Most Helpful Review
          - generic [ref=f1e419]:
            - generic [ref=f1e420]:
              - generic [ref=f1e421]: "1"
              - paragraph [ref=f1e423]: Did not meet expectations
            - generic [ref=f1e424]: The battery is draining quickly.
            - generic [ref=f1e429]:
              - paragraph [ref=f1e430]: Komal Kumar Sahu
              - paragraph [ref=f1e435]: Certified Buyer
              - paragraph [ref=f1e436]: 3 months ago
        - generic [ref=f1e437]:
          - generic [ref=f1e438]: Recent Review
          - generic [ref=f1e440]:
            - generic [ref=f1e441]:
              - generic [ref=f1e442]: "1"
              - paragraph [ref=f1e444]: Did not meet expectations
            - generic [ref=f1e445]: The battery is draining quickly.
            - generic [ref=f1e450]:
              - paragraph [ref=f1e451]: Komal Kumar Sahu
              - paragraph [ref=f1e456]: Certified Buyer
              - paragraph [ref=f1e457]: 3 months ago
      - generic [ref=f1e458]:
        - generic [ref=f1e459]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e462]
          - generic [ref=f1e463]:
            - link "3. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e464] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e465]: 3. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e467]:
                - generic [ref=f1e468]: "4.7"
                - generic [ref=f1e470]:
                  - text: 19 Ratings
                  - generic [ref=f1e471]: "&2 Reviews"
              - generic [ref=f1e473]:
                - generic [ref=f1e474]: ₹1,93,053
                - generic [ref=f1e475]: 17% off
            - list [ref=f1e476]:
              - listitem [ref=f1e477]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e478]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e479]: "Sensor Type: CMOS"
        - generic [ref=f1e480]:
          - generic [ref=f1e481]: Most Helpful Review
          - generic [ref=f1e483]:
            - generic [ref=f1e484]:
              - generic [ref=f1e485]: "5"
              - paragraph [ref=f1e487]: Mind-blowing purchase
            - generic [ref=f1e490]:
              - generic [ref=f1e491]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e492] [cursor=pointer]: Read full review
            - generic [ref=f1e494]:
              - paragraph [ref=f1e495]: SANTANU SENGUPTA
              - paragraph [ref=f1e500]: Certified Buyer
              - paragraph [ref=f1e501]: Sep, 2020
        - generic [ref=f1e502]:
          - generic [ref=f1e503]: Recent Review
          - generic [ref=f1e505]:
            - generic [ref=f1e506]:
              - generic [ref=f1e507]: "5"
              - paragraph [ref=f1e509]: Fabulous!
            - generic [ref=f1e510]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e515]:
              - paragraph [ref=f1e516]: Dr Vineet Marwaha
              - paragraph [ref=f1e521]: Certified Buyer
              - paragraph [ref=f1e522]: Jul, 2025
  - contentinfo [ref=f1e523]:
    - generic [ref=f1e525]:
      - generic [ref=f1e526]:
        - generic [ref=f1e527]:
          - generic [ref=f1e528]: ABOUT
          - link "Contact Us" [ref=f1e529] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e530] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e531] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e532] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e533] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e534] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e535]:
          - generic [ref=f1e536]: GROUP COMPANIES
          - link "Myntra" [ref=f1e537] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e538] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e539] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e540]:
          - generic [ref=f1e541]: HELP
          - link "Payments" [ref=f1e542] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e543] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e544] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e545] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e546]:
          - generic [ref=f1e547]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e548] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e549] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e550] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e551] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e552] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e553] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e554] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e555] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e557]:
          - generic [ref=f1e558]: "Mail Us:"
          - generic [ref=f1e561]:
            - paragraph [ref=f1e562]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e563]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e564]: Clove Embassy Tech Village,
            - paragraph [ref=f1e565]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e566]: Bengaluru, 560103,
            - paragraph [ref=f1e567]: Karnataka, India
          - generic [ref=f1e568]: Social
          - generic [ref=f1e569]:
            - link [ref=f1e571] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e574] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e577] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e580] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e583]:
          - generic [ref=f1e584]: "Registered Office Address:"
          - generic [ref=f1e587]:
            - paragraph [ref=f1e588]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e589]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e590]: Clove Embassy Tech Village,
            - paragraph [ref=f1e591]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e592]: Bengaluru, 560103,
            - paragraph [ref=f1e593]: Karnataka, India
            - paragraph [ref=f1e594]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e595]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e596] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e597] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e599]:
        - link "Become a Seller" [ref=f1e602] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e603]: Advertise
        - link "Gift Cards" [ref=f1e607] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e610] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e611]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1  | import {test,expect} from"@playwright/test";
  2  | 
  3  | test("flipkart", async({page})=>{
  4  |     await page.goto("https://www.flipkart.com/");
  5  |     await page.locator(".b3wTlE").click();
  6  |     await page.getByPlaceholder("Search for products, brands and more").first().fill("DSLR Camera");
  7  |     await page.getByRole('button', {name:"Search for Products, Brands"}).click();
  8  |     await page.waitForTimeout(5000);
  9  |     await getTitlesandprices(page);
  10 |     page.close();
  11 | });
  12 |  async function getTitlesandprices(page: Page): Promise<void>{
  13 |   const nextbutton = page.locator("span:has-text('NEXT')");
  14 |   const banner = page.locator(".iu0OAI");
  15 |   let bcount= await banner.locator("//a[contains(@class,'i2eZXn')]").count();
  16 |   while(bcount){
  17 |     console.log(bcount);
  18 |    const titles = page.locator("//div[@class='RG5Slk']");
  19 | //    let count = await titles.count();
  20 |    const names = await  titles.allInnerTexts();
  21 |    
  22 |    const prices =  await page.locator("//div[@class='hZ3P6w DeU9vF']").allInnerTexts(); 
  23 |    for(const name of names){
  24 |     console.log(name);
  25 |    }
  26 |    for(const price of prices){
  27 |     console.log(price);
  28 |    }
  29 |    
> 30 |    await nextbutton.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 |    await page.locator(".RG5Slk").first().waitFor({state:'visible'});
  32 |    bcount --;
  33 |    
  34 |    
  35 |   }
  36 | }
```