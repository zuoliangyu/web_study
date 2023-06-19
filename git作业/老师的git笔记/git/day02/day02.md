# 复习

1. 如何初始化git仓库？如何将工作区代码添加到暂存区？如何将暂存区代码提交到本地仓库？

初始化仓库： git init     注意：一般一个项目只会初始化一次
添加到暂存区： git add .  
添加到本地仓库： git commit -m '信息提示'

2. 如何跳过暂存区直接将代码提交到本地仓库？如何查看当前git仓库的状态？

跳过暂存区直接将代码提交到本地仓库: git commit -a -m '信息提示'
查看状态： git status

3. 如何设置git忽略清单？如何进行版本回退？

创建一个 .gitignore 文件，在文件中书写需要忽略的文件名，或者目录，注意，目录以 / 结束的。
也可以使用通配符的方式。

版本回退： git reset --hard 版本号

# git第二天，远程仓库和分支

## 1. 将本地仓库的代码(你自己电脑上的代码) 推送到 远程仓库(gitee.com)

// remote 是远程的意思
// add 添加的意思
// origin 是域的意思
// https://gitee.com/qiulove007/test.git  仓库地址

// 将 远程仓库地址 设置 为一个叫 abc 的名字
git remote add abc https://gitee.com/qiulove007/test.git


// push 就是推送的意思
// -u参数意思是 记住这一次的推送的信息
// abc 就是远程仓库的地址
// master是分支名称

// 将本地master分支的代码推送到远程仓库的master分支
git push -u abc master
或者
git push -u https://gitee.com/qiulove007/test.git master

后续推送的时候，可以直接
git push

会使用上一次推送的信息进行推送。


练习：
将本地仓库的所有作业代码推送到远程仓库
将远程仓库设置为 开源的

可能出现的问题：
1. fatal: not a git repository 
致命的错误：不是一个git仓库
原因是没有初始化git仓库。

2. 现在我们使用的是 https 仓库地址，有同学复制的是 SSH 仓库地址

3. 设置别名的时候，如果为同一个别名多次设置会报错：
fatal: remote abc already exists.
远程仓库别名 abc 已经存在了

4. 输入的账号密码输入错误之后，win 10 会默认记录这个账号密码，后续再怎么做都是用错误的账号密码进行推送
fatal: Authentication failed for 'https://gitee.com/qiulove007/test.git/'
验证失败
remote: [session-09499d96] 43077260@qq.com: Incorrect username or password (access token)
Incorrect username or password (access token)
错误的用户名或者密码

此时，需要从 控制面板 -> 凭据管理器 -> windows 凭据 -> 找到码云的凭据删除，再推送重新输入即可

## 2. 配置SSH形式的方式进行代码推送

1. 第一步，要创建公钥私钥(钥匙)

指令：  ssh-keygen -t rsa -b 4096 -C "43077260@qq.com 请填写你们自己的邮箱"

2. 找到钥匙，复制钥匙的代码 找到 id_rsa.pub 文件，复制文件中的钥匙代码

3. 打开码云，打开设置，找到 SSH公钥，将代码复制保存到公钥中

4. 接下来就可以使用 SSH 方式 来推送代码了

复制 SSH 形式地址进行推送即可。如：

git push -u git@gitee.com:qiulove007/test.git master

## 3. 推送出错的情况

本地仓库和远程仓库代码不一致。

error: failed to push some refs to 'git@gitee.com:qiulove007/test01.git'

如果出现了上面的报错信息，原因就是本地仓库的版本管理和远程仓库的版本管理不一致。

如何解决这个问题呢？
A. 强制推送
// 在添加了 -f 参数之后，会将本地仓库的代码强制推送的远程仓库，覆盖远程仓库的代码
git push -u git@gitee.com:qiulove007/test01.git master -f

注意：
一般不推荐使用强制推送，因为在多人开发的项目中，如果强制推送可能会覆盖掉其他同事写好的代码。

B. 拉取合并最新的代码
1). 先从远程仓库拉取最新的仓库代码合并到本地仓库中
git pull git@gitee.com:qiulove007/test01.git master

当我们拉取代码的时候，可能会出现报错：
fatal: refusing to merge unrelated histories
致命错误： 拒绝合并不相干的历史记录(提交版本)
更换拉取代码的指令：
git pull git@gitee.com:qiulove007/test01.git master --allow-unrelated-histories

拉取成功之后，将本地代码和远程仓库的代码合并在一起。
只需要再重新推送代码即可。

## 4. 克隆项目

// 将开源项目 克隆到 本地
git clone https://gitee.com/nmgwap/vueproject.git

## 5. 分支开发

所谓的分支开发，就是在项目的基础之上，开启一个独立的开发空间，让每个参与项目开发的人员之间的代码互不干扰
默认情况下，我们test01 的项目是使用了master分支(master就是主要的意思)

假设 小明的同事， 要在test01 的项目创建一个列表页面(list.html)
还有 小刚的同事， 要在test01 的项目创建一个详情页面(detail.html)

如果要使用分支的方式进行开发，让小明和小刚之间的开发互相独立，互不影响。
我们此时就可以为小明创建一个独立的分支
给小刚也创建一个独立的分支

在xiaoming分支上创建 index.html 编写一部分代码
再切换到xiaogang分支上创建 index.html 编写一部分代码

接下来我们要在master分支 合并xiaoming，xiaogang两个分支的代码
先切换到master主分支
然后使用git merge 分支名称 合并分支即可
最后解决冲突。

## 分支相关的指令：

查看分支： git branch
创建分支： git branch 分支名
切换分支： git checkout 分支名
创建并切换分支： git checkout -b 分支名
删除分支： git branch 分支名称 -d
合并分支： git merge 需要合并的分支名称

## 克隆远程仓库并拉取特定分支的代码

克隆仓库：git clone 远程仓库地址
拉取远程分支的代码：git fetch 远程仓库地址 远程仓库的分支名称
将远程仓库分支的代码创建保存到本地分支当中：git checkout -b 本地分支名称 远程仓库别名/远程仓库分支名称

## 总结git

1. 必须掌握git的基本操作：
git init // 仓库的初始化，这个操作一般只会做一次
git status // 查看当前仓库的状态，红色代表未处理，未跟踪。绿色代表已经放到暂存区
git add . // 将当前目录中的文件添加到暂存区
git commit -m '提示信息'  // 将暂存区的代码提交到本地仓库。
git log // 查看代码版本提交日志

注意：
如果公司要求使用的是gitlab，github，工蜂等等开源平台、
应该要重新设置用户名和邮箱。
git config --global user.name '用户名'
git config --global user.email '领导配置给你的邮箱账号'

2. 必须掌握将代码推送到远程仓库，将远程仓库代码下载到本地

git remote add origin 远程仓库的地址   // 给远程仓库地址取别名
git push -u 远程仓库地址 本地分支名称:远程分支名称  // 推送代码，-u参数会帮助我们记住本次推送信息，下一次直接git push就可以了
git clone 远程仓库地址 // 克隆远程仓库，得到的是master分支的代码
git fetch 远程仓库地址 分支名称  // 拉取 远程特定分支的代码
git pull 远程仓库地址 分支名称 // 拉取 远程特定分支的代码

3. 必须掌握分支的基本操作

git branch // 查看本地所有分支
git branch 分支名称  // 创建本地分支
git checkout 分支名称
git switch 分支名 // 切换分支

git checkout -b 分支名称 // 创建并切换分支
git merge 分支名称 // 合并分支
git branch 分支名称 -d // 删除本地分支

4. 了解在 .gitignore 文件中设置忽略清单的做法。