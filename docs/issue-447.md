# 前端聚焦周刊：第 447 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 447](https://frontendfoc.us/issues/447)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首


#### ▶  [Google web.dev 直播开始了](https://frontendfoc.us/link/91151/rss "web.dev")

It started yesterday but Google is running a three day (June 30-July 2) online event focused on the Web development community covering new tooling and techniques. If you want to watch the talks from yesterday, they’re [all here.](https://frontendfoc.us/link/91152/rss)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/c0yonm7mp5p6luxdwqk3.jpg)](https://frontendfoc.us/link/91151/rss)

*来源：web.dev*

#### [当 Sass 和新 CSS 特性冲突](https://frontendfoc.us/link/91047/rss "css-tricks.com")

CSS has added plenty of cool new features (such as custom properties) of late, but they don’t come without their own problems. Here, Ana Tudor explains why she still finds preprocessors, like Sass, necessary.

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/06/err_0_incomp_units.png?resize=800%2C245&ssl=1)

*来源：CSS Tricks*

#### [Chrome 85 中开发者工具的新特性](https://frontendfoc.us/link/91046/rss "developers.google.com")

Style editing for CSS-in-JS frameworks, Lighthouse 6.0, support for new JavaScript features, and more.

![](https://developers.google.com/web/updates/images/2020/06/breakpoints.png)

*来源：Jecelyn Yeen (Google Developers)*

#### ▶  [Safari 和 WebKit 中针对开发者的新特性](https://frontendfoc.us/link/91043/rss "developer.apple.com")

A 40-minute video looking at the latest features and improvements announced at WWDC for Safari and WebKit, including updated web APIs, CSS and media features, JavaScript syntax, and more. [This video looking at changes to the Safari Web Inspector](https://frontendfoc.us/link/91044/rss) is also worth a look.

*来源：Jon Davis (Apple)*

#### [Firefox 78 的新特性：开发者工具及大量更新](https://frontendfoc.us/link/91041/rss "hacks.mozilla.org")

Version 78 landed yesterday, bringing with it a new regex engine, updates to the ECMAScript Intl API, new CSS selectors, enhanced support for WebAssembly, and many improvements to the dev tools. These are the highlights, but if you want to dig into the full list of developer-facing changes, [that’s here](https://frontendfoc.us/link/91042/rss).

```js
const lf = new Intl.ListFormat('en');
lf.format(["apples", "pears", "bananas"]):
// → "apples, pears, and bananas"

const lfdis = new Intl.ListFormat('en', { type: 'disjunction' });
lfdis.format(["apples", "pears", "bananas"]):
// → "apples, pears, or bananas"
```

*来源：Florian Scholz, Harald Kirschner (Mozilla)*

## ⚡️ Quick bits:

*   Last week we linked to a report on how Safari may start blocking Google Analytics, _turns out that isn't quite right_, as [Simo Ahava explains](https://frontendfoc.us/link/91048/rss).

*   Related to the above item, [here's Apple's own explainer](https://frontendfoc.us/link/91049/rss) on how tracking prevention tech works in WebKit.

*   Chrome will be enforcing a [398-day validity period](https://frontendfoc.us/link/91050/rss) for TLS certificates issued after September 1.

*   Apple [declined to implement 16 Web APIs in Safari](https://frontendfoc.us/link/91051/rss) due to privacy concerns.

## 📙 文章、教程、观点

#### [使用结构化的请求头提升 HTTP](https://frontendfoc.us/link/91055/rss "www.fastly.com")

Highlights the benefits of the new Structured Fields library — a collection of well-defined data types designed to help assure interoperability, remove some HTTP header headaches, and introduce some network level performance gains.

```
Example-Header: "blue"; websafe, "sort of red"; author="sue", "green"
Example-Header: people=(joanna stacy), places=("new york" "rome")
```

*来源：Mark Nottingham*

#### ▶  [什么是 CUBE CSS？ (Smashing Podcast Episode 19)](https://frontendfoc.us/link/91056/rss "www.smashingmagazine.com")

Drew McLellan talks to Andy Bell, the creator of CUBE CSS, to find out how this CSS methodology differs from BEM, SMACSS, and OOCSS.

*来源：Smashing Magazine podcast*

#### [使用 Chrome 的 UX 报告接口](https://frontendfoc.us/link/91057/rss "web.dev")

Learn how to use the recently released Chrome UX Report API to get easy, RESTful access to real-user experience data across millions of websites (and compare your Core Web Vitals measurements).

![](https://webdev.imgix.net/chrome-ux-report-api/hero.png?auto=format&fit=max&w=2880)

*来源：Rick Viscomi and Shane Exterkamp*

#### [Svelte 极速入门](https://frontendfoc.us/link/91058/rss "dev.to")

A quick way to learn the core parts of JavaScript framework Svelte.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--GVnyrsWi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/l62jx41mx08pstiueak6.png)

*来源：Per Harald Borgen*

#### [如何动态获取页面上的所有的自定义 CSS 属性](https://frontendfoc.us/link/91059/rss "css-tricks.com")

Some fun DOM and stylesheet wrangling on display here.

*来源：Tyler Gaw*

#### [你使用 SVG 格式的图标了吗？附现代浏览器指南](https://frontendfoc.us/link/91060/rss "medium.com")

```html
<link rel="icon" href="favicon.svg">
```

*来源：Antoine Boulanger*

#### [Styling Layout Wrappers In CSS](https://frontendfoc.us/link/91061/rss "ishadeed.com")

![](https://ishadeed.com/assets/wrappers-css/wrapper-intro.png)

*来源：Ahmad Shadeed*

## 🔧 代码、工具、资源

#### [emoji-picker-element：现代的轻量级的 Emoji 选择器](https://frontendfoc.us/link/91062/rss "github.com")

[See a live demo here](https://frontendfoc.us/link/91063/rss). Some cool performance advantages for this: It’s a web component and it’s built on Svelte and IndexedDB.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1593598740/i7flpmyk2nfmy4pjsnyr.png)](https://frontendfoc.us/link/91062/rss)

*来源：Nolan Lawson*

#### [Bootstrap Icons Alpha 5](https://frontendfoc.us/link/91064/rss "blog.getbootstrap.com")

The fifth and final alpha release of Bootstrap Icons, featuring 300 new glyphs (taking the total past 1,000 icons).

![](https://blog.getbootstrap.com/assets/img/2020/06/bootstrap-icons-alpha5-all.png)

*来源：Mark Otto, Jacob Thornton, and Bootstrap contributors*

#### [Tragopan：最小化无依赖的缩放库](https://frontendfoc.us/link/91066/rss "github.com")

[Try it out here](https://frontendfoc.us/link/91067/rss). Claims to work faster due to use of native browser scrolling for panning (left/right/up/down) and transform/scale for zooming.

```html
<div id="viewport">
<div id="content">
    <!-- your pan/zoomable content here -->
</div>
</div>

<script>
const tragopan = new Tragopan({
    viewport: document.querySelector('#viewport'),
    content: document.querySelector('#content')
});
</script>
```

*来源：team.video*

#### [Stitches: An Atomic CSS-in-JS Library](https://frontendfoc.us/link/91068/rss "github.com")

Another option in the CSS-in-JS world that includes abstractions for React, Vue, and Tailwind UI.

*来源：Christian Alfoni*

#### [Checkboxland：用复选框渲染任意图形](https://frontendfoc.us/link/91069/rss "www.bryanbraun.com")

This frivolous experiment is equal parts terrifying and impressive. It’s a JS library that displays animations, text, and arbitrary data using nothing but HTML checkboxes and, to be fair, they’ve presented it really well!

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/rzj4kikphybq9poi8f4l.jpg)](https://frontendfoc.us/link/91069/rss)

*来源：Bryan Braun*

#### [如何区分邮件客户端](https://frontendfoc.us/link/91070/rss "howtotarget.email")

A crowdsourced list of email development techniques for singling out email clients and platforms.

```css
[class^="apple-mail"] .foo
```

*来源：Dylan Smith*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/447)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/447)。

