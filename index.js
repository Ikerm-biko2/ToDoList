const express = require('express')
const adaro = require('adaro')
const {readFile, writeFile} = require('fs').promises

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


const start1 = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8').then(JSON.parse)
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`)
        console.log(first);
        console.log(second);
    } catch(error) {
        console.log(error);
    }
}

const start = async() => {
    try {
        const tasks = await readFile('./data/data.json', 'utf8').then(JSON.parse)
        return tasks
    } catch(error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    start().then( (data) => {
        const tasks = data.tasks
        const title = data.title
        res.render('app', {title, tasks})
    })
})

app.post('/', (req, res) => {
    const task = req.body.task
    tasks = tasks.concat({"id": tasks.length + 1, "task": task})
    res.render('app', {title, tasks})
})

app.listen(5001, () => {
    console.log('Server listening on port 5001...')
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');