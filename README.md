# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot-mobile.png)
![](./screenshot-desktop.png)

### Links

- Solution URL: https://github.com/yogaajie2/huddle
- Live Site URL: https://pedantic-jones-85d39b.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxtjs.org/) - Vue framework
- [Tailwind](https://tailwindcss.com/) - CSS framework

### What I learned

Modified my custom email validation function from the Huddle challenge a bit to work on two forms.

```js
validateEmail: function(email) {
  const regex = /\S+@\S+\.\S+/;
  
  let validation = regex.test(email);

  if (validation) {
    this.isValid = false;
    this.hideCheckEmail = true;
    
    alert('Thank you for subscribing!');
  } else {
    this.isValid = true;
    this.hideCheckEmail = false;
  }
}
```

### Useful resources

- [JS RegEx for Email Validation](https://stackoverflow.com/a/9204568) - Short and simple solution vor email validation.

## Author

- Website - [Yoga Ajie Prasetya](https://github.com/yogaajie2)
- Frontend Mentor - [@yogaajie2](https://www.frontendmentor.io/profile/yogaajie2)

## Acknowledgments

- C. Lee - [c-lee](https://stackoverflow.com/users/270821/c-lee) - For sharing the RegEx solution on Stack Overflow.