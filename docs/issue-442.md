# 前端聚焦周刊：第 442 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 442](https://frontendfoc.us/issues/442)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [响应式网站设计十岁了](https://frontendfoc.us/link/88990/rss "ethanmarcotte.com")

Ten years ago the phrase ‘responsive web design’ was first coined. [This guiding blog post](https://frontendfoc.us/link/88991/rss), outlining the three ‘ingredients’ needed (_fluid grids, flexible images, and media queries_), soon followed. Here, Ethan takes a look back at just how responsive design came to be.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,c_crop,h_350,e_sharpen:60/v1590571222/eivcec9vh5ubiheub1cw.jpg)](https://frontendfoc.us/link/88990/rss)

*来源：Ethan Marcotte*

#### [Edge 自 2020 年以来的所有新功能](https://frontendfoc.us/link/88995/rss "blogs.windows.com")

_Microsoft Build 2020_ took place entirely online for the first time last week but it wasn’t short of announcements and great talks, particularly for MS’s _Edge_ browser. Here's [a video roundup](https://frontendfoc.us/link/88996/rss) of what's new if you'd prefer.

![](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/33/2020/05/a34b1321eab452d081212359a3cde237.gif)

*来源：Kyle Pflug (Microsoft)*

#### [Google Fonts 很快，现在变得更快了](https://frontendfoc.us/link/88997/rss "csswizardry.com")

Using Google Fonts? It can often prove to be one of the bigger performance bottlenecks, but in this thorough guide Harry Roberts runs through several optimisations you can put in place to make things snappy.

![](https://pbs.twimg.com/media/EXur7WJWAAMGZME?format=jpg&name=medium)

*来源：CSS Wizardry*

#### [WebGL 完全指南](https://frontendfoc.us/link/88992/rss "xem.github.io")

A _really_ detailed walkthrough of getting started with WebGL at the low level, complete with integrated, editable examples and coverage of the math behind 3D rendering. If you’ve ever wondered what libraries like [Three.js](https://frontendfoc.us/link/88993/rss) are using behind the scenes, it’s all here.

![](https://xem.github.io/articles/images/webgl-guide/workflow.png)

*来源：Maxime Euzière*

## ⚡️ Quick bits:

*   You can now [emulate vision impairments and color blindness in Chrome 83](https://frontendfoc.us/link/88998/rss) to see how your site may appear to certain visitors.

*   Sure, you can play the dino game in Chrome when offline, but you how about [a bit of offline surfing in Edge](https://frontendfoc.us/link/88999/rss)?

*   [Enhanced Safe Browsing protection](https://frontendfoc.us/link/89000/rss) is now available in Chrome

## 📙 文章、教程、观点

#### [掌握 Line Height 属性](https://frontendfoc.us/link/89005/rss "css-tricks.com")

Caleb Williams looks at the `line-height` property, “probably one of the most misunderstood, yet commonly-used attributes”.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/05/3oMF1_o8.png?resize=1536%2C290&ssl=1)

*来源：CSS Tricks*

#### ▶  [如何使用 Flexbox 水平和垂直居中](https://frontendfoc.us/link/89008/rss "egghead.io")

You’ve heard all the jokes about the difficult of center aligning things with CSS, but laugh no more as Ali demonstrates how to do it in just a minute.

*来源：Ali Spittel*

#### [iPhone 本地调试](https://frontendfoc.us/link/89006/rss "joshwcomeau.com")

You should be testing on a real-world mobile device, so here’s a nice and quick way to get your localhost server running on an iPhone with the help of ngrok.

![](https://joshwcomeau.com/images/local-testing-on-an-iphone/ngrok-output.png)

*来源：Josh Comeau*

#### [微前端的现状](https://frontendfoc.us/link/89004/rss "blog.bitsrc.io")

“_One of the more controversial topics in frontend web dev is microfrontends. Are they worth it? Should you really split up your application?_”

![](https://miro.medium.com/max/1400/1*neCiKqR72TJ2Bmd-MZZzaA.png)

*来源：Florian Rappl*

#### [这些是我不知道的 `content` 用法](https://frontendfoc.us/link/89007/rss "www.matuzo.at")

You’ll no doubt learn something here.

```css
.new-item::before {
  /* "Highlighted item" and element content is read out */
  content: "★" / "Highlighted item";
}
```

*来源：Manuel Matuzović*

#### [使用 Cloudflare、GitHub Actions、Metalsmith 开发一个简单的 CMS 系统](https://frontendfoc.us/link/89009/rss "css-tricks.com")

Let’s say you want to build a CMS but don’t want to mess with the fiddly UI bit.. how about using GitHub itself? Couple that with the Metalsmith static site generator and Cloudflare Workers.. and here you go.

```
├── build.js
├── dist
│   └── worker.js
├── layouts
│   ├── about.hbs
│   ├── article.hbs
│   ├── index.hbs
│   └── partials
│       └── navigation.hbs
├── package-lock.json
├── package.json
├── public
├── src
│   ├── about.md
│   ├── articles
│   │   ├── post1.md
│   │   └── post2.md
│   └── index.md
├── workers-site
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── worker
│       └── script.js
└── wrangler.toml
```

*来源：Jon Paul Uritis*

#### [`target="_blank"` — 一个被低估的安全漏洞](https://frontendfoc.us/link/89011/rss "www.manjuladube.dev")

Why `rel="noopener"` should be added to links containing `target="_blank"` as a precaution against reverse ‘tabnabbing’.

```html
<a href= '/share' rel="noopener noreferrer" target="_blank"/>
```

*来源：Manjula Dube*

#### ▶  [Using Chrome DevTools Console Utilities to Make Debugging Easier](https://frontendfoc.us/link/89013/rss "egghead.io")

*来源：Tomasz Łakomy*

## 🔧 代码、工具、资源

#### [instant.page 5：通过预读让网站体感更快](https://frontendfoc.us/link/89035/rss "instant.page")

A reasonably simple piece of JavaScript you can drop onto a page that adds link preloading (upon mouse or pointer hover on a link) to make page transitions seem unnaturally fast.

```html
<script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
```

*来源：Alexandre Dieulot*

#### [Tailblocks: Ready-to-Use Tailwind CSS Blocks](https://frontendfoc.us/link/89015/rss "github.com")

This is a set of 60+ ready-to-use UI blocks built with Tailwind, the popular CSS framework. 15 categories of blocks, which you can [preview here](https://frontendfoc.us/link/89017/rss).

*来源：Mert Cukuren*

#### [Blunt: A CSS Framework That Helps with Layouts and Leaves Your Styling Alone](https://frontendfoc.us/link/89019/rss "github.com")

This is a little different. This framework doesn’t have any effect on design visuals, it only provides helper classes for positioning and responsive layouts.

*来源：Frankie*

#### [LaTeX.css：让你的网站更像一个 LaTeX 文档](https://frontendfoc.us/link/89021/rss "latex.now.sh")

[LaTeX](https://frontendfoc.us/link/89023/rss) is a popular typesetting system frequently used in academia and mathematic or scientific documentation.

```html
<link rel="stylesheet" href="https://latex.now.sh/style.min.css" />
```

*来源：Vincent Dörig*

#### [Howler.js：现代网站的音频库](https://frontendfoc.us/link/89025/rss "github.com")

Makes things easier cross-platform. Uses the Web Audio API but can fall back to HTML5 Audio.

![](https://camo.githubusercontent.com/98b571ff7230cf5d95e1d41d5d8ea0620c20a79d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f686f776c65722e6a732f686f776c65722d6c6f676f2e706e67)

*来源：James Simpson*

#### [LineIcons：2000+ 免费的线条图标](https://frontendfoc.us/link/89027/rss "lineicons.com")

A nice looking set of line-based icons, categorized, and available in a number of different formats including web font, SVG, AI, and more.

*来源：LineIcons*

#### [纯 CSS 实现的油画](https://frontendfoc.us/link/89029/rss "diana-adrianne.com")

Another amazing effort, this time of an Italian-style renaissance painting, from CSS artist Diana Smith. [Related repo](https://frontendfoc.us/link/89031/rss).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1590574711/udowax6emwvcljk0zy0i.jpg)](https://frontendfoc.us/link/89029/rss)

*来源：Diana Smith*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/442)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/442)。

