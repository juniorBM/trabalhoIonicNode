var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact')();

router.put('/gravarDados', controller.gravaDados);

module.exports = router;