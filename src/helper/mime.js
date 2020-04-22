const path = require('path')
const fs = require('fs')

const mimeTypes = {
  css: {
    contentType: 'text/css',
    icon: 'icon-CSS'
  },
  gif: {
    contentType: 'image/gif',
    icon: 'icon-GIF'
  },
  html: {
    contentType: 'text/plain',
    icon: 'icon-HTML'
  },
  ico: {
    contentType: 'image/x-icon',
    icon: 'icon-GIF'
  },
  jpeg: {
    contentType: 'image/jpeg',
    icon: 'icon-GIF'
  },
  jpg: {
    contentType: 'image/jpeg',
    icon: 'icon-GIF'
  },
  js: {
    contentType: 'text/javascript',
    icon: 'icon-JS'
  },
  json: {
    contentType: 'application/json',
    icon: 'icon-JSON'
  },
  pdf: {
    contentType: 'application/pdf',
    icon: 'icon-PDF'
  },
  png: {
    contentType: 'image/png',
    icon: 'icon-GIF'
  },
  svg: {
    contentType: 'image/svg+xml',
    icon: 'icon-SVG'
  },
  txt: {
    contentType: 'text/plain',
    icon: 'icon-TXT'
  }
}

module.exports = (filePath) => {
  // 这里用同步，只有获取到路径的相关信息之后才能正确展示对应 icon
  const stats = fs.statSync(filePath)
  if (stats.isFile()) {
    let ext = path.extname(filePath).split('.').pop().toLowerCase()
    return (
      mimeTypes[ext] || {
        contentType: 'text/plain',
        icon: 'icon-weizhileixing1'
      }
    )
  } else if (stats.isDirectory()) {
    return {
      contentType: 'text/plain',
      icon: 'icon-wenjianjia1'
    }
  } else {
    return {
      contentType: 'text/plain',
      icon: 'icon-weizhileixing1'
    }
  }
}
