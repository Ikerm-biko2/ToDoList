const express = require('express')
const router = express.Router()

const {start} = require('../controllers/tasksModules')

router.route('/').get(start)

module.exports = router