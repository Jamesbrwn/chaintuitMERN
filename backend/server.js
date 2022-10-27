const express = require('express')
const colors = require('colors')
const cors = require('cors')
const stytch = require('stytch')
const dotenv = require('dotenv').config()
const{errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.server_port || 5000

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))