# 前端聚焦周刊：第 441 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 441](https://frontendfoc.us/issues/441)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [最小化 CSS 框架切换器](https://frontendfoc.us/link/88643/rss "dohliam.github.io")

There are a lot of so called ‘minimal’ CSS systems out there, such as [new.css](https://frontendfoc.us/link/88644/rss) and [GitHub’s Primer](https://frontendfoc.us/link/88645/rss) but it can be hard to sort through them for something you’d like. Enter this ‘minimal CSS framework switcher’ where you get to preview lots of minimal CSS frameworks on a single page. Alternatively, you can find a list of all the frameworks involved [here.](https://frontendfoc.us/link/88646/rss)

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589970571/tgddnbagy9katveww5b6.jpg)](https://frontendfoc.us/link/88643/rss)

*来源：Liam Doherty*

#### [Lighthouse 6.0 的新功能](https://frontendfoc.us/link/88647/rss "web.dev")

Lighthouse 6 (the automated website UX auditing tool) has [just dropped](https://frontendfoc.us/link/88648/rss). Some of the changes include new metrics, audits for unused JavaScript, changes to the Chrome extension, and lots more.

```sh
npm install -g lighthouse
lighthouse https://www.example.com --view
```

*来源：Connor Clark*

#### [现代网络的另一种想法](https://frontendfoc.us/link/88650/rss "macwright.org")

What if everyone’s wrong? Can we solve things in a better way that single page applications? Interesting thought piece and Rich Harris replied with [In Defense of the Modern Web.](https://frontendfoc.us/link/88651/rss)

*来源：Tom MacWright*

#### [Just How Bad Is The ICO's Draft 'Age Appropriate' Design Code?](https://frontendfoc.us/link/88652/rss "webdevlaw.uk")

The author proclaims that as “_a policy wonk, a technologist, a privacy campaigner, and as a parent_” the UK data protection regulator’s proposed ‘[Age Appropriate Design Code](https://frontendfoc.us/link/88653/rss)’ is one of the worst proposals she’s ever seen, and could result in age-gating across the internet, and a huge increase in data collection.

![](https://webdevlaw.uk/wp-content/uploads/2019/06/20190604_192216-1.jpg)

*来源：Heather Burns*

#### [Chrome 83 为开发者提供的新功能](https://frontendfoc.us/link/88654/rss "developers.google.com")

Version 83 is rolling out to stable now, and adds trusted types support, introduces changes to styling in HTML form controls, and more. Here’s [a four-minute video version](https://frontendfoc.us/link/88655/rss) that covers the changes if you’d prefer. [Secure DNS (DNS-over-HTTPS) support](https://frontendfoc.us/link/88656/rss) is another interesting development.

![](https://developers.google.com/web/updates/images/2020/05/forms-after.png)

*来源：Pete Le Page (Google)*

#### ▶  [Understanding Cumulative Layout Shift](https://frontendfoc.us/link/88657/rss "www.youtube.com")

Content moving unexpectedly on a page can be _really_ irritating. This 20-minute explainer looks at the new ‘[Cumulative Layout Shift](https://frontendfoc.us/link/88658/rss)’ speed metric (reported in Lightouse 6.0) and how it can help developers understand the impact of this problem on their pages.

*来源：Annie Sullivan and Steve Kobes*

#### [运行在 Linux 上的 Edge](https://frontendfoc.us/link/88659/rss "www.neowin.net")

Spotted at Microsoft’s Build 2020 conf where Microsoft has been releasing things left, right, and center like a [package manager for Windows](https://frontendfoc.us/link/88660/rss) and [Windows Terminal 1.0.](https://frontendfoc.us/link/88661/rss)

![](https://cdn.neow.in/news/images/uploaded/2020/05/1589915330_microsoft_edge_for_linux_story.jpg)

*来源：Rich Woods*

## ⚡️ Quick bits

*   Microsoft showed off a bunch of new Edge features in [this snazzy video](https://frontendfoc.us/link/88662/rss) from their annual Build conference.

*   Support for the `:where()` pseudo class is now in the [latest Safari preview](https://frontendfoc.us/link/88663/rss).

*   Mozilla has [launched a new accessibility blog](https://frontendfoc.us/link/88664/rss) featuring posts from the Firefox Accessibility Team.

*   How to [center things in CSS](https://frontendfoc.us/link/88665/rss) is pretty much evergreen content, right...? 😅

*   I asked on Twitter whether it's 'frontend', 'front-end' or 'front end'. [Here are the results](https://frontendfoc.us/link/88666/rss).

*   Microsoft's Edge browser now has its own [origin trials](https://frontendfoc.us/link/88667/rss) system with a couple of experiments already live.

*   A [tab grouping feature](https://frontendfoc.us/link/88668/rss) is coming to Chrome.

## 📙 文章、教程、观点

#### [极简的 HTML](https://frontendfoc.us/link/88671/rss "blog.notryan.com")

The irony here is that this blog is literally in plain text. But overall, some good points about how to keep your HTML brief, should you want to reduce character counts.

*来源：Ryan Jacobs*

#### [23 年了，网站仍然需要提速](https://frontendfoc.us/link/88672/rss "www.nngroup.com")

In this somewhat historical look at website and internet speed, Kathryn looks at the fact that page speeds have not improved over time in spite of the increase in internet speed.

![](https://media.nngroup.com/media/editor/2020/05/08/change-in-page-load-time-vs-connection-speed-desktop.png)

*来源：Kathryn Whitenton*

#### [使用 `calc()` 计算准确行高](https://frontendfoc.us/link/88673/rss "hugogiraudel.com")

A quick, but math-heavy post by Jesús Ricarte on optimal line-height values that are more maintainable.

![](https://d33wubrfki0l68.cloudfront.net/a91f9a659b7b50fad7504bfd68bfb3415aafed32/b43c9/assets/images/using-calc-to-figure-out-optimal-line-height/line-height.png)

*来源：Jesús Ricarte*

#### [IE11 在 Oct 2020 停止维护？](https://frontendfoc.us/link/88674/rss "www.swyx.io")

Some interesting thoughts on Windows 10 and supporting IE11. As the author points out, he made up the term ‘mainstream EOL’ and he links to a response from an Edge team member.

*来源：Shawn Wang*

#### [表单设计：多个还是一个](https://frontendfoc.us/link/88675/rss "adamsilver.io")

Some web forms use multiple inputs for what really should be a single unit of data. This usability guide looks at the drawbacks of that approach and how to improve the experience.

![](https://adamsilver.io/assets/images/form-design-multiple-inputs-versus-one-input/cut-and-paste.png)

*来源：adam silver*

#### [Safe/Unsafe Alignment in CSS Flexbox](https://frontendfoc.us/link/88676/rss "www.stefanjudis.com")

This is a brief look at the new `safe` keyword that can be used with the align-items property in Flexbox, so far only supported in Firefox.

```css
.something {
  display: flex;
  // 👇 what is that? 😲 
  align-items: safe center;
}
```

*来源：stefan judis*

#### [使用空闲检测 API 检测不活跃用户](https://frontendfoc.us/link/88677/rss "web.dev")

Currently in development, this API can be used to find out when a user isn’t actively using their device.

![](https://webdev.imgix.net/idle-detection/hero.jpg?auto=format&fit=max&w=2880)

*来源：Thomas Steiner*

#### [停止基于用户位置设置网站语言](https://frontendfoc.us/link/88678/rss "dev.to")

A little PSA on why this might not always be the best idea…

*来源：Pedro Pimenta*

## 🔧 代码、工具、资源

#### [Animal Crossing: Isabelle's Day Off](https://frontendfoc.us/link/88679/rss "codepen.io")

Yep, [I’m playing Animal Crossing](https://frontendfoc.us/link/88680/rss) at the moment, so felt it appropriate to include this great little animated diorama created with CSS. There’s also [a neat time-lapse video](https://frontendfoc.us/link/88681/rss) of it all being put together. Impressive!

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589899733/h30lsmsh3pm2p4g5x0za.png)](https://frontendfoc.us/link/88679/rss)

*来源：Tee Diang codepen*

#### [IntersectionObserver Visualizer](https://frontendfoc.us/link/88683/rss "codepen.io")

If you’re new to using the IntersectionObserver API, this useful interactive demo might help you comprehend it a little better.

*来源：michelle barker*

#### [Stylemug: A CSS-in-JS Library with Support for Atomic CSS Extraction](https://frontendfoc.us/link/88684/rss "github.com")

Another solution on the CSS-in-JS scene that features the ability to extract CSS rules to a .css file, which then replaces the stylesheet in your bundle.

```js
import React from 'react';
import stylemug from 'stylemug';

const styles = stylemug.create({
  default: {
    backgroundColor: 'red',
    color: 'black',
  },
  large: {
    fontSize: '32px',
  },
});

function App() {
  const [large, toggleLarge] = useToggle(true);

  return (
    <div className={styles('default', large && 'large')}>
      <button onClick={toggleLarge}>Toggle me</button>
    </div>
  );
}
```
*来源：Matthias Van Parijs*

#### [new.css: A Classless CSS Framework to Write Modern Websites using Only HTML](https://frontendfoc.us/link/88644/rss "github.com")

Weighs only ~4.5kb. [Demo here](https://frontendfoc.us/link/88685/rss).

*来源：xz*

## 🐦 ...spotted on Twitter

Here's a list of all the different length units you can use in CSS. _I don't think I was familar with the `Q` unit._

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1589971958/dfq65hbnop9smgxs0wo2.png)](https://frontendfoc.us/link/88686/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/441)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/441)。

