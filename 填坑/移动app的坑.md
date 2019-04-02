# **移动web前端（即webapp）开发之常见bug解决

目前移动端的web站点多数是运行在基于webkit内核的浏览器或webview中，所以我们在日常开发中所要兼容的系统是 android和ios，在这两个平台上运行的浏览器都是基于webkit内核的，虽然没有了像pc端那样繁琐的需要兼容ie一系列的浏览器，但是在ios和android上还是会出现你意想不到的一些浏览器解析bug，以下是我在平时开发中遇到的部分问题及解决方案：

**问题一：**
**问题描述：**
应用css3 translate3d 平移效果后的标签元素，在ios上的safari以及app的webview中会出现页面加载完成后其子元素闪动现象，具体如下：
<ul style=”-webkit-transform: translate3d(0, 0, 0); -webkit-transition: 0ms; “>
<li><img src=”http://pic2.58.com/m58/m3/img/imglogo_gray.png” ref=”http://1.pic.58control.cn/p1/big/n_22998799743506.jpg”></li>
</ul>
**解决方法（两种）**：
1、可在其子元素中统一添加和其相同的属性，具体如下：
<ul style=”-webkit-transform: translate3d(0, 0, 0); -webkit-transition: 0ms; “>
<li style=”-webkit-transform: translate3d(0, 0, 0); “><img src=”http://pic2.58.com/m58/m3/img/imglogo_gray.png” ref=”http://1.pic.58control.cn/p1/big/n_22998799743506.jpg”></li>
</ul>
2、在其元素中添加如下属性：
-webkit-backface-visibility: hidden; (设置进行转换的元素的背面在面对用户时是否可见：隐藏）
-webkit-transform-style: preserve-3d; (设置内嵌的元素在 3D 空间如何呈现：保留 3D ）
**问题分析：**
个人猜测应该是ios上的safari在解析translate3d的错误导致影响到其他元素的展示，希望以后apple会修复此bug

**问题二：**
**问题描述：**
使用touch事件时，android和ios对touchend的响应处理方式不一致，比如在a元素上使用touchend触发一个弹出层显示，在android上面的浏览器手指在a元素上做滑动操作，然后手指离开，结果不会触发 touchend事件，同样的操作在ios上会触发 touchend。
**解决方法：**
var isSlide=false;
$(“a”).bind(“touchstart”,function(){
isSlide=false;
});
$(“a”).bind(“touchmove”,function(){
isSlide=true;
});
$(“a”).bind(“touchend”,function(){
if(isSlide){
return;
}
//执行代码
});
**问题分析：**
在触摸设备上当用手指触摸到屏幕到离开屏幕其实已经触发了三种事件：touchstart,touchmove,touchend,在iphone上的自然会弹出层，至于android上我想有一部分原因是和硬件有关，比如触摸屏的灵敏度不够高，导致touchend事件丢失，或者到touchmove事件之后就终止掉，都有可能。

**问题三：**
**问题描述：**
ios6修复了css position:fixed 1像素抖动的bug，不过引出另一个bug：当给指定元素添加 position:fixed时首次加载页面完成后，滑动整个网页，添加此样式的元素会跟随页面滚动（目的是固定此元素）。
**解决方法**：
为其元素添加如下css属性即可：
-webkit-transform：translate3d(0,0,0)（具体原因不知）

**问题四：**
**问题描述：**
android上的chrome bug， 当在某一个页面的其中一个元素中使用-webkit-transform:translate3d属性时，在其页面中的其他元素中使用-webkit-transform:rotate(xxx deg) 会失效，比如你要设置一个元素的旋转角度都会失效，这个bug表现的很奇怪，我一直没有搞明白是为什么，还是我自己的写法有问题？如果你知道可以告诉我，谢谢。
**解决方法：**
目前我的解决方法是在失效的元素的直接父级标签上添加：-webkit-transform:translate3d(0,0,0)即可正常显示，虽然不是很完美，至少能解决这个bug。
以上四个问题的解决方法我相信有些不是很完美的，如果你有更好的方法，欢迎和我留言，谢谢！

 