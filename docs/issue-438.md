# 前端聚焦周刊：第 438 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 438](https://frontendfoc.us/issues/438)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### ▶  [`min(),` max()`, and` clamp()` 等 CSS 魔术方法](https://frontendfoc.us/link/87419/rss "www.youtube.com")

The `min`, `max`, and `clamp` functions are now starting to see [more widespread browser support](https://frontendfoc.us/link/87420/rss). Here’s a video running through how these properties can be used to really open up responsive typography techniques.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1588150502/t74toluzzntgrl6qsiq7.jpg)](https://frontendfoc.us/link/87419/rss)

*来源：Kevin Powell*

#### [无障碍化的字体大小及解释](https://frontendfoc.us/link/87421/rss "css-tricks.com")

Bootstrap core team member Andrés Galante runs through how we can ensure our font sizes are accessible by asking what sort of best practices we can rely on to make an accessible reading experience.

![](https://css-tricks.com/wp-content/uploads/2020/04/Frame-1-1.svg)

*来源：CSS-Tricks*

#### [CSS 国际化](https://frontendfoc.us/link/87423/rss "www.chenhuijing.com")

An excellent guide to the various features in CSS that can be used as part of an internationalisation strategy that goes beyond mere translation.

![](https://chenhuijing.com/assets/images/posts/css-i18n/chrome@2x.png)

*来源：Chen Hui Jing*

#### [AMP 引入用户友好的加密支持](https://frontendfoc.us/link/87450/rss "blog.amp.dev")

AMP aims to be all about providing speed to mobile consumers of content but paywalls just, well, get in the way. So Google and the AMP folks have come up with a way where protected content can be served and unlocked client-side for more performance. Cynically, of course, you _could_ consider this yet another form of DRM for Web content...

![](https://blog.amp.dev/wp-content/uploads/2020/04/image3-1.png)

*来源：The AMP Blog*

#### [使用 Flutter 开发响应式 Web 和桌面应用](https://frontendfoc.us/link/87424/rss "www.smashingmagazine.com")

A look at the current state of Flutter for browser-based apps and how to create a responsive app using it.

![](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/bd8fe14b-2d46-4886-8b1a-b4c63966bda5/03-responsive-web-desktop-development-with-flutter-opt.gif)

*来源：Carmine Zaccagnino*

## 📙 文章、教程、观点

#### [CSS 中的间距](https://frontendfoc.us/link/87428/rss "ishadeed.com")

This is pretty much everything you need to know about spacing in CSS, covering grid layout, flexbox, positioning, and lots more.

![](https://ishadeed.com/assets/spacing-css/margin-collapse.png)

*来源：Ahmad Shadeed*

#### ▶  [Web 应用的性能分析](https://frontendfoc.us/link/87429/rss "www.youtube.com")

An overview of how to use Chrome DevTools to understand a Web application’s performance bottlenecks.

*来源：Sam Saccone*

#### [Gardened](https://frontendfoc.us/link/87431/rss "ethanmarcotte.com")

A thought-provoking piece by Ethan that looks at some of the problems inherent in our self-regulated industry, in particular related to performance and accessibility.

*来源：Ethan Marcotte*

#### [CSS Clamp: The Goldilocks of CSS Math Functions](https://frontendfoc.us/link/87432/rss "www.stevefenton.co.uk")

As with the video featured above, here's a quick look at how to use `min`, `max`, and `size` with the `clamp` property.

*来源：Steve Fenton*

#### [纯 CSS 实现的适用所有屏幕尺寸的提示](https://frontendfoc.us/link/87433/rss "rimdev.io")

![](https://rimdev.io/images/css-only-tooltip.png)

*来源：Ted Krueger*

#### [为你的博客适配阅读进度条](https://frontendfoc.us/link/87434/rss "dev.to")

```html
<progress id="reading-progress" max="100" value="0" ></progress>
```

*来源：Rob OLeary*

## 🔧 代码、工具、资源

#### [98.css: A Design System for Building Faithful Recreations of Old UIs](https://frontendfoc.us/link/87435/rss "jdan.github.io")

If for any reason you need to your interface to look like Windows 98 then this library has you sorted. [Here’s the associated repo](https://frontendfoc.us/link/87436/rss).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1588075777/qxoxgagj1u5ziukvtnqe.png)](https://frontendfoc.us/link/87435/rss)

*来源：Jordan Scales*

#### [Color Accessibility: Tools and Resources to Help You Design Inclusive Products](https://frontendfoc.us/link/87437/rss "stephaniewalter.design")

We’ve linked to this before, but it’s recently been updated and remains a solid resource.

![](https://stephaniewalter.design/wp-content/uploads/2019/04/cloudfour-contrast-tool.jpg)

*来源：Stéphanie Walter*

#### [Will It CORS?](https://frontendfoc.us/link/87438/rss "httptoolkit.tech")

A handy online tool/wizard for establishing how your (potential) use case will (or won’t!) operate alongside CORS (Cross-Origin Resource Sharing).

*来源：HTTP Toolkit*

#### [Shorthand: A CSS Framework for Designers](https://frontendfoc.us/link/87440/rss "shorthandcss.com")

Includes a “lite” (only gray) and “full” version. This is similar to utility class-based frameworks, so the draw here is that you don’t have to write any CSS, just add classes.

*来源：Jiten Bansal*

#### [1loc：一行 JS 代码片段集合](https://frontendfoc.us/link/87441/rss "1loc.dev")

A neat little collection of vanilla JavaScript one-liners divided into various categories (arrays, date/time, DOM, etc).

```js
// `arr` is an array
const isEmpty = arr => !(Array.isArray(arr) && arr.length > 0 && arr.filter(el => el === undefined).length > 0)
```

*来源：Nguyen Huu Phuoc*

## 🕰 推荐拾遗

*   Tim Kadlec shares [thoughts on the 'blunt instrument' of loading stylesheets via preload](https://frontendfoc.us/link/87442/rss), and some performance advice around how you go about loading CSS and the DOM order.

*   Dynamic elements: Nothing new here for frontend experts, but this is [a good summary for beginners](https://frontendfoc.us/link/87443/rss) discussing how elements can be built dynamically outside of the initial markup.

*   Here's an in-depth look at a fairly simple feature: [the disabled attribute for form elements](https://frontendfoc.us/link/87444/rss) (_and how to handle them_).

*   Kevin Powell shares six simple (beginner) typography tips to achieve a more professional looking site. Skip to around the [3:20 mark](https://frontendfoc.us/link/87445/rss) to get straight into it.

*   How to create a fully responsive fluid layout [in just 20 lines of CSS](https://frontendfoc.us/link/87446/rss) (_that also includes responsively resizing multi-column elements_).

*   Author Brian Hicks explores [reducing asset sizes with subsetting](https://frontendfoc.us/link/87447/rss). He uses a headless Chrome instance with Puppeteer to automate font subsetting on his static pages for savings of 87% on the original size.

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/438)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/438)。

