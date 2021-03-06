# 前端聚焦周刊：第 429 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 429](https://frontendfoc.us/issues/429)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1582644484/jby6jozvfrjzppuxhgyz.jpg)](https://frontendfoc.us/link/84409/rss)

#### [一起来定义 CSS 4](https://frontendfoc.us/link/84409/rss "github.com")

It seems whether CSS 4 should be a “thing” is a hot button issue right now, with most of the chatter seemingly around branding it as such for marketing reasons. Here’s Jen Simmons with her take, and the position of the CSS Working Group. _This GitHub thread is open to comments from developers and designers for their thoughts_.

*来源：World Wide Web Consortium*

#### [data 属性完全指南](https://frontendfoc.us/link/84410/rss "css-tricks.com")

Everything you ever wanted to know about data attributes in HTML, CSS, and JavaScript.

```html
<!-- They don't need a value -->
<div data-foo></div>

<!-- ...but they can have a value -->
<div data-size="large"></div>

<!-- You're in HTML here, so careful to escape code if you need to do something like put more HTML inside -->
<li data-prefix="Careful with HTML in here."><li>

<!-- You can keep dashing if you like -->
<aside data-some-long-attribute-name><aside>
```

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/02/specificity-selector.png)

*来源：Chris Coyier*

#### ▶  [让事情变得更好之重新定义 CSS 的技术可能性](https://frontendfoc.us/link/84412/rss "aneventapart.com")

In this excellent hour-long talk Rachel Andrew explores what recent advances in CSS layout have given us, what things are on the horizon and how they may change the way we see web design, plus a bit on what she hopes to see in the future.

*来源：An Event Apart*

#### [oldweb.today：使用虚拟浏览器浏览旧网站](https://frontendfoc.us/link/84413/rss "oldweb.today")

An impressive browser-based tool that allows you to browse public web archives in a recreation of a legacy browser of your choice.

*来源：Rhizome*

#### [Crimson Text](https://frontendfoc.us/link/84461/rss)

Certainly one of the classier options available on Google Fonts. Even if you don't like to use serif fonts for body text, it can add an interesting touch to headlines and sits well alongside neutral sans serifs.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1582669105/xoujvw5whtnuu7gd9ljj.png)](https://frontendfoc.us/link/84461/rss)

## 📙 文章、教程、观点

#### [设计漂亮的按钮样式](https://frontendfoc.us/link/84416/rss "ishadeed.com")

A thorough look at the finer details of the `button` element, plus how to style it to ensure it works great on all browsers.

![](https://ishadeed.com/assets/styling-button/appearance-none.png)

*来源：Ahmad Shadeed*

#### [页面可见性 API](https://frontendfoc.us/link/84417/rss "t.co")

Modern browers generally handle page visibility stuff on their own nowadays, but you can do a little more with the API, which has excellent browser support.

```js
const video = document.querySelector('video');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') {
    video.pause();
  }
})
```

*来源：John Au-Yeung*

#### [如何用 CSS 创建倾斜布局](https://frontendfoc.us/link/84418/rss "9elements.com")

View an [interactive demo](https://frontendfoc.us/link/84419/rss) of the effect. Uses transforms, pseudo-elements, and custom properties to achieve the layout.

![](https://9elements.com/blog/content/images/size/w2000/2020/01/diagonal-cover.png)

*来源：nils binder*

#### ▶  [避免失去用户注意力的 UX 技巧](https://frontendfoc.us/link/84420/rss "www.youtube.com")

A look at a variety of design principles for drawing attention, complete with examples (covering both the web and apps), in a 40 minute talk.

*来源：Chris Atherton*

#### [如何为 React 设置 Webpack 和 Babel 7](https://frontendfoc.us/link/84421/rss "hackernoon.com")

If you’ve learned to get a React project up and running using create-react-app, this is a nice detailed tutorial to take that to the next level using two popular tools.

![](https://hackernoon.com/drafts/e6l36x2.png)

*来源：Ismile Hossain*

#### [MDN 浏览器兼容性问卷](https://frontendfoc.us/link/84422/rss "qsurvey.mozilla.com")

This survey from Mozilla is looking to find out what your pain points are in regards to browser compatibility.

*来源：Mozilla*

#### [Google PageSpeed 解读：评分 100/100 的真相](https://frontendfoc.us/link/84423/rss "kinsta.com")

![](https://kinsta.com/wp-content/uploads/2020/01/pagespeed-insights-score-1.png)

*来源：Brian Jackson*

#### ▶  [使用 Chrome DevTools 延迟加载图片](https://frontendfoc.us/link/84425/rss "www.youtube.com")

*来源：Umar Hansa*

#### [Safari 技术预览版 101 发行说明](https://frontendfoc.us/link/84426/rss "webkit.org")

*来源：Jon Davis*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1582644329/duujv0zvggmi3ksl4wva.png)](https://frontendfoc.us/link/84427/rss)

#### [Blisk：面向开发者的加速应用测试的浏览器](https://frontendfoc.us/link/84427/rss "blisk.io")

Has a number of built-in testing features including multiple device views, URL and scroll sync, auto-refresh, screenshots, and screen recorder.

*来源：Blisk Team*

#### [Paged.js：格式化成适合 PDF 输出的 HTML](https://frontendfoc.us/link/84428/rss "www.pagedjs.org")

I think this project’s site could win an award for sheer _elegance_, but it’s not just elegant, there’s [tons of well formatted documentation too.](https://frontendfoc.us/link/84429/rss) Or.. if you prefer, [the GitHub repo.](https://frontendfoc.us/link/84430/rss)

*来源：Cabbage Tree Labs*

#### [Svelte-grid：Svelte 的可拖动可调整大小的响应式网格布局](https://frontendfoc.us/link/84431/rss "svelte-grid.now.sh")

The on-page demo works really nicely. You can easily resize the elements to fit after dragging them around. It’s basically a customizable masonry layout.

![](https://camo.githubusercontent.com/f15655cd66f304080e50b6a8c6a106e708239af4/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646d74726b33796e732f766964656f2f75706c6f61642f715f6175746f2f76313536353435353336362f6963655f766964656f5f32303139303831302d3230323935345f6675717578742e676966)

*来源：Vahe Araqelyan*

#### [Lion：高性能、灵活、可用性好的 Web 组件库](https://frontendfoc.us/link/84433/rss "github.com")

From ING, known for their work with components, this is a set of feature-complete web components for kickstarting web projects. [Announcement post is here](https://frontendfoc.us/link/84434/rss).

*来源：ING Bank*

#### [Hex Engine：面向浏览器的现代 2D 游戏引擎](https://frontendfoc.us/link/84435/rss "github.com")

Still in early development. A TypeScipt- and Canvas-based game engine designed to feel similar to React.

![](https://github.com/suchipi/hex-engine/raw/master/logo-image.png)

*来源：Lily Scott*

#### [monica.css](https://frontendfoc.us/link/84436/rss "meowni.ca")

A really tiny set of helper classes to make it easier to work with flexbox layouts.

```css
* {box-sizing: border-box}
[hidden] {display: none !important}
[disabled] {pointer-events:none; opacity: 0.3}
.horizontal {display: flex; flex-direction: row; justify-content: space-between}
.vertical {display: flex; flex-direction: column}
.center {justify-content: center; align-items: center}
.flex {flex: 1}
html {
  --spacing-xs: 8px;
  --spacing: 24px;
  --spacing-s: 12px;
  --spacing-m: 36px;
}
```
*来源：Monica Dinculescu*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/429)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/429)。

