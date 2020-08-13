# 前端聚焦周刊：第 446 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 446](https://frontendfoc.us/issues/446)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [Safari 14 Beta 版发布说明](https://frontendfoc.us/link/90731/rss "developer.apple.com")

Revealed at this week’s WWDC, Safari 14 will ship alongside iOS 14 & macOS 11 later this year. Here are the headlines:

*   Adds support for WebP images and HDR video playback;

*   Support for HTTP/3;

*   Ditches Flash;

*   Will support both the `:is()` and `:where()` pseudo-selectors;

*   …and adds Web Extensions support to the macOS version (_more below_).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1593003134/d3yis6xzzokjbexah3md.jpg)](https://frontendfoc.us/link/90731/rss)

*来源：Apple*

#### [欢迎 Safari 加入到 WebExtensions 社区](https://frontendfoc.us/link/90732/rss "hacks.mozilla.org")

Yup, Safari is adopting a Web-based API for browser extensions similar to Firefox’s WebExtensions API making it easy to build once and port to multiple browsers (including Chrome). [Here's Apple's intro video on how to get started](https://frontendfoc.us/link/90733/rss).

![](https://hacks.mozilla.org/files/2020/06/cookies-webext-16-9.png)

*来源：Mozilla Hacks*

#### [Prefetching? At This Age?](https://frontendfoc.us/link/90736/rss "timkadlec.com")

An excellent trip down the rabbit hole of caching, CDNs, what issues can occur when both clients and CDNs are caching content, and how the `Age` HTTP header helps. Plus a Chromium bug, just for good measure.

*来源：Tim Kadlec*

#### [滚动技术一览](https://frontendfoc.us/link/90737/rss "css-tricks.com")

There are a number of scroll related technologies out there (_parallax, scroll snap, etc_), so this article’s aim is to provide an overview of them and tools to help choose the one that’s right for you.

*来源：Zach Saucier*

#### ▶  [Safari 和 WebKit 的新特性和功能提升](https://frontendfoc.us/link/90735/rss "developer.apple.com")

More from Apple! Following the main WWDC 2020 Keynote, Apple are sharing a number of sessions throughout the week covering extensions, privacy, APIs, CSS and JS, web inspector changes and more. Worth bookmarking and coming back to at the weekend once all sessions are live.

![](https://devimages-cdn.apple.com/wwdc-services/articles/images/CB8C66EB-E308-4D5F-9DF8-7ED3D4E7990E/1024.jpeg)

*来源：Apple*

## ⚡️ Quick bits:

*   If you use Google Analytics, be prepared to see the Safari stats tumble, as Safari is going to [start blocking Google Analytics](https://frontendfoc.us/link/90738/rss) entirely.

*   It has been [five years since the first line of code for AMP](https://frontendfoc.us/link/90739/rss) was written.

*   Chrome is working on an [experimental implementation of upload streams](https://frontendfoc.us/link/90742/rss) so you can start uploading data to a server before you necessarily have all of it to hand.

*   [Work continues on Mozilla's paid VPN](https://frontendfoc.us/link/90740/rss), (a U.S. only beta is available now).

*   Version 69 of [Opera has Twitter](https://frontendfoc.us/link/90741/rss) (and other social media services) 'built-in', accessible via the sidebar.

## 📙 文章、教程、观点

#### [WebP 真的比 JPEG 更好吗？](https://frontendfoc.us/link/90746/rss "siipo.la")

According to Google, WebP is 25-34% smaller than JPEG at equivalent quality. But how much of it is really true? To find out, Johannes ran a few tests.

![](https://siipola.b-cdn.net/wp-content/uploads/all-sizes-target-quality-85-average-file-size-1400x950.png?ver=4c2aa46286fabb012d9e6339114fb697)

*来源：Johannes Siipola*

#### [Using Custom Property 'Stacks' to Tame the Cascade](https://frontendfoc.us/link/90747/rss "css-tricks.com")

A look at using CSS Custom Properties to manage/control both cascade _and_ inheritance.

*来源：Miriam Suzanne*

#### [运行 3 年后，Chrome 私自下架了我的扩展](https://frontendfoc.us/link/90748/rss "medium.com")

This is a story worth checking out if your work ends up on the Chrome Webstore in any way (such as if you’re distributing a browser extension): _“Complaining on the internet should not be a support channel. Developers should not have to rely on the internet attention lottery. The Chrome Webstore has been around 10 years and needs to get its act together.”_

*来源：LipSurf*

#### [允许用户粘贴密码](https://frontendfoc.us/link/90750/rss "www.ncsc.gov.uk")

Some sites prevent pasted passwords (which can even break some password managers). The UK’s cyber security officials stress that this a security anti-pattern. Today I also learnt that _“Sociotechnical Security Researcher”_ is an actual job title – cool!

![](https://www.ncsc.gov.uk/images/copy-paste-wall-code.jpg?mpwidth=545&mlwidth=737&twidth=961&dwidth=618&dpr=2&width=1396)

*来源：National Cyber Security Centre (UK)*

#### [90 年代 Web 的回归](https://frontendfoc.us/link/90751/rss "mxb.dev")

Max asks if we’re ready to revisit some of the ideas of the early web (_no-code tools, personal sites, etc_), adding that certain trends suggest that we might just have come full circle.

*来源：Max Böck*

#### [如何报浏览器的 bug](https://frontendfoc.us/link/90752/rss "web.dev")

*来源：Robert Nyman, Pete LePage*

## 🔧 代码、工具、资源

#### [knopf.css：现代的、模块化的、可扩展的按钮组件](https://frontendfoc.us/link/90753/rss "knopf.dev")

A CSS library to easily build a diverse set of button styles that can be adapted to your brand via CSS variables. Includes a [playground](https://frontendfoc.us/link/90754/rss) for fiddling with the variety of modifiers.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1593014244/ktdilvwijybxenptifjc.png)](https://frontendfoc.us/link/90753/rss)

*来源：team.video*

#### [keen-slider: An Agnostic Touch Slider](https://frontendfoc.us/link/90755/rss "keen-slider.io")

Think ‘carousels’ but comfortable and smooth when using touch. They work with the mouse and touchpads as well, of course, and there are no dependencies. [Live examples here.](https://frontendfoc.us/link/90756/rss)

![](https://camo.githubusercontent.com/10e2b523a4491918048f9b58b9459a60d73e9218/68747470733a2f2f6b65656e2d736c696465722e696f2f696d616765732f64656d6f322e676966)

*来源：Eric Beyer*

#### [Tailwind CSS Cheat Sheet](https://frontendfoc.us/link/90757/rss "nerdcave.com")

This clear, scannable [resource has been around for a while](https://frontendfoc.us/link/90758/rss), however it remains up-to-date with the latest version of Tailwind (_plus we’ve not shared it here before_).

*来源：Jay Elaraj*

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1592988880/va4huow0dncf564pnoph.png)](https://frontendfoc.us/link/90759/rss)

#### [Octopus.do：可视化创建站点地图](https://frontendfoc.us/link/90759/rss "octopus.do")

An online tool that allows you to build a website’s sitemap (e.g. for prototyping structure) or you can import an existing sitemap.xml from a URL and work with that.

*来源：octopus.do*

#### [🕰 Tzdb: A Simplified and Grouped List of Time Zones and Offsets](https://frontendfoc.us/link/90760/rss "github.com")

The official IANA time zone list has over 500 entries but you can simplify this substantially, as done here.

*来源：Vincent Voyer*

#### [Create HTML5 Boilerplate：HTML5 Boilerplate 快速入门](https://frontendfoc.us/link/90766/rss "github.com")

Similar in concept to create-react-app, but for kickstarting projects based on the popular HTML5 Boilerplate project.

*来源：H5BP*

#### [web-vitals-reporter：简化 Web Vitals 报告的小工具](https://frontendfoc.us/link/90762/rss "github.com")

Makes it easy to collect data from Google’s new [Web Vitals](https://frontendfoc.us/link/90763/rss) API.

![](https://user-images.githubusercontent.com/158189/84431070-f3604d00-ac2a-11ea-8a2d-055caa756302.png)

*来源：Treo*

#### [CSS 生成影印杂志效果](https://frontendfoc.us/link/90764/rss "codepen.io")

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1593002134/bljokklnsqj5cswy7gbv.png)](https://frontendfoc.us/link/90764/rss)

*来源：Lynn Fisher codepen*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/446)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/446)。

