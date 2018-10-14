#!/usr/bin/env bash

cd ../

# 安装依赖
# yarn
if [ $? == 0 ]
then echo "安装成功!"
else
git commit -m 'auto commit'
git push origin master
fi

# 升级版本
npm version patch
if [ $? == 0 ]
then echo "版本升级成功!"
else
echo "版本升级失败!"
exit
fi

# 打包
npm run package
if [ $? == 0 ]
then echo "打包成功!"
else
echo "npm run package failed!"
exit
fi

# 发布
npm publish dist
if [ $? == 0 ]
then echo "发布成功!"
else
echo "npm publish dist failed!"
exit
fi


