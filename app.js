const express = require('express')
const app = express()

const hostname = '192.168.0.9'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/hello', (req, res) => {
  res.send('Hello Im SAI KIRAN')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Big bang!</h1>')
})

app.get('/greeting',  (req, res) =>{
  res.send('Hello!  ')
})

app.get('/buddy',  (req, res) =>{
  res.send('Hi Buddy ')
})
app.get('/class',  (req, res) =>{
  res.send('This is webapps class ')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

