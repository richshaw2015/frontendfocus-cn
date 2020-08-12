# 前端聚焦周刊：第 445 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 445](https://frontendfoc.us/issues/445)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [Bootstrap 5 Alpha 发布](https://frontendfoc.us/link/90227/rss "blog.getbootstrap.com")

It’s early days but the first useful glimpse of Bootstrap 5 is here, including a new logo. Bootstrap continues to be a very popular CSS framework, not least because it keeps taking useful steps forward. v5 drops jQuery, starts to use CSS custom properties (a.k.a. CSS variables), and has overhauled its form components and styling.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1592385224/xppqbtmnkigufhetibcm.png)](https://frontendfoc.us/link/90227/rss)

*来源：The Bootstrap Team*

#### [Google 实验性移除 URL 的完整显示](https://frontendfoc.us/link/90228/rss "www.androidpolice.com")

Folks from Google have already [discussed how changing the way a URL is displayed could work](https://frontendfoc.us/link/90229/rss). Now, one such test is live in Chrome Dev/Canary 85. The move has attracted a fair bit of criticism, but you can opt out.

![](https://www.androidpolice.com/wp-content/uploads/2020/06/15/Screenshot-from-2020-06-15-15-19-25.png)

*来源：Corbin Davenport*

#### [浏览器插件是如何影响页面性能的](https://frontendfoc.us/link/90231/rss "www.debugbear.com")

Anything you add to a browser is going to have performance repercussions in terms of memory consumption, any JavaScript to be run, effects on page rendering, etc. These results demonstrate the costs pretty well _but_ there’s one nice exception: the effect of ad blockers on ‘noisy’ pages!

![](https://www.debugbear.com/public/blog/2020-chrome-extension-performance-report/chrome-extension-page-cpu-time.png)

*来源：DebugBear*

#### [Web 引擎的多样性和生态](https://frontendfoc.us/link/90232/rss "bkardell.com")

Over the past few years we’ve seen plenty of chatter around ‘browser engine diversity’. Here, Brian offers his “_slightly tilted view of this_” based instead on ‘the health of the ecosystem’, explaining why this may be a more valuable way to discuss these topics.

*来源：Brian Kardell*

## ⚡️ Quick bits:

*   💥 _We're finally here_. [Adobe has shared end of life plans for Flash](https://frontendfoc.us/link/90233/rss). It will be gone from their site by the end of the year.

*   👋 Basecamp launced a new email service this week ([Hey](https://frontendfoc.us/link/90234/rss)), and interestingly [the UI is 100% HTML](https://frontendfoc.us/link/90235/rss).

*   ⚠️ Chrome 84 will [organize console warnings](https://frontendfoc.us/link/90236/rss) in a new DevTools Issues tab.

*   📚 Last week I mentioned how the Internet Archive was facing legal action due to its ebooks program. [This program will now be shuttered](https://frontendfoc.us/link/90237/rss).

## 📙 文章、教程、观点

#### [使用可视化工具学习 Z-Index](https://frontendfoc.us/link/90241/rss "thirumanikandan.com")

Ever been stumped as to why setting a z-index to 99999 didn’t solve your positioning issue? This interactive guide to using both Z-Index and Stacking Contexts may prove handy.

*来源：Thiru Manikandan*

#### [CSS 自定义属性失败后的回滚处理](https://frontendfoc.us/link/90242/rss "matthiasott.com")

Yup. Matthias shares how using `supports()` or a media-query can help deal with this quirk.

*来源：Matthias Ott*

#### [Unicode 支持，具体是什么意思？😃](https://frontendfoc.us/link/90243/rss "boyter.org")

[This Hacker News thread](https://frontendfoc.us/link/90244/rss) goes into the weeds on this, and well…._it’s complicated_.

```
ſatisfaction == satisfaction == ſatiſfaction == Satiſfaction == SatiSfaction === ſatiSfaction
```

*来源：Ben E. C. Boyter*

#### [搜索引擎的历史](https://frontendfoc.us/link/90245/rss "carlhendy.com")

This is an exhaustive look at the history of the search engine, covering everything from the DMOZ index to Duck Duck Go.

![](https://carlhendy.com/history-of-search-engines/assets/img/full/search-engine-market-share-china-2020-04-24.webm)

*来源：Carl Hendy*

#### [Web Accessibility 是如何工作的](https://frontendfoc.us/link/90246/rss "blog.segunolalive.com")

A quick introduction to the inner workings of web accessibility.

```html
<label for="accept-terms">I accept terms</label>
<input type="checkbox" id="accept-terms" />
```

*来源：Segun Ola*

#### [How I Fixed Accessibility On My Website and How You Can Fix Yours](https://frontendfoc.us/link/90247/rss "sericaia.me")

Daniela shares the steps taken to fix certain accessibility issues (contrast, screen reader experience, alt tags) on her website.

![](https://sericaia.me/static/e96573caf359e9ff9ad6f1e899a8fb50/46261/contrast-before.webp)

*来源：Daniela Matos de Carvalho*

#### [Jamstack 的五个神秘之处](https://frontendfoc.us/link/90248/rss "css-tricks.com")

There have been a growing number of posts criticizing Jamstack. Brian takes on some of the common misconceptions that often underly these critiques (_via [our Jamstack newsletter](https://frontendfoc.us/link/90249/rss)_).

*来源：Brian Rinaldi*

#### [Flow 浏览器通过了 Acid 测试](https://frontendfoc.us/link/90250/rss "www.ekioh.com")

The [work-in-progress browser Flow](https://frontendfoc.us/link/90251/rss) has just reached a development milestone, passing all three Acid tests. Plenty of [in-depth browser chat sprung up around this news over on HN](https://frontendfoc.us/link/90252/rss).

![](https://www.ekioh.com/wp-content/uploads/Acid-1-768x655.png)

*来源：Piers Wombwell*

## 🔧 代码、工具、资源

#### [Josh.js：页面滚动的动效库](https://frontendfoc.us/link/90253/rss "mamunhpath.github.io")

This effect feels a little overdone nowadays, but this library is small, efficient, and it feels performant to me too.

*来源：Al Mamun*

#### [PageWatch：检查页面错误](https://frontendfoc.us/link/90254/rss "pagewatch.dev")

This tool does a fairly basic check for things like broken links, broken images, spelling errors, and potential layout errors (e.g. something overflowing a container). [Example test](https://frontendfoc.us/link/90255/rss).

![](https://pagewatch.dev/assets/img/pagewatch-devices-3.png)

*来源：pagewatch*

#### [SVGuitar：创建基于 SVG 的吉他图谱](https://frontendfoc.us/link/90257/rss "github.com")

As simple as that, really :-)

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/hnjsefahnuwpsdpnrnru.jpg)

*来源：Raphael Voellmy*

#### [Blush：可自定义的插画](https://frontendfoc.us/link/90258/rss "blush.design")

The site allows you to mix, match, and customize a whole slew of different illustrations that you can download in PNG or SVG format (_requires sign-up for large versions_).

![](https://blush.design/illustrations/doggie.svg)

*来源：Blush Design*

#### [Postcards：通过拖拽创建 HTML 邮件模板](https://frontendfoc.us/link/90259/rss "designmodo.com")

A free to start ‘no-code’ platform for building responsive HTML email templates. Uses a drag-and-drop UI and includes lots of pre-built components.

*来源：Designmodo*

#### [本周字体 Poppins](https://frontendfoc.us/link/90260/rss)

From the [Indian Type Foundry](https://frontendfoc.us/link/90261/rss) — this is an 'internationalist take' on the geometric sans-serif typeface with support for both Latin and Devanagari writing systems. The glyphs sport a practical, monolinear look which works well in many settings.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1592311171/do0apzyk0mlqagfaczcr.jpg)](https://frontendfoc.us/link/90260/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/445)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/445)。

