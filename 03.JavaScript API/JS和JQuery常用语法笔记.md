# 1.JS API 语法

## 1.找标签

```js
var 标签 = document.getElementById(id名字);	//通过id名找标签
var divs = document.getElementsByTagName('标签名div'); //通过标签名找标签,找到的是多个标签,返回数组
-----------------------------------------------------------------------
var 标签 = document.getElementsByName('sex');	//通过标签的name来找标签
var 标签 = document.getElementsByClassNmae('box');//通过类名找标签
------------------------------------------------------------------------
var 标签 = document.querySelector('字符串');	//通过字符串来找各种类型标签,只找一个元素
var 标签 = document.querySelectorAll('字符串');//通过字符串来找各类标签,找多个
-------------------------------------------------------------------------
1.找一个标签的有哪些?其他的都是找多个标签
getElementById()
querySelector()
2.找多个标签的方法,都是移动获取的
```

## 2.加事件

```js
单击事件 onclick
标签.onclick = function(){}
获得焦点事件	onfocus
失去焦点事件 onblur
鼠标移入事件	onmouseover
鼠标移出事件	onmouseout
```

3.操作属性

```
1.获取图片属性
	图标属性.src
2.设置图片属性
	图片标签.src = '新的图片路径'
	
常见属性:id title href src alt value
特殊属性:class必须用className 这三个值为 true和false;disabled checked selected
----------------------------------------------------------------
除了
```

4.操作内容

```
1.innerHTML	插入带标签的文本(标签会被翻译成效果)
2.innerText	插入文本
```

5.操作样式属性

```

```

n.其他

```
this表示当前对象
常见的逻辑思想:
	1.标志位思想:flag
	2.开关思想 相当于一个标志位控制两种状态
	3.排他思想	先把所有的清除,再设置自己
```



# 2.JQuery 语法

1,找标签

```
$('字符串')	//该方法能找所有想找的标签
$('#one')	  //通过id找标签
$('.one')     //通过类名找标签
$('#one a')	  //找id 下的a标签
```

2.加事件

```
click()	//表示单击事件
标签.click(function(){})
```

3.操作属性

```
attr()	方法
获取属性
标签.attr('src')	//获取该标签的src属性值


```

4.操作内容

```
标签.html()	//添加带标签的内容
标签.text()	//添加普通文本的方法
```

n.其他

```
this	//直接写是js的对象

```

