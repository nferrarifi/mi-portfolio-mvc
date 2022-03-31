const express = require ("express")
const app = express()
const router = require ("./routers/main")
const PORT = process.env.PORT || 3000

app.listen (PORT, () => console.log (`Servidor corriendo en el puerto ${PORT}`))

app.use (express.static ("public"))
app.use (router)
