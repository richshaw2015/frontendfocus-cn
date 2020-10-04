# 前端聚焦周刊：第 451 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 451](https://frontendfoc.us/issues/451)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [设计自适应的组件，不止适配尺寸](https://frontendfoc.us/link/92577/rss "stephaniewalter.design")

Thoughts on designing systems of reusable components that adapt to responsive layouts, containers, work with different content states and adapt to user needs, behaviour and context.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1596026608/knopupelzsa5xlgrdicj.png)](https://frontendfoc.us/link/92577/rss)

*来源：Stéphanie Walter*

#### ['Can I Use' 的 Beta 版本](https://frontendfoc.us/link/92578/rss "beta.caniuse.com")

[Can I Use](https://frontendfoc.us/link/92579/rss) is a fantastic resource for checking browser compatibility for modern Web Platform features and a redesign is on the way with performance improvements, better visual accessibility, nicer URLs, dark mode support, [and several more new features](https://frontendfoc.us/link/92580/rss).

*来源：Can I Use*

#### [提高可读性的现代 CSS 技术](https://frontendfoc.us/link/92582/rss "www.smashingmagazine.com")

Advice and tips on how to improve website legibility using things such as variable fonts, contrast, spacing, etc.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/eb8c811c-b04d-4f85-9b23-da34b90dae5c/x-height-css-techniques-legibility.png)

*来源：Edoardo Cavazza*

#### [网络字体生日快乐](https://frontendfoc.us/link/92583/rss "www.w3.org")

It has been a decade since the then newly-formed WebFonts Working Group published a [First Public Working Draft of the Web Open Font Format](https://frontendfoc.us/link/92584/rss) (WOFF).

![](https://www.w3.org/blog/wp-content/uploads/2020/07/2020-07-22_Web_Font_Usage.png)

*来源：Vladimir Levantovsky*

#### [Firefox 79：共享内存的回归、新工具及平台更新](https://frontendfoc.us/link/92585/rss "hacks.mozilla.org")

A run through of the highlights in version 79 of Firefox. [Here’s the full developer-focused round-up of changes](https://frontendfoc.us/link/92586/rss).

*来源：Florian Scholz, Chris Mills, Harald Kirschner (Mozilla)*

#### [Edge 路线图及发布时间表](https://frontendfoc.us/link/92587/rss "blogs.windows.com")

A new Microsoft Edge [release schedule](https://frontendfoc.us/link/92588/rss) for both the Beta and Stable channel releases.

*来源：Microsoft Edge Team*

## ⚡️ Quick bits:

*   Apple has [declined to implement 16 Web APIs in Safari](https://frontendfoc.us/link/92589/rss) due to privacy concerns (fingerprinting).

*   An increasing number of [the top Google search results](https://frontendfoc.us/link/92590/rss) are now Google's own properties and 'direct answers'.

*   Use Mozilla's MDN Web Docs? The web platform documentation site [just turned 15 years old](https://frontendfoc.us/link/92591/rss).

*   Ever dragged a file onto a web page only for it to navigate to the file, thus replacing your current tab? Well, Chromium-based browsers are now going to [open such files in a seperate new tab](https://frontendfoc.us/link/92592/rss).

*   Did you know that `text-decoration` isn't just good for setting an underline — [it has an 'overline' value too](https://frontendfoc.us/link/92593/rss).

## 📙 文章、教程、观点

#### ▶  [HTML：如何更加友好](https://frontendfoc.us/link/92597/rss "www.youtube.com")

How much do you know about HTML’s semantics? In this 20-minute talk one of the co-editors of the HTML5.3 spec will bring you up to speed, showing you how to use HTML to make sites that work better, are faster and include more people.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1596019647/vgg9nfqadegnkjytgfwx.png)](https://frontendfoc.us/link/92597/rss)

*来源：Bruce Lawson*

#### [理解 CSS 的多背景](https://frontendfoc.us/link/92598/rss "ishadeed.com")

A detailed visual explainer of the `background-image` property, and how best to use it to stack multiple backgrounds.

![](https://ishadeed.com/assets/multi-bg/css-bg-2.png)

*来源：Ahmad Shadeed*

#### [针对新手的 Fetch API 教程](https://frontendfoc.us/link/92599/rss "www.codeinwp.com")

A fairly gentle intro to using Fetch, the replacement for Ajax-based XMLHttpRequest techniques, along with a little bit of coverage of Promises.

```js
fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    return response.json();
  })
  .then((myContent) => {
    myImage.src = myContent['message'];
  });
```

*来源：Louis Lazaris*

#### [Introspecting CSS via the CSS OM](https://frontendfoc.us/link/92601/rss "lea.verou.me")

Some interesting digging around by Lea. You’re unlikely to need to do this yourself but it shows how you can interrogate the browser for supported CSS properties and whether or not certain properties are shorthand forms of others. Clever stuff.

![](https://lea.verou.me/wp-content/uploads/2020/07/image-1.png)

*来源：Lea Verou*

#### [Webwaste](https://frontendfoc.us/link/92602/rss "alistapart.com")

Just what is the environmental impact of bloated websites and unnecessary assets? Gerry McGovern examines in this extract from his [book World Wide Waste](https://frontendfoc.us/link/92603/rss).

*来源：A List Apart*

#### [本地处理 JS 日期和时间](https://frontendfoc.us/link/92604/rss "elijahmanor.com")

![](https://elijahmanor.com/_next/static/chunks/images/screenshot-1-b5b01434f88af947dcbfe591771d9bc9.webp)

*来源：Elijah Manor*

#### [Svelte 图片懒加载](https://frontendfoc.us/link/92605/rss "css-tricks.com")

*来源：Donovan Hutchinson*

## 🔧 代码、工具、资源

#### [css-sweeper：纯 CSS 实现的扫雷游戏](https://frontendfoc.us/link/92612/rss "github.com")

[Play it here](https://frontendfoc.us/link/92613/rss). The CSS interestingly uses a combination of CSS variables (using a technique called ‘space toggle’) along with HTML checkboxes.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1596020819/oovxlylzpwyt36cezu3h.png)](https://frontendfoc.us/link/92612/rss)

*来源：PropJockey*

#### [Tailzilla：Tailwind CSS 的在线代码编辑器](https://frontendfoc.us/link/92614/rss "tailzilla.app")

This is a collection of responsive components, templates, and starter kits based on Tailwind CSS. Each component offers a split screen live preview and editable code.

*来源：Tailzilla*

#### [Formbutton：简单可定制的弹窗表单](https://frontendfoc.us/link/92615/rss "formspree.io")

This adds one of those bottom-corner fly-out forms that users can use to quickly communicate or add feedback.

![](https://formspree.io/formbutton/docs/img/simple-formbutton.gif)

*来源：Formspree*

#### [webcompat：浏览器兼容性问题上报平台](https://frontendfoc.us/link/92616/rss "webcompat.com")

An initiative by various volunteers supported by Mozilla that aims to document bugs that create inconsistent experiences across browsers.

*来源：webcompat*

#### [通过 SVG 和 CSS 阴影创建的水滴效果](https://frontendfoc.us/link/92617/rss "codepen.io")

A very impressive end result.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1595941302/x4okhbsgljo54e2yifsf.jpg)](https://frontendfoc.us/link/92617/rss)

*来源：Oscar Salazar codepen*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/451)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/451)。

