import express from "express"
import database from './database/connection.js'
import users from './controller/users.js'
import profile from './controller/profile.js'
import cookieParser from "cookie-parser"
import auth from "./middleware/authentication.js"
import { dirname } from 'path'
import { fileURLToPath } from "url"


const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

//POST metodu perduodamu duomenu  
app.use(express.urlencoded({
  extended: false
}))

// Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static('uploads'))
app.use('/', express.static('public'))
app.use('/api/users', users)
app.use('/api/profiles', profile)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/checkAuth', auth, (req, res) => {
  res.json(req.authData)
})

app.listen(3001)