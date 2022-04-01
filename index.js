const express = require('express')
const adaro = require('adaro')
const { js } = require('adaro')
const routes = require('./routes/tasksRoutes')

const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'))

app.use('/api/v1/tasks', routes)

app.listen(5001, () => {
    console.log('Server listening on port 5001...')
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');