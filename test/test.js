const assert = require('assert');
const {tasks, title} = require('../tasks')

describe('first suite of test',  () => {
    it('title should be "ToDo List"', ()=> {
        assert.equal(title, "ToDo List")
    })

    it('should be 7 task on tasks', () => {
        assert.equal(tasks.length, 7)
    })
});