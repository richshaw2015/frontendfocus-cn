# 前端聚焦周刊：第 419 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [Oh My RSS](https://ohmyrss.com/?fef) 平台首发。

如有翻译错误或国外优质文章推荐，欢迎提交 issue。

> 原文：[Frontend Focus issue 419](https://frontendfoc.us/issues/419)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/ct0dxrbrzqq69x1yorsa.jpg)](https://frontendfoc.us/link/80784/rss)

#### [更好地定制输入组件](https://frontendfoc.us/link/80784/rss "24ways.org")

Julie Grundy 探讨了自定义表单存在的各种问题，给出了自己的实现方案，兼顾美观、屏幕缩放、读屏软件、高对比度、输入提示、交互性等因素。

*来源：Julie Grundy*

#### [Bootstrap 4.4.0](https://frontendfoc.us/link/80725/rss "blog.getbootstrap.com")

该版本引入了新的响应式布局实现，以及若干 bug 修复和废弃的特性。

*来源：Mark Otto, Jacob Thornton, and Bootstrap contributors*

#### [Mozilla 在 macOS 的日构建版本中推出 Firefox Replay](https://frontendfoc.us/link/80726/rss "www.neowin.net")

这个特性刚推出来，可以记录、回放、倒退到各种状态，包括 JS 行为、DOM 变化、图形界面更新等。跨平台支持稍后提供。有关该项目的详细信息，[参见 Mozilla 的网站](https://frontendfoc.us/link/80727/rss)。

![](https://cdn.neow.in/news/images/uploaded/2019/11/1574963979_hero-replay_story.jpg)

*来源：Paul Hill*

#### [如何使用新的 CSS 语法 `:is()` 简化元素定位](https://frontendfoc.us/link/80728/rss "webdesign.tutsplus.com")

这篇直观的展示了这个新的“匹配任何元素”伪类选择器的几种用法，以及如何与 `:not` 搭配使用。它是 `:any()` and `:matches()` 的继任者。

![](https://cms-assets.tutsplus.com/uploads/users/30/posts/34223/image/is.jpg)

*来源：Kezz Bracey*

#### ▶  [这几招可以改善网站的图片加载性能](https://frontendfoc.us/link/80730/rss "www.youtube.com")

Jen Simmons 解释并再次建议对所有图片增加宽高属性声明，以阻止加载“垃圾信息”。

*来源：Mozilla Developer*

#### [Web 游戏相关的 W3C 状态更新](https://frontendfoc.us/link/80729/rss "www.w3.org")

W3C 提供了构建 Web 游戏所需的各种技术要点概述，包括 WebAssembly、Gamepad API、Web Monetization API 等。

![](https://www.w3.org/2018/12/games-workshop/media/webgames-thin-sm.jpg)

*来源：François Daoust (W3C)*

## 📙 文章、教程、观点

#### [Edge 和 Chrome 之战：微软的“防跟踪”特性给 Google 一击重拳](https://frontendfoc.us/link/80734/rss "www.zdnet.com")

新的 Edge 浏览器采用了与 Google Chrome 相同的基础源代码，并包含了新的“防跟踪”特性，该功能可屏蔽第三方跟踪器，在严格模式下还能阻止许多广告。

![](https://zdnet1.cbsistatic.com/hub/i/2019/11/22/0aa63385-3065-4979-9a06-74ce7a869135/tracking-prevention-details-per-site.jpg)

*来源：Ed Bott*

#### [Firefox 界面使用 Web 组件构建](https://frontendfoc.us/link/80735/rss "briangrinstead.com")

几周前，Mozilla 把原来基于 XML 的界面实现转成了基于 Web 组件技术构建。这篇博文解释了背后的原因。

*来源：Brian Grinstead*

#### [Web API 画中画简介](https://frontendfoc.us/link/80736/rss "css-tricks.com")

Chrome [支持](https://frontendfoc.us/link/80737/rss)“画中画”机制，即在所有页面之上创建视频播放浮窗。Firefox 和 Safari 也有专门的 API 支持。

*来源：Ayooluwa Isaiah*

#### ▶  [从 Chrome 性能监控中学到的东西](https://frontendfoc.us/link/80739/rss "www.youtube.com")

在最近的 performance.now() 会议上拍摄的演讲，非常有说服力。[点击查看相关 PPT](https://frontendfoc.us/link/80740/rss)。

*来源：Annie Sullivan*

#### [使用 CSS 自定义属性](https://frontendfoc.us/link/80785/rss "css.christmas")

本篇介绍了使用 CSS 自定义属性（CSS 变量）的基本知识，做主题时很有用。

![](https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1226&h=400&fit=crop&crop=edges)

*来源：Kristofer Giltvedt Selbekk*

#### [不得已时才使用 label](https://frontendfoc.us/link/80741/rss "refactoringui.com")

这篇不是讨论表单或可访问性的，而是 label 元素的使用原则，包括放置位置、是否突出显示等，很多场景下是不需要它的。

![](https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/previews/labels-are-a-last-resort-01.png)

*来源：Refactoring UI*

#### ▶  [可预测的预加载](https://frontendfoc.us/link/80742/rss "www.youtube.com")。

通过检测开发中使用的技术，以实现可预测的预加载，例如 [GuessJS](https://frontendfoc.us/link/80743/rss)

*来源：Divya Sasidharan*

#### ▶  [When JavaScript Bytes](https://frontendfoc.us/link/80744/rss "www.youtube.com")

该演讲介绍了减少 JavaScript 网络传输大小的实用方法。

*来源：Tim Kadlec*

#### [使用 Vue.js 和 Tailwind 构建带动画的可拖动界面](https://frontendfoc.us/link/80745/rss "www.binarcode.com")

[Tailwind CSS](https://frontendfoc.us/link/80746/rss) 是一种越来越流行的 CSS 框架。

*来源：Cristi Jora*

#### [常见的可访问性错误检查清单](https://frontendfoc.us/link/80748/rss "www.brucelawson.co.uk")

*来源：Bruce Lawson*

#### [使用 Phaser 在 Ionic Capacitor 中开发 H5 本地游戏](https://frontendfoc.us/link/80749/rss "medium.com")

![](https://miro.medium.com/max/660/1*M-P_SP8Pg1rWrdGb1HhE_Q.gif)

*来源：Abhijeet Rathore*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1575295325/jgavzhqfaxc3f54fkovu.png)](https://frontendfoc.us/link/80750/rss)

#### [CSSYBERTRUCK](https://frontendfoc.us/link/80750/rss "codepen.io")

特斯拉超级卡车的 CSS 动画演示。
> _Be a shame if someone was to tamper with those windows..._

*来源：David Khourshid codepen*

#### [WebGLStudio.js: 浏览器中的3D图形编辑器](https://frontendfoc.us/link/80751/rss "github.com")

作者宣称它已经比较成熟了，可以被扩展或者用于生产环境使用了（尽管1.0版本还有点距离）。

![](https://github.com/jagenjo/webglstudio.js/raw/master/press/images/interface.jpg)

*来源：Javi Agenjo*

#### [Featured GSAP 3 Pens: A Collection by GreenSock](https://frontendfoc.us/link/80752/rss "codepen.io")

上周我们分享了 [GSAP 3’s 的发布](https://frontendfoc.us/link/80753/rss)，现在 GreenSock 团队分享了一组该动画库的新功能。

*来源：GreenSock codepen*

#### [Happy Hues: 辅助调色工具](https://frontendfoc.us/link/80754/rss "www.happyhues.co")

寻找调色灵感的网站，可以生成各种颜色的搭配效果。

*来源：Mackenzie Child*

#### [Creepyface: 让面孔跟随指针的 JS 库](https://frontendfoc.us/link/80755/rss "creepyface.io")

*来源：Alejandro Tardín*

#### [Screenshot-to-code: 将设计原型转换成静态网站的神经网络框架](https://frontendfoc.us/link/80756/rss "github.com")

![](https://camo.githubusercontent.com/7aee7deacf38b8f9a2a230da4efbd96a96840b83/68747470733a2f2f692e696d6775722e636f6d2f4c446d6f4c4c562e706e67)

*来源：Emil Wallner*

#### [Wireframer：生成模拟文本占位符 SVG](https://frontendfoc.us/link/80757/rss "wireframer.netlify.com")

*来源：Jim Raptis*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/419)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/419)。

