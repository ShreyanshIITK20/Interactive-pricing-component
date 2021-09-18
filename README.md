# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects wherein we are tested on our ability to convert observations into code. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size (recommended sizes: 375px and 1440px)
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: [Git repo](https://github.com/ShreyanshIITK20/Interactive-pricing-component)
- Live Site URL: [Interactive pricing component by Shreyansh Agarwal](https://shreyanshiitk20.github.io/Interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Bootstrap-5](https://getbootstrap.com/)
- Javascript ES6
- Mobile-first workflow

### What I learned

This challaenge was pretty good on manipulation of inputs which are dynamic in nature, have non-uniform step sizes and toggling logically to display different values. It was a great combination of javascript's functionality and advanced CSS manipulation. It also required to manipulate CSS properties using JS's logic (slider's color). I learnt alot more about positioning of elements, DOM manipulation and controlling CSS using JS.

```html
<span class="toggle_switch form-check form-switch form-check-inline">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" oninput="toggle()">
</span>
```
```css
.sliding{
    -webkit-appearance: none;
    width: 100%;
    height: 7px;
    background: linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%, hsl(224, 65%, 95%) 100%);
    border-radius: 15px;
    outline: none;
    opacity: 0.8;
}
.sliding::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-image: url("images/icon-slider.svg");
    background-repeat:no-repeat;
    background-clip: content-box;
    background-position: 50%;
    background-size: 20px;
    background-color:hsl(174, 86%, 45%);
    filter: drop-shadow(0 0 0.5rem hsl(174, 86%, 45%));
    cursor: pointer;
  }

  .sliding::-webkit-slider-thumb:hover{
      background-color: hsl(174, 79%, 38%);
  }
```
```js
document.getElementById("slider").oninput = function(){
    $('.page_val').html(netVal(this.value).pageview)
    $('.pricing').html(netVal(this.value).price)

    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}
```

### Useful resources

- [Bootstrap](https://getbootstrap.com/) - Bootstrap's components come very handy while positioning; adding custom styles to them is easier than creating an element from raw HTML and then adding same styles. Bootstrap's grid system also works pretty well when working with responsive columns.
- [HTML DOM input range](https://www.w3schools.com/jsref/prop_range_value.asp) - Article that helped to manipulate input tag.
- [Customising thumb of slider](https://stackoverflow.com/questions/24651449/change-background-image-of-webkit-slider-thumb-by-jquery) - Stackoverflow's solution to customise the webkit-slider-thumb using jQuery

## Author

- [Frontendmentor profile](https://www.frontendmentor.io/profile/ShreyanshIITK20)
- [Instagram profile](https://www.instagram.com/_shreyanshagarwal_/)
- [LinkedIn profile](https://www.linkedin.com/in/shreyansh-agarwal-9a0482131/)
- [Twitter account](https://twitter.com/_Shreyansh13_)
