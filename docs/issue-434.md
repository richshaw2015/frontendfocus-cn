# 前端聚焦周刊：第 434 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 434](https://frontendfoc.us/issues/434)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

#### [Chrome 表单控件和焦点的更新](https://frontendfoc.us/link/86072/rss "blog.chromium.org")

Here’s a closer look at the recent changes introduced to HTML form controls within Chrome, designed to “_beautiful, webby, and neutral_”. They bring with them a host of accessibility wins, touch support, and more consistent keyboard access.

![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585745223/akh5g30pjoeblo0ordsv.png)

*来源：Rob Dodson (Google)*

#### [Google 恢复因新冠病毒而暂停的更新](https://frontendfoc.us/link/86073/rss "www.zdnet.com")

Chrome 81 will now be released on April 7. [Here's the official blog post](https://frontendfoc.us/link/86074/rss) from Google announcing that releases are now resuming.

*来源：Catalin Cimpanu (ZDNet)*

#### [TOAST UI Editor 2.0：强大的所见即所得的 Markdown 编辑器](https://frontendfoc.us/link/86076/rss "ui.toast.com")

Two years in comes version 2.0, along with 10K GitHub stars to boot. v2.0 has a new Markdown parser, better syntax highlighting, improved scroll syncing and live previews, and more. [GitHub repo](https://frontendfoc.us/link/86077/rss).

![](https://user-images.githubusercontent.com/18183560/76874851-19d44d80-68b3-11ea-97fa-6ccc07c6e841.gif)

*来源：NHN*

#### [由于新冠病毒（和 Google），Mozilla 重新启用 TLS 1.0 和 1.1](https://frontendfoc.us/link/86078/rss "www.ghacks.net")

TLS 1.0 and 1.1 has been re-enabled in the Firefox Stable and Beta browser because of Google and government sites that still rely on these protocols. Google has taken a similar, temporary, step due to the COVID-19 crisis, too.

![](https://www.ghacks.net/wp-content/uploads/2020/03/firefox-74-tls-mozilla.png)

*来源：Martin Brinkmann (gHacks)*

#### [当设计趋势风向改变时你应该怎么办](https://frontendfoc.us/link/86079/rss "www.smashingmagazine.com")

This guide aims to help you figure out which approach makes the most sense when considering popular design trends for your site.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f10c0e02-c78b-4dfe-b6ac-268677450f67/enginethemes-close-up-hero-image.png)

*来源：Suzanne Scacca*

#### [如何提升页面加载速度](https://frontendfoc.us/link/86080/rss "ahrefs.com")

In this advanced guide Patrick Stox explains how page speed works, and what actions to take for your site.

![](https://ahrefs.com/blog/wp-content/uploads/2020/03/pasted-image-0-61.png)

*来源：Ahrefs*

## 📙 文章、教程、观点

#### [切换到 Edge 的十个原因](https://frontendfoc.us/link/86084/rss "blogs.windows.com")

Yep, this is a feature list trying to convince folks to give Edge a try. I didn’t know about a few of the things Edge now offers, including an interesting ‘vertical tabs’ mode.

![](https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/2/2020/03/84bfbac68746f41de8f6b80ae3ddf3dc.gif)

*来源：Liat Ben-Zur*

#### [Web 视频中的 `playsinline` 属性](https://frontendfoc.us/link/86085/rss "css-tricks.com")

Have you noticed how sometimes in mobile browsers a video will play right where it is instead of the fullscreen default? Here’s how that works.

```html
<video src="..." controls playsinline></video>
```

*来源：Chris Coyier*

#### [Inclusive Inputs](https://frontendfoc.us/link/86108/rss "www.ovl.design")

An exploration into how to make inputs more accessible, touching upon semantic HTML and a bit of ARIA.

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input 
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    aria-invalid="true"
    aria-describedby="error_pw desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
  <p class="error" id="error_pw">Please check your input.</p>
</div>
```

*来源：Oscar Braunert*

#### [Making a Responsive Twitch Embed](https://frontendfoc.us/link/86087/rss "philna.sh")

This works mainly as a refresher on how to do intrinsic aspect ratio sizing in CSS for any embedded media, but it’s specific to Twitch embeds.

![](https://philna.sh/assets/posts/twitch/twitches-d47efa5604a9e1c471d36308554f36a8e7abac63832a9d519ef78800d8ead44b.png.webp)

*来源：Phil Nash*

#### [HTML DOM: A Resource for Solving DOM Problems with Native APIs](https://frontendfoc.us/link/86088/rss "htmldom.dev")

A guide with a list of different things we might normally do with a JavaScript library, but can now be done using native APIs.

*来源：Nguyen Huu Phuoc*

#### [Bootstrap 5 不再支持 IE 10 & 11：这对我们有什么影响](https://frontendfoc.us/link/86089/rss "themesberg.com")

The upcoming version five of popular framework Bootstrap is officially dropping support for both Internet Explorer 10 and 11. Here’s a quick look at what that means for those relying on Bootstrap, and what workarounds (_polyfills_) to expect.

![](https://themesberg.s3.us-east-2.amazonaws.com/public/posts/bootstrap-5-internet-explorer-browser-support.jpg)

*来源：Zoltán Szőgyényi*

#### [使用 CodeMirror 构建代码编辑器](https://frontendfoc.us/link/86090/rss "thecodebarbarian.com")

[CodeMirror](https://frontendfoc.us/link/86091/rss) is an open source project that makes it easy to build advanced text editors into your frontend apps. Here’s how to build a _code_ editor with it and how to connect together all the pieces.

```js
CodeMirror(document.querySelector('#my-div'), {
  lineNumbers: true,
  tabSize: 2,
  value: 'console.log("Hello, World");'
});
```

*来源：Valeri Karpov*

#### [5 Reasons Why GraphCMS Could Be Your Next Backend for MVPs](https://frontendfoc.us/link/86092/rss "www.codemochi.com")

An overview about why using a backend-as-a-service like GraphCMS is a viable way to go for MVPs.

![](https://www.codemochi.com/static/e28f06ac53aedc34e7aa4669da7fbc75/de95f/preview.png)

*来源：Stephen Jensen*

#### [Designing Web Applications for the Apple Watch using Toucaan CSS Framework](https://frontendfoc.us/link/86095/rss "bubblin.io")

![](https://bubblin.io/blog/assets/images/luke-chesser-vCF5sB7QecM-unsplash.jpg)

*来源：Marvin Danig*

#### [为你的生产和开发站点适配不同的 Favicon](https://frontendfoc.us/link/86096/rss "css-tricks.com")

![](https://pbs.twimg.com/media/ETUIZh-UUAYPHwv?format=jpg&name=medium)

*来源：Chris Coyier*

#### [Source Sans Pro](https://frontendfoc.us/link/86103/rss)

Drawing inspiration from American gothic typeface designs, this is Adobe's first open-source typeface family (and is made up of [12 weights](https://frontendfoc.us/link/86104/rss)). Designed by [Paul D. Hunt](https://frontendfoc.us/link/86105/rss) it was conceived primarily as a typeface for user interfaces boasting wide-ranging language support and a focus on clarity and legibility.

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585735999/nekupqkuhxeq63tclb6o.png)](https://frontendfoc.us/link/86103/rss)

## 🔧 代码、工具、资源

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585661293/jhrc8hiergufcliruzai.jpg)](https://frontendfoc.us/link/86097/rss)

#### [MoreToggles.css](https://frontendfoc.us/link/86097/rss "jnkkkk.github.io")

A pure CSS library with plenty of stylish toggles. Here's the [related GitHub page](https://frontendfoc.us/link/86098/rss).

*来源：Enkai Ji*

#### [Bootstrap Icons Alpha 3](https://frontendfoc.us/link/86099/rss "blog.getbootstrap.com")

Although still in alpha, this is a massive update that puts the icon library at over 500 icons and adds a permalink page for each.

![](https://blog.getbootstrap.com/assets/img/2020/03/bootstrap-icons-alpha3-all.png)

*来源：Mark Otto, Jacob Thornton, and Bootstrap contributors*

#### [Animockup：在浏览器中创建带动效的模型](https://frontendfoc.us/link/86100/rss "github.com")

An open-source design tool to make animated GIFs and videos to showcase your products. [Try it here](https://frontendfoc.us/link/86101/rss).

![](https://camo.githubusercontent.com/d0955a3c895cf2c641f9f331c19b5a37077c9380/68747470733a2f2f692e696d6775722e636f6d2f77646d683169522e676966)

*来源：Alyssa X*

#### [Snapfont：测试任意字体在任意网站上效果的 Chrome 插件](https://frontendfoc.us/link/86102/rss "getsnapfont.com")

Based on a pay-what-you-want model, this allows you to test any of the ~900 fonts on Google Fonts or using any locally installed font.

![](https://getsnapfont.com/_nuxt/img/f070cd5.jpg)

*来源：snapfont*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/434)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/434)。

