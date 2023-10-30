const express = require('express')
const app = express()
const port = 8000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gyulo94:q1w2e3@boilerplate.guzruec.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World !'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))