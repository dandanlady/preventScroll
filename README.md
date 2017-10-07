# preventScroll
> Rewrite the mouse wheel event to prevent the scroll bar from bubbling

## 简介

> 基于jquery的一个小型轻量，使用简单的滚动阻止冒泡插件

## 问题描述

> 编写html页面的时候我们经常会遇到，同一页面的双滚动条布局，这样一般会面临子页面滚动到底部或顶部，会出现滚动冒泡，父页面滚动的情况，如果我们希望鼠标在子页面中时，操作滚动条不对父页面产生影响，这时就需要阻止子页面滚动冒泡，并重写鼠标滚动事件

## 使用方法：

 ```
 $('selector').preventScroll()
```



* 参考资料: http://www.cnblogs.com/weekend001/archive/2011/05/11/2043474.html

