# 前端聚焦周刊：第 430 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 430](https://frontendfoc.us/issues/430)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1583342414/inikzzeudmdeu2teiok9.png)](https://frontendfoc.us/link/84745/rss)

#### [为什么 GOV.UK 设计团队更改了数字的输入类型](https://frontendfoc.us/link/84745/rss "technology.blog.gov.uk")

Highlights how the `<input type="number">` element can be somewhat problematic in some scenarios, and offers up a solution.

*来源：Hanna Laakso*

#### [Safari 将暂停有效期超过 13 个月的证书](https://frontendfoc.us/link/84735/rss "www.theregister.co.uk")

From September 1, any new certificate valid for more than 398 days will be rejected by Apple’s _Safari_ browser. While this is a Safari only move for _now_, if this catches on it might affect how you manage your TLS certificates.

![](https://regmedia.co.uk/2019/04/05/shutterstock_292272839.jpg?x=442&y=293&crop=1)

*来源：The Register*

#### [不断进化的编码规范](https://frontendfoc.us/link/84734/rss "bradfrost.com")

Covers the significance of establishing code guidelines and standards at the beginning of a project, and the importance of evolving those standards as a project progresses.

![](https://bradfrost.com/wp-content/uploads/2017/03/projects-frontendguidelines.jpg)

*来源：Brad Frost*

#### [CSS 工作组发布了四个“首次公开草案”](https://frontendfoc.us/link/84738/rss "www.w3.org")

This update briefly discusses the first drafts for four specs: CSS Color Module Level 5, Media Queries 5, CSS Transforms Level 2, and CSS Conditional Rules Level 4.

*来源：W3C*

#### [Brave 浏览器自动对 404 页面指向历史版本](https://frontendfoc.us/link/84739/rss "www.theverge.com")

The web browser can now detect when a webpage is unavailable and will offer to search the Wayback Machine for a backup. The feature isn’t just for 404 errors though, as it will also trigger when hitting a 408, 410, 451, 500, 502, 503, 504, 509, 520, 521, 523, 524, 525, or 526 error.

![](https://cdn.vox-cdn.com/thumbor/KaADRHk63B7fRogNqUs8c56su6U=/0x0:1460x821/1820x1213/filters:focal(614x295:846x527):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66376265/brave_lCit4VijLK.0.png)

*来源：Jon Porter*

#### [不要再叫 ‘Drop-Down’ 了](https://frontendfoc.us/link/84737/rss "adrianroselli.com")

使用更精准的叫法，例如 `select`、`ARIA Listbox`、`datalist`、`ARIA Combobox`、`Autocomplete`、`ARIA Menu`、`details/summary`、`Disclosure Widget`、`Accordion`、`Fly-out Navigation`、`Custom Display Selector`、`Otherwordingness`。

This is a little opinionated because there does seem to be a place for the term, but getting the terminology right in the 11 instances discussed is important.

![](https://adrianroselli.com/wp-content/uploads/2020/02/ikea-drop_outline.svg)

*来源：Adrian Roselli*

## 📙 文章、教程、观点

#### [CSS 隐藏元素的十种方法](https://frontendfoc.us/link/84743/rss "www.sitepoint.com")

Each of the 10 methods has an accompanying chart that looks at various pros/cons including accessibility, browser support, layout/reflow, performance, and more.

*来源：Craig Buckler*

#### [Currying in CSS?](https://frontendfoc.us/link/84744/rss "www.trysmudford.com")

The concept here is based on the fact that the values of CSS custom properties aren’t evaluated until they’re used. This kinda sorta resembles ‘currying’ in JS.

```
:root {
  --card-padding: 40px;
  --card-background: #FAFAFA;
}

.card {
  padding: var(--card-padding);
  background: var(--card-background);
}
```

*来源：Trys Mudford*

#### [HTML：比较难用的部分](https://frontendfoc.us/link/84740/rss "daverupert.com")

Dave has created a “living document” (that he intends to keep updated) that references different problems various sources have found with the accessibility of certain HTML elements.

*来源：Dave Rupert*

#### [前端工程师应该了解的后端知识](https://frontendfoc.us/link/84747/rss "terrastruct.com")

Subjects discussed include request rates, down time, HTTP status codes, delegating business logic, CORS, and cache busting.

*来源：Alexander Wang*

#### [CSS 的负边距](https://frontendfoc.us/link/84748/rss "www.quirksmode.org")

As the author points out, this might be the only article that covers negative margins in-depth (though it doesn’t go into flexbox and grid).

*来源：PETER-PAUL KOCH*

#### [如何在 Vanilla JS 中使用 requestAnimationFrame()](https://frontendfoc.us/link/84749/rss "gomakethings.com")

If you’ve never really had a use for this feature, but want to know how it works, this is easy to follow with some simple demos.

```
window.requestAnimationFrame(function () {
	console.log('it ran!');
});
```

*来源：Chris Ferdinandi*

#### [Vue 的组件构建思路](https://frontendfoc.us/link/84750/rss "www.telerik.com")

A step-by-step tutorial building a search bar component. Good for those already familiar with Vue but maybe want to see another developer’s perspective on component composition.

![](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/vuet2-light_1200x303.png?sfvrsn=aefbbd5d_2)

*来源：Marina Mosti*

#### [使用 Vanilla.js 构建单页应用（SPA）](https://frontendfoc.us/link/84751/rss "blog.jeremylikness.com")

*来源：Jeremy Likness*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1583326121/fknvvzancsugoodr1tsg.png)](https://frontendfoc.us/link/84755/rss)

#### [Shadows：盒子阴影生成器](https://frontendfoc.us/link/84755/rss "brumm.af")

This nifty browser-based tool can create smooth looking layered `box-shadows`. There is also [an accompanying Figma plugin](https://frontendfoc.us/link/84756/rss).

*来源：Philipp Brumm*

#### [Heroicons：免费的 MIT 许可的 UI 开发高质量 SVG 图标](https://frontendfoc.us/link/84757/rss "github.com")

140 icons in total, available in solid or outline style.

![](https://github.com/refactoringui/heroicons/raw/master/.github/solid-sm-preview.svg?sanitize=true)

*来源：refactoring ui*

#### [css.gg：超过 500 个可自定义的 CSS 图标](https://frontendfoc.us/link/84758/rss "github.com")

Another icon set, this time a collection of retina-ready icons built in CSS.

![](https://camo.githubusercontent.com/fda7825e0890b746bdbbb444df56fa95fdfd5648/68747470733a2f2f6373732e67672f6661762f6f672e706e67)

*来源：Astrit Malsija*

#### [Google Lighthouse Firefox 插件](https://frontendfoc.us/link/84760/rss "addons.mozilla.org")

The mega-popular performance and website quality tool is now available as a Firefox extension.

![](https://raw.githubusercontent.com/GoogleChrome/lighthouse/443ff2c8a297dfd2297dfaca86c4966a87c8574a/assets/example_audit.png)

*来源：Mozilla*

#### [Pep：立即将您的网站转换成快速、可安装的 PWA](https://frontendfoc.us/link/84761/rss "pep.dev")

Ostensibly can be done using a single line of code. Free for sites up to 10k page views per month and there are paid plans after that.

*来源：pep.dev*

#### [Panolens.js：基于 Three.js 的 JavaScript 全景查看器](https://frontendfoc.us/link/84762/rss "github.com")

[View examples here](https://frontendfoc.us/link/84763/rss). This is a lightweight, flexible, WebGL-based panorama viewer built on top of Three.js.

![](https://github.com/pchen66/pchen66.github.io/raw/master/Panolens/images/panolens.gif?raw=true)

*来源：Ray Chen*

*来源：Web Font of the Week*

#### [Shake 字体](https://frontendfoc.us/link/84764/rss)

There's a deeply personal story behind this font initiative, and although finding a practical use for it may prove tricky, it has been created to raise awareness and fund Parkinson's research.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1583321572/bjq7emhqirl0oaajctwx.png)](https://frontendfoc.us/link/84764/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/430)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/430)。

