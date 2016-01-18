## Website Performance Optimization 

This is the fourth project from the Front-End Web Developer Nanodegree in <a href="http://www.udacity.com" target="_blank">Udacity</a>:<br>
optimized index.html to achieve a score of 90 in PageSpeed, and optimized main.js to achieve 60 fps in pizza.html.

####Part 1: Optimize PageSpeed Insights 

- Minify CSS and JS files with Grunt, in the production version /dist/
- Optimize images (size and compression) with Grunt, in the /dist/
- Eliminate render-blocking JavaScript and CSS in above-the-fold content:
  - style.css inlined in index.html.
  - print.css with the media=print tag.
  - Put the Google Analytics script to the footer of the page.
  - Load asyncronoulsy the Google Fonts with a script in the footer.
- Create web.config file to put an expiry date to static resources (css, images and js).

####Part 2: Optimize Frames per Second 

- Apply optimizations for PageSpeed: minify css and js, optimize images, inline css, configure the viewport.
- Optimizations made in views/js/main.js:
  - Put 'use strict' in each function to make the code more secure.
  - Change querySelector and querySelectorAll to getElementById and getElementsByClassName, to make it faster.
  - Delete the function determineDx, since we change the pizza size inside the changePizzaSizes. Also optimize the loop in changePizzaSizes to put the new width in each .randomPizzaContainer.
  - Create all the variables outside of loops where possible.
  - In updatePositions, phase only have 5 different values, because it changes for each (i % 5). So we create an array where we put the 5 values. We also put the phase variable outside the for loop, to separate the manipulation of the DOM from the methods that query the state. And finally we optimize the loop. 
  - Calculate the total number of pizzas we need for the screen we are using, and then create the exact number of pizzas onscreen. Put the optimized image of the pizza with its real size.
- Optimizations in CSS: put will-change:transform;transform:translateZ(0);backface-visibility:hidden; in the .mover class. This way we will create diferent layouts for each pizza and the main layout will not be repainted every time we create a pizza.

-----------------------------------------------

### Folders

In the /original/ folder, there is the original source code provided by Udacity.

In the /test/ folder, there is the development source code.

In the /dist/ folder, there is the production code, with the minified css/js and optimized images. 

-----------------------------------------------

### To run the application

1. Download the /dist/ folder in your computer.
1. To inspect the site on your phone, you can run a local server:

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080.
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely:

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights and Chrome DevTools!


-----------------------------------------------

### To create the production version

To build the production version, you need to have Grunt installed in project folder.
You also need the /test/ folder, and the gruntfile.js and package.json files in the root. 

Then you go to the console, go inside the project folder, type "grunt" and click Enter.

The /dist/ folder will be created, with all the HTML files, and the subfolders of css, js and img optimized and minized. 

To install grunt, <a href="http://gruntjs.com/getting-started" target="_blank">follow this instructions</a>. 

-----------------------------------------------

### Udacity's instructions

You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

1. Review our course on Website Performance Optimization using Google PageSpeed.
2. Download the required project assets.
3. Use Chrome Developer Tools to review the current state of various pages within the application and identify areas for improvement.
4. Review the code powering the website and identify areas where you believe modifications are warranted.
5. Iteratively make changes and test those changes using the tools available to you to determine if they are a performance gain or loss.

---------------------

### License

The project is licensed under the [MIT license](license.txt).
