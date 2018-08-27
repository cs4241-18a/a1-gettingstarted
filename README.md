Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===
Kyle Corry

http://a1-kylecorry31.herokuapp.com

This project shows some basic information about me. 

### Technical Achievements
- **Dynamically loaded content from the web**: As someone with a lot of GitHub repositories, I wanted that number to be displayed on my website, but I didn't want to have to update it whenever I did a new project. I researched the best way to go about dynamically loading the number of GitHub repos from my profile and ended up at the GitHub API website. The API was very easy to use, and I just needed to fetch a URL to receive a JSON response containing the count of repositories. I used the Fetch API to do this, which is built into JavaScript now. After receiving the response, I parse the JSON and write to the innerHTML of a few spans which I gave unique IDs to. I also wanted to display my Overwatch rank (even if it isn't good), and to do that I had to use an NPM package. I research how to include the overwatch-api package into this project and ended up using the `npm install --save overwatch-api` command. This included a line in the `package.json` file and downloaded the source code to the `node_modules` folder. I then added another endpoint to the server, `/overwatch`, which allowed my to use the Fetch API to receive a JSON response containing my rank. Using the existing `sendFile` function, I created a second function which allowed my to send a JSON response containing my Overwatch rank. Using online documentation for the NodeJS http API, I also handled errors getting the data by returning a 500 (internal server error) response, this makes my code more robust to errors. The changes can be found in: `index.html`, `package.json`, and `server.js`.  
	- References
		- [GitHub API](https://developer.github.com/v3/)
		- [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
		- [NPM - overwatch-api](https://www.npmjs.com/package/overwatch-api)
		- [NodeJS - HTTP](https://nodejs.org/api/http.html#http_response_statuscode)

### Design Achievements
- **Optimized site for reading**: Using a variety of online resources, I modified the max width of the body tag for the page to allow for the best reading width. According to my research, this was around 560px which allowed about 59-72 characters per line (sans-serif is not a monospace font) at a size 16 sans-serif font. To choose the font color, I wanted a color which was aesthetically pleasing, but still of sufficient contrast for people with seeing trouble. To do this, I used w3's guide on contrast ratios and calculated the contrast ratio of my text color (hex: #555555) to background color (hex: #ffffff). The ratio I calculated with the help of [this website](https://contrast-ratio.com/) was 7.45, meeting the recommended minimum ratio of 7. To choose the font size, I referred to Google's Material Design Guidelines and used their Body 1 recommendations for the size and letter spacing (16px, 0.5 spacing). Using the MDN web docs, I added the meta viewport tag to the page to allow for enhanced mobile usage of the website. I believe this makes the page more "usable" than the original assignment because it is much easier on the eyes, and is backed by research. To view for yourself the difference that styling the page for readability makes, look at the page [with styling](http://a1-kylecorry31.herokuapp.com) and [without style](http://a1-kylecorry31.herokuapp.com/no-style.html). All style changes can be found in `style.css`.
	- References
		- [Baymard Institute - Readability: the Optimal Line Length](https://baymard.com/blog/line-length-readability)
		- [W3C - G17](https://www.w3.org/TR/WCAG20-TECHS/G17.html)
		- [Material Design - The type system](https://material.io/design/typography/the-type-system.html#type-scale)
		- [MDN - Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag)


