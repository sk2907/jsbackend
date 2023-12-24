const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home' , (req,res)=>{
    res.send("this is my homePage")
})
app.get('/about' , (req,res)=>{
    res.send("this is my aboutPage")
})
app.get('/contact' , (req,res)=>{
    res.send("this is my contactPage")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})