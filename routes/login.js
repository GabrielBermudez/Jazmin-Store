let express = require('express')
let router = express.Router()

let login_controller = require('../controllers/LoginController')
let middlewares = require('./Middlewares')

router.route('/index')
	.get(middlewares.isNotLoggedIn, login_controller.action_login_index)
	
router.post('/', login_controller.user_login)

router.get('/logout', login_controller.user_logout)

module.exports = router