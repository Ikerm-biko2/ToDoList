const express = require('express')
const adaro = require('adaro')

const app = express()

app.use(express.static('public'))

const {tasks, title} = require('./tasks')

app.get('/', (req, res) => {
    res.render('app', {title, tasks})
})

app.listen(5001, () => {
    console.log('Server listening on port 5001...')
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');