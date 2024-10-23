import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoutes.js'

dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use('/user',userRoutes)
app.use('/note',noteRoutes)


app.get('/', (req, res) => {
    res.send("welcome home")
})

app.listen(port, ()=> {
    console.log(`listing the port ${port}`)
})