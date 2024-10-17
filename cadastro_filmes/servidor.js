const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
// const filmesRoutes = require('')
const router = require('./routes/filmes.js')

const app = express()
app.use(bodyParser.json())
// app.use('/filmes', filmesRoutes)
app.use(router)

app.listen(port, () => {
    console.log('Servidor rodando!')
})