var express = require('express');
var router = express.Router();

let admin_controller = require('../controllers/AdminController');

router.get('/index', admin_controller.action_index);

module.exports = router;
