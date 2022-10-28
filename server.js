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

// Stytch integration
const client = new stytch.Client({
    project_id: "project-test-a92932a9-538f-429a-9ea3-83e519819dfa" ,
    secret: "secret-test-Tsv5EeJekpt0fywttSKdEsBpTqAslqx8toY=",
    env: stytch.envs.test,
})

app.post("/login", async (req, res) =>{
    const email = req.body.email
    const params = {
        email,
        login_magic_link_url: "http://localhost:3000/auth",
        signup_magic_link_url: "http://localhost:3000/auth"
    }

    const response = await client.magicLinks.email.loginOrCreate()
    res.json(response);
})

app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on ${port}`))