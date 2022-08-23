const hxz = require("{
  "status": true,
  "code": 200,
  "creator": "Rey",
  "result": {
    "nowatermark": "https://ttdownloader.com/dl.php?v=YTo0OntzOjk6IndhdGVybWFyayI7YjowO3M6NzoidmlkZW9JZCI7czozMjoiMWJiNjZmZGYzOGE2YjIwZDQyNWJmOGE4N2JhNWU1ZjgiO3M6MzoidWlkIjtzOjMyOiIyY2EwYjk1MzgzODk5Y2E0MGYxNDQ3ZGJhYTczMjExNSI7czo0OiJ0aW1lIjtpOjE2NTc4MjM3NDY7fQ==",
    "watermark": "https://ttdownloader.com/dl.php?v=YTo0OntzOjk6IndhdGVybWFyayI7YjoxO3M6NzoidmlkZW9JZCI7czozMjoiMWJiNjZmZGYzOGE2YjIwZDQyNWJmOGE4N2JhNWU1ZjgiO3M6MzoidWlkIjtzOjMyOiIyY2EwYjk1MzgzODk5Y2E0MGYxNDQ3ZGJhYTczMjExNSI7czo0OiJ0aW1lIjtpOjE2NTc4MjM3NDY7fQ==",
    "audio": "https://ttdownloader.com/mp3.php?v=YTozOntzOjc6InZpZGVvSWQiO3M6MzI6IjFiYjY2ZmRmMzhhNmIyMGQ0MjViZjhhODdiYTVlNWY4IjtzOjM6InVpZCI7czozMjoiMmNhMGI5NTM4Mzg5OWNhNDBmMTQ0N2RiYWE3MzIxMTUiO3M6NDoidGltZSI7aToxNjU3ODIzNzQ2O30="
  }
}")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, 'Nih', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

module.exports = handler
