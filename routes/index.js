var express = require('express');
var router = express.Router();

let index_controller = require('../controllers/IndexController')

/* GET home page. */
router.get('/', index_controller.action_index)

module.exports = router;
