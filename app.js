import express from 'express'
import mongoose from 'mongoose'
import userData from './api/user.api.js'
import messageData from './api/message.api.js'
import { configDotenv } from 'dotenv'
configDotenv();
const app = express()
const port = process.env.port||3000
app.use(express.json())
app.use('/users',userData)
app.use('/messages',messageData)

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('database connected');
}).catch(()=>{
    console.log("database faield connect");
})

app.get('/', (req, res) => res.send('welcome to agmad programer'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

