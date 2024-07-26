const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT


var jsonDummyData=
  {
    name: "Adeel Solangi",
    language: "Sindhi",
    id: "V59OF92YF627HFY0",
    bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    version: 6.1
  };


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
  res.send('my twitter url')
})


app.get('/login', (req, res)=>{
  res.send('<h1>This is our login page</h1>')

})

app.get('/jsondummy', (req, res)=>{
  res.json(jsonDummyData)

})


app.get('/jokes', (req, res)=>{
const jokes=[
  {joker:'this is first joke',
    number: 1
  },
  {joker:'this is second joke',
    number: 2
  },
]
res.send(jokes)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

