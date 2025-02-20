# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w).

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: (https://conference-ticket-generator-dusky.vercel.app/)

## My process
I built this entire project on mobile so it's design is optimized for mobile view no offense 🥲🫠. Guess it's one of the cons of coding on mobile. 😅 But hey, passion beats hardware anyways. For development i used a code editor named spck editor a mobile editor available on playstore.

How i built it: 
* i started by designing the header for the form page then styling it made some adjustments on the way though. 
* Then i design the tickets html and styled which i also made adjustments on the way
* JavaScript came last (saved the best for last 😅)

Took me a month to finish the project. Obstacles were inconsistency 🥲, lacked motivation 😞 and also not having a laptop. 🥲 But I pushed through!
Just wanted to share my experience to encourage anyone out there if I could do it, so can you! 😅😂.

### Built with

- HTML
- CSS custom properties
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learnt how to preview uploaded image from input file with js

```js
const reader = new FileReader;
      reader.readAsDataURL(file) reader.onLoad is triggered
      reader.onload = function(e) {
      img.src = e.target.result;
```
i also learnt how to stack various background image and arrange them over each other in css(background.css)
```css
background: 
     url('./assets/images/pattern-circle.svg')/* circle*/, 
     url('./assets/images/pattern-squiggly-line-top.svg')/*squiggly line top*/, 
     url('./assets/images/pattern-circle.svg')/*circle*/, 
    url('./assets/images/pattern-squiggly-line-bottom.svg')/*squiggly line*/, 
     url('./assets/images/pattern-lines.svg'),
     url('./assets/images/background-mobile.png');
 background-repeat: no-repeat;
 background-size: 120px 100vh, 120px 100vh, 120px 100vh, 300px 100vh, 280vw 100vh, 150vw 300vh;
 background-position: -20px -325px, 240px -300px, 285px 260px, 1px 570px, 0 0;
 background-attachment: scroll, scroll, scroll, scroll, scroll, scroll;
 padding: 15px;
```

### Continued development

I want to add a regex to check for valid emails address.

### Useful resources
1] chatgpt - This helped me with previewing and image uploaded with an html input file.

## Author
- Frontend Mentor - [@collins52](https://www.frontendmentor.io/profile/collins52)
