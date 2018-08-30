Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===

Skyler Kim  
https://a1-bot15498.herokuapp.com/

This project shows ...

### Technical Achievements
**Javascript**: Added a javascript script to the front end in order to control CSS files. I've never had a formal introduction
to pure javascript, and every time I needed something I did it through jQuery. I hope I can have a better understanding of 
base javascript instead of being thrown into helper libraries. This application uses external javascript code (found in
main.js) as well as embedded javascript code. 

**Localstorage**: Added data to localstorage to keep track of styling mode. The data that is stored is simply a flag whether
the user was last in dark mode or not. In the header of the page, the webpage loads light.css and then checks localstorage
for the flag "isDarkMode." If this flag is found, the CSS in use is updated to match the correct value. If it doesn't exist,
the script creates the flag and sets it to 0, indicating the user is in light mode. This gave me an opportunity to learn the 
difference between localstorage and sessionstorage. Localstorage is storage that persists after the tab or the browser is 
closed. Session storage is memory storage that gets cleared once the browser or tab is closed. 

### Design Achievements
**Changing CSS**: I used javascript to change the CSS applied to the page. The page can switch between 2 CSS files: light.css 
and dark.css. There is always a CSS file applied to the page called main.css. I also chose to store the image appearing at the 
bottom of the page inside the CSS files so it can be changed with the CSS files. 

**Resizing Image**: The fixed image on this site resizes with the viewports smallest dimension using vmin. This project allowed
me to learn about the different types of relative length and where they might be applicable. I chose to bound the width and 
height of the image using vmin in order to accomodate screens of various sizes. I was particularly thinking of people who were
using mobile devices or people who have flipped their monitors to be longer vertically in order to see more code on the screen.
I also foun that a lot of sites that do resize images in this way bound it by vh because computer monitors are usually 
widescreen. On screens that are widescreen, the use of vmin is essentially the use of vh to limit width and height. 

**Clickable Div**: Clicking on the image in the bottom right corner changes the CSS of the page. This is handled with a 
javascript event listener for the click events. This gave me an opportunity to learn about events. I now know how to add 
listeners to elements using javascript. I also learned that browsers handle mouse clicks differently. Chrome and IE handle them
as "pointers," which are meant to combine touch and mouseclick events into one. This was handled differently in Firefox, and 
was noted when the image was not clickable when a div layering issue was present. I also learned that mobile devices 
technically don't register clicks. Mobile devices have their own special events, such as touchmove and touchdown. These exist
because a user interfacing with a touch screen can perform different action on the page, such as the difference between tapping
a button and pressing and holding on the screen. I had originally added listeners for click and touchdown events to accomodate
this, but I found out that mobile devices can handle a click event fine. It is when the page is trying to track things such as
mouse movement, mouseover, and tapping and holding that extra exceptions are needed. I was able to test in a mobile environment
using the Nox android emulator and the mobile debugger verion of Chrome.
<a href="https://www.html5rocks.com/en/mobile/touchandmouse/">Touch in HTML5 article</a>
I mentioned earlier about the limited clickable area due to layering issues. This also gave me a chance to look at the z-index 
property that is defined in CSS files. I found out that HTMLElements that don't have a set z-index automatically appeared below 
elements that did. This was causing problems as the z-index of the image was originally -1. Once I added a z-index value to the 
div containing text and changed each div's z-index values to be positive, the image became clickable. 


