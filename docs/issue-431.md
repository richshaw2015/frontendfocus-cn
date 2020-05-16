# 前端聚焦周刊：第 431 期

这里是 [Frontend Focus](https://frontendfoc.us/latest) 的中文翻译项目，每周在 [己思](https://ohmyrss.com/?fef) 平台首发。

> 原文：[Frontend Focus issue 431](https://frontendfoc.us/issues/431)
> 
> 翻译及校对：[richshaw2015](https://github.com/richshaw2015)，[Yully Che](https://github.com/chechebecomestrong)

## 🚀 刊首

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1583843975/h2udxpmsbyx7v6op2aaw.png)](https://frontendfoc.us/link/85063/rss)

#### [使用可变字体的性能优势](https://frontendfoc.us/link/85101/rss "t.co")

This is a good look at the performance gains you can expect when using variable fonts, with a focus on font requests, file sizes and time to first render. If you’re just starting to explore using variable fonts, [this is a great related resource](https://frontendfoc.us/link/85064/rss).

*来源：Mandy Michael*

#### [同时设置图片的高宽很重要](https://frontendfoc.us/link/85065/rss "www.smashingmagazine.com")

Thanks to some recent changes in browsers, it’s now well worth setting `width` and `height` attributes on your images to prevent layout shifts and improve the experience of your site visitors.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/0f9dc3ff-9eb1-4f9d-ace5-25a7142694dc/06-art-direction-images.png)

*来源：Barry Pollard*

#### [今年晚些时候很多播客节目将无法在浏览器中播放](https://frontendfoc.us/link/85067/rss "blog.pacific-content.com")

An estimated 1 million+ podcast episodes aren’t available over secure connections, and it’s about to become a problem.

![](https://miro.medium.com/max/2000/1*XLz67ZhA4hmSnxUDZgB2Aw.png)

*来源：Dan Misener*

#### [URL 的历史](https://frontendfoc.us/link/85068/rss "blog.cloudflare.com")

This is a great deep-dive into the anatomy of the humble URL and how it came into being.

![](https://blog-cloudflare-com-assets.storage.googleapis.com/2019/10/arpanet-1969.gif)

*来源：Zack Bloom (Cloudflare)*

#### [Firefox 74 发布](https://frontendfoc.us/link/85069/rss "developer.mozilla.org")

Version 74 of Firefox arrived today. We’ve linked to the _developer_ release notes as the headline features are minimal. Developer level changes include Feature Policy support enabled by default, TLS 1.0 and 1.1 support removed, `text-underline-position` CSS property now enabled, and JavaScript gains the [optional chaining operator.](https://frontendfoc.us/link/85070/rss)

*来源：Mozilla*

#### [More Accessible Defaults, Please](https://frontendfoc.us/link/85071/rss "hiddedevries.nl")

Due to the complex nature of web apps, it’s no longer correct to say the web is ‘accessible by default’. As Hidde points out, we need browser accessibility bugs to be prioritized.

*来源：Hidde de Vries*

## 📙 文章、教程、观点

[![](https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1583771634/x4t9dbjbjvei8lightke.png)](https://frontendfoc.us/link/85075/rss)

#### [我们是如何创建生成苏格兰格子衫样式 SVG 的静态站点的](https://frontendfoc.us/link/85075/rss "css-tricks.com")

There are thousands of Tartan patterns (_the cloth that’s typically associated with Scotland_) - here’s a look at how they were all digitally weaved with code (React).

*来源：Paulina Hetman*

#### [布局变化后的滚动对齐](https://frontendfoc.us/link/85076/rss "web.dev")

Starting in Chrome 81, scrollers remain snapped when the page layout changes, no longer requiring event listeners to force snapping, which fixes a shortcoming of this feature.

![](https://webdev.imgix.net/snap-after-layout/css-scroll-snap-example.png)

*来源：Yi Gu, Kaan Alsan, Adam Argyle*

#### [向页面添加滚动动画](https://frontendfoc.us/link/85078/rss "cssanimation.rocks")

This detailed tutorial was first published last year but has recently been updated to include `IntersectionObserver` methods.

```js
const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});
```

*来源：CSS Animation*

#### [Intersection Observer API 快速实现懒加载](https://frontendfoc.us/link/85079/rss "www.telerik.com")

Related to the above item, here's a decent overview of `IntersectionObserver`, using the example of lazy loading elements.

![](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2020/2020-03/0_EXu4I5Ww9K0BP61F.png)

*来源：Leonardo Maldonado*

#### [如何使用 Express 和 DropzoneJS 构建文件上传表单](https://frontendfoc.us/link/85080/rss "www.sitepoint.com")

Lukas White takes an in-depth look at DropzoneJS — a configurable JavaScript library that makes it easier to deal with file uploads.

![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/11/1447336481dropzone-2.gif)

*来源：Lukas White*

#### ▶  [使用 JavaScript 构建带特效的计数器](https://frontendfoc.us/link/85081/rss "www.youtube.com")

JavaScript has just gotten so _serious_ nowadays, so I like to frequently link to tutorials like this that cover building neat Web page effects.. like we used JavaScript for back in the 90s 😄 _18 minutes._

*来源：Traversy Media*

#### [为什么我们在2020年选择 Svelte 进行大型 Web 项目开发](https://frontendfoc.us/link/85100/rss "github.com")

*来源：Ryan Atkinson*

#### [Google 宣布优先索引移动站点](https://frontendfoc.us/link/85083/rss "webmasters.googleblog.com")

*来源：Google*

#### ['IsLoggedIn' API 提议的解释](https://frontendfoc.us/link/85084/rss "github.com")

*来源：Theresa O'Connor*

#### [Modal vs Page：一个决策框架](https://frontendfoc.us/link/85085/rss "uxplanet.org")

![](https://miro.medium.com/max/2000/1*Ag0E5wC0l5146HJ_tLQmfQ.png)

*来源：Ryan Neufeld*

## 🔧 代码、工具、资源

#### [OpenSilver：一个现代的、无需插件的 Silverlight 实现](https://frontendfoc.us/link/85086/rss "www.opensilver.net")

This is a replacement for Microsoft’s deprecated Silverlight. It’s open-source and runs in current browsers via WebAssembly. [Here’s the announcement post](https://frontendfoc.us/link/85087/rss).

*来源：Userware*

#### [Bootstrap Treeview：使用 Bootstrap 4 构建树状视图的插件](https://frontendfoc.us/link/85088/rss "github.com")

Here’s a [live demo](https://frontendfoc.us/link/85089/rss).

![](https://github.com/chniter/bstreeview/raw/master/screeshots/bstreeview.PNG?raw=true)

*来源：Sami Chniter*

#### [ls-lint：快速的文件名、目录名检查器](https://frontendfoc.us/link/85090/rss "github.com")

Written in Go but clearly aimed at JS/front-end dev use cases. `ls-lint` provides a way to enforce rules for file naming and directory structures.

![](https://camo.githubusercontent.com/1cf54ce522af7a2f310f1476095e5d96830bd872/68747470733a2f2f692e696d6775722e636f6d2f706c5a6d6c37442e676966)

*来源：Lucas Löffel*

#### [geo-info：反向地理坐标 API](https://frontendfoc.us/link/85091/rss "geo-info.co")

Used to to turn coordinates into human readable locations.

```python
import requests

resp = requests.get("https://geo-info.co/45.6479,-74.3451")
json = resp.json()
print(json['city'])
```

*来源：geo-info*

#### [基于浏览器的 SVG 编辑器列表](https://frontendfoc.us/link/85092/rss "css-tricks.com")

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/03/vectr.png?resize=1536%2C913&ssl=1)

*来源：Chris Coyier*

## 💻 招聘

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/431)。

## 🗓 未来大事记

译者注：如需了解，请[查看原文](https://frontendfoc.us/issues/431)。

