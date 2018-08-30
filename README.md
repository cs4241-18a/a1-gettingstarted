# Assignment 1- Hello World: Basic Deployment w/ Git, GitHub, Heroku
---
Abigail Roane
http://a1-arroane.herokuapp.com

This project shows a basic web application that I deployed using HTML, CSS, Git, GitHub, and Heroku. At its most basic level, this project required me to edit text within an HTML file and, with the help of Git and Heroku, deploy the altered web page.

## Technical Achievements
- **Served a static CSS file**: I altered the original `server.js` file to add a `style.css` file to allow for the addition of design to the web page. I added a case to the original switch statement that utilizes the given sendFile() function to send a `style.css` file in addition to the index.html file.
- **Added HTML tags to the original file**: I added html tags to the original file to improve the organization of the information on the page in order to allow it to be styled further.
- **Changed the port that the web page is served on**: I changed the value of the PORT variable in the server.js file. It was a relatively trivial change, but it allowed me to better familiarize myself with the way that the `server.js` file functions, and may prove useful in the future.

### Design Achievements
- **Implemented a Grid-based Layout**: Shown in `style.css`, parts of the webpage contained within the "div" HTML tags are displayed in the style of a block. Instead of a long vertical list of information, the webpage is broken into blocks that line up. This brings balance to the webpage. There are currently only two "blocks" with real information in the grid (academics and experience). Additional "blocks" are visible as placeholders, denoted with the title "Extra Block."
- **Implemented a color change of blocks on mouse hover**: Shown in `style.css`, when a user hovers their mouse over an existing "block" in the website grid, that block changes color from gray to white. This brings emphasis to the block that the user is hovering over.
- **Implemented Responsive Grid Width**: Shown in `style.css`, the div tags that make up the grid have widths relative to the full width of the page. This allows the grid to fit to the width of the page, rather than keeping a fixed size grid no matter the size. At extremely small widths, the grid will no longer appear normal, but overall this makes for a better looking web page on various different web page widths. Unfortunately the box height is not responsive- this would be an area to improve given more time and/or web development training.


