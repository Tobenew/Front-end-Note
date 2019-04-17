### 文件读取

访问node核心模块,直接使用require('核心成员的名称'),就能导入这些核心成员

```js
const fs = requires('fs')
```

fs核心模块中,提供了一个 fs.readFile 方法,来读取指定目录下的文件

fs.readFile(),有三个参数

1. 要读取的文件的路径
2. 要用什么样的编码格式 来读取指定的文件 默认 编码格式为null
3. 表示当文件读取完成,调用这个callback回调函数来处理读取的结果
4. 第一个参数是 Error对象   第二个参数是 读取成功的结果

```js
fs.readFile('文件路径','utf-8',function(err,data){
    console.log(err); // null  如果err为null则表明读取成功了,没有出错
    console.log(data);	// 
    if(err){
        return console.log('读取文件失败'+ err.message)
    }
    console.log(' 读取文件成功,内容是' + data)
});
```

### 文件写入

1. //导入fs文件操作模块

```
const fs = requires('fs')
```

2. //调用fs.writeFile写入文件

   覆盖式的写入,每次写入覆盖原来的内容

   参数1：路径字符串，表示把文件内容，写入到哪个文件中

   参数2: 要写入的数据,可以给定一个 字符串

   参数3: 可选参数,表示 要以什么格式写入文件内容 默认以utf8 格式写入文件[一半默认不传递第三个参数]

   参数4:文件写入完成之后的callback回调函数,在回调函数中,只有一个形参,err错误对象

   ```js
   fs.writeFile('文件路径','222',function(err){
       //如果文件写入失败,则报错
       if(err) return console.log('写入文件失败!'+err.message)
       console.log('文件写入成功')
   })
   
   ```

   ### 文件内容追加

   1.//调用 fs.appendFile最佳文件内容

```js
const fs = requires('fs')
```

2. //调用fs.appendFile 追加文件内容

参数1: 表示要向那个文件中追加内容,指定一个文件的路径  如果文件路径不存在,则会创建文件并且向里面添加

参数2: 表示要追加的具体的内容,可以传递字符串内容

参数3:可选参数,表示 追加文本内容的时候的编码格式,如果省略此参数,默认以utf8的格式追加内容

参数4: 表示追加完成之后的回调

​	有形参 err  ,追加失败后的错误结果

```js
fs.appendFile('文件路径','\n222',err=>{
    //如果修改失败,则报错
    if(err)return console.log{'修改文件失败'+err.message}
    console.log('文件修改成功')
})
```

### 文件路径问题

当前执行的文件的磁盘目录,随文件的改变而改变

```js
console.log(__dirname + '/file/1.txt');
console.log(__filename);//带文件名的完整目录
```

### 读取文件信息

fs.stat

- stats.size		读取的文件大小,单位是字节 Byte
- stats.birthtime  读取的是文件创建时间,通常是UTC时间
- stats.isFile()      通过isFile方法判断是否为 文件
- stats.isDirectory()  通过isDirectory方法判断是否为目录

```js
const fs = requires('fs')
fs.stat(__dirname + '/files/1.txt',(err,stats)=>{
    if(err) return console.log(err.message)
    console.log(stats.size)	//单位是字节 Byte
    console.log(stats.birthtime)  //utc时间
    console.log(stats.isFile())	  //通过isFile()方法判断是否为 文件
    console.log(stats.isDirectory()) //isDirectory() 判断是否为目录
})
```

### 文件复制

fs.copyFile

- 如果复制后的文件名存在,会覆盖

  ```js
  const fs = require('fs')
  fs.copyFile(__dirname + '/file/1.txt',__dirname + '/file/1-copy.txt',(err)=>{
      if(err) return console.log('拷贝失败' + err.message)
      console.log('拷贝成功!')
  })
  ```


