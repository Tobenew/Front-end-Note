原生js中遍历数组:

```js
var array = ['pink','red','green'];
array.forEach(function(value,index){
    console.log(value);
    console.log(index);
    console.log(this);	//这里的this指的是window
})
```

jQuery中遍历数组的方法:

```js
var array = ['pink','red','green'];
$(array).each(function(index,value){
    console.log(value);
    console.log(index);
    console.log(this);	//这里的this指的是
})
```

