var express = require('express');
var router = express.Router();

let contact_controller = require('../controllers/ContactController');

router.get('/', contact_controller.action_contact_send)
router.post('/', contact_controller.contact_send)

module.exports = router;
