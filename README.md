Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Heroku  
===

Peter Maida  
http://a1-petermaidarobot.herokuapp.com

This project shows the deployment of a simple website using the Heroku web platform (http://www.heroku.com). It is intended as a chance to get up to speed on Git, GitHub, and Heroku. The website itself is an about page that has information about me.

## Technical Achievements
- **Links**: The course descriptions have been linked to the listed courses under the experience section of the website. What I have learned when adding the links and changing the colors of the link, visited, hover, active states is that the ordering of states in the css matters, as one may override the other. The rules for ordering states is that hover must come after link and visited, and that active must come after hover. There are areas where these states overlap, and that is why the importance of each state matters. The source of this can be found at https://www.w3schools.com/css/css_link.asp
- **Classes**: By following a walkthrough on Youtube I was able to create classes for different sections of the HTML. By creating these classes, it is much easier to edit variables in an alternative CSS file, which extracts presentation features from the HTML allowing it to focus on semantics.

### Design Achievements
- **Alignment**: Shown..
- **Color**: Shown..


Sample Readme (delete the below when you're ready to submit, and modify the above with your links and descriptions)
---

Assignment details:

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
