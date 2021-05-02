const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Software avanzado - PRACTICA 11 </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})