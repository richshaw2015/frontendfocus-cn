# 前端聚焦周刊：第 437 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 437](https://frontendfoc.us/issues/437)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/eccvpihvg4dxfuhr1ca1.jpg)](https://frontendfoc.us/link/87100/rss)

#### [深入开发者的内心：如何策划一个 UI 特性](https://frontendfoc.us/link/87100/rss "jkettmann.com")

A look at how to approach building a new frontend feature in a thoughtful, considered way, based on one developer’s own thought process. It’s neat to see how he’d approach the task of building a basic heatmap (above).

*来源：Johannes Kettmann*

#### [JavaScript 框架的性能开销](https://frontendfoc.us/link/87095/rss "timkadlec.com")

Using data from the [HTTP Archive](https://frontendfoc.us/link/87096/rss), Tim explores the performance cost of using various popular frameworks as a starting point. Some good analysis here.

![](https://timkadlec.com/images/cost-of-frameworks-bytes-mobile.png)

*来源：Tim Kadlec*

#### [CSS 中 LCH 颜色的一切](https://frontendfoc.us/link/87097/rss "lea.verou.me")

An introduction to LCH colors (Lightness, Chroma, Hue), a new feature in CSS, which Lea refers to as a “game changer”. There’s a [related LCH color picker tool too](https://frontendfoc.us/link/87098/rss).

![](http://lea.verou.me/wp-content/uploads/2020/04/srgb-vs-p3.png)

*来源：Lea Verou*

#### ▶  ['We've Ruined The Web. Here's How We Fix It.'](https://frontendfoc.us/link/87101/rss "www.thisishcd.com")

An interesting hour-long chat with Jeremy Keith, a ‘philosopher of the internet’, on the imbalances found in the modern the web:

"All the evidence staring us in the face is that faster websites will make you more money – yet for some reason, that’s just ignored in favor of weirdly prioritized stuff."

*来源：Gerry McGovern podcast*

#### [Tailwind CSS 1.3.0 发布](https://frontendfoc.us/link/87102/rss "github.com")

We've linked to this popular utility-first CSS framework a fair few times over the years and it continues to improve. This latest release brings with it declarative layout utilities, transition-delay support, font-size/line-height pairings and more.

*来源：Tailwind CSS*

## 📙 文章、教程、观点

#### [前端刷题的 13 个网站](https://frontendfoc.us/link/87106/rss "css-tricks.com")

_“My favorite way to level up as a front-end developer is to do the work. Literally just build websites,”_ says Chris Coyier. If you’re short of ideas on how to level up, these other sites will help.

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-15-at-7.18.14-AM.png?resize=1536%2C1155&ssl=1)

*来源：Chris Coyier*

#### [Listboxes vs. Dropdown Lists](https://frontendfoc.us/link/87107/rss "www.nngroup.com")

An in-depth look at the advantages and disadvantages of using two HTML form components, one much more common than the other.

![](https://media.nngroup.com/media/editor/2020/03/05/1-final-listbox-matrix)

*来源：Anna Kaley*

#### 📅 [All Day Hey! Live: An Online Conference for Designers & Frontend Devs](https://frontendfoc.us/link/87108/rss "alldayhey.com")

This all-day conf is now fully digital, and will be live-streamed early next month. The lineup is looking good, with speakers from Netlify, Smashing Magazine, and Microsoft to name a few. Tickets are affordable, and those currently out of work can attend for free.

*来源：Hey!*

#### [使用 CSS `clip-path` 创建形变动画](https://frontendfoc.us/link/87109/rss "blog.bitsrc.io")

Learn how to implement morphing, a technique for transforming one appearance into another, using CSS.

![](https://miro.medium.com/max/1400/1*P4DiXStfudP2ZpzPy11cgg.jpeg)

*来源：Mikael Ainalem*

#### [使用 CSS 伪随机属性添加插图](https://frontendfoc.us/link/87110/rss "meyerweb.com")

Eric’s personal site has recently been redesigned, bringing with it a collection of Japanese illustrations - used to add a bit of flourish and decoration between bodies of text. Here’s how Eric got one of the set of illustrations to display at random with just CSS (_no PHP or JavaScript here_).

![](https://meyerweb.com/eric/thoughts/wp-content/uploads/separators-five.png)

*来源：Eric Meyer*

#### [Wes Bos 的网站重构分享](https://frontendfoc.us/link/87112/rss "wesbos.com")

Always nice to see folks update a personal site (_more of this please!_). Here’s how Wes Bos moved away from WordPress over to a Gatsby set up.

![](https://wesbos.com/static/371c801fdafdceaf31fae3f9aa991c37/f2e3f/sick-new-site.jpg)

*来源：Wes Bos*

#### [黑暗模式的最快实现](https://frontendfoc.us/link/87113/rss "chasem.co")

How to create a ‘quick and dirty’ dark mode for simple apps/sites using pure CSS.

```css
@media (prefers-color-scheme: dark) {
  filter: invert(90%) hue-rotate(25deg);
}

@media (prefers-color-scheme: dark) {
  img, video, iframe {
    filter: invert(100%) hue-rotate(-25deg);
  }
}
```
*来源：Chase McCoy*

#### [使用渐变和阴影画一个 Macintosh](https://frontendfoc.us/link/87114/rss "fossheim.io")

Sarah runs through a quick explanation of how they created an original Macintosh using CSS.

![](https://fossheim.io/static/img/css-macintosh-process.png)

*来源：Sarah L. Fossheim*

#### [Are You using SVG Favicons Yet? A Guide for Modern Browsers](https://frontendfoc.us/link/87115/rss "medium.com")

*来源：Antoine Boulanger*

## 🔧 代码、工具、资源

#### [patern.css：用漂亮的图案填充空白背景](https://frontendfoc.us/link/87116/rss "github.com")

A neat collection of CSS-only backgrounds. You can [see them in action on the demo site](https://frontendfoc.us/link/87117/rss).

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1587549274/geqyxiqb0kcixxvxosbz.png)](https://frontendfoc.us/link/87116/rss)

*来源：Jiten Bansal*

#### [Good Email Code：编写 HTML 邮件的库和指南](https://frontendfoc.us/link/87118/rss "www.goodemailcode.com")

This seems to be in early development but contains some snippets with explanations for cross-browser HTML email code.

*来源：Mark Robbins*

#### [Isomorphic Layout Composer](https://frontendfoc.us/link/87119/rss "github.com")

An SSR layout service that composes a web page from fragment services.

![](https://github.com/namecheap/ilc/raw/master/docs/assets/ILC-Architecture.svg?sanitize=true)

*来源：Namecheap*

#### [Poolors：生成独特的调色板](https://frontendfoc.us/link/87120/rss "poolors.com")

This generates deep-linked color combos not often used by developers. Not sure how they determine least-used, but the example combos are indeed interesting and not-so-common.

*来源：poolors*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/437)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/437)。

