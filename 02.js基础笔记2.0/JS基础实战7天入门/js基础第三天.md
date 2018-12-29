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

#### 1.使用for循环 打印 倒 三角形  9行九列

```

```

