# 前端聚焦周刊：第 432 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 432](https://frontendfoc.us/issues/432)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1584527751/wkgtmhjnbu7yin6difcm.jpg)](https://frontendfoc.us/link/85439/rss)

#### ['CSS X'——CSS 版本号的辩论](https://frontendfoc.us/link/85439/rss "www.w3.org")

Remember the recent debate around CSS versioning and whether we should have a ‘CSS 4’ for marketing reasons? Here’s a good account _from the W3C_ of just how CSS feature releases have worked up until this point. This piece also asks about the motives behind defining CSS versions for developers: How would it be defined in a useful way? How often should a new version be defined? And who could even define it?

*来源：Bert Bos (W3C)*

#### [提升网站可访问性的 16 件事](https://frontendfoc.us/link/85440/rss "websitesetup.org")

Ensuring your sites are equally available to all is irrefutably the moral and right-minded approach to development (and it’s increasingly also a legal requirement too). Here, Bruce runs through over a dozen accessibility matters that you can address including technical, design and copywriting issues.

![](https://websitesetup.org/wp-content/uploads/2020/03/reCAPTCHA1.jpg)

*来源：Bruce Lawson*

#### [`calc()` 完全指南](https://frontendfoc.us/link/85479/rss "css-tricks.com")

CSS has a special `calc()` function for doing basic math — here, Chris Coyier runs through “_just about everything there is to know_” about it. A detailed guide with plenty of code snippet examples.

```css
html {
  --H: 100;
  --S: 100%;
  --L: 50%;
}

.el {
  background: hsl(
    calc(var(--H) + 20),
    calc(var(--S) - 10%),
    calc(var(--L) + 30%)
  )
}
```
*来源：CSS Tricks*

#### ▶  [CSS 播客教程之 Box Model](https://frontendfoc.us/link/85444/rss "pod.link")

A new podcast from the Chrome Developers team all about CSS. In the first episode Una Kravets and Adam Argyle discuss the CSS box model.

*来源：Google podcast*

#### [互联网 31 岁生日快乐](https://frontendfoc.us/link/85445/rss "www.w3.org")

The web turned 31 last week, a good reason to [revisit Tim Berners-Lee’s original proposal](https://frontendfoc.us/link/85446/rss) for the Web.

> “The goal of the Web is to serve humanity. We build it now so that those who come to it later will be able to create things that we cannot ourselves imagine.”

[Sir Tim Berners Lee](https://frontendfoc.us/link/85447/rss), computer scientist and inventor of the World Wide Web.

![](http://www.w3.org/comm/assets/graphics/globe.png)

*来源：Coralie Mercier*

## 📙 文章、教程、观点

#### [CSS `:nth-of-class` 选择符](https://frontendfoc.us/link/85451/rss "www.bram.us")

This isn’t a real selector, but Bram Van Damme looks at some possible shortcomings with `nth-child`, leading to the conclusion that maybe we do need something like `:nth-of-class`.

![](https://www.bram.us/wordpress/wp-content/uploads/2019/01/html-css-banner.png)

*来源：Bram Van Damme*

#### [你需要知道的新的媒体查询语法](https://frontendfoc.us/link/85452/rss "blog.logrocket.com")

A look through some of the most interesting new media queries in the [Media Query Level 5 spec](https://frontendfoc.us/link/85453/rss), and how to use them.

```css
@media (light-level: dim) {
  :root {
    --text-color: white;
    --background-color: black;
  }
}
@media (inverted-colors) {
  img { filter: invert(1); }
  * { box-shadow: none !important; text-shadow: none !important; }
}
@media (prefers-color-scheme: dark) {
  body { background: #1e1e1e; color: white; }
}
@custom-media --medium-devices (min-width: 50rem);
@custom-media --large-landscape (min-width: 70rem) and (orientation: landscape);

@media (--medium-devices) {
  .container { max-width: 40rem; }
}
```

*来源：Kristofer Selbekk*

#### [Learning CSS Box Alignment](https://frontendfoc.us/link/85454/rss "ishadeed.com")

A comprehensive look at concepts in box alignment in CSS, which are useful for learning both Flexbox and Grid.

![](https://ishadeed.com/assets/box-alignment/img/grid-axes@2x.png)

*来源：Ahmad Shadeed*

#### ['Snackbars' 的问题及替代方案](https://frontendfoc.us/link/85455/rss "adamsilver.io")

Snackbars (those little ‘toast’ notification messages) are a popular way to inform users about something they just did, but Adam thinks they can cause lots of problems for users. Here he explains why that is and what to use instead.

![](https://adamsilver.io/assets/images/the-problem-with-snackbars-and-what-to-use-instead/snackbar.png)

*来源：Adam Silver*

#### [使用 AnimeJS 创建 CSS 和 SVG 动画](https://frontendfoc.us/link/85456/rss "developerbacon.ca")

AnimeJS is a JavaScript animation library with various features like SVG morphing animations and CSS animations. Here’s a look at how to use it.

```js
anime({
	targets: ".cool-svg path",
	duration: 1000,
	easing: "easeInOutSine",
	d: [
		{
			value:
				"M53,234c143.452,-81.953,313.407,-167.554,430,-107c116.592,45.554,70.404,361.126,236,472c235.595,95.873,447.977,-197.535,477,-306"
		},
		{
			value:
				"M53,434c143.452,181.953,213.407,267.554,330,107c56.592,-125.554,70.404,-161.126,236,-172c235.595,-55.873,447.977,-197.535,500,206"
		}
	]
});
```

*来源：Developer Bacon*

#### [如何使用 CSS Scroll Snap](https://frontendfoc.us/link/85457/rss "blog.logrocket.com")

A straightforward tutorial showing how to add a scroll to your page without having to rely on JavaScript libraries.

![](https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2020/03/how_to_use_css_scroll_snap_web.png?w=730&ssl=1)

*来源：Nada Rifki*

#### [开发一个 Node.js 工具来对比 Google Lighthouse 结果](https://frontendfoc.us/link/85459/rss "css-tricks.com")

*来源：Luke Harrison*

#### [Here's How HTML Microdata Helps With Accessibility](https://frontendfoc.us/link/85460/rss "scottvinkle.me")

```html
<article itemscope itemtype="http://schema.org/BlogPosting">

  <header>
    <h1 itemprop="headline">My Blog Post Title</h1>
    <p itemprop="description">A little extra on what this post is about</p>
    <ul>
      <li>
        Written by
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name">Scott</span>
        </span>
      </li>
      <li>
        <time datetime="2020-01-09" itemprop="dateCreated pubdate datePublished">
          January 9th, 2020
        </time>
      </li>
    </ul>
  </header>

  <img src="article-image.jpg" alt="" itemprop="image" />

  <div itemprop="articleBody">
    <p>
      Lorem ipsum dolor sit ame, consectetur adipiscing elit. Donec a quam rhoncus, tincidunt ipsum non, ultricies augue…
    </p>
    <!-- … -->
  </div>
</article>
```

*来源：Scott Vinkle*

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1584457060/lqnc6uofipsoyhm5uqqv.jpg)](https://frontendfoc.us/link/85466/rss)

#### [纯 CSS 实现的风景画——'An Evening in Southwold'](https://frontendfoc.us/link/85466/rss "codepen.io")

This is quite the achievement in realistic CSS art — _and you can tweak it_. Open up [the editor view](https://frontendfoc.us/link/85467/rss) and alter the color of the sun for your very own personalised sunset.

*来源：Ben Evans*

#### [Web 性能测试工具列表](https://frontendfoc.us/link/85469/rss "www.swyx.io")

If you need to identify performance issues with your site this list of tools is a good place to start.

*来源：Shawn Wang*

#### [Iconset：一个快速的 SVG 图标管理工具](https://frontendfoc.us/link/85470/rss "iconset.io")

This is a smart looking native Mac/Windows app to collect, customize, and manage all your icons.

![](https://iconset.io/images/iconset-window.svg)

*来源：Iconset Creative*

#### [broider：画出自己的边框](https://frontendfoc.us/link/85471/rss "maxbittker.github.io")

A browser-based tool for making “9-patch” border patterns. Chris Coyier has done [an accompanying write up](https://frontendfoc.us/link/85472/rss) on this.

```css
.broider {
    border-image:  url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAB0klEQVR4Xu3bUa7CMAwF0XT/iwZV4oO2QGR5LMV03h967cU5cUkJsI0xHuP4t50ezx5Gz48ef37+7Pmz8UT/f6hnx8sWGD0/erygkykWFAb6e9Doa4bH/xCILkBiTgQEhVtEUEFhATjODhUUFoDj7FBBYQE4zg4VFBaA4+zQG4JmN1NgskvcZT+0+gmz+YJmBU/nCyooK9Cqo8YY6MKMhr3mRVC2QdMf+sHl/F6V7dA8d+kVVHHJ54fcOEFQePIEFRQWgOPs0Dxou/fy+SHXJggK+woqKCxQGeeiBOsKKigsAMcRXwmHS+odJyg8f4IKCgvAccQqX7phC4/3Uxxav6D532kdJklQQfEXgeUueXyEzQLdbYInTFBBYQE4zg6FQfHbpsr62mUT96HtBl1ZsKCwrrtNgsICcJwdKigsAMe5KAkKC8BxdqigsAAcV9Gh6IYtPN49rrQ+Qf3hV7pn7dA04TGgHLT0CQCM1eu77IeuXvDq9QkKXDVfIzpsjrTr0MoJu112xX3o7RDfBywoPP2CCgoLwHF2qKCwABxnhwoKC8BxdqigsAAcZ4cWgK62+ZCtJ3p+9PjzFFy+cJsNhOc4/SFadDzR4wWdzLigMBAK+gR/OGBBOfNrrwAAAABJRU5ErkJggg==") 28 /  28px / 0 round;
    border-width:  28px;
    border-style:  solid;
}
```

*来源：Max Bittker*

#### [IBM Plex 字体](https://frontendfoc.us/link/85473/rss)

This typeface from IBM presents a neutral and friendly style across the entire family (made up of a Sans, Sans Condensed, Mono, and Serif variants). The Mono is well suited to displaying code snippets.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1584534005/wlla7da80yqfjqvxv33h.png)](https://frontendfoc.us/link/85473/rss)

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/432)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/432)。

