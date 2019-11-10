# 前端聚焦周刊：第 415 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Oh My RSS](https://ohmyrss.com/?fef) 平台首发。

如有翻译错误或国外优质文章推荐，欢迎提交 issue。

> 原文：[Frontend Focus issue 415](https://frontendfoc.us/link/79168/rss)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1572439195/hj8h0bmcxuciuro8r3mg.jpg)

#### 1、[现如今的 select 样式](https://css-tricks.com/the-current-state-of-styling-selects-in-2019/)

如果你曾经尝试过用 CSS 美化表单组件，十有八九会受挫。特别是 select 下拉列表很难处理。这篇文章介绍了基础知识，以及开发者真正想了解的东西。

*来源：CHRIS COYIER*

#### 2、[1991年10月，Tim Berners-Lee 发布了“HTML Tags”文档](https://www.webdesignmuseum.org/web-design-history/tim-berners-lee-published-a-document-called-html-tags-1991)

28年前，互联网先驱 Tim Berners-Lee 发布了一份名为 HTML 标签的文档，描述了最早的的18个 HTML 标签。重点是你能否在看文章之前想出这些标签。😉

*来源：WEB DESIGN MUSEUM*

#### 3、[谷歌将不再索引 Flash 内容](https://webmasters.googleblog.com/2019/10/goodbye-flash.html)

到今年年底，谷歌将停止对 Flash 内容的索引。这和Adobe等公司计划在2020年底停止支持 Flash 有关。由此，又一段有趣的互联网技术将成为历史。

*来源：GOOGLE*

#### 4、[CSS 中有随机数吗？](https://css-tricks.com/are-there-random-numbers-in-css/)

当然，只用 CSS 生成随机数是一个很有趣的技巧。但是随机性有待商榷，在一些场景下还是可以用的。

*来源：ALVARO MONTORO*

#### 5、[使用 Firefox 开发者工具审查可用性问题](https://hacks.mozilla.org/2019/10/auditing-for-accessibility-problems-with-firefox-developer-tools/)

这篇文章是 Firefox 70 中开发者工具可访问性检查工具的概述，解释了这个审查工具如何帮助识别或修复常见错误，以及减少站点可访问性错误的实践。

*来源：MOZILLA HACKS*

#### 6、[HTMLHell - 从真实网站收集的 HTML 槽糕实践集合](https://www.htmhell.dev/)

这个网站看上去相对较新，但是真实案例的数量在持续增长中。

*来源：MANUEL MATUZOVIĆ*

## 📙 文章、教程、观点

#### 1、[显示内部和外部的属性](https://www.youtube.com/watch?v=4Clyc38U-MA&feature=youtu.be)

上周的一期中提到了 Firefox 现在支持在 display 属性中使用多个值，这篇介绍了具体怎么做。

*来源：MOZILLA DEVELOPER*

#### 2、[Chrome 79开发者工具的新特性](https://developers.google.com/web/updates/2019/10/devtools)

包括新的 Cookie 调试，配色方案模拟选项，代码覆盖率的更新等。

*来源：GOOGLE DEVELOPERS*

#### 3、[使用 WebP 加快网站访问速度](https://www.smashingmagazine.com/2019/10/speed-up-your-website-webp/)

全面讲述了 Google 的 WebP 图像格式，重点介绍了其优势、工作原理和使用方法。（令我惊讶的是，这个格式已经诞生十年了）

*来源：SUZANNE SCACCA*

#### 4、[为什么 Parcel 成为我开发打包的首选工具](https://css-tricks.com/why-parcel-has-become-my-go-to-bundler-for-development/)

这篇总结了流行的网页应用打包工具需要提供的功能，以及如何在你的项目中使用 Parcel。

*来源：MAKS AKYMENKO*

#### 5、[为什么可访问性好的网站这么难构建？](https://css-tricks.com/why-are-accessible-websites-so-hard-to-build/)

Robin Rendle 质疑为什么这么多公司在网站的可访问性上苦苦挣扎，并提出了通过文本编辑器附带的可访问性检查器校验的想法。Stefan Judis 在这个建议的基础上提出了浏览器开发工具也可以做同样的检查。

*来源：ROBIN RENDLE*

#### 6、[CSS 中的双向水平规则](https://dev.to/hus_hmd/bidirectional-horizontal-rules-in-css-56f4)

这个教程直观地讲解了如何使用 CSS 的合法属性同时支持 LTR 和 RTL 布局。

*来源：HUSSEIN AL HAMMAD*

#### 7、[CSS 工具类：你的可扩展样式库](https://blog.logrocket.com/css-utility-classes-library-extendable-styles/)

这篇介绍了 CSS 工具类的概念以及为什么要使用它。

*来源：RUSSELL BISHOP*

#### 8、[基于1996年的“Space Jam”的网站，做了一个PWA网站](https://www.zachleat.com/web/space-jam/)

对看起来似乎永远不过时的网站“Space Jam”的有趣重写。

*来源ZACH LEATHERMAN*

#### 9、[下拉元素的问题（以及应该使用的替代品）](https://designsmarts.co/the-problem-with-dropdowns/)

*来源：DESIGN SMARTS*

## 🔧 代码、工具、资源

#### 1、[Sal: 轻量的滚动动画库](https://mciastek.github.io/sal/)

仅2.8KB，原生的 JS 库，专注于性能，没有依赖。

*来源：MIROSŁAW CIASTEK*

#### 2、[CSS 中的 FitText](https://codepen.io/davatron5000/full/ZEEepRp)

还记得有个叫 FitText 的 jQuery 老插件吗？这次用 CSS 重写了（非常现代，需要 Chrome 79+）。可能还不是很实用，但确实是一个很好的想法。

*来源：DAVE RUPERT*(CODEPEN)

#### 3、[GRID: CSS 网格布局的一个简单手抄](http://grid.malven.co/)

CSS 网格布局中可用的可展示的属性列表。点击后可以复制。

*来源：MALVEN CO.*

#### 4、[JAMstack 主题](https://jamstackthemes.dev/)

JAMstack 站点的主题和入门示例集合，可以通过生成器或者 CMS 进行过滤。

*来源：STACKBIT*

#### 5、[最小的字体](https://raffinaderij.booreiland.amsterdam/minimalwim/)

荷兰设计师 Wim Crouwel 设计的最小的印刷字体的试验。

*来源：BOOREILAND*

## 💻 招聘

译者注：如需了解，请查看原文。

## 🗓 未来大事记

译者注：如需了解，请查看原文。
