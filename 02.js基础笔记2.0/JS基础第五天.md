# js基础第五天

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
//定义一个  获取数组中 最大数 的函数
function getMaxFromArr(numArray){
    var maxNum = 0;
    for(var i = 0; i < numArray.length;i++){
        if(maxNum < numArray[i]){
            maxNum = numArray[i];
        }
    }
    return maxNum;
}	
//定义一个数值数组
var arrNum = [5,2,99,101,67,77];
//调用函数获取最大值
var maxN = getMaxFromArray(arrNum);
//打印最大值
alert("最大值为"+ maxN);
```

### 2.用函数翻转任意数组

```js
function reverseFun(arr){
    var newArr [];
    for (var i = 0;i < arr.length; i++){
        newArr[i] = arr[arr.length-i-1];
    } 
    return newArr;
}
var arr = [1,4,2,8,3];
var arr1 = ['pink','hotpink','deeppink'];
console.log(reverseFun(arr));
console.log(reverseFun(arr1));
```

### 3.用函数排序数组 

```js
//对数组排序,从小到大 -- 冒泡排序
function sort(arr){
    for (var i = 0; i < arr.length-1;i++){
        for (var j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
var arr = [2,5,25,26,2,15];
var arr1 = [2,5,7,8,3,4,2];
consol.log(sort(arr));
console.log(sort(arr1));
```

### 4.用函数求任意年是否闰年

```js
function isRun(year){
    var flag = false;
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        flag = true
    }
    return flag;
}
console.log(isRun(2008));
console.log(isRun(2009));
```

### 5.用函数计算任意时间是一年中的多少天

1. 先计算 输入的当前 月份的天数   

2. 计算加上 前面几个月的总天数

3. 月份不同 1.3 .5 .7 .8 .10 .12 月是 31 天     4, 6, 9, 11 是 30 天       2 月份 闰年是 29 天 否则 28

4. 这个函数 需要 三个参数 分别是 年 月  日

5. ```
   
   ```


