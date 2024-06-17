# Next Antd Admin

[Next Antd Admin](https://github.com/yyong008/next-antd-admin)是一个基于 Next.js 的现代全栈网络，它完成集成网站的基础功能，例如：`用户系统`、`角色管理`，`博客功能`等。它也有自己兄弟系统：

- 👋[Remix Antd Admin](https://github.com/yyong008/remix-antd-admin) 基于 Remix 的全栈系统

## 技术栈

- 🌷Next.js
- 🌷Antd/TailwindCSS
- 🌷Prisma
- 🌷Redux-Toolkit

## 目录结构

- 🎯app: 路由系统、程序入口
- 🎯components: 公共组件
- 🎯config: 项目配置文件
- 🎯constants: 项目常量
- 🎯context: 项目上下文
- 🎯hooks: 公共hooks
- 🎯libs: 公共库
- 🎯modules: 路由的实现模块
- 🎯primsa: orm
- 🎯public: 公共目录
- 🎯schemas: 校验 schemas 文件
- 🎯services: orm 对外服务文件
- 🎯types: 类型生命文件
- 🎯utils: 工具库
- 🎯other...

## 设计

### 代码层面设计：

- 函数和组件：单一职责原则，一个函数或者组件尽可能只做一件事
  - 文件和文件夹比较多
- 文件和文件以及 React 组件命名原则
  - 文件和文件夹：小写字母 + `-` 的原则
  - 组件命名: 大驼峰

### Next.js 获取数据

- 获取数据
  - SSR: 路由入口使用服务端组件获取
  - NO-SSR: api 接口 + api 请求
- 设置数据
  - actions

### 业务：创建和编辑

> 分开为原则，各司其职，不要写在一起，互相影响。

### RxJS

RxJS 用于数据处理，或者复杂数据处理。

## 部署

- docker
- vercel

> 目前推荐使用 docker， vercel 部署正在建设中...

部署中的问题：

1. prisma
2. docker 镜像
3. vercel 平台规则
