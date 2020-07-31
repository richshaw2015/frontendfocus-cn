# 前端聚焦周刊：第 439 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 439](https://frontendfoc.us/issues/439)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [Web Vitals 介绍：健康网站的关键指标](https://frontendfoc.us/link/87898/rss "blog.chromium.org")

_Web Vitals_ is a new Google initiative to provide guidance on quality signals (think first input delay, load speed, etc.) that are key to delivering good user experiences on the web.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1588772378/h09v0f5eyw4ltiutbn3u.png)](https://frontendfoc.us/link/87898/rss)

*来源：Google*

#### [CSS 函数完全指南](https://frontendfoc.us/link/87765/rss "css-tricks.com")

A thorough resource detailing everything you need to know about functions in CSS. They can be inserted where you’d place a value, or in some cases, accompanying another value declaration — this is a good look at how to use them.

![](https://css-tricks.com/wp-content/uploads/2020/04/LV2OI0TM-1536x500.png)

*来源：CSS Tricks*

#### [HTML5 Boilerplate 十岁了](https://frontendfoc.us/link/87769/rss "htmlcssjavascript.com")

A look at some of the history behind the front-end framwork that started them all: HTML5 Boilerplate, which is now 10 years old.

![](https://htmlcssjavascript.com/wp-content/uploads/2020/04/hbd.jpg)

*来源：Rob Larsen*

#### [Firefox 76: Audio Worklets and Other Tricks](https://frontendfoc.us/link/87766/rss "hacks.mozilla.org")

This latest version delivers new features for web platform support, such as Audio Worklets and `Intl` improvements, on the JavaScript side. Also a number of improvements to the DevTools have been added. [Here’s the list of dev-focused changes](https://frontendfoc.us/link/87767/rss).

*来源：Chris Mills & Harald Kirschner (Mozilla)*

## ⚡️ Quick bytes:

*   The [CSS Working Group has published](https://frontendfoc.us/link/87770/rss) a First Public Working Draft of [CSS Box Model 4](https://frontendfoc.us/link/87771/rss). The two major changes are the introduction of the margin-trim property and content related to writing modes.

*   Firefox for Mobile (Android, really) [now supports](https://frontendfoc.us/link/87899/rss) NoScript, PrivacyBadger, and HTTPS Everywhere extensions.

*   Need to be compliant with European data protection law? You [can’t make access to your site dependant on a visitor agreeing that you can process their data](https://frontendfoc.us/link/87900/rss) aka a ‘consent cookie'.

*   Did you know that the \`<br>\` element [should only be used for line breaks that are actually part of content](https://frontendfoc.us/link/87772/rss) (such as in poems or addresses)?

*   Working with static sites? We have a [JAMstack newsletter](https://frontendfoc.us/link/87773/rss) that may be of interest.

## 📙 文章、教程、观点

#### [CSS Grid 布局令人兴奋的事](https://frontendfoc.us/link/87777/rss "css-irl.info")

…such as a new Grid inspector for Chrome, the ‘gap’ property in Chrome Canary, and (amazingly) masonry-style grids in Firefox Nightly.

![](https://css-irl.info/ec1ced83825f42fad0c20df25bb65303/exciting-things-on-the-horizon-for-css-layout.svg)

*来源：Michelle Barker*

#### [选择文本的 CSS](https://frontendfoc.us/link/87778/rss "ishadeed.com")

Another one of Ahmad’s great deep dives, this time covering the `::selection` pseudo-element and the user-select property in CSS.

![](https://ishadeed.com/assets/selection-css/selection-1-2.jpg)

*来源：Ahmad Shadeed*

#### [在 WebKit 中共享文件](https://frontendfoc.us/link/87779/rss "bugs.webkit.org")

Looks like more [Web Share API](https://frontendfoc.us/link/87780/rss) support (Level 2 / file sharing) is landing in WebKit — spotted via [this tweet from Jake Archibald](https://frontendfoc.us/link/87781/rss).

*来源：WebKit Bugzilla*

#### [很多人并不知道可用性是啥，更别提优化了](https://frontendfoc.us/link/87782/rss "kilianvalkhof.com")

“Accessibility is, for all intents and purposes, duct-taped onto the web. We need to make it a first class citizen in browsers. Until we do, we’ll keep wondering why developers aren’t making accessible websites.”

![](https://kilianvalkhof.com/wp-content/uploads/EXIpZ6nUcAEa2BH-1024x658.jpeg)

*来源：Kilian Valkhof*

#### [Is It Time for A Web Performance Rebrand?](https://frontendfoc.us/link/87783/rss "simonhearne.com")

“Web Performance is a niche term in a broad market, should we broaden our appeal to reach more people?”

![](https://simonhearne.com/images/rebrand2.png)

*来源：Simon Hearne*

#### [Eleventy 入门指南](https://frontendfoc.us/link/87785/rss "tatianamac.com")

This is an extensive and down-to-earth multi-part introductory guide to using Eleventy the popular static site generator.

![](https://tatianamac.com/assets/img/eleventy-i-static.jpg)

*来源：Tatiana Mac*

#### [`window.location` 指南](https://frontendfoc.us/link/87786/rss "dev.to")

A breakdown that covers most of the methods and properties available on the DOM’s `window.location` object.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--Omcz-tZ2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/56ouoyj064f18ltbnjxy.png)

*来源：samantha ming*

#### [Styling in the Shadow DOM With CSS Shadow Parts](https://frontendfoc.us/link/87787/rss "css-tricks.com")

Using the `::part()` selector.

*来源：Ollie Williams*

#### [使用 SVG 逐步增强单选按钮的体验](https://frontendfoc.us/link/87788/rss "christianheilmann.com")

```html
<input type="radio" id="r1" name="aligned" value="left" checked> 
<label for="r1">
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="#ffffff" height="3em" width="3em" 
       viewBox="0 0 100 100" x="0px" y="0px" 
       aria-labelledby="title-r1" role="img">
    <title id="title-r1">Aligned Left</title>
    <rect x="17.04" y="25.36" width="65.91" height="6"></rect>
    <rect x="17.04" y="39.79" width="43.87" height="6"></rect>
    <rect x="17.04" y="54.21" width="65.91" height="6"></rect>
    <rect x="17.04" y="68.64" width="43.87" height="6"></rect>
  </svg>
</label>
```

*来源：Christian Heilmann*

#### [How to Create Pure CSS Games (No JS)](https://frontendfoc.us/link/87789/rss "medium.com")

![](https://miro.medium.com/max/1200/1*SFvhdrPgwuQTPjvFFndLdA.gif)

*来源：Elad Shechter*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1588776204/zfuer0rkff1pkeek2txg.png)](https://frontendfoc.us/link/87901/rss)

#### [Pico: Take Browser Screenshots Client-Side with JavaScript](https://frontendfoc.us/link/87901/rss "github.com")

Different from capturing a webpage using Puppeteer or a similar tool in that the screenshot taking happens entirely client side.

*来源：Gripeless*

#### [🌍 I18n Ally：VS Code 的一站式 i18n 插件](https://frontendfoc.us/link/87790/rss "github.com")

Got some internationalization work to do? I18n Ally gives you inline annotations, automated translations via Google Translate (which you can review), progress indication, etc. Supports React, Angular, Vue and other frameworks.

![](https://github.com/antfu/i18n-ally/raw/screenshots/annotation-animated.gif?raw=true)

*来源：Anthony Fu*

#### [web-vitals-extension：测量网站核心性能指标的 Chrome 插件](https://frontendfoc.us/link/87791/rss "github.com")

This extension measures three core web vitals metrics (Largest contentful paint, cumulative layout shift, and first input delay) in a way that matches how they’re measured by Chrome and reported to other Google tools (see top feature in this issue).

![](https://github.com/GoogleChrome/web-vitals-extension/raw/master/media/cwv-extension-screenshot.png)

*来源：Google Chrome*

#### [utfu：将损坏的字符替换成合法的 UTF-8 字符](https://frontendfoc.us/link/87793/rss "gitlab.com")

Useful when old content contains characters like “â€” in place of a single quote, and similar legacy text issues.

```js
import { hex, htx, txt } from 'utfu'

const dirty = 'On a certain level, it�s like shouting �fire� in a crowded theater.'

const cleanHex = hex(dirty)
// --> 'On a certain level, it\u2019s like shouting \u201Cfire\u201D in a crowded theater.'
const cleanHTML = htx(dirty)
// --> 'On a certain level, it&#x2019;s like shouting &#x201C;fire&#x201D; in a crowded theater.'
const cleanTxt = txt(dirty)
// --> 'On a certain level, it’s like shouting “fire” in a crowded theater.'
```

*来源：Daniel Sieradski*

#### [Sitesauce：将动态站点转换成静态，且保持内容同步](https://frontendfoc.us/link/87794/rss "sitesauce.app")

This paid tool converts dynamic websites (e.g. WordPress, Ghost, Joomla, etc.) into static sites, and keeps content in sync.

*来源：Miguel Piedrafita*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/439)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/439)。

