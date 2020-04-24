const fs = require('fs')
const promisify = require('util').promisify
const path = require('path')
const handlebars = require('handlebars')
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const conf = require('../config/defaultConfig')
const mime = require('../helper/mime')
const compress = require('./compress')
const range = require('./range')
const isFresh = require('./cache')

// process.cwd() 是运行 node 命令的根路径
// __dirname 是当前文件的路径
const tplPath = path.join(__dirname, '../template/dir.html')

// 可通过 readFileSync 传参 utf-8 直接读取成字符串，但影响读取效率，故在下面使用 toString() 转化一下
// const source = fs.readFileSync(tplPath, 'utf-8')
const source = fs.readFileSync(tplPath)

const template = handlebars.compile(source.toString())

module.exports = async function (req, res, filePath) {
  try {
    const stats = await stat(filePath)
    if (stats.isFile()) {
      // 访问的是文件
      res.setHeader(
        'Content-Type',
        `${mime(filePath).contentType}; charset=utf-8`
      )

      if (isFresh(stats, req, res)) {
        res.statusCode = 304
        res.end()
        return
      }

      let rs
      const { code, start, end } = range(stats.size, req, res)
      if (code === 200) {
        res.statusCode = 200
        rs = fs.createReadStream(filePath)
      } else {
        res.statusCode = 206
        rs = fs.createReadStream(filePath, { start, end })
      }
      if (filePath.match(conf.compress)) {
        rs = compress(rs, req, res)
      }
      rs.pipe(res)
    } else if (stats.isDirectory()) {
      // 访问的是文件夹
      const files = await readdir(filePath)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')

      // path.relative(from, to) 返回从 from 到 to 的相对路径；若两个路径相同，返回空字符串
      // path.relative('/anydoor', '/anydoor') // => ""
      // path.relative('/anydoor', '/anydoor/src') // => src
      const dir = path.relative(conf.root, filePath)
      const tplDir = path.relative(
        conf.root,
        path.join(__dirname, '../template')
      )

      const data = {
        // tplDir 用于模板文件引入其它文件的路径修复
        tplDir: tplDir ? `/${tplDir}` : '',
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map((file) => {
          return {
            file,
            icon: mime(dir ? `${dir}/${file}` : `${file}`).icon
          }
        })
      }
      res.end(template(data))
    }
  } catch (err) {
    console.error(err)
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`${filePath} is not a directory or file`)
  }
}
