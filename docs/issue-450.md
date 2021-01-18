# 前端聚焦周刊：第 450 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Dinosaur Rss 🦕](https://dinorss.org/?fef) 平台首发。

> 原文：[Frontend Focus issue 450](https://frontendfoc.us/issues/450)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [“像素级还原”的现状](https://frontendfoc.us/link/92203/rss "ishadeed.com")

I don’t really hear the term “pixel perfection” as much as I used to, but the author says it still pops up enough. Here, he compares what this phrase really means today versus what it used to, and suggests how we should move beyond it.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1595420717/pc6cfsrfbfaawi4uddep.jpg)](https://frontendfoc.us/link/92203/rss)

*来源：Ahmad Shadeed*

#### [将设计线框图转换成友好的 HTML/CSS](https://frontendfoc.us/link/92204/rss "www.smashingmagazine.com")

Harris Schneiderman walks you through the process of analyzing a wireframe and making coding decisions to optimize for accessibility.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c6c1e5f9-ce03-4c94-82aa-b4b754f2d766/audio-player-controls-screenshot-image.png)

*来源：Smashing Magazine*

#### [用现代的 CSS Grid 方案解决通用布局问题](https://frontendfoc.us/link/92206/rss "vycke.dev")

How CSS grids can solve responsive layout issues and enable you to create sites that flow with screen sizes without having to worry about breakpoints.

![](https://vycke.dev/img/css-grid-article.png)

*来源：Kevin Pennekamp*

#### [Web 组件不同实现方式对比](https://frontendfoc.us/link/92207/rss "webcomponents.dev")

Compare coding style, bundle size and performance of 33 different ways to make a Web Component.

![](https://webcomponents.dev/blog/images/pencils3.jpg)

*来源：div riots*

#### [3D 图书封面生成器](https://frontendfoc.us/link/92235/rss "3d-book-css.netlify.app")

A neat little tool to create a 3D book cover that lets you customize perspective, animation duration, thickness of the book, rotation on hover, URL, etc. then grab the CSS code. I remember when we used to have to pay for tools like this :-)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1595426328/dafyt9ge7vuqit6fbyid.png)](https://frontendfoc.us/link/92235/rss)

*来源：Sebastien Castiel*

## ⚡️ Quick bits:

*   A new [dev channel build of version 85 of Edge](https://frontendfoc.us/link/92208/rss) is now live.

*   Google is [taking a little longer](https://frontendfoc.us/link/92209/rss) to enable mobile-first indexing in search.

*   Julia Evans [shares a comic](https://frontendfoc.us/link/92210/rss) on just how `position: absolute` works.

## 📙 文章、教程、观点

#### [CSS 的渲染顺序](https://frontendfoc.us/link/92214/rss "abandonedwig.info")

If you’ve ever been baffled by z-index positioning, the example shared here is worth remembering. “_things inside a stacking context are painted together, as a unit_”

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1595426482/lripqomkydwktkms1nmy.png)](https://frontendfoc.us/link/92214/rss)

*来源：Martin Robinson*

#### ▶  [UI 字体设计的细节](https://frontendfoc.us/link/92215/rss "developer.apple.com")

A good half-hour look at how you can enhance type legibility, accessibility, and consistency across your UI.

*来源：Apple Developer*

#### [什么时候使用 `inline-block`?](https://frontendfoc.us/link/92217/rss "css-tricks.com")

Chris Coyier asked how folks use the `inline-block` value. Here’s a run through some common answers, and some issues that may crop up.

![](https://i1.wp.com/css-tricks.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-09-at-6.31.17-AM.png?w=728&ssl=1)

*来源：CSS Tricks*

#### [Bootstrap 5：去掉 jQuery 支持的用法调整](https://frontendfoc.us/link/92218/rss "themesberg.com")

Yep, the latest version of Bootstrap (currently in alpha) does away with jQuery in favour of using vanilla JS. Here’s a few pointers on using it.

![](https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-tutorial/bootstrap-5-tutorial.jpg)

*来源：Zoltán Szőgyényi*

#### [邮件链接的问题以及替代方案](https://frontendfoc.us/link/92219/rss "adamsilver.io")

These `mailto:` links are everywhere and yet browsers and operating systems don’t really make them easy to use.

![](https://adamsilver.io/assets/images/the-trouble-with-mailto-email-links-and-what-to-do-instead/mailto3.png)

*来源：Adam Silver and Amy Hupe*

#### [How We Achieve "Simple Design" for Basecamp and HEY](https://frontendfoc.us/link/92220/rss "m.signalvnoise.com")

The core approach here is dubbed ‘Fisher Price’ design - keeping things obvious and simple.

*来源：Jonas Downey (Basecamp)*

#### [用纯 CSS 创建有动画效果的下划线](https://frontendfoc.us/link/92221/rss "nickymeuleman.netlify.app")

```css
a {
  color: #dfe5f3;
  text-decoration: none;
  background-image: linear-gradient(#222b40, #222b40), linear-gradient(
      rgb(176, 251, 188),
      rgb(176, 251, 188)
    ), linear-gradient(#feb2b2, #feb2b2);
  background-size: 20px 2px, 100% 2px, 0 2px;
  background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 2s linear, background-position 2s linear;
}
a:hover {
  background-size: 20px 2px, 0 2px, 100% 2px;
  background-position: calc(100% + 20px) 100%, 100% 100%, 0 100%;
}
```

*来源：Nicky Meuleman*

#### [为“花哨”的网站辩护](https://frontendfoc.us/link/92222/rss "css-tricks.com")

*来源：Sarah Drasner*

## 🔧 代码、工具、资源

#### [mailgo：`mailto:` 和 `tel:` 链接的另一种概念实现](https://frontendfoc.us/link/92228/rss "mailgo.dev")

Add this script to convert `mailto:` and `tel:` links into a modal that appears on click that gives the user a choice to open in Gmail, Outlook, copy the link, etc.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1595426098/hagubcyriitzc3x2cbbs.png)](https://frontendfoc.us/link/92228/rss)

*来源：Matteo Manzinello*

#### [Wikimedia FontCDN：注重隐私的 Google 在线字体搜索和代理 CDN](https://frontendfoc.us/link/92225/rss "fontcdn.toolforge.org")

[Google Fonts](https://frontendfoc.us/link/92226/rss) is a hugely popular way to bring custom fonts on to Web sites but if you’re feeling uneasy about giving Google all that user data, consider this. (You could, of course, also host the fonts yourself.)

*来源：FontCDN*

#### [css-media-vars：编写响应式 CSS 的新方式](https://frontendfoc.us/link/92223/rss "github.com")

[Full explainer here](https://frontendfoc.us/link/92224/rss) but this basically uses CSS variables that are added to the <html> element and act as universal mixins.

```css
  .breakpoints-demo > * {
    --xs-width: var(--media-xs) 100%;
    --sm-width: var(--media-sm) 49%;
    --md-width: var(--media-md) 32%;
    --lg-width: var(--media-gte-lg) 24%;
    width: var(--xs-width, var(--sm-width, var(--md-width, var(--lg-width))));

    --sm-and-down-bg: var(--media-lte-sm) red;
    --md-and-up-bg: var(--media-gte-md) green;
    background: var(--sm-and-down-bg, var(--md-and-up-bg));
  }
```

*来源：PropJockey*

#### [doom-scroller.js - 防止在社交媒体网站无意义的滚动](https://frontendfoc.us/link/92229/rss "defaced.dev")

Find yourself scrolling mindlessly through junk on social media? This Doom-inspired library may help. 😅

*来源：Chris Johnson*

#### [🍰 CSS Is Cake](https://frontendfoc.us/link/92230/rss "codepen.io")

Because what _isn’t_ cake?

*来源：Jhey Tompkins codepen*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/450)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/450)。
