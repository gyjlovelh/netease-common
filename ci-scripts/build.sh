#!/usr/bin/env bash

cd ~/Documents/angular6/netease-common/
# 升级netease-theme工程依赖
npm config set registry http://0.0.0.0:4873/
npm run upgrade
if [ $? == 0 ]
then echo "升级theme版本成功!"
else
echo "升级theme版本失败!"
exit
fi

# 安装依赖
npm config set registry http://registry.npm.taobao.org
yarn config set registry http://registry.npm.taobao.org
yarn cache clean
yarn

# 解决 upgrade theme后会删除@angular的某些包
yarn upgrade @angular
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
git commit -a -m "neteae-common auto commit"
echo "neteae-common auto commit!"
npm version patch
if [ $? == 0 ]
then echo "版本升级成功!"
else
echo "版本升级失败"
fi
fi

# 打包
npm run package
if [ $? == 0 ]
then echo "打包成功!"
else
echo "打包失败"
exit
fi

# 发布
npm publish dist
if [ $? == 0 ]
then echo "发布成功!"
else
echo "发布失败"
exit
fi


