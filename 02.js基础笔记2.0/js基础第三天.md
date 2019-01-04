# js第三天

## 1.今日重点

```
1.for循环
2.while循环
3.do-while循环
4.continue和break
5.代码调试
```

## 2.for 循环

### 1.for循环基本语法

```js
//for循环的表达式之间用的是;号隔开的,千万不要写成:
for(开始条件;条件范围;条件增量){
    //循环体
}
//方式1 常用
for (var i = 1; i <= 100; i++){
    console.log(i);
}
```

-执行顺序

- 执行顺序

  1.初始化变量

  2.条件表达式→3.循环体→4.自增表达式

  之后一直执行234→234,直到条件表达式为false,才结束循环.

### 2.for 循环练习

#### 1.求1-100之间所有偶数的和

```js
var sumNum = 0;
for (var i = 0; i <= 100; i++){
    if ( i % 2 == 0){
        sumNum += i;
    }
}
console.log('1-100之间所有偶数的和为'+sumNum);
```

#### 2.求输出一个人1到100岁

```js
for (var i = 0;i <= 0; i++){
    //用到多条件判断
    if (i == 0){
        console.log('这个人' + i + '岁出生了');
    }else is (i == 100){
        console.log('这个人'+ i + '岁死了');
    }else{
        console.log('这个人' + i + '岁了');
    }
}
```

#### 3.求1-100之间所有数的平均值

```js
var sum = 0;
var average = 0;
for (var i = 1;i <= 100; i++){
    sun += i;
}
average = sun / 100;
console.log(average);
```

#### 4.分别求1-100之间所有偶数和奇数的和

```js
var evenSum = 0;//定义偶数
var oddNum = 0;//定义奇数
for(var i = 1;i <= 100; i++){
    if (i % 2 == 0){
        	evenSum += i;
        }
    else{
        oddSum += i;
    }
}
console.log('偶数的和为'+evenNum);
console.log('奇数的和为'oddNum);
```

#### 5.求1-100之间所有能被3整除的数字的和

```js
var sum = 0;
for(var i = 1;i <= 100; i++){
    if (i % 3 ==0){
        sum += i;
    }
}
console.log('所有能被3整除的数为'+sum);
```

### 3.双层for循环

```js

```

### 4.打印正方形

#### 1.打印一行有8个 星星 符号 

```js
var star = '';
for (var i = 0; i < 8; i++){
    star += '☆';
}
console.log(star);   
```

#### 2.打印8行有8个 星星  符号

```js
var star = '';
for (var i = 0; i < 8 ; i++){
    for (var j = 0; j < 8 ; j++){
    	star += '☆';
	}
    star += '\n';
}
console.log(star);
```

### 5.打印倒三角

#### 1.使用for循环 打印 倒 三角形  九行九列

```js 
var star = '';
for(i=0;i<9;i++){
    for(j=0;j=9-i;j++){
        star += '☆';
    }
     star += '\n';
}
console.log(star);
```

### 6.打印九九乘法表

```js
var str = '';
// 外层for控制 行数 9 行
for (var i= 1; i <= 9; i++){
    for (var j = 1; j <= i; j++){
        str += j + "x" + i + "=" + i * j +"\t"
    }
    str += '\n';
}
console.log(str);
```

## 3.while循环练习

​	[1.用console.log()在控制台打印 10 遍 "Hi ,有空么? "]()

```js
var numCount = 1;	//用来记录循环次数
while (numCount <= 10){	//判断循环的次数是否达到我们的条件
    console.log("Hi ,有空么? ");	//要执行额循环体,业务代码
    numCount++;		//做条件改变,否则  循环会出现[死循环]!
}
```

​	2.打印人的一生从1岁到100岁	

```js
var num = 1;
while (num < =100){
    console.log("这个人"+num+"岁了");
    num++;  
}
```

​	3.计算1-100之间所有数的和

```js
var countNum = 1;//作为1-100的每个数
var numSum = 0;	//用来记录 相加 结果
while (countNum <= 100){
    numSum += countNum;
    countNum++;
}
console.log("1-100之间所有数的和为"+numSum)
```

## 4.do-while循环

### 	1.do-while基本语法

```js
//1.语法
do {
    //循环体;
}while(循环条件)
```

### 	2.do-while 练习

1.用console.log()模拟吃两个包子案例

```
var i = 1;
do{
    console.log("我吃了"+i+"个包子");
    i++;
} while(i <= 2);
```

2.使用do- while循环:输出你喜欢我么?(y/n):'',知道输入y退出,否则继续询问.(提示:使用prompt )

```js
do {
    var ask = prompt("输出你喜欢我么?(y/n):");
}while (ask !== "y")
    alert("我也喜欢你啊!");
```

## 5.三种循环的区别

```js
while和do-while都是在不确定循环执行次数的情况下使用
do-while是先执行一次再判断
while是先判断,再执行

for循环适合在循环范围确定的情况下使用.
```

## 6.continue和break

```js
break:立即跳出整个循环，即循环结束，开始执行循环后面的内容（直接跳到大括号）
continue:立即跳出当前循环，继续下一次循环（跳到i++的地方）
```

1.模拟 吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子。

```js
 for (var i = 1; i <= 5; i++) {
     if (i == 3) {
         console.log('这个包子有虫子，扔掉');
         continue; // 跳出本次循环  跳出的是 第 3次 循环 
     }
     console.log('我正在吃第' + i + '个包子呢');
 }
```

2.模拟 吃5个包子，吃到第3个后，就不再吃后面的包子

```js
  for (var i = 1; i <= 5; i++) { 
      if (i == 3) {               
        break; // 直接退出整个for 循环  跳到 整个for 下面的语句           
      }            
      console.log('我正在吃第' + i + '个包子呢');       
  }
```

## 7.代码调试