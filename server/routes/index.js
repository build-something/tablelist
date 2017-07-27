var express = require('express');
var router = express.Router();

const controllers = require('controllers/index')

/* GET home page. */
router.get('/employee', controllers.getemployee);
router.post('/employee', controllers.employee);

module.exports = router;