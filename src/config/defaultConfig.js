module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 3000,
  compress: /\.(html|css|js|md)/,
  cache: {
    maxAge: 600, // 单位：秒
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
}
