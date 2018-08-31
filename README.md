Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===

Matthew Kornitsky  
https://a1-matt-korn.herokuapp.com/

This project shows some information about my interests and web development experience. This was accomplished through a sleek and modern website that was designed with usability and accessability in mind. The project also includes a section related to something that I am very passionate about, ART!

## Technical Achievements
* __Modified Server Paths__
    * Modified server.js paths to enable the server to find my custom stylesheets and scripts 
* __External JavaScript Library__
    * Used FreeVisitorCounters library to keep track of the number of unique visitors that the site has 
* __XMLHttpRequest__
    * Used XMLHttpRequest to Retrieve photo data from the Unsplash API
    * Also involved writing callback functions for manipulating the DOM, parsing JSON data, and handling HTTP error responses (see `script.js` file)

### Design Achievements
* __Font__
    * Read [The Ultimate Guide to Font Pairing](https://www.canva.com/learn/the-ultimate-guide-to-font-pairing/) 
    * Searched through Google Fonts and selected two fonts that complemented each other for header and body text
        * Wanted fonts alone to set the sophisticated, yet warm tone of the site
        * Raleway, similar to the font "Roboto Condensed" in the article, is a sans serif typeface with a "sans serif reading rhythm, which makes it a great choice for body copy"
        * Vollkorn, similar to the font "Lora" in the article, has brushed curves that make it a "very elegant and sophisticated typeface"
    * Tried to keep lines of text short and easy to read and not too much letter spacing either
* __Color__ 
    * Read [Essential Colour Guide for Designers: Understanding Colour Theory](https://www.creativeboom.com/resources/essential-colour-guide-for-designers-understanding-colour-theory/)
    * Used analogous colors (colors next to each other on color wheel) to create background gradient (#25c481 to #25b7c4), following the articles advice that analogous colors "typically combine beautifully and create appealing schemes for your designs"
    * Chose warmer shades of green, which represents nature and balance, and blue, which represents peace and calm, to make the users feel welcome
* __Whitespace__
    * Read [Whitespace in Web Design: What It Is and Why You Should Use It](http://blog.teamtreehouse.com/white-space-in-web-design-what-it-is-and-why-you-should-use-it)
    * Adjusted padding and margins around the site body and headers and modified paragraph line spacing to "make sure the reader’s experience continues to flow properly"
    * Removed main scrollbar to cleanup appearance and create infinity effect (the user scrolls without any knowledge of where the bottom is)
* __Hyperlinks__
    * Added hyperlinks to course numbers (in table) so that users could quickly navigate to correct section of WPI courses page and read course description
* __Flexbox__
    * Used CSS Flexbox in image gallery to create grid and columns that could adapt to various image sizes
* __Incorporated Visualizations__
    * Read [Why People Love Great Visuals, Based on Science](https://piktochart.com/blog/why-people-love-great-visuals-science/), which demonstrates the ability of visuals to increase appeal, comprehension and retention
    * Condensed course information into a data table to reduce whitespace and display more as a visualization than a list would
    * Took programming experience, which was also a text list, and moved it into a grid of images of the particular languages
* __Content Alignment__
    * Read [Effective design principles for web designers: Alignment](https://www.techrepublic.com/blog/web-designer/effective-design-principles-for-web-designers-alignment/), which discussed various alignment strategies and use cases for each 
    * Left aligned text is easier for a user to read, but in an effort to abide to the visualization rule above, text on the page was kept to a minimum, and all the content was centered because symmetric visualizations are significantly more appealing
* __Animation and Hover Effects__
    * Made page more interactive by enabling users to hover over images of programming languages to reveal my skill level, as opposed to listing it below the image
        * When user hovers over image, it is turned to grayscale and the opacity is reduced significantly, so that the appearing text dominates the tile
    * Used CSS transition to make grayscale and opacity effects occur over a period of time
        * This creates a much nicer user experience than having the tile change instantly on hover  
    * Added hover effect to scroll bar of courses table, so that it is not always visible, but will appear if a user needs it
