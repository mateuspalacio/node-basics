import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())
const mongodb = "mongodb+srv://ckmobile:ckmobile123@cluster0.25dej.mongodb.net/todos-database?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000
mongoose.connect(mongodb).then(() => 
    console.log(`server on ${PORT}`)
).catch(err => console.log(err))

app.get('/', (req, res) => {
    console.log(req)
    res.send('Welcome to server').catch(err => console.log(err))
})