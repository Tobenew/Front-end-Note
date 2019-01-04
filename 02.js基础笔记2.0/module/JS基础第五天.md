# JS基础第五天

## 1.今日重点

```
1.函数的练习
2.函数内置实参对象 arguments
3.函数的其他写法
4.全局变量和局部变量(作用域)
5.预解析
```

## 2.函数练习

### 1.用函数求两个数的最大值

```js
//定义一个 获取数组中 最大数 的函数
function getMaxFromArr(numArray){
    var maxNum = 0;
    for(var i =0;i < numArray.length;i++){
        if(numArray[i] > maxNum){
            maxNum = numArray[i];
        }
    }
    return maxNum;
}
//定义一个数值数组
var arrNum = [5,2,99,101,67,77];
//调用函数获取最大值
var maxN = getMaxFromArr(arrNum);
//打印最大值
alert('最大值为：'+ maxN);
```

### 2.用函数翻转任意数组

```js
function reverseFun(arr) {
   var newArr = [];
     for (var i = 0; i < arr.length; i++) {
         newArr[i] = arr[arr.length - i - 1];
       }
      return newArr;
}
var arr = [1, 4, 2, 8];
var arr1 = ['pink', 'hotpink', 'deeppink'];
console.log(reverseFun(arr));
console.log(reverseFun(arr1));
```

### 3.用函数排序数组

```js
//对数组排序，从小到大 -- 冒泡排序
function sort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return array;
}
var arr = [2, 8, 1, 4, 9];
var arr1 = [2, 4, 8];
console.log(sort(arr));
console.log(sort(arr1));
```

### 4.用函数求任意年是否闰年

```js
//要求：输入一个年份，判断是否是闰年[闰年：能被4整数并且不能被100整数，或者能被400整数
function isRun(year) {
            var flag = false;
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                flag = true;
            }
            return flag;
        }
console.log(isRun(2010));
console.log(isRun(2012));
```

### 5.用函数计算任意时间是一年中的多少天

1. 先计算 输入的当前 月份的天数   
2. 计算加上 前面几个月的总天数
3. 月份不同 1.3 .5 .7 .8 .10 .12 月是 31 天     4, 6, 9, 11 是 30 天       2 月份 闰年是 29 天 否则 28
4. 这个函数 需要 三个参数 分别是 年 月  日

```js
function isRun(year) {
    var flag = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    	flag = true;
    }
    return flag;
}
console.log(isRun(1998));

function getDays(year, month, day) {
    // 先计算当前月的 天数
    var days = day;
    // 下面开始 累加 前面几个月的 总天数 
    for (var i = 1; i < month; i++) {
    // 月份不同  天数不同 我们用 switch
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
            	days += 31;
            	break;
            case 4:
            case 6:
            case 9:
            case 11:
            	days += 30;
            	break;
            case 2:
                if (isRun(year)) {
                	days += 29;
                } else {
                	days += 28;
                }
                break;
            }
        }
        return days;
}

console.log(getDays(1998, 5, 2));
```

### 6.斐波那契数列

```js
 // 根据数列的规律1，1，2，3，5，8，13，21   求第9个数字是多少(可选)
 var num1 = 1;
 var num2 = 1;
 var num3 = 0;
 for (var i = 3; i <= 7; i++) {
     num3 = num1 + num2;
     num1 = num2;
     num2 = num3;
 }
 console.log(num3);

//函数版
function getFib(num) {
    var n1 = 1;
    var n2 = 1;
    var n3;
    for (var i = 3; i <= num; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
}
console.log(getFib(7));
```

<img src="media/88.png" />

## 3.函数内置对象arguments

```js
//arguments就是一个实参数组,可以在函数中直接使用.(但是是伪数组)
//什么时候使用?? 当我们不确定有多少个参数传递的时候，可以用arguments 来获取

function test(){
    console.log(123);
    console.log(arguments);
    console.log(arguments[0]);
}
//test();
test(1,2,3);
//注意arguments是一个特殊的对象,但是可以通过数组的方式来访问.(其实对象就是数组的进化.)
```



## 4.函数的其他写法

```
函数
function sayHi(){}

匿名函数function(){}              

函数表达式
var fn = function(){}  
fn();

自调用函数
(function(){})();

函数可以当参数和返回值.

```



## 5.作用域和作用域链

```js
作用域: 变量的作用范围

//里面可以访问外面的,外面不能访问里面的(就是大括号的区域)
全局作用域: 所有人都可以使用
局部作用域: 部分人可以使用.


//---------------------------------------------
var num1 =15;
function test(){
	var num2 = 100;
    console.log("函数内"+num1);
    console.log("函数内"+num2);
}

console.log(num1);
console.log(num2);
//所以num1是全局变量, num2是局部变量
```

拓展:
​	{}  被一个大括号包裹的区域,我们称之为块级作用域,JS中没有块级作用域,所以可以直接访问.

```js
//特殊的全局变量:当给该变量赋值,但是该变量定义没有var声明,这个时候会被认为是全局变量(不规范)
//在编程的时候,最好所有的效果都是认为可控的,不能随意交给计算机自己去执行.
//以后在写代码
var num = 15;

function fn() {
    // 全局变量   不建议这样，这样是不规范的
    str = 'abc';
    console.log(num);
    console.log(str);
}
//str被调用了两次
fn();
console.log(str);
```



```js
//作用域是一个相对概念,谁在谁的外面,谁在谁的里面(人外有人,天外有天)
 // 全局作用域 -- 0级作用域链
    var num = 5;
    function f1() {
      // f1 局部作用域   -- 1级作用域链
      // var num = 15;
      function f2() { 
        // f2 局部作用域  -- 2级作用域链
        console.log(num);
      }
      f2();
    }
    f1();
```

![06-1](media/06-1.png)



## 6.预解析

```js
//JS执行过程分为: 预解析和代码执行两个过程
预解析过程：
	1.把变量的声明提前
	2.把函数的声明提前
	3.先提升var，在提升function
    
    4.如果函数名和变量名相同,函数优先
	5.函数内部没有var的变量,默认为全局变量
    
console.log(num);
var num = 5;

f1();
function f1() {
    console.log('hello');
}
//预解析的好处: 顺序随便写.其他代码按照顺序执行
 
//当局部变量和全局变量冲突时,优先局部变量
 var a = 25;
 function abc (){
   alert(a);//undefined
   var a = 10;
 }
 abc();

 // 如果变量和函数同名的话，函数优先
 console.log(a);
 function a() {
   console.log('aaaaa');
 }
 var a = 1;
 console.log(a);
```

