**ios和安卓兼容问题**

一、搜索确定问题

添加form元素，在提交的时候是input失去焦点

二、时间框选择问题

添加form元素

三、多图上传问题

安卓上不能多图上传，无法解决

四、浮动问题

尽量用盒子模型布局

五、音频自动播放问题，ios默认不自动播放

在document上添加点击事件播放音频

六、浮动高度撑开盒子

.clearfix:after{

content:".";

display:block;

height:0;

clear:both;

visibility:hidden;

}

.clearfix{

display:inline-block;

}

\* html .clearfix{

height:1%;

}

.clearfix{

display:block;

}

.clear{

clear:both;

height:0;

font:0/0 Arial;

visibility:hidden;

} 

 

七、 Css在ios中动画闪屏问题

IOS下Safari渲染Transition时页面闪动Bug

http://classjs.com/category/technology/css/

 

环境：IOS的Safari环境

问题：在做移动端左右滑动的时候，用到了CSS3的Transition属性来进行动画变换，结果每次渲染Transition属性时，出现闪屏现象。

解决办法：在网上查了一下，有一下两种解决办法，

方法一：

1	-webkit-transform-style: preserve-3d;

2	/*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/

方法二：

view source print?

1	-webkit-backface-visibility: hidden;

2	/*（设置进行转换的元素的背面在面对用户时是否可见：隐藏）*/

 

八、单屏网页滑动问题

添加

$( document ).on("touchmove",function(e){

​	e.stopPropagation();

​	return false;

})

九、键盘弹出问题

解决办法：无，安卓键盘弹出整个页面的window层的高度减小，ios无影响；

十：伪类active失效

要CSS伪类 :active 生效，只需要给 document 绑定 touchstart 或 touchend 事件

 

使用css3动画用了transition或者animation后会有闪白的现象

-webkit-backface-visibility: hidden;

尽量写成3d使页面运行更流畅

-webkit-transform-style: preserve-3d;

 

ios横屏时会重置字体大小

text-size-adjust：none 

手机上最好是用tap事件  click事件会有300ms的延迟

禁止ios弹出各种操作窗口

-webkit-touch-callout:none

禁止用户选中文字

-webkit-user-select:none

js动态生成的下拉菜单在安卓2.0中不起作用

解决方法：删除了overflow-x:hidden;然后在js生成下拉菜单之后聚焦focus

消除 IE10 里面的那个叉号

input:-ms-clear{display:none;}

 

ios中文输入法输入英文时会有小空格  解决办法  用正则this.value = this.value.replace(/\u2006/g, '');

 

三星I9100 （Android 4.0.4）不支持display:-webkit-flex这种写法的弹性布局，

但支持display:-webkit-box这种写法的布局,

相关的属性也要相应修改，如-webkit-box-pack: center;

移动端采用弹性布局时，建议直接写display:-webkit-box系列的布局

 

touchmove事件在Android部分机型(如LG Nexus 5 android4.4，小米2 android 4.1.1)上只会触发一次

解决方案是在触发函数里面加上e.preventDefault(); 记得将e也传进去。

 

图片圆角是显示不正常   在图片外面包裹 一个元素  然后给那个元素设置圆角  让图片变成这个元素的背景图片

在android4.2背景会溢出，使用background-clip:padding-box;

 

ios不会弹出键盘 必须满足下面几点

① 文本框获取焦点

② 手指触屏（网页区域，混合开发触屏app头不能让webview弹出键盘）

③ 没有延迟（不会ajax回调，不会延迟）

 