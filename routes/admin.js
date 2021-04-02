var express = require('express')
var router = express.Router()

let admin_controller = require('../controllers/AdminController')
let middlewares = require('./Middlewares')

router.get('/index', middlewares.isLoggedInIsAdmin,admin_controller.action_index)

module.exports = router;
