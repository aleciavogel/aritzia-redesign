# Aritzia Product Page Redesign

### Mission

I was recently assigned the task of identifying an objection that a shopper might encounter at any point throughout the shopping experience on www.aritzia.com. I had to theorize how I could potentially overcome such an obstacle and then create a message that would be shown to the shopper to persuade them to complete the purchase.

I was provided with links to articles and videos about persuasion and consumer psychology to guide me for this project.

## Analysis
Aritzia is a Canadian retailer whose local stores I frequent whenever I go shopping but I've never actually been on their website. While exploring their online checkout process, I identified several elements that I thought could be improved. For example, the mobile experience isn't the greatest. I also noticed that certain pages like their "About" page were beautifully designed with fading transitions and pretty solid copy, but other pages (such as those associated with the online shopping process) were frustrating to use and didn't feel cohesive with the rest of the website's design.

Initially, I wanted to tackle both the product page and the cart/checkout page plus design everything to be mobile-first and responsive. Since this was supposed to be a short challenge, I narrowed it down to the product page and decided to focus on the desktop view to make my life a little easier.

#### The Gallery & Product Overview

The entire left side of the product page serves as a gallery of images for the item of clothing. You need to scroll down in order to view every image, apart from hovering over the dots on the left that serve as navigation for the gallery. In order to keep the product's description in view while you browse the images, the developer used some JavaScript to fix the right side of the page so it stays in place as you scroll. This becomes a problem if any one of the following occurs:

* The "Designer's Notes" section is longer than 1-2 sentences
* An alert about an unavailable size/colour is being displayed
* The "Size & Fit" or "Materials & Care" sections have been toggled to display their contents
* The browser window in general isn't long enough to display the entire Product Description without scrolling down. 

In these cases, part of the Product Description will move out of view and you have to scroll up in order to view it again. Even on a 1080 x 1920 computer monitor, I cannot actually read the "Materials & Care" section on this page while the "Size & Fit" section is also toggled. That is, until I scroll all the way to the bottom... and then it overlaps with the "Shipping | Returns & Exchanges | Contact Us Now" section.

<Screenshot will go here>


#### Size & Colour Selection

Another issue I encountered was how difficult it was initially to determine the states of different sizes on popular items. I clicked on a sweater I liked, but almost all of its sizes for my favourite colour were sold out. The sold out sizes had the same background and border colours as the sizes that were still in stock - the only thing that differed was the font colour. You could still hover over and select sizes out of stock. Selecting an unavailable size opens a red alert box and disables the "Add to bag" button.

On products such as the La Reviere T-Shirt, once you click on a sold out colour (which has a diagonal slash through the middle to indicate that it is sold out), some of the alerts for sold out sizes are inconsistent, sometimes saying "Only a few left in this colour" even though the colour itself is unavailable.

<Screenshot will go here>


#### Reviews 

Simply put, there is no review system in place. As an avid online shopper, I rely on unbiased customer reviews to decide whether I should buy an item that I won't be able to see in person until after it's purchased and shipped to my address.


## My Solution

After studying ReactJs for the last two weeks of 2016, I thought this task would be a wonderful opportunity for me to apply my knowledge of the framework in order to present a working prototype of my design concept. Thus, you're reading this report as a README on Github and not as a PDF exported from Sketch.