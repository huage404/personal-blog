#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add .
git commit -m 'deploy'

git remote add origin  https://gitee.com/zhenhua4207/personal-blog.git

git push -u origin main --force

