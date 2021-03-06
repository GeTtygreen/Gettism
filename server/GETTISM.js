require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(express.static("Client"))
app.use(express.json())
app.use(cors())



app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'../Client/index.html'))
})
app.get('/index.js',function(req,res) {
    res.sendFile(path.join(__dirname,'../Client/index.js'))
})
app.get('/styles',function(req,res) {
    res.sendFile(path.join(__dirname,'../Client/styles.css'))
})



const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port,()=>console.log(`GETTISM is ${port} player`))