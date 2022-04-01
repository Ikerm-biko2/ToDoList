const express = require('express')
const adaro = require('adaro')
const { js } = require('adaro')
const {readFile, writeFile} = require('fs').promises

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

const getTasks = async() => {
    try {
        const tasks = await readFile('./data/data.json', 'utf8').then(JSON.parse)
        return tasks
    } catch(error) {
        console.log(error);
    }
}

const addTask = async(task) => {
    try {
        await writeFile('./data/data.json', task)
    } catch (error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    getTasks().then( (data) => {
        const tasks = data.tasks
        const title = data.title

        res.render('app', {title, tasks})
    })
})

app.post('/', (req, res) => {
    console.log('Hola Iker');
    console.log(tasks);
    getTasks().then( (data) => {
        const tasks = data.tasks
        const title = data.title
        const task = {"id": tasks.length + 1, "task": req.body.task}
        data.tasks.push(task)
        const jsonTask = JSON.stringify(data);
        addTask(jsonTask).then(
            res.render('app', {title, tasks})
        )
    })
})

app.listen(5001, () => {
    console.log('Server listening on port 5001...')
})

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');