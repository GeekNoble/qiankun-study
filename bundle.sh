#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# sub-react子应用
cp -r ./micro-react-app/build/ ./dist/subapp/sub-react/

# sub-vue子应用
cp -r ./micro-vue-app2/dist/ ./dist/subapp/sub-vue/

# main基座
cp -r ./bash-vue-app/dist/ ./dist/main/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
