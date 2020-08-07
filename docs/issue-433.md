# 前端聚焦周刊：第 433 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 433](https://frontendfoc.us/issues/433)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [CSS Houdini 实践一览](https://frontendfoc.us/link/85737/rss "www.smashingmagazine.com")

A detailed look at each part of [Houdini](https://frontendfoc.us/link/85738/rss), a group of APIs that give developers direct access to the CSS Object Model, including current browser support (_quickly improving_) and how its features can be used today using progressive enhancement.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585135488/pvakpmr1ql4q9asohzqd.jpg)](https://frontendfoc.us/link/85737/rss)

*来源：Adrian Bece*

#### [Safari 默认阻止第三方 Cookie，另外本地存储 7 天后失效……](https://frontendfoc.us/link/85789/rss "webkit.org")

Safari’s Intelligent Tracking Prevention (ITP) has been in beta for a few months, and is now live in both the iOS and macOS builds. It introduces significant privacy changes, including **cross-site cookies now being blocked by default**. There is also a '7 day cap on all script-writeable storage' (including Indexed DB, localStorage and sessionStorage) which Aral Balkan suggests “[effectively kills offline web apps](https://frontendfoc.us/link/85790/rss)”.

（国外对隐私的看重，真是到了令人发指的地步）

*来源：John Wilander (WebKit)*

#### [拥抱现代图片格式：在 HTML 和 React 中使用 WebP](https://frontendfoc.us/link/85791/rss "joshwcomeau.com")

A thorough look at how using next-gen image formats along with the `<picture>` element can reduce image sizes dramatically.

```html
<ImgWithFallback
  src="/images/cereal.webp"
  fallback="/images/cereal.png"
  alt="A photo showing the expiration date on a box of Lucky Charms"
/>
```

*来源：Josh W Comeau*

#### ▶  [The Complete AEA DC 2019 Now Online](https://frontendfoc.us/link/85767/rss "aneventapart.com")

Usually videos from ‘An Event Apart’ sessions get released gradually, but due to current circumstances they’ve opted to release them all in one go. There’s some good stuff here including excellent talks from Jen Simmons, Sara Soueidan, Aaron Gustafson and others.

*来源：An Event Apart*

#### [Chrome 暂停发布 82 版本](https://frontendfoc.us/link/85742/rss "twitter.com")

The stable release of Chrome 81 was due to arrive last week, but this version remains in beta for the forseeable future as things are now on hiatus due to the current global crisis. Canary releases will continue shipping as planned.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585066669/wgndcsk9ou0krsc3qhts.png)](https://frontendfoc.us/link/85742/rss)

*来源：Chrome Developers on Twitter*

## 📙 文章、教程、观点

#### [Flexbox 和绝对定位](https://frontendfoc.us/link/85746/rss "www.chenhuijing.com")

Looks at what happens when you absolutely position a flex item and talks about a related bug in Firefox’s developer tools.

![](https://chenhuijing.com/assets/images/posts/flexbox-absolute/mental-model.svg)

*来源：Chen Hui Jing*

#### [如何提升 Video 的可用性](https://frontendfoc.us/link/85739/rss "www.webdesignerdepot.com")

Lots of good reminders here on video accessibility, covering captions, subtitles, audio descriptions, transcripts, and more.

![](https://www.webdesignerdepot.com/cdn-origin/uploads/2020/02/JW-Player-Closed-Captions-1684x933.png)

*来源：Suzanne Scacca*

#### [CSS 可以影响读屏软件](https://frontendfoc.us/link/85747/rss "blog.benmyers.dev")

Runs through a few examples of how your CSS can significantly change what some screen readers announce.

![](https://i.imgur.com/G8HJXc8.jpg)

*来源：Ben Myers*

#### [加载时间减少 33s](https://frontendfoc.us/link/85741/rss "daverupert.com")

Dave discusses how shaving 33s off page load time (by fixing how fonts are loaded) helped him recognize some larger lessons about performance over the long haul.

![](https://pbs.twimg.com/media/EIn5AkKXUAE_3JQ?format=jpg&name=medium)

*来源：Dave Rupert*

#### [使用 Media Session API 定制媒体通知和回放](https://frontendfoc.us/link/85748/rss "web.dev")

A look at how to customize media notifications and respond to media related events, such as seeking or track changing with the Media Session API.

![](https://webdev.imgix.net/media-session/tldr.jpg)

*来源：François Beaufort*

#### [如何使用 Box Shadows 创建风箱动画](https://frontendfoc.us/link/85750/rss "fossheim.io")

Now this may have some performance implications, but the end result is a neat effect. _The article refers to the effect as an “accordion”, but not in the UI sense_.

![](https://fossheim.io/static/img/css-box-shadow-animation-static.png)

*来源：Sarah L. Fossheim*

#### [如何使用 URL API](https://frontendfoc.us/link/85751/rss "gomakethings.com")

A simple look at a lesser-known Web API, which lets you grab various bits including the hash, hostname, pathname, protocol, etc.

```js
var url = new URL('https://gomakethings.com/about?num=42&greeting=hello#contact');
```

*来源：Chris Ferdinandi*

#### [使用 Web Animations API 创建动画](https://frontendfoc.us/link/85753/rss "css-tricks.com")

*来源：Louis Hoebregts*

#### [如何使用 CSS 的 `currentColor`](https://frontendfoc.us/link/85754/rss "www.js-craft.io")

```css
.red-box {
    color: red;
    border: 2px solid currentColor;
    box-shadow: 5px 10px currentColor;
}
```

*来源：JS Craft*

#### [Indicating Scroll Position on a Page With CSS](https://frontendfoc.us/link/85792/rss "css-tricks.com")

*来源：Preethi Sam*

## 🔧 代码、工具、资源

#### [tabler-icons：超过 300 个高质量的免费 SVG 图标](https://frontendfoc.us/link/85760/rss "github.com")

Here's a nice collection of practical icons. _MIT-licensed_.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585060399/qfxuijtxiqo8jh0aoahh.png)](https://frontendfoc.us/link/85760/rss)

*来源：Tabler*

#### [Buttono: A Flexible Sass Mixin for Creating BEM-Style Buttons](https://frontendfoc.us/link/85762/rss "hsnaydd.github.io")

Buttons have a consistent look across modern browers and include focus styles for accessibility.

![](https://raw.githubusercontent.com/hsnaydd/buttono/master/buttono.svg?sanitize=true)

*来源：Hasan Aydoğdu*

#### [CSS2JS：将 CSS 转换成 JS 对象](https://frontendfoc.us/link/85763/rss "css2js.dotenv.dev")

Got CSS and need it in JavaScript object format for JSX or some CSS-in-JS library? This may help.

```js
{
  display: "block",
  fontSize: 16,
  background: "#1e2f5d",
  color: "#a4cff4",
  fontFamily: "'Inter', sans-serif",
  fontWeight: "bold",
}
```

*来源：dotenv*

#### [Uppload：更好的图片上传](https://frontendfoc.us/link/85764/rss "uppload.js.org")

Open source, highly customizable with 30+ plugins and can be used with any file uploading backend.

![](https://raw.githubusercontent.com/elninotech/uppload/master/assets/icon-ph.svg?sanitize=true)

*来源：El Niño*

#### [本周字体 Ostrich Sans](https://frontendfoc.us/link/85765/rss)

Although not new, this remains a popular typeface. Ostrich Sans is a modern sans-serif font featuring long stems (_or necks if you will_). It's available in a variety of styles and weights — I particularly like the Black and Heavy variants. [Here's the related GitHub repo](https://frontendfoc.us/link/85766/rss).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585061168/t2azbeajvy2cojb3fc4e.png)](https://frontendfoc.us/link/85765/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/433)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/433)。

