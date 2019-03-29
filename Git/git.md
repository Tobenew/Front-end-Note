##### 初始化仓库

```
git init
```



#####  设置当前使用用户

```
git config --global user.name "yinhui"

git config -- global user.email "yinhui@qq.com"
```



##### 存储代码

```
git add ./a.txt

所有修改的全部添加

git add ./ 
```



##### 提交仓库

```
git commit -m "这是我第一天完成的功能"

所有修改的文件提交到仓库

git commit --all -m ""
```



##### 查询状态   

```
git  status

红色是修改后没有add

绿色是add了
```



##### 忽略目录

```
.gitignore
```



##### 提交记录

```
git log      查看提交日志

git log --oneline 查看简洁日志
```



##### 回退到指定的版本

```
git reset --hard head~0

回退到上次代码提交的功能
```



```
git reset --hard head~1

回退到上上次代码提交前的功能
```



##### 通过版本号回退版本

```
git reset --hard head 版本号
```



##### 查询切换版本号的记录

```
git reflog
```

##### 新建分支

```
另外创建一条分支线
git branch dev
git branch		//查看当前有多少分支  
git checkout dev   //切换到dev分支
```

##### 合并分支

```
git checkout master
git merge dev
```

##### 上传提交代码

```
git push 服务器地址 master 
```

##### 拉回代码

```
git pull 服务器地址 master 
```

##### 克隆代码

```
git clone 服务器地址 master 
```

##### 上传方式

ssh方式上传

```
公钥	私钥,两者之间是有关联的
生成公钥和私钥
ssh-keygen -t rsa -C "972043362@qq.com"
```

##### pull push

```
先pull 在push
git remote add origin ssh地址
git pull -u master
git push -u master
当我们在push时候,加上-u参数,下次push时候,只要写上git push就能上传代码
```

