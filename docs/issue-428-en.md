# 前端聚焦周刊：第 428 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Oh My RSS](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 428](https://frontendfoc.us/issues/428)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/temxuzubnjdxbrombrng.jpg)](https://frontendfoc.us/link/84052/rss)

#### [Understanding CSS Grid Template Areas](https://frontendfoc.us/link/84052/rss "www.smashingmagazine.com")

`grid-template-areas` is one of my personal favorite parts of CSS Grid as it lets you specify layouts in the form of strings of text that visually represent the outcome you want. This is a thorough introduction to the idea.

*来源：Rachel Andrew*

#### [Why JavaScript is Eating HTML](https://frontendfoc.us/link/84053/rss "css-tricks.com")

The idea of JavaScript and HTML remaining separate and _never the twain shall meet_ is now decidedly old-school and HTML-in-JS (a la JSX) is definitely A Thing™. Here’s a tour of all the parts involved.

*来源：Mike Turley*

[![](https://copm.s3.amazonaws.com/314531a0.png)](https://frontendfoc.us/link/84054/rss)

#### [A Complete Guide to Web Links and Buttons](https://frontendfoc.us/link/84055/rss "css-tricks.com")

A great resource from CSS Tricks with a lot to digest here. Starts with the basic implementation of both but quickly moves into accessibility, UX flourishes, and styling.

*来源：Chris Coyier*

#### [While You Weren't Looking, CSS Gradients Got Better](https://frontendfoc.us/link/84056/rss "css-tricks.com")

Unless you are some sort of CSS gradient expert, you are going to learn something here. Avoiding repetition by not having to repeat colors anymore is a huge win, IMHO.

*来源：Ana Tudor*

#### ['Scroll To Text Fragment' Now in Chrome 80+](https://frontendfoc.us/link/84057/rss "chromestatus.com")

Last year we mentioned the [Text Fragments spec](https://frontendfoc.us/link/84058/rss) which will let you link directly to specific content within Web pages that _doesn’t_ have an associated anchor element.. and Chrome now supports it although the formatting of the fragment name isn’t particularly elegant.

*来源：Chrome Platform Status*

#### [First Public Working Draft for Resize Observer](https://frontendfoc.us/link/84059/rss "www.w3.org")

An interesting new spec from the W3C (_based on the same concept as MutationObserver or IntersectionObserver_) that lets you observe for changes to an element’s size.

*来源：W3C*

## 📙 文章、教程、观点

#### [Same HTML, Different CSS](https://frontendfoc.us/link/84061/rss "ishadeed.com")

This is a step-by-step tutorial based on a concept from the old CSS Zen Garden site: Creating different designs via CSS while never touching the markup.

*来源：Ahmad Shadeed*

#### [Building a Performant Front-End Architecture](https://frontendfoc.us/link/84062/rss "www.debugbear.com")

A technical writeup of the key things to consider performance-wise when building a front-end.

*来源：DebugBear*

#### [Four Creative Ways to JavaScript Timing in Browsers](https://frontendfoc.us/link/84064/rss "blog.omaralshaker.com")

Interesting alternatives for `setTimeout`, `setInterval`, and `requestAnimationFrame`.

*来源：Omar Alshaker*

#### [How to Make a WebGL-Powered US Counties Map with D3 and Three.js](https://frontendfoc.us/link/84065/rss "tips4devs.com")

Creating a simple SVG-based map is one thing, but if you want the best performance, leaning on WebGL and your GPU is a good option. This tutorial covers how to approach moving from SVG to WebGL by way of Three.js.

*来源：Mika Iriarte*

#### [How to Build a Tinder-like Carousel in Vanilla JavaScript](https://frontendfoc.us/link/84066/rss "www.hackdoor.io")

*来源：Simone Manzi*

#### [Building an Image Gallery using PixiJS and WebGL](https://frontendfoc.us/link/84067/rss "css-tricks.com")

This goes beyond your typical image gallery with an interesting 3D effect. Lots of bits and pieces here to learn.

*来源：Luis Torres*

#### [Aborting a Fetch API Request](https://frontendfoc.us/link/84068/rss "meetguns.com")

The Fetch API didn’t have the ability to abort a request in its early days (unlike `XMLHttpRequest`) but AbortController and AbortSignal can help you get the job done on [all modern browsers.](https://frontendfoc.us/link/84069/rss)

*来源：Ganapati V S*

#### [How to Apply CSS3 Transforms to Background Images](https://frontendfoc.us/link/84070/rss "www.sitepoint.com")

A neat trick for applying CSS3 transforms (rotating and skewing elements) to your backgrounds.

*来源：Craig Buckler*

#### [(Please) Use `a:visited` in Your CSS Stylesheet](https://frontendfoc.us/link/84071/rss "evertpot.com")

Help your visitors know which links they already visited. I can’t really argue with this.

*来源：Evert Pot*

#### [Don't Touch My Clipboard](https://frontendfoc.us/link/84072/rss "alexanderell.is")

You can (but shouldn’t) change how people copy text from your site.

*来源：Alex Ellis*

#### [An Accessibility Review of Squarespace, Wix, and Weebly](https://frontendfoc.us/link/84073/rss "terrillthompson.com")

If you’re reading this newsletter you’re probably building your own pages from scratch or with a framework, but have you ever wondered just how good pages produced by tools like Squarespace or Wix are?

*来源：Terrill Thompson*

#### [Four Reasons to Still Use Sass in Your Frontend Project](https://frontendfoc.us/link/84074/rss "blog.bitsrc.io")

*来源：Sonny Recio*

*来源：Web Font of the Week*

#### [JetBrains Mono](https://frontendfoc.us/link/84075/rss)

*来源：From the creators of many a popular IDE comes a free and open source font specifically aimed at developers. I admit I'm a sucker for a monospaced font on the Web, but your mileage may vary.*

[![](https://res.cloudinary.com/cpress/image/upload/w_480,e_sharpen:60/v1582045747/iya8ck4m0ldou7qczvyk.png)](https://frontendfoc.us/link/84075/rss)

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/yah2ebzxyvwobpqxxa7o.jpg)](https://frontendfoc.us/link/84076/rss)

#### [A Neumorphism/'Soft UI' CSS Shadow Generator](https://frontendfoc.us/link/84076/rss "neumorphism.io")

A simple online tool for creating elements matching the new design trend/fad.

*来源：Adam Giebl*

#### [Utopia: Tools for Fluid Responsive Design](https://frontendfoc.us/link/84077/rss "utopia.fyi")

There are two nifty tools here, a type scale calculator, and a CSS generator - both designed for scaling type and space without breakpoints.

*来源：James Gilyead and Trys Mudford*

#### [plink-plonk.js: Listen to Web Pages As Their DOM Changes](https://frontendfoc.us/link/84078/rss "gist.github.com")

**This is really cool.** Run this code at a console on a ‘busy’ Web page with lots of DOM changes and updates and you’ll be able to ‘hear’ them taking place.

*来源：Tom Hicks*

#### [Croppola: Quick Web-Based Image Cropping](https://frontendfoc.us/link/84079/rss "croppola.com")

These sorts of quick online tools sometimes seem a dime and dozen but this is so quick and simple, I had to recommend it.

*来源：Croppola*

#### [Axe 3.5: Accessibility for Development Teams](https://frontendfoc.us/link/84080/rss "www.deque.com")

The popular accessibility testing toolkit is now at 3.5. Includes a better color contrast test, several new rules, bug fixes, and Danish localisation.

*来源：Wilco Fiers*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/428)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/428)。

