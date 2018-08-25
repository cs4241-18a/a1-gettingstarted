Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===
Kyle Corry

http://a1-kylecorry31.herokuapp.com

This project shows some basic information about me. 

### Technical Achievements
- None, added other endpoints to the nodejs server for the style.css and no-style.html though.

### Design Achievements
- **Optimized site for reading**: Using a variety of online resources, I modified the max width of the body tag for the page to allow for the best reading width. According to my research, this was around 560px which allowed about 59-72 characters per line (sans-serif is not a monospace font) at a size 16 sans-serif font. To choose the font color, I wanted a color which was aesthetically pleasing, but still of sufficient contrast for people with seeing trouble. To do this, I used w3's guide on contrast ratios and calculated the contrast ratio of my text color (hex: #555555) to background color (hex: #ffffff). The ratio I calculated with the help of [this website](https://contrast-ratio.com/) was 7.45, meeting the recommended minimum ratio of 7. To choose the font size, I referred to Google's Material Design Guidelines and used their Body 1 recommendations for the size and letter spacing (16px, 0.5 spacing). I believe this makes the page more "usable" than the original assignment because it is much easier on the eyes, and is backed by research. To view for yourself the difference that styling the page for readability makes, look at the page [with styling](http://a1-kylecorry31.herokuapp.com) and [without style](http://a1-kylecorry31.herokuapp.com/no-style.html). All style changes can be found in `style.css`.
	- References
		- [Baymard Institute - Readability: the Optimal Line Length](https://baymard.com/blog/line-length-readability)
		- [W3C - G17](https://www.w3.org/TR/WCAG20-TECHS/G17.html)
		- [Material Design - The type system](https://material.io/design/typography/the-type-system.html#type-scale)


