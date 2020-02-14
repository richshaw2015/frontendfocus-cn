# 前端聚焦周刊：第 423 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Oh My RSS](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 423](https://frontendfoc.us/issues/423)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1579000732/wqmfk97yu8gfdlnkqg9z.jpg)](https://frontendfoc.us/link/82363/rss)

#### [微软基于 Chromium 的浏览器来了](https://frontendfoc.us/link/82363/rss "blogs.windows.com")

新版本的 Edge 已经不是预览版了，[这里下载](https://frontendfoc.us/link/82364/rss)。 开发者文档[可以在这里找到](https://frontendfoc.us/link/82365/rss)。（_那么它的昵称应该是 Edgium 还是 Credge 呢_ 😅）

*来源：Kyle Pflug (Microsoft)*

#### [Google 将淘汰 Chrome 中的 User agent](https://frontendfoc.us/link/82366/rss "www.zdnet.com")

从开始以来，User agent 几乎一直是 Web 的一部分， 但是人们正在逐渐弱化其地位。Chrome [计划](https://frontendfoc.us/link/82367/rss)转为使用 [_Client Hints_](https://frontendfoc.us/link/82368/rss)，苹果、微软和火狐也表示有兴趣冻结或逐步淘汰它。

*来源：Catalin Cimpanu*

#### [Chrome 正在试验 Web NFC 的实施](https://frontendfoc.us/link/82278/rss "groups.google.com")

Web NFC 旨在为站点提供一种读写附近 NFC 标签的方法。Google 正在试验支持这个 API，并期望在 84 版本发布。你可以先看看[相关的标准](https://frontendfoc.us/link/82279/rss)，或者试试其 [演示](https://frontendfoc.us/link/82280/rss)。

*来源：François Beaufort*

#### [Web 正文文字大小简史](https://frontendfoc.us/link/82281/rss "fvsch.com")

这篇介绍了这些年来默认文本大小发生的有趣变化，为什么我们会默认使用`16px`，以及现代可变大小解决方案。

*来源：Florens Verschelde*

#### [开始为 Edge 开发插件](https://frontendfoc.us/link/82276/rss "blogs.windows.com")

你可能在考虑开发 Edge 的插件，好消息是**大多数为 Chrome 构建的插件都可以运行，而无需进行任何修改。**

*来源：Killian McCoy*

#### [Google 计划在2年内杀死 Chrome 中的第三方 Cookie](https://frontendfoc.us/link/82282/rss "digiday.com")

这家搜索巨头为其预期的更改设定了较长的宽限期，并要求在线广告行业帮助其建立更多以隐私为中心的 Cookie 替代方案。
[此处是 Google 的博客](https://frontendfoc.us/link/82369/rss)。

![](https://i1.wp.com/digiday.com/wp-content/uploads/2020/01/google_cookie-01.jpg?zoom=2&resize=1440%2C738)


*来源：Digiday*

## 📙 文章、教程、观点

#### [为什么应该使用 `<article>` 而不是 `<section>`](https://frontendfoc.us/link/82285/rss "www.smashingmagazine.com")

_“`<article>` 不仅是报纸或者博客的文章，也可以是一件衣服的介绍——任何可以在上下文重复使用的独立实体。”_

这对于使用读屏工具等辅助技术的用户具有关键意义。

*来源：Bruce Lawson*

#### [CSS4 来了](https://frontendfoc.us/link/82370/rss "www.quirksmode.org")

当然没有了！但是 PPK 觉得这是吸引新用户的一个很好的营销手段。

*来源：Peter-Paul Koch*

#### [文本链接在读屏软件上的最佳实践](https://frontendfoc.us/link/82286/rss "www.deque.com")

比如 `aria-label` 和 `title` 属性的优化支持，很值得弄一下。

![](https://www.deque.com/wp-content/uploads/2014/02/click-here-text-link-700x300.jpg)

*来源：Sailesh Panchang*

#### [Web Share API 基础示例](https://frontendfoc.us/link/82288/rss "dillionmegida.com")

Web Share API 支持在页面上进行本机共享（通过其他应用程序或社交网络）。

![](https://res.cloudinary.com/dillionmegida/image/upload/v1578574736/images/blogs_cover/web-share-api_eifaum.jpg)

*来源：Dillion Megida*

#### [独立浏览器的终结：无法参与的竞争](https://frontendfoc.us/link/82289/rss "blog.samuelmaddock.com")

作者认为一些内容运营商（例如 Netflix、HBO）提出的标准及许可限制了独立浏览器的开发。

![](https://blog.samuelmaddock.com/images/end-of-evangelion-door.jpg)

*来源：Samuel Maddock*

#### [CSS 中的像素与相对单位：为什么这点很重要](https://frontendfoc.us/link/82290/rss "www.24a11y.com")

![](https://www.24a11y.com/wp-content/uploads/image4-3.png)

*来源：Kathleen McMahon*

#### [为什么你应该在 CSS 中使用 HSL 表示色彩？](https://frontendfoc.us/link/82371/rss "tsh.io")

![](https://tsh.io/wp-content/uploads/2020/01/hsl-color-representation-in-CSS_.png)

*来源：Mateusz Piguła*

#### ▶  [构建弹性前端架构](https://frontendfoc.us/link/82291/rss "www.youtube.com")

*来源：Monica Lent*

#### [纯 CSS 的轮播效果](https://frontendfoc.us/link/82292/rss "css-tricks.com")

看看使用纯 HTML 和 CSS 开发轮播图或幻灯片能达到的效果。

*来源：Chris Coyier*

#### [固定表格标题样式](https://frontendfoc.us/link/82293/rss "adrianroselli.com")

使用 `position: sticky` 构建具有固定标题的表格。

*来源：Adrian Roselli*

#### [你不知道的7个 CSS 属性](https://frontendfoc.us/link/82294/rss "dev.to")

其中我不熟悉 `bleed` 、 `caret-color` 以及不推荐使用的 `azimuth`。

*来源：Tomasz Łakomy*

## 🔧 代码、工具、资源

#### [Tailwind CSS 支持 Grid](https://frontendfoc.us/link/82295/rss "github.com")

请注意，这只是 1.2.0 版本的预览版，但增加了很多功能，包括 CSS Transition、Transform、Grid 的支持等。

*来源：Tailwind CSS*

#### [可变字体](https://frontendfoc.us/link/82296/rss "v-fonts.com")

一个不错的字体资源。

*来源：Nick Sherman*

#### [Palettab](https://frontendfoc.us/link/82298/rss "palettab.com")

如果你一直在寻找调色方面的灵感，那么这个 Chrome 插件可能适合你。它在每个新选项卡上显示一种色彩和与之搭配的字体。

*来源：Tim Holman & Claudio Guglieri*

#### [Tiny Helpers](https://frontendfoc.us/link/82299/rss "tiny-helpers.dev")

不错的 Web 开发人员的在线小工具合集，在不断扩充中。

*来源：Stefan Judis*

#### [Harp：内置预处理资源的静态 Web 服务器](https://frontendfoc.us/link/82300/rss "harpjs.com")

*来源：Chloi Inc.*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/423)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/423)。

