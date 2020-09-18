# 前端聚焦周刊：第 449 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 449](https://frontendfoc.us/issues/449)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [The Cicada Principle, Revisited with CSS Variables](https://frontendfoc.us/link/91793/rss "lea.verou.me")

The _Cicada Principle_ is the idea that when creating repetitive patterns, backgrounds, etc. using prime numbers can increase the appearance of organic randomness. Lea shows how she used a modern approach to this idea to format her code examples in a visually striking way.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1594810888/qjam08r7xrlr6tybsany.jpg)](https://frontendfoc.us/link/91793/rss)

*来源：Lea Verou*

#### [Style Stage：现代 CSS 展示](https://frontendfoc.us/link/91794/rss "stylestage.dev")

A modern twist on the _CSS Zen Garden_ idea of yesteryear where people submit their own manipulations of a concept using the most modern of CSS features. Here are [the submissions so far](https://frontendfoc.us/link/91795/rss) with [Vaporwave](https://frontendfoc.us/link/91796/rss) being my favorite. They all have a very _“90s Web design renaissance”_ feel to them though.

![](https://repository-images.githubusercontent.com/276970401/fb04d000-bf10-11ea-9e96-3788ae2b16f7)

*来源：Stephanie Eckles et al.*

#### ▶  [Chrome 开发者工具的新特性](https://frontendfoc.us/link/91798/rss "www.youtube.com")

Two of Google’s best known faces on the Chrome side of things give a twenty minute run through a whole bunch of new bits and pieces available in the DevTools in areas like performance monitoring, WebAssembly source mapping, and cookies.

*来源：Paul Lewis and Surma (Google)*

## ⚡️ Quick bits:

*   Adobe Flash passes off into the sunset later this year, and [Ars Technica have taken a look back at its story.](https://frontendfoc.us/link/91799/rss) A nice bit of nostalgia.

*   You can now start up a new Codepen [by visiting pen.new](https://frontendfoc.us/link/91800/rss).

*   Got a flashlight to hand? [This personal site](https://frontendfoc.us/link/91801/rss) takes an amusing unique approach to dark mode.

*   I like this: A curated list of [whimsical websites](https://frontendfoc.us/link/91802/rss) that have a bit of fun and spark joy.

## 📙 文章、教程、观点

#### [跨页面前记录当前页面的滚动位置](https://frontendfoc.us/link/91806/rss "css-tricks.com")

An interesting UX enhancement that involves saving the current scroll position in `localstorage` before the user navigates away.

```js
let sidebar = document.querySelector(".sidebar");

let top = localStorage.getItem("sidebar-scroll");
if (top !== null) {
  sidebar.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("sidebar-scroll", sidebar.scrollTop);
});
```

*来源：Chris Coyier / Hakim El Hattab*

#### [Sass 生成响应式的 CSS 类名后缀](https://frontendfoc.us/link/91807/rss "seesparkbox.com")

An interesting look at automating classes with Sass mixins and maps.

```css
@mixin loop-mq {
  @content;
  @each $key, $value in $breakpoints {
    @media (min-width: #{$value}) {
      &\@#{$key} {
        @content;
      }
    }
  }
}
```
*来源：Philip Zastrow*

#### [适配暗黑模式的网站 Logo](https://frontendfoc.us/link/91808/rss "www.giftegwuenu.com")

Logos often suit dark or light contexts and not the other, but you can swap them dynamically with a bit of CSS.

![](https://www.giftegwuenu.com/images/uploads/untitled-design.png)

*来源：Gift Egwuenu*

#### [我的网站有 13% 的用户屏蔽了 Google Analytics](https://frontendfoc.us/link/91809/rss "markosaric.com")

It’s not just _ads_ that get blocked but trackers too. Every site will have a different audience profile and a different likelihood of having its tracking blocked, so maybe it’s better to track requests behind the scenes or focus on other metrics instead.

*来源：Marko Saric*

#### [适配 Firefox 的 `prefers-contrast` 媒体查询属性](https://frontendfoc.us/link/91810/rss "hacks.mozilla.org")

This [upcoming media query](https://frontendfoc.us/link/91811/rss) works in a similar way to `prefers-colour-scheme`, and is to be used to detect if the user has requested the system increase or decrease the amount of contrast between adjacent colors. This blog post walks through its design and implementation in Firefox.

![](https://hacks.mozilla.org/files/2020/07/image3.png)

*来源：Zeke Medley (Mozilla)*

#### [你需要知道的关于 Core Web Vitals 的一切](https://frontendfoc.us/link/91812/rss "calibreapp.com")

Core Web Vitals is a set of metrics portraying three aspects of user experience: loading, interactivity and visual stability.

![](https://calibreapp.com/_next/static/images/core-web-vitals-2000-32d107377cef0c5f512986fd6e6dcd11.png)

*来源：Karolina Szczur*

#### [75 行代码的标准 WebGL](https://frontendfoc.us/link/91813/rss "avikdas.com")

WebGL is pretty intimidating but this boils it down to the bare essentials. And if you want to go further, I still think [this thorough guide](https://frontendfoc.us/link/91814/rss) is one of the best. Of course, you may see all of the boilerplate needed and just use [Three.js](https://frontendfoc.us/link/91815/rss) instead, which is fine too! 😄

![](https://avikdas.com/assets/images/2020-07-08-barebones-webgl-in-75-lines-of-code/full-sequence-diagram.png)

*来源：Avik Das*

#### [Always Bet on HTML.. Being Misunderstood](https://frontendfoc.us/link/91816/rss "christianheilmann.com")

*来源：Christian Heilmann*

## 🔧 代码、工具、资源

#### [Tabler Icons：超过 500 个可定制的 SVG 图标](https://frontendfoc.us/link/91817/rss "tablericons.com")

Simple, monochrome, line art SVG icons covering lots of concepts from (mostly) computer and browser based concepts to arrows and weather.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/vttdounnlssbud63twka.jpg)](https://frontendfoc.us/link/91817/rss)

*来源：Paweł Kuna*

#### [Squircley: A SVG 'Squircle' Maker](https://frontendfoc.us/link/91836/rss "squircley.app")

If you don’t find it [hip to be square](https://frontendfoc.us/link/91819/rss), consider a cross between the square and the circle: the [_squircle_.](https://frontendfoc.us/link/91831/rss)

*来源：georgedoescode*

#### [Headless WordPress with Gatsby Cloud](https://frontendfoc.us/link/91820/rss "www.gatsbyjs.org")

Gatsby is an increasingly popular React-based site building framework and this new plugin brings it to WordPress. The idea is you can use WordPress as a headless CMS with Gatsby taking care of the front-end.

*来源：Hashim Warren (Gatsby)*

#### [shareon：简单可定制的分享按钮组件](https://frontendfoc.us/link/91821/rss "shareon.js.org")

They also boast good ethics as there’s no tracking code involved.

```html
<div class="shareon" data-url="https://example.com/custom-url">
    <a class="facebook" data-title="Custom Facebook title"></a>
    <a class="messenger" data-url="https://my-cool-website.com"></a>
    <a class="pinterest" data-media="https://picsum.photos/500">Pin</a>
    <a class="telegram" data-text="Check this out!"></a>
    <a class="twitter" data-via="MyNickname"></a>
    <a class="whatsapp">Send</a>
</div>
```

*来源：Nikita Karamov*

#### [Halfmoon：内置暗黑模式的前端框架](https://frontendfoc.us/link/91822/rss "www.gethalfmoon.com")

A responsive frontend framework designed for quickly building dashboards and product pages. Uses Bootstrap-like classes, and is compatible with IE11.

*来源：Halfmoon*

#### [EmailComb：从邮件模板中移除未使用的 CSS](https://frontendfoc.us/link/91823/rss "emailcomb.com")

A handy online tool to try out.

*来源：Codsen ltd*

#### [纯 CSS 实现的打字机效果](https://frontendfoc.us/link/91824/rss "codepen.io")

I’m quite impressed how simple this is - it leans on the `steps` directive to make the animation jerky enough to look like typing.

*来源：CodePen demo*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/449)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/449)。

