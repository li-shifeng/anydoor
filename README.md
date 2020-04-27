# anydoor

> nodeJs 静态资源服务器

**本项目使用 VSCode 编辑器**

## 运行项目

1. `npm install` # 安装依赖
2. `npm run serve` # 运行项目

## 项目示例

![](https://user-gold-cdn.xitu.io/2020/4/24/171ab12442bacee7?w=205&h=396&f=png&s=8475)

> ### 解决 GitHub 上图片不显示的问题
> 
> 1. 打开 [IPAddress.com](https://www.ipaddress.com/) 网站，输入 `raw.githubusercontent.com` 搜索，得到 `IP Address: 199.232.68.133`
> 2. 打开 `C:\Windows\System32\drivers\etc\hosts` 在最下面输入 `199.232.68.133 raw.githubusercontent.com` 后保存，刷新页面即可展示图片
> 3. [参考文档](https://blog.csdn.net/qq_38232598/article/details/91346392)

## 使用说明

> 使用 VSCode 编辑器并安装 ESLint 插件

* `npx eslint --init` 初始化 eslint 配置
* `pre-commit` 用于校验 eslint 规则是否通过，若不通过，不允许 git 提交
* `npx supervisor src/app.js` 启动并监视 node 服务，发生修改时自动重启 node 服务

## 遇到的问题

* 使用 createReadStream 读取文件内容时，中文注释显示乱码（在 Content-Type 值的后面指定编码格式，如：`'Content-Type': 'text/html; charset=utf-8'`）

 ------------------------------------------

> **注：由于未上传至 npm ，以下安装和使用方法相关功能暂未实现，可访问教程原作者的 anydoor 看效果，或本地使用 `node src/index` 或 `npm run serve` 命令启动查看**
> 
> ## 安装
> 
> ```
> npm install -g anydoor
> ```
> 
> ## 使用方法
> 
> ```
> anydoor # 把当前文件夹作为静态资源服务器根目录
> anydoor -p 8080 # 设置端口号为 8080
> anydoor -h localhost # 设置 host 为 localhost
> anydoor -d /usr # 设置根目录为 /usr
> ```
