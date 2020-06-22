# 前端聚焦周刊：第 443 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 443](https://frontendfoc.us/issues/443)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1591187785/frvod9nkfvezghgxroqk.jpg)](https://frontendfoc.us/link/89447/rss)

#### [CSS 变量用户指南](https://frontendfoc.us/link/89447/rss "increment.com")

A long-requested but still underused feature. Here’s a solid look at the “_revolutionary possibilities for collaboration and code reuse_” that CSS custom properties for cascading variables offer.

*来源：Lea Verou*

#### [Web 标准贡献指南](https://frontendfoc.us/link/89448/rss "bocoup.com")

[The Web Platform Contribution Guide](https://frontendfoc.us/link/89449/rss) is an online resource for anyone who wants to participate in the development of Web standards present and future. If the idea of Web standards boggles your mind at all, this is a very accessible guide.

*来源：Bocoup*

#### [Edge 和 Windows 更新捆绑](https://frontendfoc.us/link/89535/rss "www.theverge.com")

Yep, Microsoft’s Chromium-based Edge launched back in January, but users had to specifically download it. It will now be automatically installed.

![](https://cdn.vox-cdn.com/thumbor/r5-m_B_et3km_i82fyxQ_dDbKFI=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66889047/acastro_200207_3900_Edge_0001.0.0.jpg)

*来源：Tom Warren*

#### [htmx：使用 HTML 属性构建动态页面](https://frontendfoc.us/link/89451/rss "htmx.org")

Billed as the ‘successor to [intercooler.js](https://frontendfoc.us/link/89452/rss)’, htmx lets you add dynamic Ajax-y elements, Server Sent Events (SSE), WebSockets and more to a site using just HTML attributes.

```html
<!-- Load from unpkg -->
<script src="https://unpkg.com/htmx.org@0.0.6"></script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
Click Me
</button>
```

*来源：Big Sky Software*

## ⚡️ 速报

*   Firefox 77 已经发布。 [Here's what developers need to know](https://frontendfoc.us/link/89453/rss).

*   Netlify's [Build Plugins are officially coming out of beta](https://frontendfoc.us/link/89454/rss) with some new resources for getting started.

*   从明年开始 Google 的搜索结果[将考虑“页面体验”](https://frontendfoc.us/link/89536/rss)。 

*   [Here are the release notes](https://frontendfoc.us/link/89456/rss) for the latest version (107) of Safari Technology Preview.

*   Brave 浏览器现在拥有[1500万月活](https://frontendfoc.us/link/89457/rss)。

## 📙 文章、教程、观点

#### [CSS 变量的全局设置和组件样式](https://frontendfoc.us/link/89463/rss "www.sarasoueidan.com")

A look at how to use CSS variables to create more manageable project styles and more portable patterns.

![](https://d33wubrfki0l68.cloudfront.net/8e0b908777367e41ea87008113238c903223ebb0/5c149/images/style-guide-settings.png)

*来源：Sara Soueidan*

#### [初看 `aspect-ratio`](https://frontendfoc.us/link/89461/rss "css-tricks.com")

It’s not directly supported in any browsers yet but its arrival is described as ‘impending’. Stuff like `aspect-ratio: 16 / 9` certainly seems nice, though, so we’re keeping our fingers crossed..

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-29-at-6.23.02-AM.png?resize=1817%2C2048&ssl=1)

*来源：CSS Tricks*

#### [🍔用 SVG 和 CSS 做一个汉堡菜单](https://frontendfoc.us/link/89537/rss "medium.com")

A step by step guide to creating a hamburger menu animation with SVG and CSS.

![](https://miro.medium.com/max/1400/1*gvhLdQ8--lIgCYmXEeTVyw.png)

*来源：Mikael Ainalem*

#### [关于固定的元素和背景](https://frontendfoc.us/link/89462/rss "chenhuijing.com")

Definitely not for the faint of heart. This is a pretty deep dive into containing blocks, rendering, and scroll performance.

![](https://chenhuijing.com/assets/images/posts/css-positioning/stacking.svg)

*来源：Chen Hui Jing*

#### [当前端意味着全栈](https://frontendfoc.us/link/89464/rss "increment.com")

Thoughts on the shifting responsibilities of frontend developers, a place which puts us “_between the thing we’re building and the people we’re building it for_”.

![](https://increment.com/art/13/when-frontend-means-full-stack/cover-2000-7c6735bb.jpeg)

*来源：Chris Coyier*

#### [延迟 Keyframes 动画的新方式](https://frontendfoc.us/link/89466/rss "css-tricks.com")

If you’ve ever wanted to add a pause between each iteration of your CSS `@keyframes` animation, it’s.. not easy. Here’s an interesting technique to create such an effect, though.

*来源：Eric Johnson*

#### [使用 CSS Grid 创建堆叠的标题](https://frontendfoc.us/link/89467/rss "snook.ca")

A clever (sneaky?) use of `:before` makes it all work.

![](https://img.snook.ca/grid-a.png)

*来源：Jonathan Snook*

#### ▶  [CSS Aspect Ratio, Rendering Engines, and More with Jen Simmons](https://frontendfoc.us/link/89468/rss "shoptalkshow.com")

Web Designer and Developer Advocate Jen Simmons joins Dave Rupert and Chris Coyier to talk about her new HTML Essentials course, CSS Aspect Ratio, and rendering engines vs browsers.

*来源：ShopTalk Show podcast*

#### [Svelte，为什么这么火？](https://frontendfoc.us/link/89470/rss "dev.to")

A closer look at the [component-based library](https://frontendfoc.us/link/89471/rss).

![](https://res.cloudinary.com/practicaldev/image/fetch/s--KLPJgh3G--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--vjzjD8ry--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/iye664mzhhpa35lypl5g.png)

*来源：Anthony Le Goas*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/n9z24mzl4gvuhho58ujg.jpg)](https://frontendfoc.us/link/89472/rss)

#### [RoughNotation：创建手绘风格的动画库](https://frontendfoc.us/link/89472/rss "roughnotation.com")

Uses Rough.js for the handdrawn look. Lots of nice interactive examples on the page showing the diversity of annotation types.

*来源：Preet Shihn*

#### [htmlgoddess：生成类似 1999 年代码风格的静态站点](https://frontendfoc.us/link/89474/rss "github.com")

Feels a bit like satire, but seems to be a real framework that wants to promote simplicity, speed, and accessibility in web pages. [Backstory here](https://frontendfoc.us/link/89475/rss).

*来源：Jonathan Crockett*

#### [AudioMass：功能齐全的 Web 端的音频剪辑工具](https://frontendfoc.us/link/89476/rss "audiomass.co")

Runs entirely in the browser with no backend or plugins required. Impressive. [Source here.](https://frontendfoc.us/link/89477/rss)

*来源：Pantelis Kalogiros*

#### [Easings: Generate, Test & Share Custom Cubic Bezier Easing Curves](https://frontendfoc.us/link/89478/rss "easings.co")

This online tool lets you play around with `cubic-bezier()` values to create custom easings that you can drop into transitions and animations.

*来源：Paul Macgregor*

#### [Perspective：通过 WebAssembly 实现数据流的可视化](https://frontendfoc.us/link/89479/rss "github.com")

An interesting use for WebAssembly here. Originally built for J P Morgan, Perspective is for building real-time high performance interactive visualizations, powered by a C++ engine compiled to WASM under the hood.

![](https://camo.githubusercontent.com/f69d1132e2984e2a97209fc21520e9812c464873/68747470733a2f2f70657273706563746976652e66696e6f732e6f72672f696d672f64656d6f5f736d616c6c2e676966)

*来源：The Fintech Open Source Foundation*

#### [更好的 CSS 键盘按钮](https://frontendfoc.us/link/89480/rss "shkspr.mobi")

A quick way to improve the readability of keyboard shortcuts when you’re mentioning them in text. I love simple little solutions like this.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zxikygdsvgrznqvoom34.jpg)](https://frontendfoc.us/link/89480/rss)

*来源：Terence Eden*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/443)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/443)。

