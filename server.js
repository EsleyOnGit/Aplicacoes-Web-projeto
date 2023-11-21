const express = require('express')

const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:8081'
}

// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routers
const router = require('./routers/productRouter')
app.use('/api/products', router)


//testing api
app.get('/', (req, res) => {
    res.json({message: 'estamos com a API'})
})

// Port
const PORT = process.env.PORT || 8080

// Server
app.listen(PORT,() => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})