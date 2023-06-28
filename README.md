# Frontend Mentor - Results summary component solution

Hey, what's up?.

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

(free) Newbie challenge 1/18

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [About me](#About-me)

## Overview

This project consist in a very simple centered component divided into 2 different containers. An ideal project for people who just started with CSS, learn the basics of Flexbox, or for someone who needs to practice and refresh their memory after a long time away from coding.

### The challenge

Users should be able to:
- Make a replica of the proposed project, as close to the original as possible and make it responsive so it can be seen right in smartphones.

![solutionScreenshot](https://github.com/TomasPereira-Dev/frontendMentor-Challenge1/assets/81960258/f1c9876a-1a4f-41e0-a914-f9ddaf0e5d24)

### Links

- Solution URL: []([https://your-solution-url.com](https://www.frontendmentor.io/solutions/results-summary-component-made-with-react-and-flexbox-cJ89ONwVT7))
- Live Site URL: [](https://tomaspereira-dev.github.io/frontendMentor-Challenge1/)

## My process

I started with this challenges because, when working in a personal project i notice that my positioning skills were not that great, i needed to improve if my goal was to get a job in this field, so instead of feeling bad and stay on my bed all day i decided to get my hands dirty and start working on it, on having a better eye for small details.

I have already spent 2 years coding, most of my focus went to React and JS, so it was not very hard to do.

The first thing I did was build the HTML and add the necessary classes to every element that I needed to modify after looking closely at the image given by the project. Because the project consisted in 2 separated sections (the total score and the summary), they were separated in 2 different containers, wrapped in a father container to center it in the middle of the screen, adding height: 100% to the html, and body and using flexbox to align it to the center of the page, after that I started with the summary section, using flexbox gives you the chance of use the gap property, that allows you to add a gap between every element in the container, so i added like a gap of 1em, then for the color of the different categories i used a chrome extension called ColorZilla to pick the exact color for them, it were pretty much the same color of the font but more transparent, like a very bright tint, also for curiosity i used Coolors to see how far the tint was from the original color. If you look at the score of every category you will notice at first glance that one part is black and the other gray,  but it’s not, the bolded, darker part is the same color of the continue button, like a dark blue with low saturation(lower saturation = more grayish the color will be).

It might be a small detail but it’s important to know why it’s not a total black color, in real life we hardly see pure whites and blacks, the same goes with grays, when we see them in a screen they don’t look natural at all and gives you the feel that something is off, that’s why you should low the saturation or give more hue to the colors you use in your designs and avoid using pure white, black or gray. I recommend you to read this article when you have the time, it explains this in more detail.
[](https://blog.prototypr.io/how-to-use-colors-in-ui-design-16406ec06753)

For the fonts, I’m not so sure if they are correct, I mostly used p tags for most of them, when i needed to add more attention to some things, I used strong tags to make them bold, some strong tags are modified to have its text with more font-weight or size. I didn’t used headings tags like h1 or h2 because there were too big and feel like something is wrong, also there was no main title to have a hierarchy, you should only use h1 once in a page in the main title, if there is no h1, what's the use of an h2? there is no main title to add a subtitle there, here I did a mistake, in the total score text section there is a h2, I tried adding more size and weight to a p for that part but never looked too similar to the reference image, the closest i got was using a h2 tag, so if anybody can help me with this it will be appreciated.

In the total score section there was some text that needed to have a limit, when its text became too long it should continue in a new row, for that I added a max-width to that p using ch as the unit of measurement, ch is based on the relative width of the zero character of the font, it’s a easy way to calculate that max-width pretty much with the amount of characters written, I got this tip from a Kevin Powell video, it haves other useful tips so check it out, also check his entire channel, he is the god of css, an absolute legend 🙂.

[](https://www.youtube.com/watch?v=6ardZEhjvV0)

I did this trick also for the score inside the circle, but there is something that don’t work exactly as i want, while it looks pretty similar to the reference image, if you change the text to a 100 of 100 score, for example, it doesn’t look as nice as it should, maybe it’s a problem with the challenge itself or it’s something I did wrong, so if somebody got a better way to do this I’m happy to hear it.

The backgrounds and gradients are no problem, they are already in the style guides so I will skip that part.

The last part is the responsive version, I only did it for phones because the reference image have only 2 examples, for desktops and for phones, there is only 2 changes, the first one is a change of the flex-direction of the component container, from row to column, the second one is a change to the top right and top left borders of the total score container, from 5% no none.

And that’s it, this project took me around 6 hours total to finish (12 pomodoros with the pomodoro technique), I think maybe I need to work on writing code faster.


### Built with

- [React](https://reactjs.org/) 
- Flexbox

### What I learned

I didn’t learn a lot of new things, except for using the ch unit for limit a row from growing with max-width in texts.

### Continued development

I feel that I want to get better at design and color, but this challenge already gave you the answers to all of that, so I want to focus on that and with positioning, its one of my weakneses.

## About me

- My Portfolio - [Tomás Pereira]([https://www.your-site.com](https://tomaspereira-dev.github.io/Portfolio/))
- Frontend Mentor - [@TomasPereira-Dev](https://www.frontendmentor.io/profile/TomasPereira-Dev)
- Twitter - [@TomasPereira_JS](https://www.twitter.com/TomasPereira_JS)

