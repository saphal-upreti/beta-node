#!/usr/bin/env node
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/aboutme', (req, res) => {
  res.sendFile(path.join(__dirname,'/aboutme.html'))
})

app.get('/MyPortofolio', (req, res) => {
  res.sendFile(path.join(__dirname,'/myPort.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'/contact.html'))
})

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname,'/resume.html'))
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'static')))

