# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 


# 使用说明

使用 flex 布局以及媒体查询来实现 css 响应式布局。
本人将改动的样式直接写在需要改动页面的head里，在`styles.css`之后，根据 css 权重机制，改动的样式比`style.css`的权重高，所以会使用改动的样式。

# 页面改动
因为要需要适配移动设备，需要在获取设备的实际尺寸，在head中添加如下代码即可：

```HTML
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no" />
```
- width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
- height：和 width 相对应，指定高度。
- initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
- maximum-scale：允许用户缩放到的最大比例。
- minimum-scale：允许用户缩放到的最小比例。
- user-scalable：用户是否可以手动缩放。

## index.html 页面改动

### filter-options 下拉选择框组
存在两个不问题
1.里面内容超过filter-options的高度
2.在移动端第二个下拉选择框会换行，跟下方内容重叠

解决办法
```CSS
/* 去掉写死的宽高 或者 直接设置成 auto */
.filter-options{
  height: auto;
}
.filter-options select {
  width: auto;
}
```

### restaurants-list 餐厅列表
餐厅列表中的餐厅每行只显示一个，不好看。

解决办法

```CSS
#restaurants-list{
  display: flex; /* 设置成flex布局 */
  flex-wrap: wrap;  /* 允许换行 */
}
/* 完全兼容模式 */
#restaurants-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
```

## restaurant.html 页面改动
这个页面改动的比较大
主要是用媒体查询 判断下宽度为1023及以下为移动设备，1024以上桌面设备