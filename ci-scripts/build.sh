#!/usr/bin/env bash

# 执行netease-theme的build脚本
path = ~/Documents/angular6
cd ${path}/netease-theme/ci-scripts
bash build.sh

cd ${path}/netease-common
# 升级netease-theme工程依赖
npm run upgrade
if [ $? == 0 ]
then echo "升级theme版本成功!"
else
echo "升级theme版本失败!"
exit
fi

# 安装依赖
# yarn
#if [ $? == 0 ]
#then echo "安装成功!"
#else
#git commit -m 'auto commit'
#git push origin master
#fi

# 升级版本
npm version patch
if [ $? == 0 ]
then echo "版本升级成功!"
else
git commit -a -m "neteae-common auto commit"
echo "neteae-common auto commit!"
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


