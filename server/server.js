require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(express.json())
app.use(cors())



app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/Client.index.html'))
})



const port = process.env.PORT || process.env.SERVER_PORT
app.listen(port,()=>console.log(`GETTISM is ${port} player`))