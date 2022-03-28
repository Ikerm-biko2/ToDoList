const express = require('express')
const adaro = require('adaro')

const app = express()

app.use(express.static('public'))

const {tasks} = require('./tasks')

app.get('/', (req, res) => {
    res.send('Hello Wolrd!!')
})

app.listen(5001, () => {
    console.log('Server listening on port 5001...')
})