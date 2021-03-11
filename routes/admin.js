var express = require('express');
var router = express.Router();

let admin_controller = require('../controllers/AdminController');

router.get('/index', admin_controller.action_index);

router.get('/product/index', admin_controller.action_product_index);

router.get('/product/create', admin_controller.action_product_create);

module.exports = router;
