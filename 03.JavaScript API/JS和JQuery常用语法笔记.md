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
2.innerText
```

n.其他

```
this表示当前对象
```



# 2.JQuery 语法