# 前端聚焦周刊：第 440 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 440](https://frontendfoc.us/issues/440)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [深入理解 CSS `contain` 属性](https://frontendfoc.us/link/88192/rss "css-tricks.com")

This is a comprehensive look at a new-ish CSS property ([now a standard](https://frontendfoc.us/link/88193/rss)) with pretty good browser support that helps a browser to calculate a page’s layout more efficiently.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589377335/fovxpebregj14b145fuy.jpg)](https://frontendfoc.us/link/88192/rss)

*来源：Travis Almand*

#### [Does Masonry Belong in The CSS Grid Specification?](https://frontendfoc.us/link/88194/rss "rachelandrew.co.uk")

Rachel's thoughts on the proposal to add masonry layout into the Grid specification, along with a demo and a request for readers to add their own comments on the CSS WG thread.

*来源：Rachel Andrew*

#### [脸书如何重构 Facebook.com 技术栈](https://frontendfoc.us/link/88196/rss "engineering.fb.com")

Facebook completely rebuilt its tech stack to achieve its performance and growth goals. Here’s how they’ve done it with React, Relay, SVG, code-splitting, and more.

![](https://engineering.fb.com/wp-content/uploads/2020/05/Comet-03-1.jpg?resize=1536,596)

*来源：Ashley Watkins (Facebook)*

#### [多亏了 Covid-19，网站可用性从未像现在这样重要](https://frontendfoc.us/link/88197/rss "www.webdesignerdepot.com")

A good reminder of the importance of accessibility, especially considering that many will be accessing critical online content more often during this crisis.

*来源：SEAN BRADLEY*

#### [React 中更加友好的动画](https://frontendfoc.us/link/88201/rss "joshwcomeau.com")

An extensive look at using the `prefers-reduced-motion` media query (including using it with `matchMedia` in JavaScript) to disable animations for users who have that preference set.

![](https://joshwcomeau.com/images/accessible-animations-in-react/reduce-motion-macos.webp)

*来源：josh w comeau*

## 📙 文章、教程、观点

#### [Firefox 即将推出的进程管理器](https://frontendfoc.us/link/88202/rss "www.ghacks.net")

Mozilla is working on integrating a process manager into Firefox to provide detailed process information. Here’s a look at it.

![](https://www.ghacks.net/wp-content/uploads/2020/05/firefox-process-manager.png)

*来源：Martin Brinkmann*

#### [如何将滚动百分比显示在标题栏](https://frontendfoc.us/link/88203/rss "www.knutmelvaer.no")

This is a neat little trick. Using both React and Gatsby to show how much of a page you’ve read (scrolled) in the title bar/tab.

![](https://cdn.sanity.io/images/ndjrels0/production/3b09df5d8ad1864a1277f312b61db3bc0ad66230-624x294.gif)

*来源：Knut Melvær*

#### [`lh` and `rlh` 单位：还没支持，但总有一天会](https://frontendfoc.us/link/88205/rss "css-tricks.com")

Two new unit types from the Level 4 spec for CSS values. 1 `lh` unit is “equal to the current computed value of line-height” and `rlh` is the same but for the root element. What supports it? [Nothing yet](https://frontendfoc.us/link/88206/rss).

![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/05/css-lh-unit.png?w=1152&ssl=1)

*来源：Chris Coyier*

#### [一个复杂表格的设计案例](https://frontendfoc.us/link/88207/rss "jlongster.com")

Designing a table with lots of data to display can be a tricky problem. James Long shares a considered look at how he went about it.

![](https://jlongster.com/posts-assets/case-study-complex-table-design/6months.png)

*来源：James Long*

#### [理解为什么 Firefox 开发者工具中修改 CSS 规则后没有效果](https://frontendfoc.us/link/88208/rss "elijahmanor.com")

This is an awesome little feature that’s been around for a few months now and is well worth checking out. It grays out CSS declarations that have no effect, provides tips on what is wrong, suggests ways to fix it, and provides a helpful link for more information.

![](https://elijahmanor.com/static/ec2fdcf0dd6147616d3f09e19d05d3ed/22475/2020-05-12-screenshot.png)

*来源：Elijah Manor*

#### [Micro-Typography: How To Space And Kern Punctuation Marks And Other Symbols](https://frontendfoc.us/link/88209/rss "www.smashingmagazine.com")

If you work with typography/UI/UX this is worth a read — it explores how to add/adjust spacing to certain characters in a consistent way. The author notes that it’s actually not as easy and quick as it should be.

![](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/66909604-7290-41b7-b348-8666a0d57a0b/figure-1-micro-typography-punctuation-marks-other-symbols.png)

*来源：Thomas Bohm*

#### [为什么以及如何避免在单页面应用中跨域](https://frontendfoc.us/link/88210/rss "blog.bitsrc.io")

Puts forward why you should avoid cross-origin resource sharing (by using the proxy configuration in your frontend development server).

![](https://miro.medium.com/max/1400/1*TKYFiZnIhfHi_PAFcG0geg.jpeg)

*来源：Ashan Fernando*

#### [前端应用的 13 个安全提示](https://frontendfoc.us/link/88211/rss "t.co")

Advice on how to make your site less susceptible to bad actors.

![](https://miro.medium.com/max/1400/0*QOkqygancKoG8HQ-)

*来源：Deepak Gupta*

#### [如何轻松创建响应式的垂直对齐样式](https://frontendfoc.us/link/88212/rss "designmodo.com")

![](https://designmodo.com/wp-content/uploads/2014/06/image4.jpg)

*来源：Paula Borowska*

## 🔧 代码、工具、资源

#### [Fast or Slow：全球的网站速度分析](https://frontendfoc.us/link/88213/rss "www.fastorslow.com")

Enter a URL to get a weighted average performance score based on multiple geo tests. Detailed reports are then shareable via URL for 90+ days (and you can subscribe for updates to specific reports).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589361653/slc0nkjaymtb8pyzoycf.png)](https://frontendfoc.us/link/88213/rss)

*来源：Fast or Slow*

#### [Bootstrap 4.5.0 发布](https://frontendfoc.us/link/88214/rss "blog.getbootstrap.com")

Originally planned as a patch release this got bumped up to a minor release due to some small new features. Also includes over a dozen bug fixes.

*来源：Mark Otto, Jacob Thornton, and Bootstrap contributors*

#### [axe Linter：自动分析并修复可用性问题](https://frontendfoc.us/link/88215/rss "axe-linter.deque.com")

A new GitHub-based tool from Deque Systems (read a write-up [here](https://frontendfoc.us/link/88216/rss)) that checks source code for common accessibility issues and will automatically find and suggest fixes.

![](https://axe-linter.deque.com/logo.ae838c89.svg)

*来源：Deque Systems*

#### [Canvas 引擎对比：PixiJS vs Two.js vs Paper.js](https://frontendfoc.us/link/88217/rss "benchmarks.slaylines.io")

A benchmark of three popular 2D rendering engines/drawing APIs. _Note: This will tax your system._

（几千个不同的矩形以不同的速度在画布上移动）

*来源：SlayLines*

#### [GitHub Writer: WYSIWYG Rich-Text Editor for GitHub, Powered by CKEditor](https://frontendfoc.us/link/88218/rss "github.com")

This is a Chrome/Firefox extension that adds rich-text editing (as opposed to plain-text Markdown) to GitHub issues, pull requests, wikis, etc.

![](https://ckeditor.com/assets/images/home/home-product-screenshot-cke4@2x-c1b37b343d.png)

*来源：CKEditor Ecosystem*

#### [本周字体：Routed Gothic](https://frontendfoc.us/link/88219/rss)

*来源：Remember those technical drawings with blue backgrounds from the mid-to-late 20th century? Well, this font from Darren Embry is a 21st century take on the lettering found in such drawings and documents.*

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589374656/uctjhk2o5jqookdkt1r0.jpg)](https://frontendfoc.us/link/88219/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/440)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/440)。

