# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![browser-extensions-manager-ui](https://github.com/user-attachments/assets/c1bdafe6-af0d-46b4-aaf5-8e94c707d780)

### Links
-  [Solution URL](https://github.com/JudithJude369/Browser-Extensions-Manager-UI)
-  [Live Site URL](https://browser-extensions-manager-ui-psi.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  
### What I learned
This project really thought me alot, especially in the aspect of using storing user preference with localStorage.
```react
 const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
```
```css

main {
  max-width: 900px;
  width: 90%;
  border-radius: 5px;
  background-color: var(--Blue-900);
  box-shadow: 0 10px 15px -3px rgba(61, 8, 8, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: var(--FS);
  position: relative;
}
```
To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
### Continued development

I hope to build more with React and also improve my responsive design.

### Useful resources

- [FreeCodeCamp]https://www.freecodecamp.org/) - This freecodecamp fullstack curriculum is helping me understand Javascript.

## Author
- Frontend Mentor - [@JudithJude369](https://www.frontendmentor.io/profile/JudithJude369)
- Twitter - [@JudithJ08832378](https://x.com/JudithJ08832378)


## Acknowledgments
I would like to really acknowledge freecodecamp for making learning easy and resources accessible for everyone.
