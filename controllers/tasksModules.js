
const {readFile, writeFile} = require('fs').promises

const getAllTasks = async() => {
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

const updateJSON = (req, res) => {
    getAllTasks().then( (data) => {
        console.log('1');
        const tasks = data.tasks
        const title = data.title
        const task = {"id": tasks.length + 1, "task": req.body.task}
        data.tasks.push(task)
        const jsonTask = JSON.stringify(data);
        addTask(jsonTask).then(
            console.log('2'),
            res.render('app', {title, tasks})
        )
    })
}

const start = (req, res) => {
    getAllTasks().then( (data) => {
        const tasks = data.tasks
        const title = data.title
        res.render('app', {title, tasks})
    })
}

module.exports = {
    start,
    updateJSON
}

/*
const getTasks = async() => {
    try {
        const tasks = await readFile('./data/data.json', 'utf8').then(JSON.parse)
        return tasks
    } catch(error) {
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

app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');
*/