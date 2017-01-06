# Aritzia Product Page Redesign

View a working prototype on [Github Pages](https://aleciavogel.github.io/aritzia-redesign/) (best viewed on Google Chrome with a browser-width of at least 975px)

The page I redesigned can be found [here](http://www.aritzia.com/en/product/faretta-sweater/62947.html?dwvar_62947_color=1274). 

![My version of the site](https://github.com/aleciavogel/aritzia-redesign/blob/master/app/public/images/myfaretta.png?raw=true)

## Mission

I was recently assigned the task of identifying an objection that a shopper might encounter at any point throughout the shopping experience on www.aritzia.com. I had to theorize how I could potentially overcome such an obstacle and then create a message that would be shown to the shopper to persuade them to complete the purchase.

Links to articles and videos about persuasion and consumer psychology were also provided to guide me for this project.

## Analysis
Aritzia is a Canadian retailer whose stores I frequent whenever I go shopping. Curiously enough, I've never actually been on their website before this task was assigned. 

While exploring their online checkout process, I identified several elements that I thought could be improved. For one thing, the website's mobile-friendliness is questionable at best. I also noticed that certain pages like their "About" page were beautifully designed with fading transitions and solid copy, but other pages (such as those associated with the online shopping process) were a tad frustrating to use and didn't feel cohesive with the rest of the website's design (they must use some sort of out-of-the-box CMS to manage their products).

Since this was supposed to be a short challenge, I narrowed it down to the product page and decided to focus on the desktop view.

### The Gallery & Product Overview

The entire left side of the product page serves as a gallery of images for the item of clothing. You need to scroll down in order to view every image, unless you hover over the navigation dots on the left. In order to keep the product's description in view while you browse the images, the developer used some JavaScript to fix the right side of the page so it stays in place as you scroll. This becomes a problem if any one of the following occurs:

* The "Designer's Notes" section is longer than 1-2 sentences
* An alert about an unavailable size/colour is being displayed
* The "Size & Fit" or "Materials & Care" sections have been toggled to display their contents
* The browser window in general isn't long enough to display the entire Product Description without scrolling down. 

In these cases, part of the Product Description will move out of view and you have to scroll up in order to view it again. Even on a 1080 x 1920 computer monitor, I cannot actually read the "Materials & Care" section on this page while the "Size & Fit" section is also toggled. That is, until I scroll all the way to the bottom... and then it overlaps with the "Shipping | Returns & Exchanges | Contact Us Now" section.

![Overlapping divs](https://github.com/aleciavogel/aritzia-redesign/blob/master/app/public/images/riviere02.png?raw=true)


### Size & Colour Selection

Another issue I encountered was how difficult it was initially to determine the states of different sizes on popular items. I clicked on a sweater I liked, but almost all of its sizes for my favourite colour were sold out. The sold out sizes had the same background and border colours as the sizes that were still in stock - the only thing that differed was the font colour. You can still hover over and select sizes that are out of stock. Selecting an unavailable size opens a red alert box and disables the "Add to bag" button.

On products such as the [La Riviere T-Shirt](http://www.aritzia.com/en/product/la-rivi%C3%A8re-t-shirt/61215.html?dwvar_61215_color=160), some of the alerts for sold out sizes are inconsistent with the actual state of the product. Sometimes they say "Only a few left in this colour" even though the colour is actually completely sold out.

![Inconsistant state](https://github.com/aleciavogel/aritzia-redesign/blob/master/app/public/images/riviere01.png?raw=true)




### Reviews 

Simply put, there is no review system in place. As an avid online shopper, I rely on unbiased customer reviews to decide whether I should buy an item that I won't be able to see in person until after it's purchased and shipped to my address.


## My Solution

After studying ReactJs for the last two weeks of 2016, I thought this task would be a wonderful opportunity for me to apply my knowledge of the framework in order to present a working prototype of my design concept. Thus, you're reading this report as a README on Github and not as a PDF exported from Sketch.

* I completely redesigned the gallery, adding a cross-fade transition every time a new thumbnail is selected.
* I moved the "Designer's Notes" section so it's now at the top of the page, directly below the price and product title.
* Reviews are simulated at the bottom of the product page. I couldn't decide on where to position the average product rating (when it was placed near the product's title and price, it made everything up there appear too cluttered), so I've left it out for now.
* A quantity selection was added, similar to the one displayed on the Victoria Secret website.
* The red alertbox that displays when a size is low or out of stock was replaced by some different copy. Within the copy, I've included a link that would open a modal window to enter your e-mail and be notified when a specific size of a product is back in stock.
* I've combined "Size & Fit" and "Materials & Care" into a single div that is displayed on a different tab than the reviews at the bottom of the page.
* I've added easing transitions to all hyperlinks on the page (including the header and footer).
* The fixed header that appears when you scroll down has not been implemented, mostly due to constraints on time. Same with share buttons and "What she's wearing".
* **Finally, my favourite feature:** If you keep refreshing the page, there's a 1 in 5 chance that an alert at the top of the screen will appear, giving you a time-sensitive coupon for free shipping and 20% off of your total purchase (including sale and clearance). One of the reasons I included this was because of the [Lucky Loyalty Effect](http://coglode.com/gems/lucky-loyalty-effect) that I learned about during my initial research on how to tackle this project. The copy is a tad cheesy, but I'm a developer and designer.

![Random Coupon Code](https://github.com/aleciavogel/aritzia-redesign/blob/master/app/public/images/couponcode.png?raw=true)
