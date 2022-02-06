# Web Lab 05: Responsive Design

Begin by forking this repository into your lab exercises namespace by clicking the ```fork``` button.

![](spec/template/fork-button.png)

Select your lab exercises namespace as the fork destination on the resulting window.

Once forked, clone the repository to your computer by following the instructions for your editor.

Before starting on the exercises, take a look through the project and explore the files available to you.



## Preamble

These exercises make use of CSS Grid and CSS Flexbox, which are modern CSS solutions to complex (and simple) layout problems. Historically solutions to these problems would be solved using ```float``` or a library such as Bootstrap so many solutions you find online will revolve around these. Avoid the temptation to use these 'found online' solutions at least for this lab.

Firefox is the preferred browser for developing Grid/Flex based layouts due to its developer tools support for these layouts. Take a look over the Mozilla [introduction to grid layout](https://mozilladevelopers.github.io/playground/css-grid/) tutorial for some grid examples, and a showcase of the Firefox tools specific to these features. 



## Exercise One &ndash; Two Column Layout

Begin by creating a new folder ```ictgradschool/web/responsive_design/ex01``` in your project. In this folder, create 2 files:

+ ```two_col.html```
+ ```style.css```

Using CSS Grid, recreate the following 2 column layout webpage in these new files.

![](./spec/responsive_design/ex01-screenshot.png)

This page is made up of 4 major elements: the header, left column, right column, and footer. 

The header element should be positioned at the top of the page, and should occupy the full width of the viewport. Surround the header with a simple **1px** wide black border, and color it a shade of orange. Inside the element, add 2 text elements containing the words *Home* and *Login*. The *Home* element should be aligned to the left side of the header, and the *Login* to the right. These should be vertically-centered within the header, and should have a small amount of space between the text and the edge of the header. Do **not** use floats for this, investigate the CSS feature ```flexbox```. 

The footer element should be the same height and width as the header, and again should have a simple black border, but the background color should be a shade of purple. Centered both vertically and horizontally, add a text element with the text ```Created by: username```, where ```username``` should be your name. As with the header, do not use floats for this alignment.

The left and right columns should have the same width and height as each-other, and should be centered on the page to the left and right of the center line, with empty space between them and the edge of the viewport. Surround each of these elements with a simple black border that has a moderate radius on each corner. Each column should be colored a shade of blue. Fill these columns with some placeholder Lorem Ipsum text, then style this so that the text is justified and has suitable space between the text and edge of the column.


## Exercise Two &ndash; Media Queries

Make a copy of your ```ex01``` folder and name the copied folder ```ex02```. Modify your ```ex02/style.css``` so that when the browser displaying the ```ex02/two_col.html``` file is resized so that its width is less than **1000px**, the layout converts to a stacked-column layout, with each column of text occupying the full width of the page. This should look something like the following picture.

![](./spec/responsive_design/ex02-screenshot.png)

*Hint*: This can be done with a single media query modifying only the **```grid-template-*```** properties of your CSS Grid container.

![image-20211212194248630](README.assets/image-20211212194248630.png)



## Exercise Three &ndash; More Media Queries

Open ```ex03/sonnets.html``` and edit the style block with media queries so that:

+ The decorative corner images are only shown on screens larger than 1500px wide
+ On screens narrower than 700px, **remove**:
  - The drop shadow from the page elements
  - The curved corners on the page
  - The vertical scroll decorations
  - Any horizontal padding
+ When printing, ensure that the page follows the characteristics described in the provided lab resource document

![image-20211212201442936](README.assets/image-20211212201442936.png)



## Exercise Four &ndash; Transitions

Open ```ex04/christmas_tree.html``` and explore the provided code.

![](./spec/responsive_design/ex04-screenshot.png)

In this exercise, you'll re-implement `web-lab-04 - Exercise Two`, where you made the baubles expand when hovering over them with the mouse. However, this time, set the *scale* function of the baubles' ```transform``` property, rather than directly changing the baubles' width or height.

Once you've done that, further modify your code such that the bauble moves smoothly between "small" and "large" states. Decide whether it would make sense to use a *transition* or an *animation* for this exercise.

![image-20211212210624205](README.assets/image-20211212210624205.png)

## Exercise Five &ndash; Animations

Make a copy of the files in the ```ex04``` folder and place them in the ```ex05``` folder. You may need to create this folder yourself. Close all open editor tabs, then when opening files to edit, open them from the ```ex05``` folder.

Open the ```christmas_tree.html``` file from the ```ex05``` directory of the project. Use CSS ```@keyframes``` animation to get the baubles to all fall down simultaneously and bounce up and down twice before coming to a standstill. Get the animation to restart each time you hover over the image. The baubles should remain on the ground after the animation is complete.

*Note*: **All** baubles should animate **at the same time**, whenever you hover over any part of the image. They shouldn't animate individually.

*Hints*:

- Think about how you'd style all your ```.bauble``` elements to include your animation, but only when you're hovering over the ```#container```.
- Have a look at the ```animation-fill-mode``` property to make the baubles stay on the ground.
- Do you need to set the baubles' initial positions in the ```@keyframes```? What happens if you leave the ```from { }``` section blank?

### Bonus

As an extension, make the baubles stay on the ground at all times when not animating, even when you're not hovering over the image. You should be able to add this functionality with only **one** extra CSS rule, and *without* modifying any of the CSS already written.

![image-20211212211408825](README.assets/image-20211212211408825.png)



## Exercise Six &ndash; Scalable Vector Graphics

In the ```ex06/index.html``` file, you will find three Scalable Vector Graphics (SVG) elements embedded in the page. These represent a maze, a figure and a monster. Using CSS animations, animate the monster chasing the figure through the maze. You should ensure that:
- Neither the figure nor the monster pass through any of the maze walls
- The figure and the monster use different ```@keyframes``` for their animations
- The monster gives the figure a slight head start
- The monster should almost, but not quite, catch the figure at the end of the maze

![image-20211212223318178](README.assets/image-20211212223318178.png)



## Exercise Seven &ndash; A Larger Page

Start by creating a new folder ```ictgradschool/web/responsive_design/ex07``` in your project. In this folder, create 2 files:

+ ```music_store.html```
+ ```style.css```

In these files you will create the structure and styling for a responsive CSS Grid based music store. In this website you will display information about 3 genres of music that you may choose; for each showing album art for a single album along with some details about the album, and some information about the associated artist.

Begin by copying the contents of the ```example06/index.html``` into your ```music_store.html``` file, and copying the ```example06/res``` directory into the ```ex07``` directory. This will give you a starting point to begin your layout, and will give you a responsive navigation bar.

Extract the CSS from the head of your ```music_store.html``` document and relocate it to the ```style.css``` file - remember to ```link``` the style file back to the HTML. Familiarize yourself with the contents of both of these files to get a feel for how it works - you will be modifying this to suit your own purposes. 

Modify your navigation bar so that the **brand** text - the content to the left of the navigation bar - so that it contains the text ```My Music Store``` and has a larger font size than is there by default. Further modify the links in the navigation bar so that they indicate the 3 genres you will displaying on your store. Modify the color of the navbar to something nicer than the default.

Add a footer to your document that spans the full width of the page, and is placed underneath the content of the page. This footer should have the same height and color as the navigation bar, and should have your name centered vertically and horizontally within in a contrasting color. *HINT*: You will want to modify the grid layout to accommodate the new footer, and take advantage of flexbox to position your name within the footer.

At this stage your page should look similar to this:

![image-20211212223441924](README.assets/image-20211212223441924.png)

![](./spec/responsive_design/ex07-screenshot.png)



## Exercise Eight &ndash; Adding Columns

Make a copy of your ```ex07``` directory, naming your copy ```ex08```. Close all open editor tabs and reopen them from the ```ex08``` directory.

Break up the content pane into 4 rows stacked vertically. Each of these rows should be sized based on the height of the contents contained within, and should be colored clearly so they can be easily seen. Within each of these rows, add a larger header that contains a title for each section - the first should be called ```Introduction```, while each of the others should be named after your chosen genres. Update the navigation bar so that when a navigation item is clicked, the page scrolls to the relevant section of the page.

Populate the ```Introduction``` section with 5 paragraphs of lorem ipsum text placed underneath the header. Justify the text and add some padding to make the content look pleasant. Insert a logo of your choice between your filler text and the Introduction header, ensuring that the size looks reasonable on the page. Modify the ```Introduction``` row so that elements are aligned on the vertical axis

At this stage your page should look similar to this:

![image-20211213094759524](README.assets/image-20211213094759524.png)

![](./spec/responsive_design/ex08-screenshot.png)



## Exercise Nine &ndash; Round Images

Make a copy of your ```ex08``` directory, naming your copy ```ex09```. Close all open editor tabs and reopen them from the ```ex09``` directory.

Modify each of your 3 genre rows so that underneath the header an image will appear side-by-side with 4 paragraphs of text. The image should contain some album art (or a filler image). Modify the image so that it appears to be circular.

*Hint*: look into ```border-radius```. 

You should alternate the positions of the images in your genre rows so that they are positioned on the left then the right.

When complete, each genre block should look similar to the below.

![image-20211213130420399](README.assets/image-20211213130420399.png)

![](./spec/responsive_design/ex09-screenshot.png)



## Exercise Ten &ndash; Getting Responsive

Make a copy of your ```ex09``` directory, naming your copy ```ex10```. Close all open editor tabs and reopen them from the ```ex10``` directory.

Make the necessary changes to the ```style.css``` file so that if the width of the window drops below 1000px, the content rows occupy the full-width of the window with no whitespace around them.

Make further changes so that when the width of the window drops below 768px, the horizontal album image and text contents transform so that the image appears belpw the heading and centered, but above the following lorem ipsum text.

When complete, your page may look something like this.

![image-20211213140409162](README.assets/image-20211213140409162.png)

![](./spec/responsive_design/ex10-screenshot.png)

addd
