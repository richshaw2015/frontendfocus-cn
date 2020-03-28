# 前端聚焦周刊：第 428 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 428](https://frontendfoc.us/issues/428)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/temxuzubnjdxbrombrng.jpg)](https://frontendfoc.us/link/84052/rss)

#### [理解 CSS Grid Template Areas](https://frontendfoc.us/link/84052/rss "www.smashingmagazine.com")

`grid-template-areas` is one of my personal favorite parts of CSS Grid as it lets you specify layouts in the form of strings of text that visually represent the outcome you want. This is a thorough introduction to the idea.

*来源：Rachel Andrew*

#### [为什么 JavaScript 正在吞噬 HTML](https://frontendfoc.us/link/84053/rss "css-tricks.com")

主要是前端越来越复杂，维护分离的 HTML 和 JavaScript 十分痛苦。

The idea of JavaScript and HTML remaining separate and _never the twain shall meet_ is now decidedly old-school and HTML-in-JS (a la JSX) is definitely A Thing™. Here’s a tour of all the parts involved.

*来源：Mike Turley*

#### [网站链接和按钮完全指南](https://frontendfoc.us/link/84055/rss "css-tricks.com")

A great resource from CSS Tricks with a lot to digest here. Starts with the basic implementation of both but quickly moves into accessibility, UX flourishes, and styling.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/01/button-styles.png?resize=1024%2C977&ssl=1)

*来源：Chris Coyier*

#### [你可能没关注，CSS 渐变正变得更好](https://frontendfoc.us/link/84056/rss "css-tricks.com")

Unless you are some sort of CSS gradient expert, you are going to learn something here. Avoiding repetition by not having to repeat colors anymore is a huge win, IMHO.

![](https://css-tricks.com/wp-content/uploads/2020/01/spectrum.svg)

*来源：Ana Tudor*

#### [Chrome 80 以后支持 'Scroll To Text Fragment'](https://frontendfoc.us/link/84057/rss "chromestatus.com")

Last year we mentioned the [Text Fragments spec](https://frontendfoc.us/link/84058/rss) which will let you link directly to specific content within Web pages that _doesn’t_ have an associated anchor element.. and Chrome now supports it although the formatting of the fragment name isn’t particularly elegant.

*来源：Chrome Platform Status*

#### [调整元素大小的第一份公共草案](https://frontendfoc.us/link/84059/rss "www.w3.org")

An interesting new spec from the W3C (_based on the same concept as MutationObserver or IntersectionObserver_) that lets you observe for changes to an element’s size.

*来源：W3C*

## 📙 文章、教程、观点

#### [相同的 HTML，不同的 CSS](https://frontendfoc.us/link/84061/rss "ishadeed.com")

This is a step-by-step tutorial based on a concept from the old CSS Zen Garden site: Creating different designs via CSS while never touching the markup.

![](https://ishadeed.com/assets/unique-design/article-header-variations.png)

*来源：Ahmad Shadeed*

#### [构建高性能的前端架构](https://frontendfoc.us/link/84062/rss "www.debugbear.com")

A technical writeup of the key things to consider performance-wise when building a front-end.

![](https://www.debugbear.com/public/blog/performant-front-end-architecture/performant-front-end-architecture.png)

*来源：DebugBear*

#### [四种创新方法实现 JavaScript 计时](https://frontendfoc.us/link/84064/rss "blog.omaralshaker.com")

介绍了如下四种方法：Web Worker 中使用无限同步循环、CSS 动画、SVG 标签、Web Animations API。

Interesting alternatives for `setTimeout`, `setInterval`, and `requestAnimationFrame`.

![](https://blog.omaralshaker.com/images/postsImages/time.jpg)

*来源：Omar Alshaker*

#### [如何用 D3 和 Three.js 开发基于 WebGl 的美国地图](https://frontendfoc.us/link/84065/rss "tips4devs.com")

Creating a simple SVG-based map is one thing, but if you want the best performance, leaning on WebGL and your GPU is a good option. This tutorial covers how to approach moving from SVG to WebGL by way of Three.js.

![](https://tips4devs.com/article-assets/make-a-webgl-powered-us-counties-map-with-d3-and-three-js/map.gif)

*来源：Mika Iriarte*

#### [如何在 JavaScript 中构建 Tinder 效果的轮播图](https://frontendfoc.us/link/84066/rss "www.hackdoor.io")

*来源：Simone Manzi*

#### [使用 PixiJS 和 WebGL 构建图库](https://frontendfoc.us/link/84067/rss "css-tricks.com")

This goes beyond your typical image gallery with an interesting 3D effect. Lots of bits and pieces here to learn.

![](https://paper-attachments.dropbox.com/s_9D83426E20A4AF07FC302A30198020A55A71B0CFDCF3AA77FCDE8656BA177B77_1558813948355_inspiration.gif)

*来源：Luis Torres*

#### [中止 API 请求](https://frontendfoc.us/link/84068/rss "meetguns.com")

The Fetch API didn’t have the ability to abort a request in its early days (unlike `XMLHttpRequest`) but AbortController and AbortSignal can help you get the job done on [all modern browsers.](https://frontendfoc.us/link/84069/rss)

![](https://meetguns.com/static/2de476e9c913fe7c05e735aa87da3301/a4b53/cover.webp)

*来源：Ganapati V S*

#### [如何将 CSS3 转换特效应用于背景图像](https://frontendfoc.us/link/84070/rss "www.sitepoint.com")

A neat trick for applying CSS3 transforms (rotating and skewing elements) to your backgrounds.

![](http://blogs.sitepointstatic.com/images/tech/589-transform-background-100pc.png)

*来源：Craig Buckler*

#### [请在 CSS 中使用 `a:visited`](https://frontendfoc.us/link/84071/rss "evertpot.com")

Help your visitors know which links they already visited. I can’t really argue with this.

![](https://evertpot.com/assets/posts/aws.png)

*来源：Evert Pot*

#### [不要碰我的剪切板](https://frontendfoc.us/link/84072/rss "alexanderell.is")

You can (but shouldn’t) change how people copy text from your site.

![](https://alexanderell.is/posts/taking-over-my-clipboard/the-punctuation-guide.png)

*来源：Alex Ellis*

#### [Squarespace、Wix、Weebly 在可访问性方面的实践回顾](https://frontendfoc.us/link/84073/rss "terrillthompson.com")

If you’re reading this newsletter you’re probably building your own pages from scratch or with a framework, but have you ever wondered just how good pages produced by tools like Squarespace or Wix are?

*来源：Terrill Thompson*

#### [仍然使用 Sass 的四个原因](https://frontendfoc.us/link/84074/rss "blog.bitsrc.io")

![](https://miro.medium.com/max/2000/1*2i61LZma68XjLu5r9rLv9A.png)

*来源：Sonny Recio*

#### [JetBrains Mono](https://frontendfoc.us/link/84075/rss)

From the creators of many a popular IDE comes a free and open source font specifically aimed at developers. I admit I'm a sucker for a monospaced font on the Web, but your mileage may vary.

[![](https://res.cloudinary.com/cpress/image/upload/w_480,e_sharpen:60/v1582045747/iya8ck4m0ldou7qczvyk.png)](https://frontendfoc.us/link/84075/rss)

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/yah2ebzxyvwobpqxxa7o.jpg)](https://frontendfoc.us/link/84076/rss)

#### [A Neumorphism/'Soft UI' CSS Shadow Generator](https://frontendfoc.us/link/84076/rss "neumorphism.io")

A simple online tool for creating elements matching the new design trend/fad.

*来源：Adam Giebl*

#### [Utopia: Tools for Fluid Responsive Design](https://frontendfoc.us/link/84077/rss "utopia.fyi")

There are two nifty tools here, a type scale calculator, and a CSS generator - both designed for scaling type and space without breakpoints.

*来源：James Gilyead and Trys Mudford*

#### [plink-plonk.js：监听 DOM 变化](https://frontendfoc.us/link/84078/rss "gist.github.com")

**This is really cool.** Run this code at a console on a ‘busy’ Web page with lots of DOM changes and updates and you’ll be able to ‘hear’ them taking place.

*来源：Tom Hicks*

#### [Croppola：基于 Web 的快速图像裁剪工具](https://frontendfoc.us/link/84079/rss "croppola.com")

These sorts of quick online tools sometimes seem a dime and dozen but this is so quick and simple, I had to recommend it.

*来源：Croppola*

#### [Axe 3.5：开发团队的可访问性检测工具](https://frontendfoc.us/link/84080/rss "www.deque.com")

The popular accessibility testing toolkit is now at 3.5. Includes a better color contrast test, several new rules, bug fixes, and Danish localisation.

*来源：Wilco Fiers*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/428)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/428)。
