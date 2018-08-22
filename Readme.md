/*************************************************************
 * https://blog.csdn.net/bryblog/article/details/78060694
 *************************************************************/


开始使用Webpack

初步了解了Webpack工作方式后，我们一步步的开始学习使用Webpack。

安装

Webpack可以使用npm安装，新建一个空的练习文件夹（此处命名为webpack sample project），在终端中转到该文件夹后执行下述指令就可以完成安装。

//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
1
2
3
4
正式使用Webpack前的准备

在上述练习文件夹中创建一个package.json文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用npm init命令可以自动创建这个package.json文件

npm init
1
输入这个命令后，终端会问你一系列诸如项目名称，项目描述，作者等信息，不过不用担心，如果你不准备在npm中发布你的模块，这些问题的答案都不重要，回车默认即可。

package.json文件已经就绪，我们在本项目中安装Webpack作为依赖包

// 安装Webpack
npm install --save-dev webpack
npm install webpack-cli -g

// 运行打包
webback ./app/main.js --output ./public/bundle.js

// 运行 
http-server