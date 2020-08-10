# 前端聚焦周刊：第 444 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 444](https://frontendfoc.us/issues/444)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [CSS `:is()` and `:where()` 很快就来了](https://frontendfoc.us/link/89849/rss "webplatform.news")

Šime Vidas explains how these new CSS pseudo-classes can be used (_for reducing repetition, and keeping specificity low respectively_).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1591796451/nq1i3twmzxqpxmqltapo.png)](https://frontendfoc.us/link/89848/rss)
*Current browser support for 'is()' via [caniuse.com](https://frontendfoc.us/link/89848/rss)*

*来源：Web Platform News*

#### [CSS 媒体查询完全指南](https://frontendfoc.us/link/89850/rss "polypane.app")

A solid, thorough guide on all things CSS media queries, good as a primer, or worth revisiting for a refresher.

```css
@media <media-type> and (media feature) {
  /*...*/
}
```

*来源：Polypane*

#### [Animate.css v4: Just-add-water CSS Animations](https://frontendfoc.us/link/89852/rss "animate.style")

This is one of the most popular of the ‘drop-in’ CSS animation libraries, and they’ve now moved to version 4. Significantly, among [the changes](https://frontendfoc.us/link/89853/rss) is a prefix on classes.

*来源：daniel eden*

#### [一些炫酷的针对博客的 CSS Grid 小技巧](https://frontendfoc.us/link/89854/rss "css-tricks.com")

An exploration of how you can use CSS Grid, along with properties such as `auto-fit` and `auto-fill`, to produce some nifty looking image galleries.

*来源：Ana Tudor*

#### [多家出版社起诉盗版电子书](https://frontendfoc.us/link/89855/rss "www.npr.org")

Whilst the legal action here is specifically to do with ebooks, it’s important to underline the excellent preservation work of the Internet Archive (_which includes the Wayback Machine_) and how hugely important it is to the long-term conservation of the web as a whole.

![](https://media.npr.org/assets/img/2020/06/03/gettyimages-136400539_wide-e343aa094d50b018cbced397206bd24bec140efd-s1600-c85.jpg)

*来源：Colin Dwyer (NPR)*

## ⚡️ Quick bits:

*   A new CSS function for [mixing two colors](https://frontendfoc.us/link/89856/rss) is in the works.

*   Version 8 of the [popular HTML 5 Boilerplate template](https://frontendfoc.us/link/89857/rss) is now available. [Here's the related GitHub repo](https://frontendfoc.us/link/89858/rss).

*   The recently released ['ScrollTrigger' GSAP plugin](https://frontendfoc.us/link/89859/rss) claims to '_reinvent scroll-driven animations_'.

*   Oops. The Brave browser has been [observed autocompleting to URLs](https://frontendfoc.us/link/89860/rss) it could profit from.

*   A [second release candidate](https://frontendfoc.us/link/89861/rss) for Vivaldi 3.1 has been released.

## 📙 文章、教程、观点

#### [Service Worker 生命周期的解释](https://frontendfoc.us/link/89865/rss "felixgerschau.com")

Explaining the lifecycle of Service Workers in PWAs and how to update them as fast as possible.

![](https://felixgerschau.com/static/ce459a8fadf273a09c9893ef767baa44/29007/service-worker-lifecycle-thumbnail.png)

*来源：Felix Gerschau About*

#### [布局用 Grid，组件用 Flexbox](https://frontendfoc.us/link/89866/rss "ishadeed.com")

Ahmad looks at the key differences between these two layout options, and although there’s no right or wrong here, he recommends some use-cases for where you may want to use each.

![](https://ishadeed.com/assets/grid-flex/grid-vs-flexbox.png)

*来源：Ahmad Shadeed*

#### [Mad 杂志的 CSS 翻页折叠效果](https://frontendfoc.us/link/89867/rss "thomaspark.co")

An impressive CSS-only recreation of the Mad magazine fold-ins (where folding a printed page would reveal a hidden message in the artwork).

![](https://thomaspark.co/wp/wp-content/uploads/2020/06/jaffee.png)

*来源：Thomas Park*

#### [高对比度模式下的几个建议](https://frontendfoc.us/link/89868/rss "sarahmhigley.com")

A few simple pointers to improve the High Contrast Mode experience for Windows users.

![](https://sarahmhigley.com/writing/assets/button-focus-outline-whcm.png)

*来源：Sarah Higley*

#### [如何为背景图设置鼠标悬停效果](https://frontendfoc.us/link/89870/rss "tympanus.net")

You’ll need to see [the demo](https://frontendfoc.us/link/89871/rss) to get it, but it’s a neat visual effect well suited for when you’ve got a variety of photos to illustrate a concept.

![](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2020/06/MotionGrid_featured.jpg)

*来源：Mary Lou*

#### [使用 CSS Counters 定制有序列表](https://frontendfoc.us/link/89872/rss "blog.logrocket.com")

How to use CSS counters to customize the appearance of numbers in an ordered list.

```css
div.list {
  counter-reset: list-number -1;
}
```

![](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/05/ordered-list-counter-reset-from-zero.png?w=542&ssl=1)

*来源：Supun Kavinda*

#### [CSS Viewport 单位快速指南](https://frontendfoc.us/link/89873/rss "www.sitepoint.com")

Covers `vh`, `vw`, `vmin` and `vmax`.

*来源：Asha Laxmi and Maria Antonietta Perna*

#### [Sass Color Functions in CSS](https://frontendfoc.us/link/89874/rss "blog.jim-nielsen.com")

```css
:root {
  --color-primary-h: 30;
  --color-primary-s: 100%;
  --color-primary-l: 50%;
}

/* desaturate the primary color */
.element {
  background-color: hsl(
    var(--color-primary-h),
    calc(var(--color-primary-s) - 20%),
    var(--color-primary-l)
  );
}
```

*来源：Jim Nielsen*

## 🔧 代码、工具、资源

#### [CSS Grid：生成报纸排版](https://frontendfoc.us/link/89875/rss "codepen.io")

This is an excellent demo showing how Grid can be used to create a _responsive_ newspaper-style layout.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1591793061/q2iumzjm3cf5hggrso0i.png)](https://frontendfoc.us/link/89875/rss)

*来源：Olivia Ng codepen*

#### [FAB：前端应用打包方案](https://frontendfoc.us/link/89876/rss "fab.dev")

A bundle format for frontend applications that unify static sites, SPAs, server-side rendering (SSR), and server-side logic in a single format that’s easy to deploy.

![](https://user-images.githubusercontent.com/23264/64143562-f9333180-ce53-11e9-9058-4d1d961a1d35.png)

*来源：Frontend Application Bundles*

#### [Grid.js：一个高级的表格组件](https://frontendfoc.us/link/89877/rss "gridjs.io")

A lightweight, advanced table plugin that can work alongside React, Angular, Vue, or, well, nothing. Check out some of [the examples](https://frontendfoc.us/link/89878/rss) for more on how to use it. It uses Preact under the hood.

```js
new Grid({ 
  columns: ['Name', 'Email'],
  data: [
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
  ] 
}).render(document.getElementById('table'));
```

*来源：Afshin Mehrabani*

#### [Quotebacks: Embed Quotes Without Losing Context](https://frontendfoc.us/link/89879/rss "quotebacks.net")

This is a small library that can embed a quote in an attractive format within the source context. Can also be used as a Chrome extension that saves to local storage.

```html
<blockquote class="quoteback" darkmode="" data-title="Quote the web with Quotebacks" data-author="@ness_labs" cite="https://nesslabs.com/quotebacks">
The ethos behind Quotebacks is one of the reasons why I love the product. Yes, it’s a great addition to my thinking toolkit, allowing me to store quotes without polluting my note-taking and thinking system. But it’s also a tool which aims at making the Internet a more generous place. If you regularly write online, give it a try!
<footer>@ness_labs<cite> <a href="https://nesslabs.com/quotebacks">https://nesslabs.com/quotebacks</a></cite></footer>
</blockquote><script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>
```

*来源：Tom Critchlow and Toby Shorin*

#### [Sorted CSS Colors: A Way to Navigate CSS Colors By Hue](https://frontendfoc.us/link/89880/rss "enes.in")

This feels like quite a natural way to navigate the over 100 ‘named’ CSS colors (like `Gainsboro`, `Firebrick`, and `LawnGreen`).

![](https://github.com/scriptype/sorted-colors/raw/master/kapture.gif)

*来源：Mustafa Enes*

#### [SweetAlert：漂亮的弹窗组件](https://frontendfoc.us/link/89881/rss "sweetalert.js.org")

Bills itself as _‘a beautiful replacement for JavaScript’s “`alert`”’_

![](https://raw.githubusercontent.com/t4t5/sweetalert/e3c2085473a0eb5a6b022e43eb22e746380bb955/assets/swal.gif)

*来源：Tristan Edwards et al.*

#### [μJam: A Minimalistic Jamstack Approach for Creating GitHub-Pages Hosted Sites](https://frontendfoc.us/link/89882/rss "github.com")

Use Visual Studio Code as a lightweight authoring and publishing tool for small to medium websites.

![](https://github.com/goessner/microjam/raw/master/img/vscode-view2.png)

*来源：Stefan Goessner*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/444)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/444)。

