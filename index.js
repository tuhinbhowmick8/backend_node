const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
  res.send('my twitter url')
})


app.get('/login', (req, res)=>{
  res.send('<h1>This is our login page</h1>')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

