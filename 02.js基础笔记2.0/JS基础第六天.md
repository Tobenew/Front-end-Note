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

5.遍历对象

for in 语句对于数组或者对象的属性进行循环操作.

```js
for (变量 in 对象名字) {
    在此执行代码
}
```

- 这个变量是自定义  符合命名规范 但是一般我们都写 k  或者 key

