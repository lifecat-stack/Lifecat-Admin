# lifecat-admin

![许可](https://img.shields.io/dub/l/vibe-d.svg) 
:cat: :smiley_cat: :kissing_cat:

> 这是一个 极简的vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。


 #### [线上地址](www.lifecat.club/admin)

## 脚手架使用

 [模板github地址](https://github.com/PanJiaChen/vue-element-admin)

## Extra
如果你想要根据用户角色来动态生成侧边栏和router，你可以使用改分支[permission-control](https://github.com/kevinten10/Vue-Admin-lifecat/tree/permission-control)

## 文章

 [知乎](https://zhuanlan.zhihu.com/p/42595941)
 
## 相关项目
 
  [Vue仿ins网站web-lifecat](https://github.com/kevinten10/Web-lifecat)
  
------------------------------------------------------------------------
  [LifeCat version1 servlet基础Javaweb服务网站](https://github.com/kevinten10/lifecatweb)
  
  [LifeCat version2 version1相应SSM后台管理系统](https://github.com/kevinten10/SSM-lifecat)
  
  [LifeCat version3 前后端分离springboot后端系统](https://github.com/kevinten10/springboot-lifecat)
  
  [LifeCat wechat 微信移动端小程序开发](https://github.com/kevinten10/WeChat-lifecat)
  
  [LifeCat hadoop 分布式平台进行数据处理](https://github.com/kevinten10/Hadoop-lifecat)
  
  [LifeCat android 相应Android相册应用](https://github.com/kevinten10/Android-lifecat)
  
  [LifeCat python 机器学习进行图像智能处理](https://github.com/kevinten10/Python-lifecat)


## Build Setup

``` bash

# Clone project
git clone https://github.com/kevinten10/Vue-Admin-lifecat.git

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Demo
![demo](show1.png)

![demo](show2.png)

### Element-Ui 使用cdn教程
首先找到 `index.html` ([根目录下](https://github.com/kevinten10/Vue-Admin-lifecat/blob/element-ui-cdn/index.html))

引入 Element的css和js ，并且引入 vue 。因为 Element-Ui 是依赖 vue 的，所以必须在它之前引入 vue 。

之后找到 [webpack.base.conf.js](https://github.com/kevinten10/Vue-Admin-lifecat/blob/element-ui-cdn/build/webpack.base.conf.js) 加入 `externals` 让webpack 不打包 vue 和 element
```
externals: {
  vue: 'Vue',
  'element-ui':'ELEMENT'
}
```

之后还有一个小细节是如果你用了全局对象方式引入vue，就不需要 手动 `Vue.use(Vuex）` ，它会自动挂载，具体见 [issue](https://github.com/vuejs/vuex/issues/731)

最终你可以使用 `npm run build --report` 查看效果
如图：

**[具体代码](https://github.com/kevinten10/Vue-Admin-lifecat/commit/746aff560932704ae821f82f10b8b2a9681d5177)**

**[对应分支](https://github.com/kevinten10/Vue-Admin-lifecat/tree/element-ui-cdn)**

## License
[MIT](https://github.com/kevinten10/Vue-Admin-lifecat/blob/master/LICENSE) license.

Copyright (c) 2017-present kevinten10


