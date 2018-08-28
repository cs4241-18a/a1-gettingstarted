# Assignment 1 - Hello World

http://a1-c7c8.herokuapp.com

https://ravana.dyn.wpi.edu/a1-c7c8

The site created shows the requirement information on the main page, but
in a different way than expected -- the entire site runs off a CentOS 7
VM, running under ESXi 5.5 (hypervisor), which in turn is running on a
server of mine that lives up in Atwater Kent. I've configured Heroku to
simply redirect to my own server, which should in the long run prove to be
much more flexible. I am aware that it is my duty to keep this server
running for the duration of the class such that it can host my projects,
and I accept the responsibilities that this entails.

## Technical Achievements

* Built site on top of Angular 6
* Site running on different tech stack. Instead of HTML/CSS/JS on NodeJS
on Heroku, the site runs on HTML/CSS/TypeScript on Apache on a CentOS 7 VM,
running under ESXi 5.5, on a big server I have stored elsewhere. This allows
for some extra features that can't be obtained from Heroku without paying
for them.
* Site runs entirely over HTTPS; plain HTTP is disabled.

## Design Achievements

* Site uses Google's "Material" design for a cleaner user experience
* Fully responsive design allows usage on most screen sizes
* Site content includes snarky tooltips, sarcastic snackbars, and general
insanity. Just for fun.
