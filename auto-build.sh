#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

cd /home/huage/code/personal-blog/

git fetch --all
git reset --hard origin/main
git pull

yarn build