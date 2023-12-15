import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import wineRoutes from '../src/routes/wineRoutes'
import cors  from 'cors'


const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/winedb', {
    family: 4
})
mongoose.connection.on("connected", () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!")
})
mongoose.connection.on("error", (err) => {
    console.error("Erro na conexão com o MongoDB:", err)
})

app.use('/wines', wineRoutes)


app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:'+PORT)
});