const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/templates/home.html'))
})

app.get('/aboutme', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/templates/aboutme.html'))
})

app.get('/MyPortofolio', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/templates/myPort.html'))
})

app.get('/contact', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/templates/contact.html'))
})

app.get('/resume', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/templates/resume.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'static')))
