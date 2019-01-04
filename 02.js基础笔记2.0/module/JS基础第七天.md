# JS基础第七天

## 1.今日重点

```
1.数组
	数组创建和清空
	数组添加和移除
	筛选数组,数组排序,数组合并,数组删除,数组查询,数组去重
2.数据类型存储和传参

3.字符串
	包装类型,字符串不可变性.
	字符串方法	
```

## 2.数组

### 	1.数组两种创建方式

```js
//1.new对象创建数组 
var arr = new Array(); 
// 数组长度为3 但是内容为空
var arr = new Array(3); 
// 创建数组  [3,4,6]
var arr = new Array(3, 4, 6); 

// 2. 使用字面量创建数组对象
var arr = [1, 2, 3];
// 获取数组中元素的个数
console.log(arr.length);
```

### 2.检测是否是数组

```js
- instanceof
- Array.isArray()     HTML5中提供的方法，有兼容性问题

var arr = [1, 23];
var obj = {};
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
```

### 3.数组转字符串

```js
toString()	 把数组转换成字符串，逗号分隔每一项
var arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // 字符型 的 1,2,3,4,5
```

### 4.数组的添加和删除

```

1.push()  //向数组最后添加一个或多个元素,返回新长度
2.pop()   //删除数组最后一个元素,数组长度减1,返回删除元素值
3.shift() //把数组中的第一个元素删除,数组长度减1,返回删除元素值
7.unshift()  //向数组的开头添加一个或多个元素,返回新长度
```

```js
// push
var arr = ['pink', 'deeppink', 'hotpink'];
console.log(arr.push('lightpink')); //  返回数组长度  4
console.log(arr); //  ['pink', 'deeppink', 'hotpink', 'linghtpink']

// pop
var arr = ['pink', 'deeppink', 'hotpink'];
console.log(arr.pop()); // 返回删除的那1个元素  'hotpink'
console.log(arr); // 返回删除的那1个元素  ["pink", "deeppink"]

// unshift
var arr = ['pink', 'deeppink', 'hotpink'];
console.log(arr.unshift('lightpink')); //  返回数组长度  4
console.log(arr); //  ['linghtpink','pink', 'deeppink', 'hotpink']

// shift 
var arr = ['pink', 'deeppink', 'hotpink'];
console.log(arr.shift()); // 返回删除的那1个元素  'pink'
console.log(arr); // 返回删除的那1个元素  ["deeppink", "hotpink"]
```

### 5.筛选工资数组

```js
//工资的数组[1500, 1200, 2000, 2100, 1800],把工资超过2000的删除
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
```

### 6.数组排序方法

| 方法名    | 说明                        | 是否修改原数组         |
| --------- | --------------------------- | ---------------------- |
| reverse() | 颠倒数组中元素的顺序,无参数 | 该方法会改变原来的数组 |
| sort()    | 对数组的元素进行排序        | 该方法会改变原来的数组 |

```js
// reverse 
var arr = ['red', 'andy'];
console.log(arr.reverse()); // 返回翻转之后的数组
console.log(arr); // 原先数组也被修改
```

sort  如果调用该方法时没有使用参数，按照字符编码的顺序进行排序。 

```js
 // sort() 直接在原数组上进行排序(默认只能对字符串进行排序)
 var arr1 = ['a', 'c', 'e', 'b'];
 // 对字符排序
 arr1.sort()
 console.log(arr1)

var arr = [1, 64, 9, 6];
arr.sort(function(a, b) {
    return b - a; // 降a序
    // return a - b;   升序
});
console.log(arr);
```

### 7.数组其他操作方法

| 方法名   | 说明                                  | 返回值                                         |
| -------- | ------------------------------------- | ---------------------------------------------- |
| concat() | 连接两个或多个数组                    | 返回一个新的数组                               |
| slice()  | 数组截取slice(begin, end)             | 返回被截取项目的新数组                         |
| splice() | 数组删除splice(第几个开始,要删除个数) | 返回被删除项目的新数组  注意，这个会影响原数组 |

```js
var arr1 = [1, 2];
var arr2 = ['pink', 'red'];
var arr3 = ['andy', 18];
//返回连接之后的新数组
console.log(arr1.concat(arr2, arr3));

// arr.slice(begin, end)   begin (包含自己） 和  end (不包含)  都是 索引号   
var arr = ['red', 'green', 'blue', 'pink'];
console.log(arr.slice()); // 默认截取整个数组
console.log(arr.slice(0)); // 从第0个截取到最后
console.log(arr.slice(0, 3)); // 从第0个截取  截取 索引号是3的但是不包含3

// splice 删除
var arr = ['red', 'green', 'blue', 'pink'];
console.log(arr.splice(2, 1)); // 从索引号2开始  删除1个 blue
console.log(arr); // 修改 原数组 ["red", "green", "pink"]

```

### 8.清空数组

```js
// 方式1 推荐 
arr = [];

// 方式2 
arr.length = 0;

// 方式3
arr.splice(0, arr.length);

```

### 9.数组的位置和连接方法

| 方法名         | 说明                                     | 返回值                 |
| -------------- | ---------------------------------------- | ---------------------- |
| indexOf()      | 获得某个字符的位置                       | 返回一个新的数组       |
| lastIndexOf()  | 获得每个字符倒数的位置                   | 返回被截取项目的新数组 |
| join('分隔符') | 用于把数组中的所有元素转换为一个字符串。 | 返回一个字符串         |



```js
var arr = ['red', 'green', 'blue', 'pink'];
console.log(arr.join()); // 跟toString() 一样， 转换为字符串
console.log(arr.join('-')); //red-green-blue-pink
```

10.数组的迭代方法(过滤)

```js
arr.filter(匿名函数);

var arr = [1500, 1200, 2000, 2100, 1800];
arr.filter(function(item) {
    // item 是个形参   包含了 每个  数组值
    console.log(item);
})

// 最终使用
var arr = [1500, 1200, 2000, 2100, 1800];
var resu = arr.filter(function(item) {
    // item 是个形参   包含了 每个  数组值
    return item < 2000
})
console.log(resu);

```

### 10.数组去重

```js
//思路:
	1.遍历数组
    2.构造字符对象
        {
            a:1,
            b:2,
            c:3
        }
	3.取出对象中值为1的字符,放到新数组中,并返回
var arr = ['c', 'a', 'z', 'a', 'x', 'a'];
var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
var o = {};
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (o[item]) {
        o[item]++;
    } else {
        o[item] = 1;
    }
}
console.log(o);
// 声明一个新数组
var newArr = [];
for (k in o) {
    // 如果值是1的话， 说明只有一次，我们可以直接存储到新数组里面
    // 或者 这个数组里面没有重复的
    if (o[k] === 1 || newArr.indexOf(k) === -1) {
        newArr.push(k);
    }
}
console.log(newArr);
```



## 3.数据类型存储方式

```js
简单类型: 也叫值类型, 存储时存储自身内容
复杂类型: 也叫引用类型,存储时,存储的是存放地址.通过这个地址去找存放的具体值.

使用时:
    简单类型也叫值类型, 不论是赋值还是当参数,都是复制一份.去使用
    复杂类型也叫引用类型,不论是赋值还是当参数,都是告诉你一个地址,用的还是同一个东西.如果有人改了,其他人就都变了
```



## 4.字符串

### 	1.基本包装类型和字符串不可变性(理解即可)

为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String/Number/Boolean

```js
//基本包装类型就是 把简单数据类型包装成为复杂数据类型。 这样 基本数据类型就有了属性和方法

// 下面代码的问题？
var str = 'andy';
console.log(str.length);
// 按道理 基本数据类型 是 没有属性和方法的
// 对象才有属性和方法的
// 这个原因是因为， js 会把 基本数据类型包装为复杂数据类型
//  执行过程如下  生成临时变量 把简单类型包装为复杂数据类型
var temp = new String('andy');
// 赋值给 我们声明的 字符变量
str = temp;
// 销毁给临时变量
temp = null;
```

```js
字符串的不可变  指的是里面的值不可变，  看上去可以改变内容，其实是地址变了，新开辟了一个内存空间。
var str = 'abc';
str = 'hello';
// 当重新给str赋值的时候，常量'abc'不会被修改，依然在内存中
// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
var str = '';
for (var i = 0; i < 100000; i++) {
    str += i;
}
console.log(str); // 这个结果需要花费大量时间 来 显示 因为需要不断的开辟新的空间
```

### 2.创建字符串对象

```js
var str = 'andy';
console.log(str); // 看不到常见的属性和方法
var str1 = new String('andy');
console.log(str1); // 可以看到常见的属性和方法
// 但是字符串经过基本包装类， 是可以使用 常见的属性和方法
```

### 3.字符串的常用方法

字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，操作完成会返回一个新的字符串

```
// 1 字符方法
charAt()        //获取指定位置处字符
charCodeAt()    //获取指定位置处字符的ASCII码
str[0]          //HTML5，IE8+支持 和charAt()等效
字符串操作方法

concat()        //拼接字符串，等效于+，+更常用
slice()         //从start位置开始，截取到end位置，end取不到
substring()     //从start位置开始，截取到end位置，  end取不到
substr()        //从start位置开始，截取length个字符
 
位置方法
indexOf()       //返回指定内容在元字符串中的位置
lastIndexOf()   //从后往前找，只找第一个匹配的

trim()          //只能去除字符串前后的空白

大小写转换方法
to(Locale)UpperCase()   //转换大写
to(Locale)LowerCase()   //转换小写
其他

replace()  //替换

split() //切割
//遇到不清楚的方法,学会去查文档学习.
```

### 4.根据位置获取字符

| 方法名            | 说明                                      | 使用                           |
| ----------------- | ----------------------------------------- | ------------------------------ |
| charAt(index)     | 返回指定位置的字符(index 字符串的索引号)  | str.charAt(0)                  |
| charCodeAt(index) | 获取指定位置处字符的ASCII码 (index索引号) | str.charCodeAt(0)              |
| str[index]        | 获取指定位置处字符                        | HTML5，IE8+支持 和charAt()等效 |

```js
var str = 'andy';
console.log(str.charAt(0)); // a
// 可以遍历的方法 得到所有的字符串
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

```

<img src="../../../%E5%89%8D%E7%AB%AF%E4%B8%8A%E8%AF%BE%E8%B5%84%E6%96%99/js%E5%9F%BA%E7%A1%80%EF%BC%88%E5%8F%8C%E5%85%83%EF%BC%89/JavaScript%E5%9F%BA%E7%A1%80%E7%AC%AC06%E5%A4%A9/%E7%AC%94%E8%AE%B0/media/33.jpg" />

### 5.字符串操作方法

| 方法名                    | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| concat(str1,str2,str3...) | concat() 方法用于连接两个或多个字符串。拼接字符串，等效于+，+更常用 |
| substr(start,length)      | 从start位置开始（索引号） ， length  取的个数   重点记住这个 |
| slice(start, end)         | 从start位置开始，截取到end位置，end取不到 (他们俩都是索引号) |
| substring(start, end)     | 从start位置开始，截取到end位置，end取不到   基本和slice 相同 但是不接受负值 |

```javascript
var str1 = 'andy';
var str2 = 'red';
console.log(str1.concat(str2, '肖申克救赎'));  // andyred肖申克救赎

var str = 'my name is andy';
console.log(str.substr(1)); // y name is andy  默认从第1个到最后
console.log(str.substr(0, 2)); // my 从第0个开始，取2个
console.log(str.substr(3, 7)); //name  is 从第 3个索引号开始，取 7个


var str = 'my name is andy';
console.log(str.slice(1)); // y name is andy  默认从第1个到最后
console.log(str.slice(0, 2)); // my 从第0个开始，取到 第 1个（不包含2）
console.log(str.slice(3, 7)); // name

var str = 'my name is andy';
console.log(str.substring(1)); // y name is andy  默认从第1个到最后
console.log(str.substring(0, 2)); // my 从第0个开始，取到 第 1个（不包含2）
console.log(str.substring(3, 7)); // name
```

- 截取字符串"我爱中华人民共和国"，中的"中华"

```javascript
var s = "我爱中华人民共和国";
s = s.substr(2,2);
console.log(s);
```

### 6.获取字符串位置方法

| 方法名                              | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| indexOf('要查找的字符', 开始的位置) | 返回指定内容在元字符串中的位置， 如果找不到就返回 -1，开始的位置是index 索引号 |
| lastIndexOf()                       | 从后往前找，只找第一个匹配的                                 |

```js
var str = 'my name is andy';
console.log(str.indexOf('n')); // 3
console.log(str.indexOf('l')); // -1
```

- "abcoefoxyozzopp"查找字符串中所有o出现的位置

```javascript
var str = 'abcoefoxyozzopp';
// 因为里面 index 要加1 所以这里是 -1
var index = -1;
do {
    // 这里判断是否能取到 o
    index = str.indexOf('o', index + 1);
    // 如果不是-1 就返回这个位置
    if (index != -1) {
        console.log(index);
    }
} while (index !== -1)
```

### 7. replace() 替换

replace() 方法用于在字符串中用一些字符替换另一些字符

格式如下：  

replace(被替换的字符串， 要替换为的字符串)；

- 把字符串中所有的o替换成!

```javascript
var s = 'abcoefoxyozzopp';
while (s.indexOf('o') !== -1) {
    s = s.replace('o', '!');
}
console.log(s);
```

- 判断一个字符串中出现次数最多的字符，统计这个次数

```javascript
var s = 'abcoefoxyozzopp';
var o = {};

for (var i = 0; i < s.length; i++) {
  var item = s.charAt(i);
  if (o[item]) {
    o[item] ++;
  }else{
    o[item] = 1;
  }
}

var max = 0;
var char ;
for(var key in o) {
  if (max < o[key]) {
    max = o[key];
    char = key;
  }
}

console.log(max);
console.log(char);
```

### 8. 转换大小写

toUpperCase() 	//转换大写
toLowerCase() 	//转换小写

```js
var str = 'ANDY';
console.log(str.toLowerCase()); // andy
var str = 'andy';
console.log(str.toUpperCase()); // ANDY
```



### 9.split 切割字符串

注意，切割完毕之后，返回的是一个新数组

```js
var str = 'a,b,c,d';
console.log(str.split(',')); //返回的是一个数组 [a, b, c, d]
```



### 10.网址URL解析

```js
var url = 'http://www.itheima.com/login?name=zs&age=18';

function getParams(url) {
    // 1. 首先把 网址分为2部分  用 ? 分割 
    // 2. 得到 ？+ 1 的索引位置
    var index = url.indexOf('?') + 1;
    // 3. 得到 ？ 后面的字符串
    var params = url.substr(index);
    console.log(params); // name=zs&age=18
    // 4. 把 得到 这串字符 继续用 & 分隔开
    var arr = params.split('&');
    // console.log(arr);
    var o = {};
    // 5. 把 数组里面的每一项，继续用 = 分割
    for (var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=');
        // console.log(newArr);
        // 完成赋值 操作
        o[newArr[0]] = newArr[1];
    }
    return o;
}
console.log(getParams(url));
```

