##### 初始化仓库

git init

#####  设置当前使用用户

git config --global user.name "yinhui"

git config -- global user.email "yinhui@qq.com"

##### 存储代码

git add ./a.txt

所有修改的全部添加

git add ./ 

##### 提交仓库

git commit -m "这是我第一天完成的功能"

所有修改的文件提交到仓库

git commit --all -m ""

##### 查询状态   

git  status

红色是修改后没有add

绿色是add了

##### 忽略目录

.gitignore

##### 提交记录

git log      查看提交日志

git log --oneline 查看简洁日志

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

##### 上传

```
git push 服务器地址 master 
```

