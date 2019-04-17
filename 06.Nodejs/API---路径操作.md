### 路径操作

1. path.join   路径拼接    最后路径中不会有   点  ...

   最佳实践,以后但凡涉及到路径拼接,一定要用path.join

   ```js
   const path = require('path')
   
   path.join('c:/','a','./b')
   ```

2. path.sep

   文件分隔符

3. path.basename(path,[ext])

   获取文件名称的

4. path.dirname(path)

   返回最后一个斜杠前的所有路径

5. path.extname(path)

   获取文件的扩展名

