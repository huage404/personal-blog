#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除之前创建的 public
rm -rf public

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git remote add origin git@github.com:huage404/my_blogs_website.git
git remote add origin2 git@gitee.com:zhenhua4207/my_blogs_website.git

git push -u origin master --force
git push -u origin2 master --force

cd ..

#tcb hosting:deploy public -e blog-9g8lgnuke4603ff9
