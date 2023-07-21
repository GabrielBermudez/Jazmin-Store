var express = require('express');
var router = express.Router();

let product_controller = require('../controllers/ProductController');


router.get('/index', product_controller.action_product_index);

router.get('/view/id/:id', product_controller.action_product_view);

router.get('/create', product_controller.action_product_create);

router.get('/update/id/:id', product_controller.action_product_update);


router.post('/create', product_controller.product_create);

router.post('/update/id/:id',product_controller.product_update);

router.get('/delete/id/:id',product_controller.product_delete);


module.exports = router;