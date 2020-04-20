# anydoor

nodeJs 静态资源服务器

## 使用说明

> 使用 VSCode 编辑器并安装 ESLint 插件

* `npx eslint --init` 初始化 eslint 配置
* `pre-commit` 用于校验 eslint 规则是否通过，若不通过，不允许 git 提交
* `npx supervisor src/app.js` 启动并监视 node 服务，发生修改时自动重启 node 服务
