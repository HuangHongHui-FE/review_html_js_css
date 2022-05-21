const express = require('express')
const multiparty = require('multiparty')
const fs = require('fs')
const path = require('path')
const { Buffer } = require('buffer')
// 上传文件最终路径
const STATIC_FILES = path.join(__dirname, './static/files')
// 上传文件临时路径
const STATIC_TEMPORARY = path.join(__dirname, './static/temporary')
const server = express()


var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
server.use(allowCrossDomain);
// 静态文件托管
server.use(express.static(path.join(__dirname, './dist')))
// 切片上传的接口
server.post('/upload', (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        let filename = fields.filename[0]
        let hash = fields.hash[0]
        let chunk = files.chunk[0]
        let dir = `${STATIC_TEMPORARY}/${filename}`
        // C:\Users\HDR\IdeaProjects\github\review_html_js_css\大文件上传\demo\sever\static\temporary/单词.txt
        console.log(filename, hash, chunk, dir)
        try {
            if (!fs.existsSync(dir)) fs.mkdirSync(dir)
            const buffer = fs.readFileSync(chunk.path)
            // console.log(buffer)
            console.log(`${dir}/${hash}`)  // C:\Users\HDR\IdeaProjects\github\review_html_js_css\大文件上传\demo\sever\static\temporary/单词.txt/0
            const ws = fs.createWriteStream(`${dir}/${hash}`)
            ws.write(buffer)
            ws.close()

            res.send(`${filename}-${hash} 切片上传成功`)
        } catch (error) {
            console.error(error)
            res.status(500).send(`${filename}-${hash} 切片上传失败`)
        }
    })
})

//合并切片接口
server.get('/merge', async (req, res) => {
    const { filename } = req.query
    try {
        let len = 0
        const bufferList = fs.readdirSync(`${STATIC_TEMPORARY}/${filename}`).map((hash, index) => {
            const buffer = fs.readFileSync(`${STATIC_TEMPORARY}/${filename}/${index}`)
            len += buffer.length
            return buffer
        });
        //合并文件
        const buffer = Buffer.concat(bufferList, len);
        const ws = fs.createWriteStream(`${STATIC_FILES}/${filename}`)
        ws.write(buffer);
        ws.close();
        res.send(buffer);
        // `切片合并完成`
    } catch (error) {
        console.error(error);
    }
})

server.listen(3000, _ => {
    console.log('http://localhost:3000/')
})
