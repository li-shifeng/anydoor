# anydoor

> nodeJs 静态资源服务器

**本项目使用 VSCode 编辑器**

## 项目示例

![](https://github.com/li-shifeng/anydoor/blob/master/src/resource/img/example.png?raw=true)

### 解决 GitHub 上图片不显示的问题

1. 打开 [IPAddress.com](https://www.ipaddress.com/) 网站，输入 `raw.githubusercontent.com` 搜索，得到 `IP Address: 199.232.68.133`
2. 打开 `C:\Windows\System32\drivers\etc\hosts` 在最下面输入 `199.232.68.133 raw.githubusercontent.com` 后保存，刷新页面即可展示图片
3. [参考文档](https://blog.csdn.net/qq_38232598/article/details/91346392)

## 使用说明

> 使用 VSCode 编辑器并安装 ESLint 插件

* `npx eslint --init` 初始化 eslint 配置
* `pre-commit` 用于校验 eslint 规则是否通过，若不通过，不允许 git 提交
* `npx supervisor src/app.js` 启动并监视 node 服务，发生修改时自动重启 node 服务

## 遇到的问题

* 使用 createReadStream 读取文件内容时，中文注释显示乱码（在 Content-Type 值的后面指定编码格式，如：`'Content-Type': 'text/html; charset=utf-8'`）
