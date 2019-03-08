const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('<p style="color:red">Welcome home!<p>')
})

app.get('/hello', (req, res) => {
  res.send('<p style="color:green">Hello Im SAI KIRAN</p>')
})

app.get('/bang',  (req, res) =>{
  res.send('<h1>Big bang!</h1>')
})

app.get('/greeting',  (req, res) =>{
  res.send('<h2>Hello! and Welcome</h1>')
})

app.get('/buddy',  (req, res) =>{
  res.send('<h2>Hi Buddy </h2>')
})
app.get('/class',  (req, res) =>{
  res.send('<h1>This is webapps class<h1> ')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

