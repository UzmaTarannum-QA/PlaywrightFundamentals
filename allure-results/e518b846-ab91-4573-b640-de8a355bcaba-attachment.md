# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26thSep_Filpkart_taks.spec.ts >> flipkart
- Location: tests\07_WebTables\26thSep_Filpkart_taks.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span:has-text(\'NEXT\')').first()

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
          - generic [ref=f1e308]: Showing 145 – 149 of 149 results for "DSLR Camera"
          - generic [ref=f1e309]:
            - generic [ref=f1e310]: Sort By
            - generic [ref=f1e311]: Relevance
            - generic [ref=f1e312] [cursor=pointer]: Popularity
            - generic [ref=f1e313] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e314] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e315] [cursor=pointer]: Newest First
        - 'link "SONY ILCE-9III Mirrorless Camera body Only SONY ILCE-9III Mirrorless Camera body Only • Effective Pixels: 24.6 MP • Sensor Type: CMOS • WiFi Available • 4k • 2 Years Warranty ₹4,72,990 ₹5,29,990 10% off Only 2 left Upto ₹74,700 Off on Exchange" [ref=f1e320] [cursor=pointer]':
          - /url: /sony-ilce-9iii-mirrorless-camera-body-only/p/itmd61fffafe66ba?pid=DLLGZN8YRNGV2CK6&lid=LSTDLLGZN8YRNGV2CK6KANQ9V&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=2e15d7d1-04ac-4f92-afae-53325f323f60.DLLGZN8YRNGV2CK6.SEARCH&ppt=sp&ppn=sp&ssid=whcenov3ow0000001790574167938&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-9III Mirrorless Camera body Only" [ref=f1e325]
          - generic [ref=f1e330]:
            - generic [ref=f1e331]:
              - generic [ref=f1e332]: SONY ILCE-9III Mirrorless Camera body Only
              - list [ref=f1e334]:
                - listitem [ref=f1e335]: "• Effective Pixels: 24.6 MP"
                - listitem [ref=f1e336]: "• Sensor Type: CMOS"
                - listitem [ref=f1e337]: • WiFi Available
                - listitem [ref=f1e338]: • 4k
                - listitem [ref=f1e339]: • 2 Years Warranty
            - generic [ref=f1e340]:
              - generic [ref=f1e342]:
                - generic [ref=f1e343]: ₹4,72,990
                - generic [ref=f1e344]: ₹5,29,990
                - generic [ref=f1e345]: 10% off
              - generic [ref=f1e348]: Only 2 left
              - generic [ref=f1e352]:
                - generic [ref=f1e353]: Upto
                - generic [ref=f1e354]: ₹74,700
                - generic [ref=f1e355]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹74,700 Off on Exchange" [ref=f1e360] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=2e15d7d1-04ac-4f92-afae-53325f323f60.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=whcenov3ow0000001790574167938&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f1e365]
          - generic [ref=f1e370]:
            - generic [ref=f1e371]:
              - generic [ref=f1e372]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f1e374]:
                - listitem [ref=f1e375]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f1e376]: "• Effective Pixels: 50 MP"
                - listitem [ref=f1e377]: "• Sensor Type: CMOS"
                - listitem [ref=f1e378]: • WiFi Available
                - listitem [ref=f1e379]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f1e380]: • 2 Years Warranty
            - generic [ref=f1e381]:
              - generic [ref=f1e383]:
                - generic [ref=f1e384]: ₹4,70,990
                - generic [ref=f1e385]: ₹5,59,990
                - generic [ref=f1e386]: 15% off
              - generic [ref=f1e387]: Only 3 left
              - generic [ref=f1e391]:
                - generic [ref=f1e392]: Upto
                - generic [ref=f1e393]: ₹74,700
                - generic [ref=f1e394]: Off on Exchange
        - 'link "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only • Effective Pixels: 61 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹2,68,990 ₹2,93,990 8% off Only 2 left Upto ₹74,700 Off on Exchange" [ref=f1e399] [cursor=pointer]':
          - /url: /sony-ilce-7cr-sq-in5-mirrorless-camera-body-only/p/itmb6e85a95a474b?pid=DLLGVKJEQZ5MSERS&lid=LSTDLLGVKJEQZ5MSERSBQTO6P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=2e15d7d1-04ac-4f92-afae-53325f323f60.DLLGVKJEQZ5MSERS.SEARCH&ppt=sp&ppn=sp&ssid=whcenov3ow0000001790574167938&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only" [ref=f1e404]
          - generic [ref=f1e409]:
            - generic [ref=f1e410]:
              - generic [ref=f1e411]: SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only
              - list [ref=f1e413]:
                - listitem [ref=f1e414]: "• Effective Pixels: 61 MP"
                - listitem [ref=f1e415]: "• Sensor Type: CMOS"
                - listitem [ref=f1e416]: • WiFi Available
                - listitem [ref=f1e417]: • 4K
                - listitem [ref=f1e418]: • 2 Years Warranty
            - generic [ref=f1e419]:
              - generic [ref=f1e421]:
                - generic [ref=f1e422]: ₹2,68,990
                - generic [ref=f1e423]: ₹2,93,990
                - generic [ref=f1e424]: 8% off
              - generic [ref=f1e427]: Only 2 left
              - generic [ref=f1e431]:
                - generic [ref=f1e432]: Upto
                - generic [ref=f1e433]: ₹74,700
                - generic [ref=f1e434]: Off on Exchange
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹74,700 Off on Exchange" [ref=f1e439] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_148&otracker=search&otracker1=search&fm=Search&iid=2e15d7d1-04ac-4f92-afae-53325f323f60.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=whcenov3ow0000001790574167938&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f1e444]
          - generic [ref=f1e449]:
            - generic [ref=f1e450]:
              - generic [ref=f1e451]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f1e453]:
                - listitem [ref=f1e454]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e455]: "• Sensor Type: CMOS"
                - listitem [ref=f1e456]: • WiFi Available
                - listitem [ref=f1e457]: • 4:2:0, 10bit
                - listitem [ref=f1e458]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f1e459]:
              - generic [ref=f1e461]:
                - generic [ref=f1e462]: ₹2,85,999
                - generic [ref=f1e463]: ₹2,89,990
                - generic [ref=f1e464]: 1% off
              - generic [ref=f1e465]: Only 1 left
              - generic [ref=f1e469]:
                - generic [ref=f1e470]: Upto
                - generic [ref=f1e471]: ₹74,700
                - generic [ref=f1e472]: Off on Exchange
        - 'link "SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I... Not deliverable SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I... 4.4 11 Ratings & 1 Reviews • Effective Pixels: 12.1 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹1,95,990 ₹2,14,990 8% off Upto ₹77,700 Off on Exchange Bank Offer" [ref=f1e477] [cursor=pointer]':
          - /url: /sony-zv-e1-mirrorless-camera-full-frame-interchangeable-vlog-bodyonly-made-creators-artificial-intelligence-based-autofocus/p/itm869457765fedb?pid=DLLGRRZJVH3YH687&lid=LSTDLLGRRZJVH3YH687VAWENC&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_149&otracker=search&otracker1=search&fm=Search&iid=2e15d7d1-04ac-4f92-afae-53325f323f60.DLLGRRZJVH3YH687.SEARCH&ppt=sp&ppn=sp&ssid=whcenov3ow0000001790574167938&qH=198617266331bfb3&ov_redirect=true
          - generic [ref=f1e479]:
            - img "SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I..." [ref=f1e482]
            - generic: Not deliverable
          - generic [ref=f1e487]:
            - generic [ref=f1e488]:
              - generic [ref=f1e489]: SONY ZV-E1 Mirrorless Camera Full-Frame Interchangeable Vlog BodyOnly Made for Creators | Artificial I...
              - generic [ref=f1e490]:
                - generic [ref=f1e491]: "4.4"
                - generic [ref=f1e494]: 11 Ratings & 1 Reviews
              - list [ref=f1e497]:
                - listitem [ref=f1e498]: "• Effective Pixels: 12.1 MP"
                - listitem [ref=f1e499]: "• Sensor Type: CMOS"
                - listitem [ref=f1e500]: • WiFi Available
                - listitem [ref=f1e501]: • 4K
                - listitem [ref=f1e502]: • 2 Years Warranty
            - generic [ref=f1e503]:
              - generic [ref=f1e505]:
                - generic [ref=f1e506]: ₹1,95,990
                - generic [ref=f1e507]: ₹2,14,990
                - generic [ref=f1e508]: 8% off
              - generic [ref=f1e512]:
                - generic [ref=f1e513]: Upto
                - generic [ref=f1e514]: ₹77,700
                - generic [ref=f1e515]: Off on Exchange
              - generic [ref=f1e516]: Bank Offer
        - generic [ref=f1e521]:
          - generic [ref=f1e522]: Page 7 of 7
          - navigation [ref=f1e523]:
            - link "Previous" [ref=f1e524] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f1e525] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e526] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e527] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e528] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e529] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f1e530] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f1e531] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f1e533]:
      - generic [ref=f1e534]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e535]:
        - generic [ref=f1e536]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e539]
          - generic [ref=f1e540]:
            - link "1. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e541] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e542]: 1. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e544]:
                - generic [ref=f1e545]: "4.5"
                - generic [ref=f1e547]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e548]: "&154 Reviews"
              - generic [ref=f1e550]:
                - generic [ref=f1e551]: ₹78,990
                - generic [ref=f1e552]: 16% off
            - list [ref=f1e553]:
              - listitem [ref=f1e554]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e555]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e556]: "Sensor Type: CMOS"
        - generic [ref=f1e557]:
          - generic [ref=f1e558]: Most Helpful Review
          - generic [ref=f1e560]:
            - generic [ref=f1e561]:
              - generic [ref=f1e562]: "5"
              - paragraph [ref=f1e564]: Brilliant
            - generic [ref=f1e567]:
              - generic [ref=f1e568]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e569] [cursor=pointer]: Read full review
            - generic [ref=f1e571]:
              - paragraph [ref=f1e572]: Satyajit Acharjee
              - paragraph [ref=f1e577]: Certified Buyer
              - paragraph [ref=f1e578]: Aug, 2019
        - generic [ref=f1e579]:
          - generic [ref=f1e580]: Recent Review
          - generic [ref=f1e582]:
            - generic [ref=f1e583]:
              - generic [ref=f1e584]: "5"
              - paragraph [ref=f1e586]: Perfect product!
            - generic [ref=f1e587]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e592]:
              - paragraph [ref=f1e593]: Flipkart Customer
              - paragraph [ref=f1e598]: Certified Buyer
              - paragraph [ref=f1e599]: 3 months ago
      - generic [ref=f1e600]:
        - generic [ref=f1e601]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e604]
          - generic [ref=f1e605]:
            - link "2. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e606] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e607]: 2. Toy Imagine Top Quality Kid...
              - generic [ref=f1e609]:
                - generic [ref=f1e610]: "3.3"
                - generic [ref=f1e612]:
                  - text: 15 Ratings
                  - generic [ref=f1e613]: "&2 Reviews"
              - generic [ref=f1e615]:
                - generic [ref=f1e616]: ₹619
                - generic [ref=f1e617]: 61% off
            - list [ref=f1e618]:
              - listitem [ref=f1e619]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e620]: "Sensor Type: CCD"
              - listitem [ref=f1e621]: "1080"
        - generic [ref=f1e622]:
          - generic [ref=f1e623]: Most Helpful Review
          - generic [ref=f1e625]:
            - generic [ref=f1e626]:
              - generic [ref=f1e627]: "1"
              - paragraph [ref=f1e629]: Did not meet expectations
            - generic [ref=f1e630]: The battery is draining quickly.
            - generic [ref=f1e635]:
              - paragraph [ref=f1e636]: Komal Kumar Sahu
              - paragraph [ref=f1e641]: Certified Buyer
              - paragraph [ref=f1e642]: 3 months ago
        - generic [ref=f1e643]:
          - generic [ref=f1e644]: Recent Review
          - generic [ref=f1e646]:
            - generic [ref=f1e647]:
              - generic [ref=f1e648]: "1"
              - paragraph [ref=f1e650]: Did not meet expectations
            - generic [ref=f1e651]: The battery is draining quickly.
            - generic [ref=f1e656]:
              - paragraph [ref=f1e657]: Komal Kumar Sahu
              - paragraph [ref=f1e662]: Certified Buyer
              - paragraph [ref=f1e663]: 3 months ago
      - generic [ref=f1e664]:
        - generic [ref=f1e665]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e668]
          - generic [ref=f1e669]:
            - link "3. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e670] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e671]: 3. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e673]:
                - generic [ref=f1e674]: "4.7"
                - generic [ref=f1e676]:
                  - text: 19 Ratings
                  - generic [ref=f1e677]: "&2 Reviews"
              - generic [ref=f1e679]:
                - generic [ref=f1e680]: ₹1,93,053
                - generic [ref=f1e681]: 17% off
            - list [ref=f1e682]:
              - listitem [ref=f1e683]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e684]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e685]: "Sensor Type: CMOS"
        - generic [ref=f1e686]:
          - generic [ref=f1e687]: Most Helpful Review
          - generic [ref=f1e689]:
            - generic [ref=f1e690]:
              - generic [ref=f1e691]: "5"
              - paragraph [ref=f1e693]: Mind-blowing purchase
            - generic [ref=f1e696]:
              - generic [ref=f1e697]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e698] [cursor=pointer]: Read full review
            - generic [ref=f1e700]:
              - paragraph [ref=f1e701]: SANTANU SENGUPTA
              - paragraph [ref=f1e706]: Certified Buyer
              - paragraph [ref=f1e707]: Sep, 2020
        - generic [ref=f1e708]:
          - generic [ref=f1e709]: Recent Review
          - generic [ref=f1e711]:
            - generic [ref=f1e712]:
              - generic [ref=f1e713]: "5"
              - paragraph [ref=f1e715]: Fabulous!
            - generic [ref=f1e716]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e721]:
              - paragraph [ref=f1e722]: Dr Vineet Marwaha
              - paragraph [ref=f1e727]: Certified Buyer
              - paragraph [ref=f1e728]: Jul, 2025
  - contentinfo [ref=f1e729]:
    - generic [ref=f1e731]:
      - generic [ref=f1e732]:
        - generic [ref=f1e733]:
          - generic [ref=f1e734]: ABOUT
          - link "Contact Us" [ref=f1e735] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e736] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e737] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e738] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e739] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e740] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e741]:
          - generic [ref=f1e742]: GROUP COMPANIES
          - link "Myntra" [ref=f1e743] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e744] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e745] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e746]:
          - generic [ref=f1e747]: HELP
          - link "Payments" [ref=f1e748] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e749] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e750] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e751] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e752]:
          - generic [ref=f1e753]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e754] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e755] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e756] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e757] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e758] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e759] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e760] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e761] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e763]:
          - generic [ref=f1e764]: "Mail Us:"
          - generic [ref=f1e767]:
            - paragraph [ref=f1e768]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e769]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e770]: Clove Embassy Tech Village,
            - paragraph [ref=f1e771]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e772]: Bengaluru, 560103,
            - paragraph [ref=f1e773]: Karnataka, India
          - generic [ref=f1e774]: Social
          - generic [ref=f1e775]:
            - link [ref=f1e777] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e780] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e783] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e786] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e789]:
          - generic [ref=f1e790]: "Registered Office Address:"
          - generic [ref=f1e793]:
            - paragraph [ref=f1e794]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e795]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e796]: Clove Embassy Tech Village,
            - paragraph [ref=f1e797]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e798]: Bengaluru, 560103,
            - paragraph [ref=f1e799]: Karnataka, India
            - paragraph [ref=f1e800]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e801]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e802] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e803] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e805]:
        - link "Become a Seller" [ref=f1e808] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e809]: Advertise
        - link "Gift Cards" [ref=f1e813] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e816] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e817]: © 2007-2026 Flipkart.com
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
  14 |   while(true){
  15 |    const titles = page.locator("//div[@class='RG5Slk']");
  16 |    const count = await titles.count();
  17 |    const names = await  titles.allInnerTexts();
  18 |    
  19 |    const prices =  await page.locator("//div[@class='hZ3P6w DeU9vF']").allInnerTexts(); 
  20 |    for(const name of names){
  21 |     console.log(name);
  22 |    }
  23 |    for(const price of prices){
  24 |     console.log(price);
  25 |    }
  26 |    
  27 |    //const isNextVisible = await nextbutton.isVisible().catch(()=>false);
  28 |    if(await nextbutton.isDisabled()){
  29 |     break;
  30 |    }
  31 |    if(nextbutton.isVisible()){
> 32 |    await nextbutton.first().click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  33 |    await page.locator(".RG5Slk").first().waitFor({state:'visible'});
  34 |    }
  35 |    
  36 |   }
  37 |  }
```