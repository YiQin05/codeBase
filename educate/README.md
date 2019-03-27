# view

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 在本项目中的class命名中是用'_'连接的都是自命名，用'-'连接的是bootstrap类名
# 在bootstrap.js（第587行）和bootstrap.min.js中将panel改成了panel-collapse,在node_modules中找到这两个文件，搜索panel修改即可，否则会出现css样式的改变。
