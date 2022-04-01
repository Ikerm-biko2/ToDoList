const express = require('express')
const router = express.Router()

const {start, updateJSON} = require('../controllers/tasksModules')

router.route('/').get(start)
router.route('/').post(updateJSON)

module.exports = router