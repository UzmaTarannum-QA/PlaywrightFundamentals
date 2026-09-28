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
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D7
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
    - link "Grocery" [ref=f1e74] [cursor=pointer]:
      - /url: /grocery-supermart-store?marketplace=GROCERY&otracker=nmenu_Grocery
  - generic [ref=f1e75]:
    - generic [ref=f1e76]:
      - generic [ref=f1e78]:
        - generic [ref=f1e80]:
          - generic [ref=f1e81]: Filters
          - generic [ref=f1e85]:
            - generic [ref=f1e86]: CATEGORIES
            - generic [ref=f1e88]:
              - img [ref=f1e90] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f1e92] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e94]:
              - img [ref=f1e96] [cursor=pointer]
              - link "Cameras" [ref=f1e98] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e100]:
              - img [ref=f1e102] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f1e104] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f1e105]: Brand
          - generic [ref=f1e110]:
            - generic [ref=f1e111]: Price
            - generic [ref=f1e119]:
              - generic [ref=f1e120] [cursor=pointer]
              - generic [ref=f1e127]:
                - generic [ref=f1e128]: .
                - generic [ref=f1e129]: .
                - generic [ref=f1e130]: .
                - generic [ref=f1e131]: .
                - generic [ref=f1e132]: .
                - generic [ref=f1e133]: .
                - generic: .
            - generic [ref=f1e134]:
              - combobox [ref=f1e136]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f1e137]: to
              - combobox [ref=f1e139]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f1e140]: Video Resolution
          - generic [ref=f1e145]:
            - generic [ref=f1e146] [cursor=pointer]: Customer Ratings
            - generic [ref=f1e151]:
              - generic "4★ & above" [ref=f1e152] [cursor=pointer]
              - generic "3★ & above" [ref=f1e157] [cursor=pointer]
              - generic "2★ & above" [ref=f1e162] [cursor=pointer]
              - generic "1★ & above" [ref=f1e167] [cursor=pointer]
          - generic [ref=f1e172]: Delivery in 1 day
          - generic [ref=f1e177]: Lens Mount
          - generic [ref=f1e182]: Mega Pixel
          - generic [ref=f1e187]: Effective Pixels
          - generic [ref=f1e192]: Sensor Size
          - generic [ref=f1e197]: Shutter Speed
          - generic [ref=f1e202]: Type
          - generic [ref=f1e207]: Color
          - generic [ref=f1e212]: Discount
          - generic [ref=f1e217]:
            - generic [ref=f1e218] [cursor=pointer]
            - generic [ref=f1e223]: "?"
          - generic [ref=f1e225]: Number of Lens
          - generic [ref=f1e230]: FPS in Burst Mode
          - generic [ref=f1e235]: Country Of Origin
          - generic [ref=f1e240]:
            - generic [ref=f1e241] [cursor=pointer]: Offers
            - generic [ref=f1e246]:
              - generic "Buy More, Save More" [ref=f1e247] [cursor=pointer]
              - generic "Special Price" [ref=f1e252] [cursor=pointer]
          - generic [ref=f1e257]: Maximum ISO
          - generic [ref=f1e262]: Maximum Shutter Speed
          - generic [ref=f1e267]: Availability
          - generic [ref=f1e272]: GST Invoice Available
          - generic [ref=f1e277]: Features
        - link "Need help? Help me decide Buying Guide" [ref=f1e283] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f1e284]: Need help?
          - generic [ref=f1e285]: Help me decide
          - img "Buying Guide" [ref=f1e288]
      - generic [ref=f1e289]:
        - generic [ref=f1e292]:
          - generic [ref=f1e293]:
            - link "Home" [ref=f1e295] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f1e299] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f1e303] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f1e307] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f1e308]: Showing 145 – 147 of 147 results for "DSLR Camera"
          - generic [ref=f1e309]:
            - generic [ref=f1e310]: Sort By
            - generic [ref=f1e311]: Relevance
            - generic [ref=f1e312] [cursor=pointer]: Popularity
            - generic [ref=f1e313] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e314] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e315] [cursor=pointer]: Newest First
        - 'link "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only • Effective Pixels: 61 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹2,68,990 ₹2,93,990 8% off Only 2 left Upto ₹74,700 Off on Exchange" [ref=f1e320] [cursor=pointer]':
          - /url: /sony-ilce-7cr-sq-in5-mirrorless-camera-body-only/p/itmb6e85a95a474b?pid=DLLGVKJEQZ5MSERS&lid=LSTDLLGVKJEQZ5MSERSBQTO6P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=c3ffc3fc-7217-4b41-b6c9-3bcc9a1c197b.DLLGVKJEQZ5MSERS.SEARCH&ppt=sp&ppn=sp&ssid=i0ua52rodc0000001790575329200&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only" [ref=f1e325]
          - generic [ref=f1e330]:
            - generic [ref=f1e331]:
              - generic [ref=f1e332]: SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only
              - list [ref=f1e334]:
                - listitem [ref=f1e335]: "• Effective Pixels: 61 MP"
                - listitem [ref=f1e336]: "• Sensor Type: CMOS"
                - listitem [ref=f1e337]: • WiFi Available
                - listitem [ref=f1e338]: • 4K
                - listitem [ref=f1e339]: • 2 Years Warranty
            - generic [ref=f1e340]:
              - generic [ref=f1e342]:
                - generic [ref=f1e343]: ₹2,68,990
                - generic [ref=f1e344]: ₹2,93,990
                - generic [ref=f1e345]: 8% off
              - generic [ref=f1e348]: Only 2 left
              - generic [ref=f1e352]:
                - generic [ref=f1e353]: Upto
                - generic [ref=f1e354]: ₹74,700
                - generic [ref=f1e355]: Off on Exchange
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹74,700 Off on Exchange" [ref=f1e360] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=c3ffc3fc-7217-4b41-b6c9-3bcc9a1c197b.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=i0ua52rodc0000001790575329200&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f1e365]
          - generic [ref=f1e370]:
            - generic [ref=f1e371]:
              - generic [ref=f1e372]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f1e374]:
                - listitem [ref=f1e375]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e376]: "• Sensor Type: CMOS"
                - listitem [ref=f1e377]: • WiFi Available
                - listitem [ref=f1e378]: • 4:2:0, 10bit
                - listitem [ref=f1e379]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f1e380]:
              - generic [ref=f1e382]:
                - generic [ref=f1e383]: ₹2,85,999
                - generic [ref=f1e384]: ₹2,89,990
                - generic [ref=f1e385]: 1% off
              - generic [ref=f1e386]: Only 1 left
              - generic [ref=f1e390]:
                - generic [ref=f1e391]: Upto
                - generic [ref=f1e392]: ₹74,700
                - generic [ref=f1e393]: Off on Exchange
        - 'link "SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I... Not deliverable SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I... 4.4 11 Ratings & 1 Reviews • Effective Pixels: 12.1 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹1,95,990 ₹2,14,990 8% off Upto ₹77,700 Off on Exchange Bank Offer" [ref=f1e398] [cursor=pointer]':
          - /url: /sony-zv-e1-mirrorless-camera-full-frame-interchangeable-vlog-bodyonly-made-creators-artificial-intelligence-based-autofocus/p/itm869457765fedb?pid=DLLGRRZJVH3YH687&lid=LSTDLLGRRZJVH3YH687VAWENC&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=c3ffc3fc-7217-4b41-b6c9-3bcc9a1c197b.DLLGRRZJVH3YH687.SEARCH&ppt=sp&ppn=sp&ssid=i0ua52rodc0000001790575329200&qH=198617266331bfb3&ov_redirect=true
          - generic [ref=f1e400]:
            - img "SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I..." [ref=f1e403]
            - generic: Not deliverable
          - generic [ref=f1e408]:
            - generic [ref=f1e409]:
              - generic [ref=f1e410]: SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I...
              - generic [ref=f1e411]:
                - generic [ref=f1e412]: "4.4"
                - generic [ref=f1e415]: 11 Ratings & 1 Reviews
              - list [ref=f1e418]:
                - listitem [ref=f1e419]: "• Effective Pixels: 12.1 MP"
                - listitem [ref=f1e420]: "• Sensor Type: CMOS"
                - listitem [ref=f1e421]: • WiFi Available
                - listitem [ref=f1e422]: • 4K
                - listitem [ref=f1e423]: • 2 Years Warranty
            - generic [ref=f1e424]:
              - generic [ref=f1e426]:
                - generic [ref=f1e427]: ₹1,95,990
                - generic [ref=f1e428]: ₹2,14,990
                - generic [ref=f1e429]: 8% off
              - generic [ref=f1e433]:
                - generic [ref=f1e434]: Upto
                - generic [ref=f1e435]: ₹77,700
                - generic [ref=f1e436]: Off on Exchange
              - generic [ref=f1e437]: Bank Offer
        - generic [ref=f1e442]:
          - generic [ref=f1e443]: Page 7 of 7
          - navigation [ref=f1e444]:
            - link "Previous" [ref=f1e445] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f1e446] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e447] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e448] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e449] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e450] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f1e451] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f1e452] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f1e454]:
      - generic [ref=f1e455]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e456]:
        - generic [ref=f1e457]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e460]
          - generic [ref=f1e461]:
            - link "1. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e462] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e463]: 1. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e465]:
                - generic [ref=f1e466]: "4.5"
                - generic [ref=f1e468]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e469]: "&154 Reviews"
              - generic [ref=f1e471]:
                - generic [ref=f1e472]: ₹78,990
                - generic [ref=f1e473]: 16% off
            - list [ref=f1e474]:
              - listitem [ref=f1e475]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e476]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e477]: "Sensor Type: CMOS"
        - generic [ref=f1e478]:
          - generic [ref=f1e479]: Most Helpful Review
          - generic [ref=f1e481]:
            - generic [ref=f1e482]:
              - generic [ref=f1e483]: "5"
              - paragraph [ref=f1e485]: Brilliant
            - generic [ref=f1e488]:
              - generic [ref=f1e489]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e490] [cursor=pointer]: Read full review
            - generic [ref=f1e492]:
              - paragraph [ref=f1e493]: Satyajit Acharjee
              - paragraph [ref=f1e498]: Certified Buyer
              - paragraph [ref=f1e499]: Aug, 2019
        - generic [ref=f1e500]:
          - generic [ref=f1e501]: Recent Review
          - generic [ref=f1e503]:
            - generic [ref=f1e504]:
              - generic [ref=f1e505]: "5"
              - paragraph [ref=f1e507]: Perfect product!
            - generic [ref=f1e508]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e513]:
              - paragraph [ref=f1e514]: Flipkart Customer
              - paragraph [ref=f1e519]: Certified Buyer
              - paragraph [ref=f1e520]: 3 months ago
      - generic [ref=f1e521]:
        - generic [ref=f1e522]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e525]
          - generic [ref=f1e526]:
            - link "2. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e527] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e528]: 2. Toy Imagine Top Quality Kid...
              - generic [ref=f1e530]:
                - generic [ref=f1e531]: "3.3"
                - generic [ref=f1e533]:
                  - text: 15 Ratings
                  - generic [ref=f1e534]: "&2 Reviews"
              - generic [ref=f1e536]:
                - generic [ref=f1e537]: ₹619
                - generic [ref=f1e538]: 61% off
            - list [ref=f1e539]:
              - listitem [ref=f1e540]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e541]: "Sensor Type: CCD"
              - listitem [ref=f1e542]: "1080"
        - generic [ref=f1e543]:
          - generic [ref=f1e544]: Most Helpful Review
          - generic [ref=f1e546]:
            - generic [ref=f1e547]:
              - generic [ref=f1e548]: "1"
              - paragraph [ref=f1e550]: Did not meet expectations
            - generic [ref=f1e551]: The battery is draining quickly.
            - generic [ref=f1e556]:
              - paragraph [ref=f1e557]: Komal Kumar Sahu
              - paragraph [ref=f1e562]: Certified Buyer
              - paragraph [ref=f1e563]: 3 months ago
        - generic [ref=f1e564]:
          - generic [ref=f1e565]: Recent Review
          - generic [ref=f1e567]:
            - generic [ref=f1e568]:
              - generic [ref=f1e569]: "1"
              - paragraph [ref=f1e571]: Did not meet expectations
            - generic [ref=f1e572]: The battery is draining quickly.
            - generic [ref=f1e577]:
              - paragraph [ref=f1e578]: Komal Kumar Sahu
              - paragraph [ref=f1e583]: Certified Buyer
              - paragraph [ref=f1e584]: 3 months ago
      - generic [ref=f1e585]:
        - generic [ref=f1e586]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e589]
          - generic [ref=f1e590]:
            - link "3. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e591] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e592]: 3. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e594]:
                - generic [ref=f1e595]: "4.7"
                - generic [ref=f1e597]:
                  - text: 19 Ratings
                  - generic [ref=f1e598]: "&2 Reviews"
              - generic [ref=f1e600]:
                - generic [ref=f1e601]: ₹1,93,053
                - generic [ref=f1e602]: 17% off
            - list [ref=f1e603]:
              - listitem [ref=f1e604]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e605]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e606]: "Sensor Type: CMOS"
        - generic [ref=f1e607]:
          - generic [ref=f1e608]: Most Helpful Review
          - generic [ref=f1e610]:
            - generic [ref=f1e611]:
              - generic [ref=f1e612]: "5"
              - paragraph [ref=f1e614]: Mind-blowing purchase
            - generic [ref=f1e617]:
              - generic [ref=f1e618]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e619] [cursor=pointer]: Read full review
            - generic [ref=f1e621]:
              - paragraph [ref=f1e622]: SANTANU SENGUPTA
              - paragraph [ref=f1e627]: Certified Buyer
              - paragraph [ref=f1e628]: Sep, 2020
        - generic [ref=f1e629]:
          - generic [ref=f1e630]: Recent Review
          - generic [ref=f1e632]:
            - generic [ref=f1e633]:
              - generic [ref=f1e634]: "5"
              - paragraph [ref=f1e636]: Fabulous!
            - generic [ref=f1e637]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e642]:
              - paragraph [ref=f1e643]: Dr Vineet Marwaha
              - paragraph [ref=f1e648]: Certified Buyer
              - paragraph [ref=f1e649]: Jul, 2025
  - contentinfo [ref=f1e650]:
    - generic [ref=f1e652]:
      - generic [ref=f1e653]:
        - generic [ref=f1e654]:
          - generic [ref=f1e655]: ABOUT
          - link "Contact Us" [ref=f1e656] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e657] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e658] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e659] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e660] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e661] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e662]:
          - generic [ref=f1e663]: GROUP COMPANIES
          - link "Myntra" [ref=f1e664] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e665] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e666] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e667]:
          - generic [ref=f1e668]: HELP
          - link "Payments" [ref=f1e669] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e670] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e671] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e672] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e673]:
          - generic [ref=f1e674]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e675] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e676] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e677] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e678] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e679] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e680] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e681] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e682] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e684]:
          - generic [ref=f1e685]: "Mail Us:"
          - generic [ref=f1e688]:
            - paragraph [ref=f1e689]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e690]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e691]: Clove Embassy Tech Village,
            - paragraph [ref=f1e692]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e693]: Bengaluru, 560103,
            - paragraph [ref=f1e694]: Karnataka, India
          - generic [ref=f1e695]: Social
          - generic [ref=f1e696]:
            - link [ref=f1e698] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e701] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e704] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e707] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e710]:
          - generic [ref=f1e711]: "Registered Office Address:"
          - generic [ref=f1e714]:
            - paragraph [ref=f1e715]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e716]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e717]: Clove Embassy Tech Village,
            - paragraph [ref=f1e718]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e719]: Bengaluru, 560103,
            - paragraph [ref=f1e720]: Karnataka, India
            - paragraph [ref=f1e721]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e722]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e723] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e724] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e726]:
        - link "Become a Seller" [ref=f1e729] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e730]: Advertise
        - link "Gift Cards" [ref=f1e734] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e737] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e738]: © 2007-2026 Flipkart.com
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
  30 |    await nextbutton.waitFor({state:'visible'});
> 31 |    await nextbutton.click();
     |                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |    await page.locator(".RG5Slk").first().waitFor({state:'visible'});
  33 |    bcount --;
  34 |    
  35 |    
  36 |   }
  37 | }
```