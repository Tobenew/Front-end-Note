# js基础第四天

## 1.今日重点

```
1.数组
	数组的创建和访问
	数组的长度和遍历
	数组的练习:求和,平均值,最大值,字符分割
			数组筛选,数组去重,翻转数组,冒泡排序
2.函数
	函数的声明与调用
	带参数的函数
	形参和实参的问题
```

## 2.数组的基本语法

```js
//数组就表示一组数据,可以同时存储多个数值;
数组用中括号表示[]
var a = 1;
var b = "张三";
var c = true;
//单个存储太费劲了,所以干脆用数组一起显示
var arr = [1,"张三",true];//可以同时存储多个数值,arr是变量名,里面存着数组

//更高级的创建数组的办法
var arr = new Array();//创建一个空新数组
//向数组中存储值
arr[0] = "张三";
arr[1] = "123";
//获取数组中值
console.log(arr[0]);
```

如果要获取数组中的某个值呢?

```js
//定义一个数组
var arr = ["张三","李四","王五"];
//获取数组中的某个值
arr[0]	//表示数组中的第一个值,张三
arr[1]	//表示数组中的第二个值,李四
console.log(arr[0])

//获取数组的长度arr.length
console.log(arr.length)

//获取数组中的最后一个元素
arr[arr.length-1]
```

## 3.数组练习

### 1.遍历数组

```js
var arr = ['pink','deeppink','hotpink','lightpink','skyblue']; 
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

### 2.求数组的和以及平均值

```js
 // 要求：求一组数值 [2, 6, 1, 7, 4] 的和 还有 平均值
 // 思路： 2 + 6 + 1 + 7 + 4   本质就是把数组元素相加 
 // 1. 首先有这个数组，然后才能进行操作
 // 2. 找到每个数组元素 然后依次相加 arr[i] 循环 遍历数组 
var arr = [2,6,1,7,4];
var sum = 0;	//存储和
var average = 0;//存储平均值
for(var i = 0; i < arr.length; i++){
    sum += arr[i]
}
average = sum / arr.length;
console.log("此数组的和是:"+sum);
console.log("此数组的平均值是:"+average);
 
```

### 3.求数组中的最大值

```js
// 要求：求一个数组中 [2, 6, 1, 77, 52, 25, 7] 的最大值
// 程序思路
// 1. 首先需要一个存放最大值的变量 
// 2. 把数组中的第一个值 取出来 放到 最大值变量里面去 
// 3. 开始  用我们最大值的变量 和 从第2个数组元素开始比较 
// 4. 如果最大值变量里面的值小于 数组元素   此时    把当前这个数组元素 赋值给 最大值变量
var arr = [2, 6, 1, 77, 52, 25, 7];
var max = arr[0];
for (var i = 1; i < arr.length; i++){
    if (max < arr[i]){
        	max = arr[i];
        }
}
console.log("数组中的最大值是"+max);
```

### 4.数字字符分割

```js 
 // 要求：将数组中的元素转换为字符串，  用|或其他符号分割
 // 比如  ['red', 'green', 'blue', 'pink']   输出结果为  'red|green|blue|pink|'
 // 核心思路： 把数组里面的每个元素 进行字符串拼接  拼接的时候，多拼接一个 分隔符 | 
 // 也得需要一个 字符串变量用来存储
var arr =  ['red', 'green', 'blue', 'pink'] ;
var str = "";
var sep = "|";
for (var i = 0; i < arr.length; i++){
    str = str + arr[i] + sep; 
}
console.log(str);
```

### 5.筛选数组

```js
 // 要求：要求将数组  [2, 0, 6, 1, 77, 0, 52, 0, 25, 7]  大于等于 10的元素选出来 放入新数组
  // 我们需要一个新数组 用于存放 筛选出来的元素

//方法一
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = []; //元素都是大于10 的新数组
var j = 0;	//计数器,新数组
for (var i = 0;i < arr.length; i++){
    if(arr[i] >= 10){
       		newArr[j] = arr[i];
        j++;
       }
}
console.log(newArr);

//方法2 动态
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = []; //元素都是大于10 的新数组
for (var i = 0;i < arr.length; i++){
    if(arr[i] >= 10){
       		newArr[newArr.length] = arr[i];
       }
}
console.log(newArr);
```

### 6.数组去零

```js
//要求：要求将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后 形成一个不包含 0 的新数组。
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = []; //元素都是不为0 的新数组
for (var i = 0;i < arr.length; i++){
    if(arr[i] != 0){
       		newArr[newArr.length] = arr[i];
       }
}
console.log(newArr);
```

### 7.翻转数组

```js
 // 要求，翻转数组，将数组   ['red', 'green', 'blue', 'pink', 'purple'] 的内容 反过来存放。
 // 1. 我们翻转数组 不涉及到 筛选  所以旧数组和新数组索引号都是连续的
 // 2. 旧数组是输出方    新数组 是接受方
 // 3. 新数组中的索引号 恰巧是  循环中的  i 
 // 4. 旧数组中取元素的索引号   通过 数组长度 - i - 1 得出来的
  var arr = ['red', 'green', 'blue', 'pink', 'purple'];
 var newArr = [];
for(var i = 0;i < arr.length; i++){
    newArr[i] = arr [arr.length - i - 1] ;
}
console.log(newArr);
```

### 8.冒泡排序

```js
我们先复习下 如何把两个变量 交换数据

//利用中间变量
var num1 = 10;
var num2 = 20;
var temp = num1;
num1 = num2;
num2 = temp;
comsole.log(num1,num2);
```

冒泡排序：是一种算法,把一系列的数据按照一定的顺序进行排列显示(从小到大,从大到小）

```js
//1.比较趟数: arr.length-1
//2.每一趟次数: arr.length-i-1
//3.两两交换,大的往后挪动
var arr = [5,4,3,2,1];
for (var i = 0; i < arr.length - 1; i++){
    for(var j= 0; j < arr.length - i -1; j++){
        if (arr[j]>arr[j+1]){
            	var temp = arr[j];
            	arr[j] = arr[j+1];
            	arr[j+1] = temp;
            }
    }
}
console.log(arr);
```

## 4.函数

### 1.函数的作用

```
函数的作用:可以重用代码.并且灵活可变.
实际价值:可以帮你做一些事情,并且可以将执行结果给你.
```

### 2.函数的语法

```js
函数分为:声明+调用
函数声明:
function 函数名(形参){
    //代码
}
函数调用:
函数名(实参);

例如:
function 带菜(菜名,价格){
    console.log("您带的菜名是:"+菜名+",您需要付款"+价格)
}
点菜("青椒肉丝",23);

函数返回值:在函数中写一个return,可以将函数中的内容返回给调用者.
形参:在函数定义的括号变量是形参,本质是一个变量.
实参:在函数调用的括号里,是具体的值.
```

注意:

函数参数可以有任意多个(0或者其他)

形参和实参的个数和顺序必须一一对应.

### 3.函数练习

#### 1.用函数.计算1-i之间的值

```js
//计算1-j之间的值
function getSum(var j){
    for (var i = 0; i < j; i++){
        sum += i;
    }
    alert(getSum);
}
getSum(100);
```

#### 2.用函数,计算任意两个数的和

```js
function getSum(num1,num2){
    console.log(num1 + num2);
}
getSum(1,3);
getSum(6,5);
```

### 4.函数返回值

```js
在函数中添加return,可以将函数中的结果返回给调用者.
return表示着函数的结束
```

> **小细节 : break ,continue ,return 的区别**

| break        | 结束当前的循环体 （for   while ）                  |
| ------------ | -------------------------------------------------- |
| **continue** | **跳出本次循环，继续执行下次循环（for   while ）** |
| **return**   | **返回return 中的值 同时结束当前的函数体内的代码** |









