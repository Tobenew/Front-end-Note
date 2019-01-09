# js基础第七天

## 1.今日重点

```
1.数组
	数组创建和清空
	数组添加和移除
	筛选数组,数组排序,数组合并,数组删除,数组查询,数组去重
2.数据类型存储和传参

3.字符串
	包装类型,字符串不可变性
	字符串方法
```

## 2.数组

### 1.数组的两种创建方法

```js
//1.new对象创建数组
var arr = new Array();
//数组长度为3,但是内容为空
var arr = new Array(3);
//创建数组[3,4,6]
var arr = new Array(3,4,6);

//2.使用字面量创建数组对象
var arr = [1,2,3];
//获取数组中元素的个数
console.log(arr.length);
```

### 2.检测是否是数组

```js
//	instanceof
//	Array.isArray()		H5中提供的方法,有兼容性问题

var arr = [1,23];
var obj = {};
console.log(arr instanceof Array);	//true
console.log(obj instanceof Array);	//false
console.log(Array.isArray(arr));	//true
xonsole.log(Array.isArray(obj));	//false
```

### 3.数组转字符串

```js
toString()		把数组转换成字符串,逗号分割每一项
var arr = [1,2,3,4,5,6];
console.log(arr.toString());	//字符型 的1,2,3,4,5
```

### 4.数组的添加和删除

```
1.push()	//向数组最后添加一个或多个元素,返回新长度
2.pop()		//删除数组最后一个元素,数组长度减1,返回删除元素值
3.shift()	//把数组中的第一个元素删除,数组长度减1,返回删除元素值
4.unshift()	//向数组的开头添加一个或多个元素,返回新长度
```

```js
//push
var arr = ['pink','deeppink','hotpink'];
console.log(arr.push('lightpink'));//返回长度 4
console.log(arr);//['pink','deeppink','hotpink','lightpink']

//pop
var arr = ['pink','deeppink','hotpink'];
console.log(arr.pop('hotpink'));//返回删除的元素'hotpink'
console.hot(arr);	//['pink','deeppink']

//shift
var arr = ['pink','deeppink','hotpink'];
console.log(arr.shift());	//返回删除的第一个元素  'pink'
console.log(arr);//返回删除后的数组	['deeppink','hotpink']
```

