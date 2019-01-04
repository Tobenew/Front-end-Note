# JS第三天

## 1.今日重点

```
1.for循环
2.while循环
3.do-while循环
4.continue和break
5.代码调试
```

## 2.for循环

### 1.for循环基本语法

```javascript
// for循环的表达式之间用的是;号分隔的，千万不要写成,
for (开始条件; 条件范围; 条件增量) {
 // 循环体4
}
// 方式1 常用
for (var i = 1; i <= 100; i++) {
 console.log(i);
}
```

- **执行顺序**

  1.初始化变量

  2.条件表达式 -> 3.循环体 -> 4.自增表达式 

  之后 一直 执行 234 -> 234，直到条件表达式为 false，才结束循环。

![1521165630685](for 循环222.png)

### 2.for循环练习

#### 	1.求1-100之间所有偶数的和

```javascript
var sumNum = 0;
for(var i = 1;i <= 100; i++){
    if(i % 2 == 0){ // 如果 i 取模2 等于0，则 i 为 偶数
        sumNum += i;
    }
}
console.log('1-100之间所有偶数的和 = ' + sumNum);
```

#### 	2.求输出一个人1到100岁

```javascript
 for (var i = 0; i <= 100; i++) {
     // 用到 多条件判断
     if (i == 0) {
         console.log('这个人' + i + '出生了');
     } else if (i == 100) {
         console.log('这个人' + i + '已经死了');
     } else {
         console.log('这个' + i + '岁了');
     }
 }
```

#### 3.求1 - 100 之间所有数的平均值

```javascript
var sum = 0;
var average = 0;
for (var i = 1; i <= 100; i++) {
	sum += i;
}
average = sum / 100;
console.log(average);

```

#### 4.分别求1 - 100 之间所有偶数和奇数的和

```javascript
 // 同时求1 - 100 之间所有偶数和奇数的和
 var evenSum = 0,
 oddSum = 0;
 for (var i = 1; i <= 100; i++) {
     if (i % 2 == 0) {
        evenSum += i;
     } else {
        oddSum += i;
     }
 }
 console.log('偶数的和:' + evenSum);
 console.log('奇数的和:' + oddSum);
```

#### 5.求1-100之间所有能被3整除的数字的和

```javascript
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
    	sum += i;
    }
}
console.log(sum);
```

### 3.双层for循环

```javascript
for (外循环的初始; 外循环的条件; 外循环的增量) {
    
    for (内循环的初始; 内循环的条件; 内循环的增量) {  

       需执行的代码;
   }

}
```

1. 内层循环可以看做外出循环的语句。 
2. 内层循环执行的顺序也要遵循for循环的执行书序。 
3. 外层循环执行一次，则内层循环要执行全部次数（跑完毕）

### 4.打印正方形

1. 打印 一行 有三个  星星 符号 

```javascript
var star = '';
for (var i = 0; i < 3; i++) {
     star += '☆'
 }
console.log(star);
```

1. 打印三行这样的星星

```javascript
var star = '';
for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 3; i++) {
      star += '☆'
    }
    // 每次满 3个星星 就 加一次换行
    star += '\n'
}
console.log(star);
```

### 5.打印倒三角

<img src="media/1521189979921.png" />



1.使用 `for循环` 打印 `倒` 三角形（9行 * 9列）

```js
 // 一行上打印星星的个数 =   用 10 减去  行数   i   （10 - i ）
var str = ''; // 空字符串
// 外层for 负责 可以打印  行数 
for (var i = 1; i <= 9; i++) {
    // 里面的for 负责的是 一行  打印   n 个 星星
    for (var j = 1; j <= 10 - i; j++) {
        str = str + '☆';
    }
    str = str + '\n';
}
console.log(str);

// j  起始值 从  行数 开始  到  9    就是打印的个数 
var str = ''; // 空字符串
// 外层for 负责 可以打印  行数 
for (var i = 1; i <= 9; i++) {
    // 里面的for 负责的是 一行  打印   n 个 星星
    for (var j = i; j <= 9; j++) {
        str = str + '☆';
    }
    str = str + '\n';
}
console.log(str);
```



### 6.打印九九乘法表

<img src="media/23.png" >

```javascript
var str = ''
 //  外层for控制 行数  9行
for (var i = 1; i <= 9; i++) { 
    // j 控制列数    列数和行数是一样的  j <= i 
    for (var j = 1; j <= i; j++) {
      // 我们发现了一个非常好的规律   
      //第一行有 一列   第二行有2列 第三行有3列  第9行有9列
        str += j + " × " + i + " = " + i * j + '\t';
    }
    str += '\n';
}
console.log(str);
```

<img src="media/biao.jpg" >

## 3.while循环

### 1.while循环的基本语法

```javascript
 // 当循环条件为true时，执行循环体，
 // 当循环条件为false时，结束循环。
 while (循环条件) {
   //循环体
 }
注意: while循环需要自己添加开始条件,和循环增量,不然容易出现死循环.
```

### 2.while循环练习

​	1.用 console.log() 在控制台打印 10 遍 'Hi，有空吗？' 

```javascript
var numCount = 1; // 用来记录循环次数
while(numCount <= 10){ // 判断循环的次数是否达到我们的条件
    console.log('Hi,有空吗？'); // 要执行的循环体 业务代码
    numCount++; // 做条件改变，否则 循环会出现【死循环】！
}
```

2.打印人的一生从1岁到100岁

```js
var num = 1;
while (num <= 100) {
   console.log('这个人' + num + '岁了');
   num++;
}
```

3.计算 1 ~ 100 之间所有数的和

```js
var countNum = 1; // 作为 1 ~ 100 的每个数
var numSum = 0; // 用来记录 相加 结果
while(countNum <= 100){
    numSum += countNum;
    countNum++;
}
console.log('1~100所有数的和为：' + numSum);
```



## 4.do-while循环

### 1.do-while基本语法

```js
 // 1. 语法
   do {
     // 循环体;
   } while (循环条件);
```

### 2.do-while练习

1.用console.log() 模拟吃2个包子案例

```js
var i = 1;
 do {
     console.log('我吃了' + i + '个包子');
      i++;
} while (i <= 2)
```

2.使用do-while循环：输出你喜欢我吗？(y/n):"，直到输入y退出，否则继续询问。（提示：使用 prompt ）

```js
do {   
	var ask = prompt('你喜欢我吗？ y/n');
} while (ask !== 'y');
alert('我也喜欢你啊');
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