# JS基础第六天

## 1.今日重点

```
1.对象的基本概念
2.对象的创建方法
3.自定义构造函数
4.new关键字
5.this详解
6.遍历对象和JSON
7.内置时间对象
```

## 2.对象

### 1.什么是对象

​	对象就是一个东西.  用代码来描述一个东西,例如车子.

​	专业点: 对象就是用代码来描述现实世界中的东西

```js
//用代码来存储一个车子: 原来我们用变量存, 车子的功能用函数
var carName="特斯拉";
var carColor="白色";
var carEngine="电力发动机";
.....
//车的功能...
function fastCar(){
    console.log('我要飞得更快');
}
//问题: 上面这种储存方式简单,但零散,调用不方便,存储也不方便

//后来数据可以用数组来存
var fastCar=function(){
    console.log('我要飞得更快');
}
var  car = ['特斯拉','白色','电力发动机',fastCar];
car[1]();  //调用函数

//问题: 上面这种方法,存储方便,但是调用不方便,因为不知道每个值存的是啥意思,而且数组通常用来储存同类型的值.

//有没有一种,存储方便,写起来也方便,调用也方便的功能呢? 这就是对象的写法了
{
    name:'特斯拉',
    color:'红色',
    age:30,
    engine:'电力发动机',    //这种我们叫属性表示他的特征
    fast:function(){       //这种我们叫方法,表示它的行为或功能
        console.log('跑得快')  
    }
}

//上面这种写法,就是对象, 也叫对象字面量,那总得存起来,方便调用把
var car = {
    name:'特斯拉',
    color:'红色',
    age:30,
    engine:'电力发动机',   
    fast:function(){      
        console.log('跑得快')  
    }
}
car.name 
car.fast();

//上面将对象字面量存到变量car中,car就是一个对象,因为存了很多东西.
对象就是一个东西,这个东西中存了很多数据,跟基本的数据类型不一样.

//对象:就是变量和函数的结合体,方便存储和调用.(还具备抽象能力,将现实事物代码化)
```

### 2.对象的创建方法

```js
//1.对象字面量
var dog = {
    name:'puppy',
    type:'中华田园犬',
    age:2,
    color:'red',
    bark:function(){
        console.log('汪汪汪');        
    },
    eat:function(){
        console.log('啃骨头');
    }  
}
//访问方法   dog.name
```

```js
//2.对象创建:因为字面量创建写括号太low,而且上面这种写法格式不严谨太容易出错了
var dog = new Object();   //创建一个空对象
dog.name ="puppy";
dog.type="";
dog.age=2;
dog.color="yellow";
dog.bark= function(){}
dog.eat = function(){}


//访问方法dog.name
```

```js
//构造函数创建
//默认参数名字就是属性名字.为了区分对象的name使用this,对象创建在外部创建.
function Dog(name,type,age,color){
    //this动态的给对象增加成员
    //this指向了当前对象
    this.name = name;
    this.type = type;
    this.age = age;
    this.color = color;
    this.bark = function(){
        console.log('汪汪汪');
    }
    this.eat = function(){
        console.log('啃骨头');
    }
}
//对象定义一次,可多次调用.
var xiaohua = new Dog{'小花','金毛',2,'金色'};
var xiaoha = new Dog{'小哈','哈士奇',3,'黑白'};
```

### 3.new关键字的创建过程

```js
//new的作用
1.创建一个新的空对象  类似于 new Object();
2.会让this指向这个对象(因为这个对象暂时没有名字,可以用this表示这个对象)
3.给新对象加属性和方法  this.name  this.eat=function(){}
4.返回创建好的对象.
```

### 4. this关键字的作用

```javascript
// this 就是中文---它或者这个-----的意思.
//  this可能表示的情况
	1.表示window对象
	2.表示当前的方法
	3.当前对象,谁调用,就是谁

函数中 -- this 指向Window
在方法中 -- this 指向的是这个方法所属的对象
构造函数中 -- this 就是构造函数创建的对象(没有new过对象的函数,就是构造函数)
总结其实this就是指向函数的调用者

```

注意:this只有在调用的时候才能确定是谁

### 5.遍历对象

for in 语句对于数组或者对象的属性进行循环操作.

```js
for (变量 in 对象名字) {
    在此执行代码
}
```

- 这个变量是自定义  符合命名规范 但是一般我们都写 k  或者 key

- 后面的是对象也可以是数组,因为数组也属于对象

```js
var obj = {
    name : 'andy',
    age 18,
    sex:'男';
}
console.log(obj.length);   //undefined
for (var k in obj){
    console.log(k);		//输出属性名
    console.log(obj[k])	//输出属性值
}
```

### 6.遍历JSON

```js
JSON是一种轻量级的数据交换格式,在行业中大量使用.
格式:   属性:值
注意: JSON的属性和值都需要用双引号包括.
var json = {
    "id" : "1",
    "name" : "andy",
    "age" : "18",
    "tel" : "123456"
}
for (var k in json){
    console.log(k);	//这里的k 是属性名
    console.log(obj[k]);	//这里obj[k]是属性值
}
```

## 3.内置对象

```
内置对象:JS语言本身已经提供了一些功能给你使用,你只要学习怎么看说明书用就行.
一般看文档看以下几个方面:
    1.对象如何创建(是直接使用还是,需要new创建)
    2.对象有哪些属性,对应的功能是什么
    3.对象有哪些方法,对应的作用和代码是什么
    4.抄代码验证功能
    5.出了错误排错,并且查看文档或者百度
常见的内置对象:
Math	数学对象
Array	数组对象
Date	时间对象
String	字符串对象
```

### 1.Math对象

```js
Math.PI()					//圆周率
Math.floor()				//向下取整
Math.ceil()				 	//向上取整
Math.round()				//四舍五入,就近取整 注意-3.5	结果是-3
Math.abs()					//绝对值
Math.max()/Math.min()		 //求最大和最小值
Math.sin()/Math.cos()		 //正弦/余弦
Math.power()/Math.sqrt()	 //求指数次幂/求平方根
```

```js
//生成0-1之间的随机数
Math.random()	//生成0-1之间的随机数  取值范围是[0,1)
//生成1-100之间的随机数,100要可取
Math.random()*100+1    生成1-101之间的随机数
Math.floor(上面的结果);	向下取整,就可以得到1-100之间的随机数

//万能公式
Math.floor(Math.random()*(max - min + 1 ) + min);
```

### 2.Math对象练习

#### 1.求10-20(包括10和20)之间的随机整数

```js
function getRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1 ) + min);
}
console.log(getRandom(10-20));
```

#### 2.随机生成颜色RGB

```js
function getRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1 ) + min);
}
function getRGB(min,max){
    var R = getRandom(min,max);
    var G = getRandom(min,max);
    var B = getRandom(min,max);
    return 'rgb(' + R + ',' + G + ',' + B + ')';
}
```

#### 3.自己实现求最大值最小值对象

```js
var myMath = {
    PI:3.1415926;
    max:function(){
   	var max = arguments[0];
        for(var i = 0;i < arguments.length; i++){
            if(max < arguments[i]){
               max = arguments[i];
            }
        }
        return max;
	}
	 max:function(){
   	var min = arguments[0];
        for(var i = 0;i < arguments.length; i++){
            if(min > arguments[i]){
               min = arguments[i];
            }
        }
        return min;
	}
};
console.log(myMath.max(1,6,8,9));
console.log(myMath.min(1,6,8,9));
```

### 3..Date内置对象

```js
//内置Date时间对象
var now = new Date();
console.log(now);
//如果Date()中不写参数,就返回当前时间,如果写参数就返回括号中的时间
//new Date('20150501') 或者 new Date(2015/5/1)
```

