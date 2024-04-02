const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()
const api = require('./rotas/index')

app.use(bodyParser.json())
app.use('/api', api)
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.json({
        sucess:true
    })
})

app.listen(PORT)
