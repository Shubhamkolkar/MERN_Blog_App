import express from 'express'
import mongoose from 'mongoose'
import { dotenv } from 'dotenv'

dotenv.config();

const app = express()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection sucessfull")
}).catch((err)=>{
    console.log(err)
})

app.get('/',  (req, res)=> {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("server started at port" + "3000")
})