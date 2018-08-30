Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===

This assignment is a "warm-up" exercise.
You will simply deploy the starting Web site that you will use this term to the [Heroku Web platform](http://www.heroku.com/).

Refer to [Getting started with node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

(Thanks to past instructors of the course, here is a short [getting started with Heroku movie](http://web.cs.wpi.edu/~gpollice/Movies/HerokuGettingStarted/) that may also help.)

Treat this assignment as a chance to get up to speed on Git, GitHub, and Heroku.
If you already know these, great.
However, if you're new to them, spend several hours practicing, experimenting, and reading documentation.
In other words, don't just get your website up and done. You will need skill with these tools throughout the rest of the course.

Assignment details
---

Do the following to complete this assignment:

1. Fork the starting project code. This repo contains:
    * the server code, `server.js`
    * the `Procfile` that you need for Heroku deployment
    * A starting `index.html` file that you will edit as described below
2. Edit `index.html` to show the following information about you:
    * your name and class at WPI (e.g. class of 2020) Note: Do not put any contact or personal information that you do not potentially want other people outside of this class to see.
    * your major(s) and minor(s)
    * previous computer science courses that you have taken at WPI
    * your experience with the following technologies and methods (none, some, a lot)
        * HTML
        * CSS
        * Java
        * JavaScript
        * Ruby
        * Python
        * unit testing
3. Test your project to make sure that when someone goes to your main page, it displays correctly.
4. Deploy your project to Heroku.
5. Ensure that your project has the proper naming scheme (guide follows) so we can find it.
6. Modify the Readme to the specification below.
7. Create and submit a Pull Request to the original repo.

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Heroku assigns your application a random name.
To change it, follow [this guide](https://devcenter.heroku.com/articles/renaming-apps).

The name scheme should be `a1-yourGitHubUsername`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future projects.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [Technology Fundamentals by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#_html) and/or [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript).

If you need a Git/GitHub refreseher, see [GitHub Bootcamp](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

readme - svadivazhagu cs4241-a1-a18
---

Surya Vadivazhagu
https://a1-svadivazhagu.herokuapp.com/

This project shows an interest in a minimalistic design while retaining the
ability to present information with clarity and efficiency. When designing this
website, I had several ideas on how to format the content, as there wasn't a
great deal of information required to be submitted, so I was brainstorming of
interesting ways on presenting them. During this time my mind was brought back
to the installation sequence of Windows 10- how once the core files are installed,
relevant text just fades in and out informing the user as to what's going on.
This design philosophy felt "clean" to me and I wanted to retain that feeling of
smoothness in my project. So, I decided upon having each section/subsection of
the page fade in order- this allows viewers to focus on each element as they're
loaded in, and fine-tuning the delay and animation duration to ensure that it did
not feel laggy; having the introduction be "snappy" every time was my goal. I will
discuss this more in the technical achievements. I saw Prof. Harrison's website
at WPI and really enjoyed the minimal design he emphasized, where it's not bland
yet just feels "cool" to read. My ultimate goal of this website was to integrate
a few interesting CSS animation concepts while not going over-the-top with a
color scheme and overall design, allowing users to view the information at their
own pace and leisure.   

## Technical Achievements
- **CSS Fade In using Delay**: I used CSS3 animations to have each section of
the webpage load in after a set delay, so that users could parse the information
more clearly and so that the website looked more modern.
- **Background gradient animation with CSS**: Due to my goal of making the website
appear minimalistic, I went with an animated background of darker colors as they
would fade together in a "cleaner" way and it would not detract from the text.
- **Tooltip fading in on hover**: This addition was made using CSS with hover,
where hovering over the word changes the opacity from 0 to 1.

### Design Achievements
- **Added fade-in tooltips for programmatic experience**: I knew that this section
may have contained a fair amount of text, so I decided to go with the hovering
tooltip solution of not detracting from the minimal aesthetic. On reflection,
I realize the most efficient way of presenting this could have been with
a graph or chart of some sort summarizing my skills- this would not have
made it a chore for viewers to understand my skills.
- **Aimed for a minimalistic design**:I went with an animated background of darker colors as
the brighter ones would strain the eyes and I wanted users to be able to focus
on the essence of the page, the text content. The animation makes the
viewing experience refreshing and not static.
- **Fade introduction for each section**: I felt as if a downfall of most
HTML webpages is that all the information is just spat out at the viewer
when they load in, which may overwhelm the eyes with information. I wanted
to avoid this by presenting each section one at a time, allowing readers the
chance to really experience the website instead of viewing a flat description.
Furthermore, I really was concerned about the animation delays of each section,
as in how long I would wait between each section before loading the next one.
I didn't want to do it too fast and end up overwhelming the user, defeating my
original purpose, or going to slow and end up boring them. I hope that I have
achieved  a "happy medium" and believe that speed of animations/transitions
is a subject to be looked into and experimented with for further projects;
understanding how reaction time can make a difference on how fast someone
can understand text and finding a good time for a generalized population.

- **Changed up the visited/not visited yet link color**: Originally the
unvisited/visted links are blue and indigo/violet (respectively) and I felt
with my change of the background to the animated gradient that those 2 colors
would not suffice as readable colors. I switched to a white and dark gray
color scheme and the readability improved. 
